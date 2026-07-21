# AirPulse AI – Machine Learning Intelligence Engine

This is the independent **Machine Learning Microservice** for AirPulse AI. It trains, evaluates, stores, and serves AI/ML models for air quality forecasting, hotspot detection, pollution source attribution, health risk prediction, and environmental scoring.

---

## 📁 Architecture & Folder Structure

```
ml/
├── data/
│   ├── raw/                 # OpenAQ & CPCB raw historical datasets
│   └── processed/           # Processed & feature-engineered datasets
├── notebooks/
│   ├── AQI_Forecasting.ipynb
│   ├── Hotspot_Detection.ipynb
│   ├── Pollution_Source_Attribution.ipynb
│   └── Health_Impact_Prediction.ipynb
├── models/                  # Serialized trained models (.pkl)
├── src/
│   ├── data_pipeline.py     # Automated dataset fetching & preprocessing
│   ├── train_aqi_forecast.py# Multi-horizon AQI forecast training
│   ├── train_hotspots.py    # K-Means hotspot clustering
│   ├── train_attribution.py # Pollution source multi-class classification
│   ├── train_health_impact.py# Health impact regression
│   └── predict_engine.py    # Unified prediction engine
├── api/
│   └── main.py              # FastAPI Microservice (Port 8000)
├── logs/                    # Training and inference logs
├── reports/                 # Evaluation metrics JSON reports
├── requirements.txt
└── README.md
```

---

## 🚀 Quickstart Guide

### 1. Install Dependencies
```bash
cd ml
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Run Data Pipeline & Train Models
```bash
python3 src/data_pipeline.py
python3 src/train_aqi_forecast.py
python3 src/train_hotspots.py
python3 src/train_attribution.py
python3 src/train_health_impact.py
```

### 3. Start Python ML FastAPI Microservice (Port 8000)
```bash
python3 api/main.py
```
*API docs available at: `http://localhost:8000/docs`*
