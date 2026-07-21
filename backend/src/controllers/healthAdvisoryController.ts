import { Request, Response } from 'express';
import HealthAdvisory from '../models/HealthAdvisory';
import { isMongoConnected } from '../config/db';
import { initialSeedData } from '../services/seedService';

export const getHealthAdvisories = async (req: Request, res: Response) => {
  try {
    if (isMongoConnected) {
      const data = await HealthAdvisory.find();
      return res.json(data);
    }
    return res.json(initialSeedData.healthAdvisories);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch health advisories' });
  }
};
