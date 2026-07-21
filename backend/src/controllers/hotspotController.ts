import { Request, Response } from 'express';
import Hotspot from '../models/Hotspot';
import { isMongoConnected } from '../config/db';
import { initialSeedData } from '../services/seedService';

export const getHotspots = async (req: Request, res: Response) => {
  try {
    if (isMongoConnected) {
      const data = await Hotspot.find({ activeStatus: true });
      return res.json(data);
    }
    return res.json(initialSeedData.hotspots);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch hotspots' });
  }
};
