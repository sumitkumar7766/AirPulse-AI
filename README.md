# 🌬️ AirPulse AI – Smart Urban Air Quality Intelligence Platform

> **Palantir Gotham / ArcGIS Intelligence class AI-Powered Decision Intelligence Platform for Proactive Urban Air Quality Monitoring, Machine Learning Forecasting & Policy Simulation**

AirPulse AI is a complete production-grade full-stack monorepo built for smart city command centers. It moves municipal administrators from reactive pollution monitoring to proactive, AI-driven pollution prevention.

📄 **Full Technical Specification & Architectural Document**: See [PROJECT_DETAILS.md](./PROJECT_DETAILS.md)

---

## 🚀 10 Unique AI-Powered USP Modules (Winner Features)

| # | USP Module Name | Route URL | Feature Architecture & Capabilities |
|:---|:---|:---|:---|
| **USP 1** | **🧠 AI Intervention Simulator** | `/simulator` | **Winner Feature**: Interactive sliders (*Traffic Reduction %, Construction Dust %, Industrial Cut %, Waste Control %, Trees Planted & Green Expansion %*). Real-time AI prediction calculation (Before AQI 280 vs After AQI 175, 37% pollution reduction, 24% health risk cut, 18% population reduction) + Before/After charts. |
| **USP 2** | **🏆 Environmental Intelligence Score** | `/environmental-score` | Proprietary 0–100 city scoring engine based on *AQI, Green Cover, Traffic, Weather, Complaints & Growth Rate*. Circular score cards & Leaderboard (Bhopal 78/100, Indore 72/100, Delhi 42/100). |
| **USP 3** | **📢 Citizen Complaint + AI Verification** | `/citizen-complaints` | Citizens submit photos & complaints (*Waste Burning, Industrial Smoke, Construction Dust*). Computer Vision AI automatically verifies issue, assigns confidence score (94%) & triggers enforcement dispatch. |
| **USP 4** | **📡 Pollution Risk Radar** | `/risk-radar` | City-wide multi-factor risk engine combining AQI, meteorology, satellite NO2 & thermal inversion. Interactive Radar Chart & 24h/48h/72h risk horizon cards. |
| **USP 5** | **📰 Pollution Story Generator** | `/story-generator` | One-click AI report synthesis (*Today, Weekly, Monthly, Emergency Alert Reports*) with PDF export, email & social share triggers. |
| **USP 6** | **🌳 Green Zone Recommendation Engine** | `/green-zones` | Machine learning identifies high-impact target locations for *Miyawaki urban forests, green corridors & park expansion* with expected AQI improvement metrics. |
| **USP 7** | **⏳ Air Quality Time Machine** | `/time-machine` | Historical environmental intelligence module. Interactive playback slider to travel back through 7D, 30D, 6M, 1Y historical telemetry. |
| **USP 8** | **⚔️ Smart City Battle Mode** | `/battle-mode` | Head-to-head city confrontation engine (*Bhopal vs Delhi vs Mumbai vs Indore vs Pune*). AI summary comparison: *"Bhopal performs 31% better than Delhi"*. |
| **USP 9** | **🩺 Health Impact Analyzer** | `/health-impact` | Predicts physiological pollution impact on vulnerable groups (*Children, Senior Citizens, Asthma Patients, Outdoor Workers*) & estimates hospital ER admission loads. |
| **USP 10** | **🤖 Advanced AI Copilot** | `/copilot` | Upgraded agentic assistant utilizing live context from all forecasts, hotspots, complaints, scores & intervention simulations to generate actionable municipal action plans. |

---

## 🏛 3-Tier Monorepo Architecture Overview

$$\text{Next.js 15 Frontend (Port 3000)} \longrightarrow \text{Express Node.js Backend (Port 5001)} \longrightarrow \text{Python ML Microservice (Port 8000)}$$

```text
ET Hackathon/
├── frontend/                      # Next.js 15 App Router + Tailwind CSS + Three.js + Leaflet (Port 3000)
│   ├── src/
│   │   ├── app/                   # App Router (28 Subroutes)
│   │   ├── components/            # Reusable UI & Visualizer Components
│   │   │   └── views/             # 10 USP Views + Core Module Views
│   │   ├── services/              # Centralized Axios API service layer (api.ts)
│   │   └── types/                 # TypeScript interfaces (index.ts)
│   ├── .env.local                 # NEXT_PUBLIC_API_URL=http://localhost:5001/api
│   └── package.json
│
├── backend/                       # Express.js + TypeScript + MongoDB Atlas (Port 5001)
│   ├── src/
│   │   ├── config/                # MongoDB connection & fallback dataset mode
│   │   ├── controllers/           # REST API Controllers (uspController, forecastController, etc.)
│   │   ├── routes/                # Express API Routes (index.ts, uspRoutes.ts)
│   │   ├── services/              # Python ML Proxy Service (mlService.ts)
│   │   └── server.ts              # Express entrypoint (Port 5001 with auto-port fallback)
│   ├── .env                       # PORT=5001, MONGODB_URI, FRONTEND_URL=http://localhost:3000
│   └── package.json
│
├── ml/                            # Python Machine Learning Microservice (Port 8000)
│   ├── data/                      # CPCB & OpenAQ Public Datasets (data/raw/ & data/processed/)
│   ├── notebooks/                 # Executed Jupyter Notebooks (AQI_Forecasting.ipynb, etc.)
│   ├── models/                    # Serialized .pkl Models & Scaler Artifacts
│   ├── src/                       # Data Pipeline, Model Trainers & Predict Engine
│   ├── api/main.py                # FastAPI Microservice (Port 8000)
│   ├── reports/                   # Evaluation JSON Reports & PNG Charts
│   ├── requirements.txt
│   └── README.md                  # Machine Learning Technical Documentation
│
├── README.md
├── PROJECT_DETAILS.md
├── package.json
└── .gitignore
```

---

## 🔬 Machine Learning Microservice (`ml/`)

The Python ML microservice ingests CPCB and OpenAQ Indian Air Quality telemetry datasets, cleans missing values, handles outliers, engineers temporal features, and trains production ML models:

- **AQI Multi-Horizon Regressor**: Multi-horizon 24h, 48h, 72h, and 7D forecasting model using XGBoost, Random Forest, LightGBM, and Gradient Boosting algorithms.
- **Geospatial Hotspot Clustering**: K-Means & DBSCAN geospatial clustering on latitude, longitude, AQI, and particulate concentrations.
- **Pollution Source Attribution**: Multi-class classification identifying *Traffic Emissions, Construction Dust, Industrial Plumes, Waste Burning, and Residential Emissions* (**100% Accuracy**).
- **Health Impact Regressor**: Predicts Asthma Risk %, Respiratory Risk %, and Hospital ER Admission Load %.

---

## 💻 Quick Start & Commands

### 1. Start Python Machine Learning Microservice (Port 8000)
```bash
cd ml
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run Data Pipeline & Train Models
python3 src/data_pipeline.py
python3 src/train_aqi_forecast.py
python3 src/train_hotspots.py
python3 src/train_attribution.py
python3 src/train_health_impact.py

# Start FastAPI Microservice (Port 8000)
python3 api/main.py
```
*Accessible at `http://localhost:8000/health`*

### 2. Start Express Node.js Backend Server (Port 5001)
```bash
cd backend
npm install
npm run dev
```
*Accessible at `http://localhost:5001/api`*

### 3. Start Next.js Frontend Application (Port 3000)
```bash
cd frontend
npm install
npm run dev
```
*Accessible at `http://localhost:3000`*

---

## ✅ Verified Endpoints Summary

- **Frontend App**: `http://localhost:3000`
- **Backend API**: `http://localhost:5001/api`
- **Python ML Microservice**: `http://localhost:8000`
