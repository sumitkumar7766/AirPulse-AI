import { Request, Response } from 'express';
import { getMLSourceAttribution } from '../services/mlService';

export const getPollutionSources = async (req: Request, res: Response) => {
  try {
    const mlAttribution = await getMLSourceAttribution({
      pm25: Number(req.query.pm25) || 120,
      pm10: Number(req.query.pm10) || 185,
      no2: Number(req.query.no2) || 60,
      so2: Number(req.query.so2) || 20,
      co: Number(req.query.co) || 1.8
    });

    return res.json({
      success: true,
      city: req.query.city || 'Bhopal',
      primarySource: mlAttribution.primarySource,
      confidenceScore: mlAttribution.confidenceScore,
      sectoralBreakdown: mlAttribution.sectoralBreakdown,
      modelUsed: mlAttribution.modelUsed || 'Python ML Microservice (FastAPI Port 8000)'
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch ML pollution source attribution' });
  }
};
