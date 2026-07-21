import { Request, Response } from 'express';
import SatelliteData from '../models/SatelliteData';
import { isMongoConnected } from '../config/db';
import { initialSeedData } from '../services/seedService';

export const getSatelliteData = async (req: Request, res: Response) => {
  try {
    if (isMongoConnected) {
      const data = await SatelliteData.find().sort({ capturedAt: -1 });
      return res.json(data);
    }
    return res.json(initialSeedData.satelliteData);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch satellite telemetry' });
  }
};
