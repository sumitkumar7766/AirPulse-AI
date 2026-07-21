import { Request, Response } from 'express';
import Forecast from '../models/Forecast';
import { isMongoConnected } from '../config/db';
import { initialSeedData } from '../services/seedService';

export const getForecasts = async (req: Request, res: Response) => {
  try {
    if (isMongoConnected) {
      const data = await Forecast.find().sort({ generatedAt: -1 });
      return res.json(data.length > 0 ? data[0].forecasts : initialSeedData.forecasts[0].forecasts);
    }
    return res.json(initialSeedData.forecasts[0].forecasts);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch AQI forecasts' });
  }
};
