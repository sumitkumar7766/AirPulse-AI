import { Request, Response } from 'express';
import { getMLAQIForecast } from '../services/mlService';

export const getForecasts = async (req: Request, res: Response) => {
  try {
    const mlPrediction = await getMLAQIForecast({
      pm25: Number(req.query.pm25) || 125,
      pm10: Number(req.query.pm10) || 195,
      no2: Number(req.query.no2) || 52,
      so2: Number(req.query.so2) || 18,
      co: Number(req.query.co) || 1.4,
      aqi_lag1: Number(req.query.aqi) || 178
    });

    return res.json({
      success: true,
      city: req.query.city || 'Bhopal',
      mlPrediction
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch AQI forecasts' });
  }
};
