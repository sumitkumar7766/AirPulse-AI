import { Request, Response } from 'express';
import AQIData from '../models/AQIData';
import { isMongoConnected } from '../config/db';
import { initialSeedData } from '../services/seedService';

export const getAQIData = async (req: Request, res: Response) => {
  try {
    if (isMongoConnected) {
      const data = await AQIData.find().sort({ timestamp: -1 });
      return res.json(data);
    }
    return res.json(initialSeedData.aqiData);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch AQI telemetry' });
  }
};
