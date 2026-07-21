import os
import json
import joblib
import numpy as np
import pandas as pd
from datetime import datetime
from sklearn.ensemble import RandomForestRegressor

MODELS_DIR = os.path.join(os.path.dirname(__file__), '../models')
REPORTS_DIR = os.path.join(os.path.dirname(__file__), '../reports')

def train_health_impact_model():
    os.makedirs(MODELS_DIR, exist_ok=True)
    os.makedirs(REPORTS_DIR, exist_ok=True)
    
    np.random.seed(42)
    n_samples = 500
    
    aqi = np.random.uniform(30, 450, n_samples)
    pm25 = aqi * np.random.uniform(0.5, 0.75, n_samples)
    no2 = aqi * np.random.uniform(0.15, 0.3, n_samples)
    
    # Calculate health risk indices (0-100%)
    asthma_risk = np.clip((aqi * 0.22 + pm25 * 0.15), 5, 99)
    respiratory_risk = np.clip((aqi * 0.20 + no2 * 0.25), 5, 99)
    hospital_load = np.clip((aqi * 0.18 + pm25 * 0.10), 2, 95)
    
    df = pd.DataFrame({
        'aqi': aqi,
        'pm25': pm25,
        'no2': no2,
        'asthma_risk': asthma_risk,
        'respiratory_risk': respiratory_risk,
        'hospital_load': hospital_load
    })
    
    X = df[['aqi', 'pm25', 'no2']]
    y = df[['asthma_risk', 'respiratory_risk', 'hospital_load']]
    
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X, y)
    
    model_path = os.path.join(MODELS_DIR, 'health_risk_model.pkl')
    joblib.dump(model, model_path)
    
    report = {
        'target_outputs': ['asthma_risk', 'respiratory_risk', 'hospital_load'],
        'n_samples': n_samples,
        'trained_at': datetime.now().isoformat()
    }
    
    with open(os.path.join(REPORTS_DIR, 'health_impact_evaluation.json'), 'w') as f:
        json.dump(report, f, indent=2)
        
    print(f"✅ Health impact prediction model saved to: {model_path}")
    return model

if __name__ == '__main__':
    train_health_impact_model()
