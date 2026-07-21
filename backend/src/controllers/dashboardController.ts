import { Request, Response } from 'express';
import AQIData from '../models/AQIData';
import Forecast from '../models/Forecast';
import Hotspot from '../models/Hotspot';
import Alert from '../models/Alert';
import { isMongoConnected } from '../config/db';
import { initialSeedData } from '../services/seedService';

export const getDashboardData = async (req: Request, res: Response) => {
  try {
    if (isMongoConnected) {
      const latestAQI = await AQIData.findOne().sort({ timestamp: -1 });
      const forecastDoc = await Forecast.findOne();
      const hotspotsCount = await Hotspot.countDocuments({ activeStatus: true });
      const alertsCount = await Alert.countDocuments({ active: true });

      const currentAQI = latestAQI ? latestAQI.aqi : 178;
      const predictedAQI = forecastDoc && forecastDoc.forecasts[1] ? forecastDoc.forecasts[1].predictedAQI : 205;

      return res.json({
        currentAQI,
        predictedAQI,
        hotspots: hotspotsCount || 8,
        alerts: alertsCount || 3,
        cityName: latestAQI?.cityName || 'New Delhi',
        category: latestAQI?.category || 'Unhealthy',
        dominantPollutant: 'PM2.5',
        updatedAt: new Date()
      });
    }

    // Fallback in-memory dataset
    return res.json({
      currentAQI: initialSeedData.dashboard.currentAQI,
      predictedAQI: initialSeedData.dashboard.predictedAQI,
      hotspots: initialSeedData.dashboard.hotspots,
      alerts: initialSeedData.dashboard.alerts,
      cityName: 'New Delhi',
      category: initialSeedData.dashboard.category,
      dominantPollutant: initialSeedData.dashboard.dominantPollutant,
      updatedAt: initialSeedData.dashboard.lastUpdated
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch dashboard metrics' });
  }
};
