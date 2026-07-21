# 🌬️ AirPulse AI – Smart Urban Air Quality Intelligence Platform

> **Palantir Gotham / ArcGIS Intelligence class AI-Powered Decision Platform for Proactive Urban Air Quality Monitoring & Forecasting**

AirPulse AI is a complete full-stack monorepo built for hackathons and smart city command centers. It moves city administrators from reactive pollution monitoring to proactive, AI-driven pollution prevention.

📄 **Full Technical Specification & Architectural Document**: See [PROJECT_DETAILS.md](./PROJECT_DETAILS.md)

---

## 🏛 Architecture Overview

```text
airpulse-ai/
├── frontend/                     # Next.js 15 App Router + Tailwind CSS + Three.js + Leaflet
│   ├── src/
│   │   ├── app/                 # App Router (layout.tsx, page.tsx, globals.css)
│   │   ├── components/          # Sidebar, Header, AuthModal, Globe3D, HotspotMap, AQICharts, AICopilot
│   │   │   └── views/           # 13 Dedicated Module Views
│   │   ├── hooks/               # Custom React Query hooks (useAirPulseData.ts)
│   │   ├── lib/                 # React Query Client & Providers
│   │   ├── services/            # Centralized Axios API service layer (api.ts)
│   │   └── types/               # TypeScript interfaces (index.ts)
│   ├── .env.local               # NEXT_PUBLIC_API_URL=http://localhost:5000/api
│   └── package.json
│
├── backend/                      # Express.js + TypeScript + MongoDB Atlas
│   ├── src/
│   │   ├── config/              # MongoDB connection & fallback dataset mode
│   │   ├── agents/              # 6 AI Agents (Forecast, Attribution, Hotspot, Enforcement, Health, SmartCity)
│   │   ├── controllers/         # REST API Controllers
│   │   ├── routes/              # Express API Routes
│   │   ├── models/              # 11 Mongoose Schemas
│   │   ├── middlewares/         # Express CORS (http://localhost:3000) & Error Handler
│   │   ├── services/            # Multi-City Seed Service
│   │   └── server.ts            # Express entrypoint (Port 5000)
│   ├── .env                     # PORT=5000, MONGODB_URI, OPENAI_API_KEY, FRONTEND_URL
│   └── package.json
│
├── README.md
├── PROJECT_DETAILS.md
├── package.json
└── .gitignore
```

---

## 🚀 The 13 Core Modules

1. **Demo Role Login**: Persona switcher for Administrator, Pollution Control Officer, City Planner.
2. **Module 1: Smart Dashboard**: 8 core indicators, Recharts 24h/7d/30d trend curves, Recharts Source Breakdown pie chart, AI Executive summary card.
3. **Module 2: Air Quality Intelligence Map**: Full-screen GIS map (Leaflet) with togglable layers (Heatmap, Stations, Traffic, Weather, Hotspots, Satellite NO2) and interactive popups.
4. **Module 3: AQI Forecasting Engine**: 24h, 48h, 72h, 7-day predictions with confidence scores (94.2%) and AI explanations.
5. **Module 4: Pollution Source Attribution**: Sectoral chemical speciation (Traffic: 52%, Construction: 22%, Industry: 15%, Waste Burning: 6%, Domestic: 5%).
6. **Module 5: Pollution Hotspot Detection**: Hotspot vector map & Actionable inspection priority table.
7. **Module 6: Enforcement Intelligence**: AI dispatch engine guiding inspector teams, construction halts, and heavy vehicle bans.
8. **Module 7: Satellite Intelligence**: ESA Sentinel-5P TROPOMI & NASA MODIS column gas densities (NO2, SO2, CO, aerosol index, urban heat island LST anomaly).
9. **Module 8: AI Copilot**: Interactive chat assistant powered by REST API `POST /api/copilot` and 6 backend AI agents.
10. **Module 9: Citizen Health Advisory**: Targeted guidance for 6 demographics (Children, Seniors, Asthma Patients, Pregnant Women, Outdoor Workers, General Citizens).
11. **Module 10: Multi-City Intelligence**: Comparative benchmark across 9 Indian hubs (Delhi, Mumbai, Bhopal, Indore, Pune, Hyderabad, Bengaluru, Chennai, Kolkata).
12. **Module 11: Smart City Recommendations**: Proactive structural policy interventions.
13. **Module 12: 3D Smart City Digital Twin (WOW Factor)**: Three.js / React Three Fiber interactive 3D city scene with buildings, roads, industrial stacks, animated pollution clouds, moving vehicles, color-coded Green/Yellow/Red/Purple AQI risk zones, and zone click interactions.
14. **Module 13: Analytics**: Ward rankings & severity directory.

---

## 🤖 Backend 6 AI Agents

1. **AQI Forecast Agent** (`aqiForecastAgent.ts`): Multi-horizon neural predictive trajectory modeling.
2. **Pollution Attribution Agent** (`pollutionAttributionAgent.ts`): Chemical speciation root-cause breakdown.
3. **Hotspot Detection Agent** (`hotspotDetectionAgent.ts`): Geospatial risk score clustering.
4. **Enforcement Agent** (`enforcementAgent.ts`): Inspector team dispatch strategy.
5. **Health Advisory Agent** (`healthAdvisoryAgent.ts`): Demographic medical advice generator.
6. **Smart City Agent** (`smartCityAgent.ts`): Long-term urban planning interventions.

---

## 💻 Quick Start & Commands

```bash
# Install root dependencies
npm install

# Run Frontend (Port 3000) & Backend (Port 5000) Concurrently
npm run dev
```

- **Frontend App**: `http://localhost:3000`
- **Backend REST API**: `http://localhost:5000/api`
