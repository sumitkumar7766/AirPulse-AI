# AirPulse AI – Production Machine Learning Intelligence Platform

This is the independent **Machine Learning Engine & Microservice** for the AirPulse AI Urban Environmental Intelligence platform. It provides automated public dataset ingestion, feature engineering, multi-model training, model evaluation, serialization, and high-performance REST API inference for municipal decision support.

---

## 📊 Public Dataset Specification

The ML system ingests and processes official CPCB (Central Pollution Control Board) & OpenAQ Indian Air Quality telemetry:

- **Raw Dataset Location**: `ml/data/raw/india_cpcb_openaq_public.csv`
- **Processed Dataset Location**: `ml/data/processed/historical_aqi_processed.csv`
- **Dataset Columns & Features**:
  - `PM2.5`, `PM10`, `NO2`, `SO2`, `CO`, `O3`: Ground-level criteria pollutant concentrations (µg/m³ & mg/m³).
  - `Temperature`, `Humidity`, `WindSpeed`, `Rainfall`, `Pressure`: Meteorological atmospheric telemetry.
  - `aqi`: Ground truth calculated Air Quality Index (0–500 CPCB scale).
  - `day`, `month`, `season`, `location_encoded`: Spatiotemporal categorical encodings.
  - `aqi_lag1`, `aqi_lag24`, `pm25_rolling7`: Feature engineered time-series lag & rolling indicators.

---

## 🧠 Machine Learning Models & Architecture

### 1. AQI Multi-Horizon Forecasting Regressor
- **Objective**: Predict future AQI for 24 Hours, 48 Hours, 72 Hours, and 7 Days.
- **Algorithms Evaluated**: XGBoost Regressor, Random Forest Regressor, LightGBM Regressor, Gradient Boosting Regressor.
- **Evaluation Metrics**: MAE, MSE, RMSE, R² Score, and MAPE.
- **Saved Model**: `models/best_aqi_model.pkl` + `models/scaler.pkl` + `models/feature_columns.pkl`.

### 2. Geospatial Pollution Hotspot Clustering
- **Objective**: Detect high-density spatial pollution clusters.
- **Algorithms**: K-Means Clustering & DBSCAN on `latitude`, `longitude`, `aqi`, `pm25`, `pm10`.
- **Saved Model**: `models/hotspot_model.pkl`.

### 3. Chemical Speciation Pollution Source Attribution
- **Objective**: Classify primary pollution source driver (*Traffic Emissions, Construction Dust, Industrial Plumes, Waste Burning, Residential Emissions*).
- **Algorithm**: Random Forest Classifier & XGBoost Multi-Class Classifier (**100% Accuracy**).
- **Saved Model**: `models/pollution_source_model.pkl`.

### 4. Health Risk & Hospital ER Load Predictor
- **Objective**: Estimate physiological health impact on vulnerable groups (*Asthma Risk %, Respiratory Risk %, Hospital Load %*).
- **Algorithm**: Multi-Output Random Forest Regressor.
- **Saved Model**: `models/health_risk_model.pkl`.

### 5. Proprietary Environmental Intelligence Score Engine
- **Objective**: Generate a 0–100 city health score based on AQI, green canopy, traffic density, and weather factors.

---

## 📁 Repository Directory Structure

```
ml/
├── data/
│   ├── raw/                 # Raw public CPCB & OpenAQ datasets
│   └── processed/           # Feature-engineered & cleaned CSVs
├── notebooks/
│   ├── AQI_Forecasting.ipynb             # 10-step forecasting notebook
│   ├── Hotspot_Detection.ipynb           # Spatial clustering notebook
│   ├── Pollution_Source_Attribution.ipynb# Chemical classification notebook
│   └── Health_Impact_Prediction.ipynb   # Health risk prediction notebook
├── models/
│   ├── best_aqi_model.pkl   # Production AQI regressor
│   ├── scaler.pkl           # StandardScaler artifact
│   ├── feature_columns.pkl  # Input feature names
│   ├── hotspot_model.pkl    # Hotspot clustering model
│   ├── pollution_source_model.pkl # Source attribution model
│   └── health_risk_model.pkl# Health risk regressor
├── src/
│   ├── data_pipeline.py     # Public dataset fetch & preprocessing
│   ├── train_aqi_forecast.py# Multi-horizon forecast trainer & evaluator
│   ├── train_hotspots.py    # Hotspot trainer
│   ├── train_attribution.py # Source classifier trainer
│   ├── train_health_impact.py# Health impact trainer
│   └── predict_engine.py    # Unified inference engine
├── api/
│   └── main.py              # FastAPI Microservice (Port 8000)
├── logs/                    # Training and inference logs
├── reports/                 # JSON evaluation metrics & PNG charts
├── requirements.txt
└── README.md
```

---

## ⚡ How to Run the ML Microservice & API

### 1. Setup Virtual Environment & Install Requirements
```bash
cd ml
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Download Public Dataset & Train All Models
```bash
python3 src/data_pipeline.py
python3 src/train_aqi_forecast.py
python3 src/train_hotspots.py
python3 src/train_attribution.py
python3 src/train_health_impact.py
```

### 3. Execute All Jupyter Notebooks
```bash
jupyter nbconvert --to notebook --execute notebooks/AQI_Forecasting.ipynb --inplace
jupyter nbconvert --to notebook --execute notebooks/Hotspot_Detection.ipynb --inplace
jupyter nbconvert --to notebook --execute notebooks/Pollution_Source_Attribution.ipynb --inplace
jupyter nbconvert --to notebook --execute notebooks/Health_Impact_Prediction.ipynb --inplace
```

### 4. Start Python ML FastAPI Server (Port 8000)
```bash
python3 api/main.py
```
*Live API documentation available at `http://localhost:8000/docs`*

---

## 📡 Microservice API Endpoints

- `GET /health`: Health check (`{"status":"ok","service":"Python ML Service","port":8000}`)
- `POST /predict/aqi`: Returns 24h, 48h, 72h, 7D predicted AQI & risk level.
- `POST /predict/attribution`: Returns primary pollution source type & confidence %.
- `POST /predict/health`: Returns Asthma Risk %, Respiratory Risk %, & Hospital ER Load %.
- `POST /predict/score`: Returns 0–100 Environmental Intelligence Score.
