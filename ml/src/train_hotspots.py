import os
import json
import joblib
import numpy as np
import pandas as pd
from datetime import datetime
from sklearn.cluster import KMeans

MODELS_DIR = os.path.join(os.path.dirname(__file__), '../models')
REPORTS_DIR = os.path.join(os.path.dirname(__file__), '../reports')

def train_hotspot_model():
    os.makedirs(MODELS_DIR, exist_ok=True)
    os.makedirs(REPORTS_DIR, exist_ok=True)
    
    # Synthetic cluster coordinates for Bhopal & NCR
    np.random.seed(42)
    sample_locations = [
        {'lat': 23.23, 'lng': 77.43, 'base_aqi': 285}, # MP Nagar
        {'lat': 23.28, 'lng': 77.45, 'base_aqi': 312}, # Industrial Area
        {'lat': 28.65, 'lng': 77.31, 'base_aqi': 342}, # Anand Vihar
        {'lat': 22.75, 'lng': 75.89, 'base_aqi': 185}  # Vijay Nagar
    ]
    
    records = []
    for loc in sample_locations:
        for _ in range(50):
            lat = loc['lat'] + np.random.normal(0, 0.02)
            lng = loc['lng'] + np.random.normal(0, 0.02)
            aqi = loc['base_aqi'] + np.random.normal(0, 15)
            pm25 = aqi * 0.55
            pm10 = aqi * 0.85
            records.append([lat, lng, aqi, pm25, pm10])
            
    df = pd.DataFrame(records, columns=['lat', 'lng', 'aqi', 'pm25', 'pm10'])
    
    kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
    df['cluster'] = kmeans.fit_predict(df[['lat', 'lng', 'aqi']])
    
    model_path = os.path.join(MODELS_DIR, 'hotspot_model.pkl')
    joblib.dump(kmeans, model_path)
    
    report = {
        'clusters_count': 4,
        'total_hotspot_points': len(df),
        'inertia': float(kmeans.inertia_),
        'trained_at': datetime.now().isoformat()
    }
    
    with open(os.path.join(REPORTS_DIR, 'hotspot_evaluation.json'), 'w') as f:
        json.dump(report, f, indent=2)
        
    print(f"✅ Hotspot cluster model saved to: {model_path}")
    return kmeans

if __name__ == '__main__':
    train_hotspot_model()
