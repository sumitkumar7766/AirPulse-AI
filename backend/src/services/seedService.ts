import AQIData from '../models/AQIData';
import Hotspot from '../models/Hotspot';
import Forecast from '../models/Forecast';
import HealthAdvisory from '../models/HealthAdvisory';
import SatelliteData from '../models/SatelliteData';
import AIInsight from '../models/AIInsight';
import Recommendation from '../models/Recommendation';
import Alert from '../models/Alert';
import City from '../models/City';
import User from '../models/User';
import { isMongoConnected } from '../config/db';

export const initialSeedData = {
  dashboard: {
    currentAQI: 178,
    predictedAQI: 205,
    hotspots: 8,
    alerts: 3,
    dominantPollutant: 'PM2.5',
    category: 'Unhealthy',
    lastUpdated: new Date().toISOString()
  },
  cities: [
    { name: 'New Delhi', country: 'India', coordinates: { lat: 28.6139, lng: 77.2090 }, population: 32000000 },
    { name: 'Beijing', country: 'China', coordinates: { lat: 39.9042, lng: 116.4074 }, population: 21500000 },
    { name: 'Los Angeles', country: 'USA', coordinates: { lat: 34.0522, lng: -118.2437 }, population: 3900000 },
    { name: 'Jakarta', country: 'Indonesia', coordinates: { lat: -6.2088, lng: 106.8456 }, population: 10500000 },
    { name: 'Cairo', country: 'Egypt', coordinates: { lat: 30.0444, lng: 31.2357 }, population: 9800000 },
    { name: 'London', country: 'UK', coordinates: { lat: 51.5074, lng: -0.1278 }, population: 8900000 }
  ],
  aqiData: [
    {
      cityName: 'New Delhi',
      aqi: 178,
      category: 'Unhealthy',
      pollutants: { pm25: 112, pm10: 185, no2: 45, so2: 12, co: 2.4, o3: 38 },
      temperature: 31,
      humidity: 62,
      windSpeed: 8.5,
      timestamp: new Date()
    },
    {
      cityName: 'Beijing',
      aqi: 142,
      category: 'Unhealthy for Sensitive Groups',
      pollutants: { pm25: 68, pm10: 120, no2: 38, so2: 9, co: 1.8, o3: 52 },
      temperature: 24,
      humidity: 55,
      windSpeed: 11.2,
      timestamp: new Date()
    },
    {
      cityName: 'Los Angeles',
      aqi: 74,
      category: 'Moderate',
      pollutants: { pm25: 22, pm10: 45, no2: 24, so2: 4, co: 0.9, o3: 61 },
      temperature: 22,
      humidity: 68,
      windSpeed: 14.0,
      timestamp: new Date()
    }
  ],
  hotspots: [
    { title: 'Anand Vihar Thermal & Industrial Zone', cityName: 'New Delhi', lat: 28.6502, lng: 77.3150, intensity: 'Severe', aqiValue: 342, primaryCause: 'Stubble Burning & Heavy Biomass Combustion', radiusKm: 4.5, activeStatus: true },
    { title: 'Ito Junction Traffic Corridor', cityName: 'New Delhi', lat: 28.6289, lng: 77.2405, intensity: 'High', aqiValue: 268, primaryCause: 'Vehicular Gridlock Exhaust', radiusKm: 2.8, activeStatus: true },
    { title: 'Fengtai Heavy Industrial Hub', cityName: 'Beijing', lat: 39.8585, lng: 116.2863, intensity: 'High', aqiValue: 215, primaryCause: 'Manufacturing & Power Emissions', radiusKm: 6.0, activeStatus: true },
    { title: 'Port of Long Beach Logistics Bay', cityName: 'Los Angeles', lat: 33.75418, lng: -118.216, intensity: 'Medium', aqiValue: 128, primaryCause: 'Diesel Freighter Container Transit', radiusKm: 3.5, activeStatus: true },
    { title: 'Tangerang Thermal Corridor', cityName: 'Jakarta', lat: -6.1783, lng: 106.63, intensity: 'Severe', aqiValue: 289, primaryCause: 'Coal Power Plant Plume', radiusKm: 5.2, activeStatus: true }
  ],
  forecasts: [
    {
      cityName: 'New Delhi',
      generatedAt: new Date(),
      forecasts: [
        { date: 'Today', predictedAQI: 178, minAQI: 165, maxAQI: 190, category: 'Unhealthy', dominantPollutant: 'PM2.5', confidence: 94 },
        { date: 'Tomorrow', predictedAQI: 205, minAQI: 190, maxAQI: 225, category: 'Very Unhealthy', dominantPollutant: 'PM2.5', confidence: 91 },
        { date: '+2 Days', predictedAQI: 220, minAQI: 200, maxAQI: 245, category: 'Very Unhealthy', dominantPollutant: 'PM2.5', confidence: 88 },
        { date: '+3 Days', predictedAQI: 195, minAQI: 175, maxAQI: 210, category: 'Unhealthy', dominantPollutant: 'PM2.5', confidence: 85 },
        { date: '+4 Days', predictedAQI: 160, minAQI: 145, maxAQI: 178, category: 'Unhealthy', dominantPollutant: 'PM10', confidence: 82 },
        { date: '+5 Days', predictedAQI: 138, minAQI: 120, maxAQI: 155, category: 'Unhealthy for Sensitive Groups', dominantPollutant: 'NO2', confidence: 79 },
        { date: '+6 Days', predictedAQI: 115, minAQI: 95, maxAQI: 130, category: 'Moderate', dominantPollutant: 'NO2', confidence: 75 }
      ]
    }
  ],
  healthAdvisories: [
    {
      targetGroup: 'General Public',
      level: 'Warning',
      recommendations: [
        'Limit prolonged or strenuous outdoor exertion',
        'Keep windows closed during early morning peak stagnation',
        'Wear N95 masks when venturing outdoors near traffic corridors'
      ],
      maskRequired: true,
      purifierRecommended: true,
      outdoorActivities: 'Restricted to indoor facilities with HEPA filtration'
    },
    {
      targetGroup: 'Asthmatics & Elderly',
      level: 'Danger',
      recommendations: [
        'Avoid all outdoor physical activity',
        'Keep inhalers and emergency medication accessible',
        'Operate indoor air purifiers at maximum airflow'
      ],
      maskRequired: true,
      purifierRecommended: true,
      outdoorActivities: 'Strictly avoid outdoor exposure'
    }
  ],
  satelliteData: [
    {
      satelliteName: 'Sentinel-5P TROPOMI',
      sensor: 'UV-VIS Spectrometer',
      region: 'Indo-Gangetic Plain',
      columnDensity: { no2_mol_m2: 0.00018, so2_mol_m2: 0.00004, co_mol_m2: 0.024, aerosolIndex: 2.4 },
      cloudFraction: 0.12,
      capturedAt: new Date()
    }
  ],
  aiInsights: [
    {
      title: 'Stubble Burning Plume Arrival',
      summary: 'High-resolution Sentinel-5P infrared data confirms agricultural biomass fire smoke entering the northern corridor, expected to increase PM2.5 by 18% over the next 36 hours.',
      impactScore: 8.7,
      tags: ['Agriculture', 'Transboundary Pollution', 'PM2.5']
    },
    {
      title: 'Boundary Layer Inversion Alert',
      summary: 'Thermal inversion layer dropping to 350 meters tonight will trap ground-level industrial emissions.',
      impactScore: 9.1,
      tags: ['Meteorology', 'Stagnation', 'NO2']
    }
  ],
  recommendations: [
    {
      category: 'Policy',
      title: 'Implement GRAP Stage III Traffic Restrictions',
      actionItems: ['Ban non-essential BS-III petrol & BS-IV diesel heavy commercial vehicles', 'Boost public metro frequency by 25%'],
      expectedImpact: '14-18% reduction in peak NO2 levels',
      priority: 'High'
    },
    {
      category: 'Personal',
      title: 'HEPA Indoor Air Filtration Protocol',
      actionItems: ['Run True-HEPA purifiers in living quarters', 'Use damp microfiber cloths for indoor dust control'],
      expectedImpact: 'Up to 90% reduction in indoor PM2.5',
      priority: 'High'
    }
  ],
  alerts: [
    {
      title: 'Severe Smog Warning',
      severity: 'Hazardous',
      region: 'NCR & Border Districts',
      message: 'Air Quality Index forecasted to cross 200 (Very Unhealthy) by tomorrow morning. Sensitive individuals should take immediate precautions.',
      active: true,
      issuedAt: new Date()
    },
    {
      title: 'Thermal Inversion Trap',
      severity: 'Warning',
      region: 'Northern Valley Sector',
      message: 'Low wind velocity (< 5 km/h) causing accumulation of vehicular pollutants.',
      active: true,
      issuedAt: new Date()
    }
  ]
};

export const seedDatabase = async () => {
  if (!isMongoConnected) return;

  try {
    const existingAQI = await AQIData.countDocuments();
    if (existingAQI === 0) {
      console.log('🌱 Seeding MongoDB collections with initial data...');
      await City.insertMany(initialSeedData.cities);
      await AQIData.insertMany(initialSeedData.aqiData);
      await Hotspot.insertMany(initialSeedData.hotspots);
      await Forecast.insertMany(initialSeedData.forecasts);
      await HealthAdvisory.insertMany(initialSeedData.healthAdvisories);
      await SatelliteData.insertMany(initialSeedData.satelliteData);
      await AIInsight.insertMany(initialSeedData.aiInsights);
      await Recommendation.insertMany(initialSeedData.recommendations);
      await Alert.insertMany(initialSeedData.alerts);
      console.log('✅ MongoDB collections seeded successfully!');
    }
  } catch (error) {
    console.error('❌ Failed to seed database:', error);
  }
};
