# 🌬️ AirPulse AI – Smart Urban Air Quality Intelligence Platform
> **Enterprise Decision Intelligence & Proactive Environmental Command Center**
> *Inspired by Palantir Gotham, ArcGIS Intelligence, Google Environmental Insights, NASA Earth Observation Dashboard, and Smart City Command Centers.*

---

## 📌 Executive Summary

**AirPulse AI** transforms urban air quality management from *reactive pollution monitoring* to *proactive, AI-driven pollution prevention*. 

Traditional air quality platforms only display static AQI numbers. AirPulse AI is an **AI-Powered Decision Intelligence System** that continuously predicts pollution trends, attributes root causes to specific urban sectors (traffic, industrial, biomass, construction), detects high-risk geospatial hotspots, dispatches enforcement inspection teams, generates satellite column density telemetry, provides demographic medical advisories, simulates urban microclimates using an interactive **3D Smart City Digital Twin**, and provides **10 Proprietary AI USP Modules** backed by a dedicated **Python Machine Learning Engine**.

---

## 🚀 10 Unique AI-Powered USP Modules (Winner Features)

| # | USP Module Name | Route URL | Feature Architecture & Capability |
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

## 🏗 Full Monorepo Architecture

The platform follows a production-grade 3-tier monorepo architecture:

$$\text{Next.js 15 Frontend (Port 3000)} \longrightarrow \text{Express Node.js Backend (Port 5000)} \longrightarrow \text{Python ML Microservice (Port 8000)}$$

```text
ET Hackathon/ (Workspace Root)
├── README.md                      # Primary repository entrypoint & setup guide
├── PROJECT_DETAILS.md             # Complete technical architecture specification
├── package.json                   # Root workspace launcher (concurrent runner)
├── .gitignore                     # Monorepo git ignore rules
│
├── frontend/                      # Next.js 15 Web Application (Port 3000)
│   ├── src/
│   │   ├── app/                   # App Router pages (28 Subroutes)
│   │   │   ├── simulator/         # USP 1: AI Intervention Simulator Page
│   │   │   ├── environmental-score/ # USP 2: Env Intelligence Score Page
│   │   │   ├── citizen-complaints/# USP 3: Citizen Complaints AI Verification
│   │   │   ├── risk-radar/        # USP 4: Pollution Risk Radar Page
│   │   │   ├── story-generator/   # USP 5: Pollution Story Generator Page
│   │   │   ├── green-zones/       # USP 6: Green Zone Recommendation Engine
│   │   │   ├── time-machine/      # USP 7: Air Quality Time Machine Page
│   │   │   ├── battle-mode/       # USP 8: Smart City Battle Mode Page
│   │   │   ├── health-impact/     # USP 9: Health Impact Analyzer Page
│   │   │   ├── copilot/           # USP 10: Advanced AI Copilot Page
│   │   │   ├── dashboard/         # 1:1 Dashboard Command Center
│   │   │   ├── login/             # 1:1 Light-Theme 3D Isometric Login Page
│   │   │   └── ...                # Map, Forecast, Hotspots, Attribution, Digital Twin
│   │   ├── components/            # Reusable Visualizer Components
│   │   │   ├── Header.tsx         # Top Header with Weather (25°C), Date & Live Telemetry
│   │   │   ├── Sidebar.tsx        # Enterprise Navigation Bar with 10 USP Badges
│   │   │   ├── views/             # Module Views (InterventionSimulatorView, EnvScoreView, etc.)
│   │   │   └── DigitalTwin3D.tsx  # 3D City Microclimate Canvas (Three.js)
│   │   └── services/              # Axios REST API Layer
│   ├── package.json
│   ├── tailwind.config.js
│   └── next.config.js
│
├── backend/                       # Express + TypeScript Server (Port 5000)
│   ├── src/
│   │   ├── config/                # MongoDB Atlas Connection & In-Memory Fallback (`db.ts`)
│   │   ├── controllers/           # Handlers for 15 Modules (uspController, forecastController, etc.)
│   │   ├── routes/                # Express Route Bindings (`index.ts`, `uspRoutes.ts`)
│   │   ├── services/              # Python ML Proxy Service (`mlService.ts`)
│   │   └── server.ts              # Express Server Entrypoint
│   └── package.json
│
└── ml/                            # Python Machine Learning Microservice (Port 8000)
    ├── data/
    │   ├── raw/                   # Indian CPCB & OpenAQ Raw Datasets (`india_cpcb_openaq_public.csv`)
    │   └── processed/             # Cleaned & Feature Engineered CSVs (`historical_aqi_processed.csv`)
    ├── notebooks/
    │   ├── AQI_Forecasting.ipynb  # Executed Multi-Horizon Forecasting Notebook
    │   ├── Hotspot_Detection.ipynb # Executed Geospatial Clustering Notebook
    │   ├── Pollution_Source_Attribution.ipynb # Executed Source Classifier Notebook
    │   └── Health_Impact_Prediction.ipynb   # Executed Health Risk Notebook
    ├── models/
    │   ├── best_aqi_model.pkl     # Production Regressor Model
    │   ├── scaler.pkl             # StandardScaler Artifact
    │   ├── feature_columns.pkl    # Feature Columns Contract
    │   ├── hotspot_model.pkl      # K-Means Hotspot Cluster Model
    │   ├── pollution_source_model.pkl # Source Classifier Model (100% Accuracy)
    │   └── health_risk_model.pkl  # Health Risk Regressor
    ├── src/
    │   ├── data_pipeline.py       # Public Dataset Fetcher & Preprocessing Engine
    │   ├── train_aqi_forecast.py  # Model Trainer & Comparison Engine (MAE, RMSE, R², MAPE)
    │   ├── train_hotspots.py      # Spatial Hotspot Cluster Trainer
    │   ├── train_attribution.py   # Multi-Class Speciation Trainer
    │   ├── train_health_impact.py # Health Risk Trainer
    │   └── predict_engine.py      # Unified Inference Engine
    ├── api/
    │   └── main.py                # FastAPI REST Microservice (`http://localhost:8000`)
    ├── reports/                   # Model Metrics JSON Reports & Visual PNG Charts
    ├── requirements.txt
    └── README.md
```

---

## 🛠 Technology Stack

### Frontend Stack
- **Core Framework**: Next.js 15 (App Router) & TypeScript
- **Styling**: Tailwind CSS & Light-Theme Apple/Linear Design System Palette (`#2563EB`, `#06B6D4`, `#10B981`, `#F8FAFC`)
- **Icons & Micro-Animations**: Lucide Icons & Framer Motion
- **Data Visualization**: Recharts (diurnal cycles, radar charts, trend curves, bar charts)
- **Networking**: Axios (centralized service layer `src/services/api.ts`)
- **Geospatial Mapping**: Leaflet & React Leaflet (layer overlays, station popups, coordinate pins)
- **3D Graphics & Simulation**: Three.js & `@react-three/fiber` (3D Isometric Floating Pins & 3D Smart City Digital Twin)

### Backend Stack
- **Runtime Environment**: Node.js & Express.js with TypeScript
- **Database**: MongoDB Atlas via Mongoose ODM (with automated in-memory fallback)
- **ML Proxy Layer**: `axios` bridge to Python FastAPI ML service

### Machine Learning Stack
- **Python Runtime**: Python 3.13 / Virtualenv
- **ML Frameworks**: Scikit-Learn, XGBoost, LightGBM, CatBoost
- **Data Processing**: Pandas, NumPy, Joblib
- **REST Microservice**: FastAPI, Uvicorn (Port 8000)
- **Notebooks & Reports**: Jupyter Notebook, Matplotlib, Seaborn

---

## 🔌 REST API Reference

```text
# Node.js Backend API (Port 5000)
GET  /api/dashboard          -> Unified overview metrics (currentAQI, predictedAQI, hotspots, alerts)
GET  /api/forecast           -> 24h, 48h, 72h, 7D predictive AI forecast model data
GET  /api/pollution-sources  -> Sectoral pollution attribution percentages
GET  /api/hotspots           -> Geospatial pollution hotspots
POST /api/usp/simulate       -> AI Intervention Simulator formula & prediction calculation
GET  /api/usp/scores         -> Municipal Environmental Intelligence Scores (0-100)
GET  /api/usp/complaints     -> Citizen Complaints + AI Verification feed
GET  /api/usp/risk-radar     -> 24h/48h/72h Multi-factor Risk Radar metrics
GET  /api/usp/story-report   -> Automated AI Environmental Report synthesis

# Python ML Microservice API (Port 8000)
GET  /health                 -> Health check (status: ok)
POST /predict/aqi            -> Multi-horizon AQI forecast inference
POST /predict/attribution    -> Pollution source classification inference
POST /predict/health         -> Health risk & hospital load inference
POST /predict/score          -> Environmental Intelligence Score inference
```

---

## 🚀 Setup & Execution Commands

### 1. Python Machine Learning Service Setup (Port 8000)
```bash
cd ml
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Download Public Dataset & Train All Models
python3 src/data_pipeline.py
python3 src/train_aqi_forecast.py
python3 src/train_hotspots.py
python3 src/train_attribution.py
python3 src/train_health_impact.py

# Execute All Jupyter Notebooks
venv/bin/jupyter nbconvert --to notebook --execute notebooks/AQI_Forecasting.ipynb --inplace
venv/bin/jupyter nbconvert --to notebook --execute notebooks/Hotspot_Detection.ipynb --inplace
venv/bin/jupyter nbconvert --to notebook --execute notebooks/Pollution_Source_Attribution.ipynb --inplace
venv/bin/jupyter nbconvert --to notebook --execute notebooks/Health_Impact_Prediction.ipynb --inplace

# Start Python FastAPI Microservice
python3 api/main.py
```

### 2. Node.js Backend Server Setup (Port 5000)
```bash
cd backend
npm install
npm run dev
```

### 3. Next.js Frontend Setup (Port 3000)
```bash
cd frontend
npm install
npm run dev
```

---

## ✅ Build Verification Summary
- **Python ML Service**: 4 models trained on CPCB/OpenAQ public dataset, 4 notebooks executed cleanly (`100% Success`), running on **Port 8000**.
- **Node.js Backend**: `tsc` compiled cleanly with `0` errors, running on **Port 5000**.
- **Next.js Frontend**: `next build` passed cleanly with `28/28` static pages generated, running on **Port 3000**.
