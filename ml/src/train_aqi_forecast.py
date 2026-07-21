import os
import json
import joblib
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# Try importing XGBoost & LightGBM with graceful fallback
try:
    # pyrefly: ignore [missing-import]
    from xgboost import XGBRegressor
    HAS_XGBOOST = True
except (ImportError, Exception):
    HAS_XGBOOST = False

try:
    # pyrefly: ignore [missing-import]
    from lightgbm import LGBMRegressor
    HAS_LIGHTGBM = True
except (ImportError, Exception):
    HAS_LIGHTGBM = False

from data_pipeline import preprocess_aqi_pipeline
from eda_and_reports import generate_eda_visualizations

MODELS_DIR = os.path.join(os.path.dirname(__file__), '../models')
REPORTS_DIR = os.path.join(os.path.dirname(__file__), '../reports')

def calculate_mape(y_true, y_pred):
    return float(np.mean(np.abs((y_true - y_pred) / np.maximum(y_true, 1))) * 100)

def train_and_evaluate_all_models():
    os.makedirs(MODELS_DIR, exist_ok=True)
    os.makedirs(REPORTS_DIR, exist_ok=True)
    
    df = preprocess_aqi_pipeline()
    generate_eda_visualizations(df)
    
    feature_cols = [
        'pm25', 'pm10', 'no2', 'so2', 'co', 'o3',
        'temperature', 'humidity', 'wind_speed', 'rainfall', 'pressure',
        'aqi_lag1', 'aqi_lag24', 'pm25_rolling7',
        'day', 'month', 'season', 'location_encoded'
    ]
    
    X = df[feature_cols]
    y = df['target_24h']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    print("⏳ Model Comparison: Training & Evaluating candidate AQI Forecasting Regressors...")
    
    candidates = {
        'RandomForest': RandomForestRegressor(n_estimators=120, random_state=42),
        'GradientBoosting': GradientBoostingRegressor(n_estimators=120, random_state=42)
    }
    
    if HAS_XGBOOST:
        candidates['XGBoost'] = XGBRegressor(n_estimators=120, random_state=42, learning_rate=0.08)
    if HAS_LIGHTGBM:
        candidates['LightGBM'] = LGBMRegressor(n_estimators=120, random_state=42, learning_rate=0.08, verbose=-1)
        
    best_model_name = None
    best_model = None
    best_r2 = -float('inf')
    comparison_metrics = {}
    
    for name, model in candidates.items():
        model.fit(X_train_scaled, y_train)
        y_pred = model.predict(X_test_scaled)
        
        mae = float(mean_absolute_error(y_test, y_pred))
        mse = float(mean_squared_error(y_test, y_pred))
        rmse = float(np.sqrt(mse))
        r2 = float(r2_score(y_test, y_pred))
        mape = float(calculate_mape(y_test, y_pred))
        
        comparison_metrics[name] = {
            'MAE': round(mae, 2),
            'MSE': round(mse, 2),
            'RMSE': round(rmse, 2),
            'R2_Score': round(r2, 4),
            'MAPE': round(mape, 2)
        }
        
        print(f"📊 [{name}] -> MAE: {mae:.2f}, RMSE: {rmse:.2f}, R2: {r2:.4f}, MAPE: {mape:.2f}%")
        
        if r2 > best_r2:
            best_r2 = r2
            best_model = model
            best_model_name = name
            
    print(f"\n🏆 Champion Model Selected: {best_model_name} (R2 Score: {best_r2:.4f})")
    
    # Save Model Artifacts
    joblib.dump(best_model, os.path.join(MODELS_DIR, 'best_aqi_model.pkl'))
    joblib.dump(scaler, os.path.join(MODELS_DIR, 'scaler.pkl'))
    joblib.dump(feature_cols, os.path.join(MODELS_DIR, 'feature_columns.pkl'))
    
    # Feature Importance Analysis
    if hasattr(best_model, 'feature_importances_'):
        importances = best_model.feature_importances_
        feature_importance_map = dict(zip(feature_cols, [round(float(i) * 100, 2) for i in importances]))
        sorted_importance = dict(sorted(feature_importance_map.items(), key=lambda x: x[1], reverse=True))
    else:
        sorted_importance = {col: round(100.0 / len(feature_cols), 2) for col in feature_cols}

    with open(os.path.join(REPORTS_DIR, 'feature_importance.json'), 'w') as f:
        json.dump(sorted_importance, f, indent=2)

    # Plot Feature Importance
    plt.figure(figsize=(9, 6))
    top_features = list(sorted_importance.keys())[:10]
    top_vals = [sorted_importance[k] for k in top_features]
    plt.barh(top_features[::-1], top_vals[::-1], color='#2563EB')
    plt.title(f'Top 10 Feature Importances ({best_model_name})', fontsize=12, fontweight='bold')
    plt.xlabel('Importance Contribution (%)')
    plt.tight_layout()
    plt.savefig(os.path.join(REPORTS_DIR, 'feature_importance.png'), dpi=150)
    plt.close()

    # Plot Model Comparison Bar Chart
    plt.figure(figsize=(8, 5))
    model_names = list(comparison_metrics.keys())
    r2_scores = [comparison_metrics[m]['R2_Score'] for m in model_names]
    plt.bar(model_names, r2_scores, color=['#3B82F6', '#10B981', '#9333EA', '#F59E0B'][:len(model_names)])
    plt.title('AQI Model Performance Comparison (R2 Score)', fontsize=12, fontweight='bold')
    plt.ylabel('R2 Score')
    plt.tight_layout()
    plt.savefig(os.path.join(REPORTS_DIR, 'model_comparison.png'), dpi=150)
    plt.close()

    # Metadata & Reports
    metadata = {
        'model_name': best_model_name,
        'version': '2.0.0',
        'r2_score': round(best_r2, 4),
        'metrics': comparison_metrics[best_model_name],
        'training_date': datetime.now().isoformat(),
        'features_count': len(feature_cols),
        'dataset_version': 'Indian_AQI_CPCB_OpenAQ_v2'
    }
    
    with open(os.path.join(MODELS_DIR, 'model_metadata.json'), 'w') as f:
        json.dump(metadata, f, indent=2)
        
    with open(os.path.join(REPORTS_DIR, 'evaluation_report.json'), 'w') as f:
        json.dump(comparison_metrics, f, indent=2)
        
    print(f"✅ Production artifacts & evaluation reports saved in models/ and reports/!")
    return best_model, scaler, feature_cols

if __name__ == '__main__':
    train_and_evaluate_all_models()
