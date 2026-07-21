# 🌬️ AirPulse AI – Smart Urban Air Quality Intelligence Platform
> **Enterprise Decision Intelligence & Proactive Environmental Command Center**
> *Inspired by Palantir Gotham, ArcGIS Intelligence, Google Environmental Insights, NASA Earth Observation Dashboard, and Smart City Command Centers.*

---

## 📌 Executive Summary

**AirPulse AI** transforms urban air quality management from *reactive pollution monitoring* to *proactive, AI-driven pollution prevention*. 

Traditional air quality platforms only display static AQI numbers. AirPulse AI is an **AI-Powered Decision Intelligence System** that continuously predicts pollution trends, attributes root causes to specific urban sectors (traffic, industrial, biomass, construction), detects high-risk geospatial hotspots, dispatches enforcement inspection teams, generates satellite column density telemetry, provides demographic medical advisories, and simulates urban microclimates using an interactive **3D Smart City Digital Twin**.

---

## 🏗 Full Monorepo Architecture

The platform follows a clean, production-ready monorepo structure with complete separation of concerns between Frontend and Backend:

```text
ET Hackathon/ (Workspace Root)
├── README.md                      # Primary repository entrypoint & setup guide
├── PROJECT_DETAILS.md             # Complete technical architecture specification
├── package.json                   # Root workspace launcher (concurrent runner)
├── .gitignore                     # Monorepo git ignore rules
│
├── frontend/                      # Next.js 15 Web Application (Port 3000)
│   ├── src/
│   │   ├── app/                   # App Router pages (layout.tsx, page.tsx, globals.css)
│   │   ├── components/            # Reusable UI & Core Visualizers
│   │   │   ├── Header.tsx         # Glassmorphism Top Navigation & Live Telemetry Status
│   │   │   ├── Sidebar.tsx        # 13-Module Enterprise Navigation & Role Indicator
│   │   │   ├── AuthModal.tsx      # Demo Persona Auth Switcher (Admin, Inspector, Planner)
│   │   │   ├── MetricsOverview.tsx# Top Dashboard Indicator Cards
│   │   │   ├── Globe3D.tsx        # Three.js 3D Atmospheric Earth Sphere Mesh
│   │   │   ├── HotspotMap.tsx     # Vector Hotspot GIS Map & Telemetry Radar
│   │   │   ├── AQICharts.tsx      # Recharts Diurnal 24h Cycles & 7d Trajectory Curves
│   │   │   ├── HealthAdvisoryCard.tsx # Demographic Exposure Protocols
│   │   │   ├── SatelliteCard.tsx  # Sentinel-5P Satellite Column Density Card
│   │   │   ├── AICopilot.tsx      # Interactive Floating AI Assistant Drawer
│   │   │   ├── MotionWrapper.tsx  # Framer Motion Hydration Helper
│   │   │   └── views/             # 13 Dedicated Module Pages
│   │   │       ├── DashboardView.tsx       # Module 1: Smart Dashboard
│   │   │       ├── IntelligenceMapView.tsx # Module 2: Air Quality Intelligence Map
│   │   │       ├── ForecastView.tsx        # Module 3: AQI Forecasting Engine
│   │   │       ├── AttributionView.tsx     # Module 4: Pollution Source Attribution
│   │   │       ├── HotspotView.tsx         # Module 5: Pollution Hotspot Detection
│   │   │       ├── EnforcementView.tsx     # Module 6: Enforcement Intelligence
│   │   │       ├── SatelliteView.tsx       # Module 7: Satellite Intelligence
│   │   │       ├── CopilotView.tsx         # Module 8: Full AI Copilot Page
│   │   │       ├── HealthAdvisoryView.tsx  # Module 9: Citizen Health Advisory
│   │   │       ├── MultiCityView.tsx       # Module 10: Multi-City Intelligence
│   │   │       ├── RecommendationsView.tsx # Module 11: Smart City Recommendations
│   │   │       ├── DigitalTwin3D.tsx       # Module 12: 3D Smart City Digital Twin (WOW Factor)
│   │   │       ├── AnalyticsView.tsx       # Module 13: Municipal Ward Analytics
│   │   │       └── SettingsView.tsx        # Command Settings & Seeder Control
│   │   ├── hooks/                 # Custom React Query Hooks (`useAirPulseData.ts`)
│   │   ├── lib/                   # React Query Client & Providers
│   │   ├── services/              # Centralized Axios REST API Layer (`api.ts`)
│   │   └── types/                 # TypeScript Data Contracts (`index.ts`)
│   ├── .env.local                 # NEXT_PUBLIC_API_URL=http://localhost:5000/api
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.js
│
└── backend/                       # Express + TypeScript Server (Port 5000)
    ├── src/
    │   ├── config/                # MongoDB Atlas Connection & In-Memory Fallback (`db.ts`)
    │   ├── agents/                # 6 Specialized Agentic AI Engines
    │   │   ├── aqiForecastAgent.ts          # Predictive neural trajectory modeling
    │   │   ├── pollutionAttributionAgent.ts # Sectoral chemical speciation breakdown
    │   │   ├── hotspotDetectionAgent.ts    # Geospatial risk score clustering
    │   │   ├── enforcementAgent.ts         # Inspector team dispatch strategy
    │   │   ├── healthAdvisoryAgent.ts      # Demographic medical advice generator
    │   │   └── smartCityAgent.ts           # Long-term urban planning interventions
    │   ├── controllers/           # Request Handlers for all 12 API modules
    │   ├── routes/                # Express Route Bindings (`index.ts`)
    │   ├── models/                # 11 Mongoose Schemas (User, City, AQIData, Forecast, Hotspot, PollutionSource, SatelliteData, HealthAdvisory, Recommendation, Alert, Enforcement)
    │   ├── middlewares/           # CORS Configured for http://localhost:3000 & Error Handler
    │   ├── services/              # Multi-City Seed Service (`seedService.ts`)
    │   └── server.ts              # Express Server Entrypoint
    ├── .env                       # PORT=5000, MONGODB_URI, OPENAI_API_KEY, FRONTEND_URL
    ├── package.json
    └── tsconfig.json
```

---

## 🛠 Technology Stack

### Frontend Stack
- **Core Framework**: Next.js 15 (App Router) & TypeScript
- **Styling**: Tailwind CSS & Vanilla CSS Design System Tokens (Dark Mode Glassmorphism)
- **UI Components**: ShadCN UI / Radix primitives + Lucide Icons
- **Animation**: Framer Motion micro-interactions
- **Data Visualization**: Recharts (diurnal cycles, trend curves, pie charts, bar charts)
- **Networking**: Axios (centralized service layer `src/services/api.ts`)
- **State & Data Caching**: React Query (`@tanstack/react-query`)
- **Geospatial Mapping**: Leaflet & React Leaflet (layer overlays, station popups, coordinate pins)
- **3D Graphics & Simulation**: Three.js & `@react-three/fiber` (3D Atmospheric Earth & 3D Smart City Digital Twin)

### Backend Stack
- **Runtime Environment**: Node.js & Express.js with TypeScript
- **Database**: MongoDB Atlas via Mongoose ODM
- **AI Agentic Layer**: OpenAI GPT Models / LangChain Agent Workflows with an intelligent fallback heuristic engine
- **Security & CORS**: Express CORS configured allowing `http://localhost:3000`

---

## 🛰 The 13 Core Modules

### 1. 🏠 Smart Dashboard (`DashboardView.tsx`)
- **Key Indicators**: Current AQI (178), Predicted AQI (205), Active Alerts (3), High Risk Zones (8), Affected Citizens (2.4M), Inspection Required Areas (5), Air Quality Score (42/100), City Health Index (68%).
- **Interactive Trajectory**: Recharts 24-hour, 7-day, and 30-day AQI trend curves.
- **Sectoral Pie Chart**: Source attribution breakdown (Traffic 52%, Construction 22%, Industry 15%, Waste Burning 6%, Domestic 5%).
- **AI Summary Card**: Executive narrative explaining atmospheric boundary inversion and traffic NO2 buildup.

### 2. 🌎 Air Quality Intelligence Map (`IntelligenceMapView.tsx`)
- Full-screen GIS mapping canvas powered by Leaflet.
- **Togglable GIS Layers**:
  - 🔥 AQI Heatmap Plumes
  - 📡 Ground CEMS Monitoring Stations
  - 🚗 Real-time Traffic Corridors
  - 💥 Hotspot Risk Clusters
  - 🛰 Sentinel-5P Satellite NO2 Overlay
- **Interactive Station Popups**: Live telemetry showing PM2.5, PM10, Temperature, Humidity, and Operational Status.

### 3. 📈 AQI Forecasting Engine (`ForecastView.tsx`)
- **Predictive Horizons**: 24-Hour, 48-Hour, 72-Hour, and 7-Day predictions.
- **Confidence Metrics**: Neural model accuracy score (94.2%).
- **AI Explanation Banner**: Explains weather fronts, wind velocity changes, and stubble burning plume arrival times.

### 4. 🏭 Pollution Source Attribution (`AttributionView.tsx`)
- Identifies root causes of pollution:
  - **Traffic Emissions (52%)**: NO2 & PM2.5 (High Risk)
  - **Construction Dust (22%)**: PM10 Fugitive Dust (High Risk)
  - **Industrial Plumes (15%)**: SO2 & Chemical Smog (Medium Risk)
  - **Waste Burning (6%)**: Dioxins & PM2.5 (Medium Risk)
  - **Domestic Sources (5%)**: CO & VOCs (Low Risk)
- Actionable mitigation recommendations per sector.

### 5. 🔥 Pollution Hotspot Detection (`HotspotView.tsx`)
- Vector hotspot map showcasing critical sectors.
- **Inspection Directory Table**: Zone Name, AQI Level, Risk Score (0-100), Priority Level (Critical/High/Medium), and AI Recommended Inspection Directives (e.g., MP Nagar Sector 2, AQI 285, Risk Score 94).

### 6. 🚨 Enforcement Intelligence (`EnforcementView.tsx`)
- AI dispatch engine guiding enforcement teams:
  - Deploy inspection teams to Industrial Area Zone 3 (auditing stack CEMS).
  - Issue construction halt directives in East Sector.
  - Ban heavy BS-III commercial vehicles during peak morning hours.

### 7. 🛰 Satellite Intelligence (`SatelliteView.tsx`)
- Integrates ESA Sentinel-5P TROPOMI & NASA MODIS orbital telemetry:
  - NO2 Column Density (0.00018 mol/m²)
  - SO2 Column Density (0.00004 mol/m²)
  - CO Column Density (0.024 mol/m²)
  - UV Aerosol Index (AI: 2.4)
  - Urban Heat Island (UHI) LST Anomaly (+4.2°C)

### 8. 🤖 AI Copilot (`CopilotView.tsx` & Drawer)
- Interactive conversational interface backed by REST API `POST /api/copilot`.
- Supports prompt shortcuts ("Generate enforcement plan", "Which area needs inspection?", "Predict AQI tomorrow").

### 9. 🏥 Citizen Health Advisory (`HealthAdvisoryView.tsx`)
- Medical guidance tailored for 6 target demographics:
  - **Children**: Cancel outdoor sports & assemblies; run HEPA air purifiers.
  - **Senior Citizens**: Avoid outdoor exposure; wear N95 respirators.
  - **Asthma Patients**: Emergency advisory; avoid exposure between 06:00-10:00.
  - **Pregnant Women**: High risk advisory; protect fetal cardiovascular health.
  - **Outdoor Workers**: Mandate 15-minute hourly rest breaks in filtered shelters.
  - **General Citizens**: Moderate risk guidance; limit strenuous outdoor cardio.

### 10. 🏙 Multi-City Intelligence (`MultiCityView.tsx`)
- Comparative benchmark across 9 Indian and global hubs:
  - **Delhi** (AQI 285), **Mumbai** (AQI 142), **Bhopal** (AQI 178), **Indore** (AQI 115), **Pune** (AQI 98), **Hyderabad** (AQI 132), **Bengaluru** (AQI 68), **Chennai** (AQI 82), **Kolkata** (AQI 210).

### 11. 🌳 Smart City Recommendations (`RecommendationsView.tsx`)
- Proactive structural policy interventions:
  - Short-Term: Dynamic green-wave traffic signal calibration.
  - Medium-Term: Miyawaki urban forest plantation micro-pockets.
  - Long-Term: Mandatory EV commercial freight transit zones.

### 12. 🏙️ 3D Smart City Digital Twin (`DigitalTwin3D.tsx` - WOW Factor)
- **Three.js & React Three Fiber** 3D urban microclimate simulation:
  - 3D Buildings, roads, industrial stacks, trees, and moving vehicles.
  - **Animated Pollution Clouds**: Dynamic opacity & floating particles over industrial stacks.
  - **Color-Coded Risk Zones**: Green (Good), Yellow (Moderate), Red (Unhealthy), Purple (Hazardous).
  - **Interactive Zone Clicks**: Selecting a building or zone displays live AQI metrics, primary cause, and inspection priority.

### 13. 📊 Analytics (`AnalyticsView.tsx`)
- Recharts municipal ward ranking graphs.
- Severity directory ranking top polluted vs cleanest municipal wards.

---

## 🤖 The 6 Backend AI Agents

| Agent Name | File Path | Core Function | REST Endpoint |
| :--- | :--- | :--- | :--- |
| **AQI Forecast Agent** | `backend/src/agents/aqiForecastAgent.ts` | Multi-horizon neural predictive modeling | `GET /api/forecast` |
| **Pollution Attribution Agent** | `backend/src/agents/pollutionAttributionAgent.ts` | Sectoral root-cause chemical breakdown | `GET /api/pollution-sources` |
| **Hotspot Detection Agent** | `backend/src/agents/hotspotDetectionAgent.ts` | Geospatial risk score clustering | `GET /api/hotspots` |
| **Enforcement Agent** | `backend/src/agents/enforcementAgent.ts` | Inspection team dispatch planning | `GET /api/enforcement` |
| **Health Advisory Agent** | `backend/src/agents/healthAdvisoryAgent.ts` | Demographic medical advice generation | `GET /api/advisories` |
| **Smart City Agent** | `backend/src/agents/smartCityAgent.ts` | Structural urban planning interventions | `GET /api/recommendations` |

---

## 🗄 MongoDB Atlas Collections (11 Collections)

1. `users`: Persona accounts and admin preferences.
2. `cities`: Geospatial coordinates, population, and baseline AQI metrics.
3. `aqi_data`: Live CEMS ground sensor telemetry (PM2.5, PM10, NO2, SO2, CO, O3, Temp, Humidity, Wind).
4. `forecasts`: Multi-day predicted AQI trajectories and confidence scores.
5. `hotspots`: Geospatial pollution risk clusters and intensity levels.
6. `pollution_sources`: Sectoral contribution percentages and primary pollutants.
7. `satellite_data`: Sentinel-5P column density telemetry and aerosol indices.
8. `health_advisories`: Demographic medical exposure protocols.
9. `recommendations`: Urban planning policy interventions.
10. `alerts`: Active emergency warnings and region notifications.
11. `enforcement_intelligence`: Patrol team dispatches and construction halt orders.

---

## 🔌 REST API Endpoints Reference

```text
GET  /api/dashboard          -> Unified overview metrics (currentAQI, predictedAQI, hotspots, alerts)
GET  /api/aqi                -> Live and historical AQI ground telemetry
GET  /api/forecast           -> 7-day predictive AI forecast model data
GET  /api/hotspots           -> Geospatial pollution hotspots from MongoDB
GET  /api/pollution-sources  -> Sectoral pollution attribution percentages
GET  /api/satellite          -> Sentinel-5P & MODIS satellite column densities
POST /api/copilot            -> Interactive AI Copilot environmental analysis
GET  /api/advisories         -> Demographic health guidance & N95 alerts
GET  /api/recommendations    -> Urban policy intervention strategies
GET  /api/analytics          -> Ward rankings & 24h diurnal gas breakdown
GET  /api/cities             -> Multi-city comparative metrics (9 cities)
GET  /api/enforcement        -> Inspection team dispatch strategies
POST /api/seed               -> Database reset & seeder endpoint
```

---

## 🔑 Demo Persona Roles (`AuthModal.tsx`)

1. **Administrator**: Full command rights, emergency advisory triggers, system seeder access.
2. **Pollution Control Officer**: Focused on hotspot inspection dispatch, CEMS audits, construction halts.
3. **City Planner**: Focused on 3D Digital Twin simulation, Miyawaki forests, and EV freight zones.

---

## 🚀 Setup & Execution Commands

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x
- MongoDB Atlas (Optional: Backend includes an automated seed dataset fallback if unconfigured)

### Installation
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### Running Concurrently (Recommended)
From the root workspace directory:
```bash
npm run dev
```

### Running Separately

**Backend Server (Port 5000):**
```bash
cd backend
npm run dev
```
Accessible at: `http://localhost:5000/api`

**Frontend Application (Port 3000):**
```bash
cd frontend
npm run dev
```
Accessible at: `http://localhost:3000`

---

## ✅ Build Verification Summary
- **Backend Build (`tsc`)**: Passed cleanly with `0` errors.
- **Frontend Build (`next build`)**: Passed cleanly with `4/4` static pages generated.
- **GitHub Repository**: Pushed to `https://github.com/sumitkumar7766/AirPulse-AI.git`.
