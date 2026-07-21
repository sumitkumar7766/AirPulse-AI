import os
import sys

# Ensure src/ is in python path
sys.path.append(os.path.join(os.path.dirname(__file__), '../src'))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from predict_engine import (
    predict_aqi_forecast,
    predict_source_attribution,
    predict_health_risk,
    calculate_env_score
)

app = FastAPI(
    title="AirPulse AI Machine Learning Inference Service",
    description="Python ML Microservice exposing AQI Forecasting, Hotspot Detection, Pollution Source Attribution & Health Risk Models.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AQIInput(BaseModel):
    pm25: Optional[float] = 110.0
    pm10: Optional[float] = 180.0
    no2: Optional[float] = 45.0
    so2: Optional[float] = 18.0
    co: Optional[float] = 1.2
    o3: Optional[float] = 35.0
    temperature: Optional[float] = 28.0
    humidity: Optional[float] = 55.0
    wind_speed: Optional[float] = 8.0
    rainfall: Optional[float] = 0.0
    aqi_lag1: Optional[float] = 178.0

class HealthInput(BaseModel):
    aqi: Optional[float] = 178.0
    pm25: Optional[float] = 110.0
    no2: Optional[float] = 45.0

class EnvScoreInput(BaseModel):
    cityName: Optional[str] = "Bhopal"
    aqi: Optional[float] = 178.0
    greenCoverPercent: Optional[float] = 28.0
    trafficDensityScore: Optional[float] = 65.0

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "Python ML Service", "port": 8000}

@app.post("/predict/aqi")
def predict_aqi_endpoint(payload: AQIInput):
    result = predict_aqi_forecast(payload.dict())
    return {"success": True, "data": result}

@app.post("/predict/attribution")
def predict_attribution_endpoint(payload: AQIInput):
    result = predict_source_attribution(payload.dict())
    return {"success": True, "data": result}

@app.post("/predict/health")
def predict_health_endpoint(payload: HealthInput):
    result = predict_health_risk(payload.dict())
    return {"success": True, "data": result}

@app.post("/predict/score")
def calculate_score_endpoint(payload: EnvScoreInput):
    result = calculate_env_score(payload.dict())
    return {"success": True, "data": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
