import os
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

REPORTS_DIR = os.path.join(os.path.dirname(__file__), '../reports')

def generate_eda_visualizations(df: pd.DataFrame):
    os.makedirs(REPORTS_DIR, exist_ok=True)
    plt.style.use('seaborn-v0_8-whitegrid' if 'seaborn-v0_8-whitegrid' in plt.style.available else 'default')
    
    # 1. AQI Distribution Chart
    plt.figure(figsize=(8, 5))
    sns.histplot(df['aqi'], kde=True, color='#2563EB', bins=30)
    plt.title('Air Quality Index (AQI) Frequency Distribution', fontsize=12, fontweight='bold')
    plt.xlabel('AQI Index')
    plt.ylabel('Frequency Count')
    plt.tight_layout()
    plt.savefig(os.path.join(REPORTS_DIR, 'aqi_distribution.png'), dpi=150)
    plt.close()
    
    # 2. Correlation Heatmap
    plt.figure(figsize=(10, 8))
    numeric_cols = ['pm25', 'pm10', 'no2', 'so2', 'co', 'o3', 'temperature', 'humidity', 'wind_speed', 'aqi']
    corr = df[numeric_cols].corr()
    sns.heatmap(corr, annot=True, fmt='.2f', cmap='Blues', linewidths=0.5)
    plt.title('Air Quality & Pollutant Correlation Heatmap', fontsize=12, fontweight='bold')
    plt.tight_layout()
    plt.savefig(os.path.join(REPORTS_DIR, 'correlation_heatmap.png'), dpi=150)
    plt.close()
    
    print("✅ EDA Visualizations exported to reports/ (aqi_distribution.png, correlation_heatmap.png)")

if __name__ == '__main__':
    from data_pipeline import preprocess_aqi_pipeline
    df = preprocess_aqi_pipeline()
    generate_eda_visualizations(df)
