import { Request, Response } from 'express';
import { initialSeedData } from '../services/seedService';

export const getAnalytics = async (req: Request, res: Response) => {
  try {
    const historical24h = [
      { time: '00:00', aqi: 145, pm25: 88, pm10: 140, no2: 32 },
      { time: '03:00', aqi: 152, pm25: 92, pm10: 148, no2: 30 },
      { time: '06:00', aqi: 188, pm25: 122, pm10: 195, no2: 52 },
      { time: '09:00', aqi: 192, pm25: 128, pm10: 205, no2: 60 },
      { time: '12:00', aqi: 178, pm25: 112, pm10: 185, no2: 45 },
      { time: '15:00', aqi: 164, pm25: 98, pm10: 165, no2: 40 },
      { time: '18:00', aqi: 182, pm25: 115, pm10: 188, no2: 55 },
      { time: '21:00', aqi: 195, pm25: 130, pm10: 210, no2: 58 }
    ];

    const pollutantBreakdown = [
      { name: 'PM2.5', value: 45, unit: 'µg/m³', status: 'Unhealthy' },
      { name: 'PM10', value: 30, unit: 'µg/m³', status: 'Moderate' },
      { name: 'NO2', value: 15, unit: 'ppb', status: 'Good' },
      { name: 'O3', value: 6, unit: 'ppb', status: 'Good' },
      { name: 'SO2', value: 3, unit: 'ppb', status: 'Good' },
      { name: 'CO', value: 1, unit: 'ppm', status: 'Good' }
    ];

    return res.json({
      historical24h,
      pollutantBreakdown,
      aiInsights: initialSeedData.aiInsights,
      recommendations: initialSeedData.recommendations
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch analytics' });
  }
};
