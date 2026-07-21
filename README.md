# AirPulse AI 🌬️🌍

> **Environmental Intelligence & Air Quality Index (AQI) Forecasting Platform**

AirPulse AI is a full-stack monorepo web application designed to monitor, analyze, and forecast air quality metrics globally using real-time atmospheric data, geospatial hotspot tracking, 3D atmospheric globe visualizations, and an intelligent AI Copilot agent.

---

## 🏗 Project Architecture

```text
airpulse-ai/
├── frontend/             # Next.js 15 App Router + Tailwind CSS + Three.js + Leaflet
│   ├── src/
│   │   ├── app/          # Next.js App Router pages
│   │   ├── components/   # UI & Visualization components (3D Globe, Maps, Charts)
│   │   ├── hooks/        # React Query hooks
│   │   ├── lib/          # Utilities
│   │   ├── services/     # Axios API service layer (`api.ts`)
│   │   ├── types/        # TypeScript declarations
│   └── package.json
│
├── backend/              # Node.js + Express + TypeScript + MongoDB
│   ├── src/
│   │   ├── config/       # MongoDB Connection & configuration
│   │   ├── controllers/  # REST API Controllers
│   │   ├── routes/       # Express Route definitions
│   │   ├── models/       # 10 Mongoose Data Models
│   │   ├── middlewares/  # Express middlewares (CORS, Error Handlers)
│   │   ├── services/     # Seed & Data Services
│   │   ├── agents/       # AI Copilot Environmental Specialist Agent
│   │   └── server.ts     # Express entrypoint
│   └── package.json
│
├── README.md
├── package.json
└── .gitignore
```

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x
- MongoDB (Optional: Backend includes seamless mock seed fallback if `MONGODB_URI` is unconfigured)

### Installation

Install root and concurrent tooling:
```bash
npm install
```

Install backend dependencies:
```bash
cd backend
npm install
```

Install frontend dependencies:
```bash
cd ../frontend
npm install
```

---

## 💻 Running the Application

### Option 1: Run Concurrently from Root
```bash
npm run dev
```

### Option 2: Run Separately

**Backend Server (Port 5000):**
```bash
cd backend
npm run dev
```
Backend API will be accessible at: `http://localhost:5000/api`

**Frontend Web App (Port 3000):**
```bash
cd frontend
npm run dev
```
Frontend App will be accessible at: `http://localhost:3000`

---

## 🛰 REST API Endpoints

- `GET /api/dashboard` - Unified overview metrics (Current AQI, Predicted AQI, Hotspots, Active Alerts)
- `GET /api/aqi` - Live and historical AQI telemetry
- `GET /api/forecasts` - 7-day predictive AI forecast model data
- `GET /api/hotspots` - Geospatial pollution hotspots with coordinate mapping
- `POST /api/copilot` - Interactive AI Copilot environmental query analysis
- `GET /api/analytics` - Pollutant gas breakdown (PM2.5, PM10, NO2, O3, CO, SO2)
- `GET /api/health-advisories` - Target population guidance & activity indices
- `GET /api/satellite-data` - Sentinel-5P column density telemetry
- `POST /api/seed` - Database seeder reset/init endpoint

---

## 🔐 Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/airpulse
OPENAI_API_KEY=your-openai-api-key-optional
FRONTEND_URL=http://localhost:3000
```

### Frontend (`frontend/.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```
