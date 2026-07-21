import os
import json
import joblib
import numpy as np
import pandas as pd
from datetime import datetime
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

MODELS_DIR = os.path.join(os.path.dirname(__file__), '../models')
REPORTS_DIR = os.path.join(os.path.dirname(__file__), '../reports')

def train_attribution_model():
    os.makedirs(MODELS_DIR, exist_ok=True)
    os.makedirs(REPORTS_DIR, exist_ok=True)
    
    np.random.seed(42)
    n_samples = 800
    
    # Classes: 0: Traffic, 1: Construction, 2: Industrial, 3: Waste Burning, 4: Residential
    sources = np.random.choice([0, 1, 2, 3, 4], size=n_samples, p=[0.45, 0.25, 0.15, 0.10, 0.05])
    
    no2 = []
    pm10 = []
    so2 = []
    co = []
    pm25 = []
    
    for s in sources:
        if s == 0: # Traffic (High NO2)
            no2.append(np.random.normal(85, 15))
            pm10.append(np.random.normal(120, 20))
            so2.append(np.random.normal(15, 5))
            co.append(np.random.normal(3.5, 0.8))
            pm25.append(np.random.normal(110, 25))
        elif s == 1: # Construction (High PM10)
            no2.append(np.random.normal(30, 8))
            pm10.append(np.random.normal(280, 45))
            so2.append(np.random.normal(10, 3))
            co.append(np.random.normal(1.2, 0.4))
            pm25.append(np.random.normal(85, 15))
        elif s == 2: # Industrial (High SO2)
            no2.append(np.random.normal(45, 10))
            pm10.append(np.random.normal(180, 30))
            so2.append(np.random.normal(65, 12))
            co.append(np.random.normal(2.0, 0.5))
            pm25.append(np.random.normal(130, 20))
        elif s == 3: # Waste Burning (High CO & PM2.5)
            no2.append(np.random.normal(35, 8))
            pm10.append(np.random.normal(160, 25))
            so2.append(np.random.normal(20, 5))
            co.append(np.random.normal(5.5, 1.2))
            pm25.append(np.random.normal(165, 30))
        else: # Residential
            no2.append(np.random.normal(25, 5))
            pm10.append(np.random.normal(90, 15))
            so2.append(np.random.normal(8, 2))
            co.append(np.random.normal(1.5, 0.3))
            pm25.append(np.random.normal(65, 10))
            
    df = pd.DataFrame({
        'pm25': np.clip(pm25, 5, 500),
        'pm10': np.clip(pm10, 10, 600),
        'no2': np.clip(no2, 2, 200),
        'so2': np.clip(so2, 1, 150),
        'co': np.clip(co, 0.1, 10.0),
        'source_label': sources
    })
    
    X = df[['pm25', 'pm10', 'no2', 'so2', 'co']]
    y = df['source_label']
    
    clf = RandomForestClassifier(n_estimators=100, random_state=42)
    clf.fit(X, y)
    
    acc = float(accuracy_score(y, clf.predict(X)))
    
    model_path = os.path.join(MODELS_DIR, 'pollution_source_model.pkl')
    joblib.dump(clf, model_path)
    
    report = {
        'accuracy': round(acc, 4),
        'classes': ['Traffic', 'Construction', 'Industrial', 'Waste Burning', 'Residential'],
        'trained_at': datetime.now().isoformat()
    }
    
    with open(os.path.join(REPORTS_DIR, 'attribution_evaluation.json'), 'w') as f:
        json.dump(report, f, indent=2)
        
    print(f"✅ Source attribution classifier model saved (Accuracy: {acc*100:.2f}%) to: {model_path}")
    return clf

if __name__ == '__main__':
    train_attribution_model()
