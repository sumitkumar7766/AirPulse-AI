export type UserRole = 'admin' | 'inspector' | 'planner';

export interface DashboardData {
  currentAQI: number;
  predictedAQI: number;
  hotspots: number;
  alerts: number;
  affectedCitizens?: string;
  inspectionRequiredAreas?: number;
  airQualityScore?: number;
  cityHealthIndex?: number;
  cityName?: string;
  category?: string;
  dominantPollutant?: string;
  updatedAt?: string;
}

export interface AQIPollutants {
  pm25: number;
  pm10: number;
  no2: number;
  so2: number;
  co: number;
  o3: number;
}

export interface AQIRecord {
  cityName: string;
  aqi: number;
  category: string;
  pollutants: AQIPollutants;
  temperature: number;
  humidity: number;
  windSpeed: number;
  timestamp: string;
}

export interface HotspotRecord {
  _id?: string;
  title?: string;
  zone?: string;
  cityName: string;
  lat: number;
  lng: number;
  intensity?: 'Low' | 'Medium' | 'High' | 'Severe' | 'Critical';
  aqiValue?: number;
  aqi?: number;
  riskScore?: number;
  priority?: 'High' | 'Critical' | 'Medium' | 'Low';
  primaryCause?: string;
  recommendedAction?: string;
  radiusKm?: number;
  activeStatus?: boolean;
}

export interface ForecastDay {
  date: string;
  predictedAQI: number;
  minAQI: number;
  maxAQI: number;
  category: string;
  dominantPollutant: string;
  confidence: number;
}

export interface HealthAdvisoryItem {
  targetGroup?: string;
  category?: string;
  level?: 'Safe' | 'Caution' | 'Warning' | 'Danger';
  severity?: string;
  recommendations?: string[];
  guidance?: string;
  maskRequired?: boolean;
  purifierRecommended?: boolean;
  outdoorActivities?: string;
}

export interface SatelliteRecord {
  satelliteName: string;
  sensor: string;
  region: string;
  columnDensity: {
    no2_mol_m2: number;
    so2_mol_m2: number;
    co_mol_m2: number;
    aerosolIndex: number;
  };
  cloudFraction: number;
  capturedAt: string;
}

export interface CopilotResponse {
  success: boolean;
  source: string;
  answer: string;
}

export interface AnalyticsData {
  historical24h: { time: string; aqi: number; pm25: number; pm10: number; no2: number }[];
  pollutantBreakdown: { name: string; value: number; unit: string; status: string }[];
  aiInsights: { title: string; summary: string; impactScore: number; tags: string[] }[];
  recommendations: { category: string; title: string; actionItems: string[]; expectedImpact: string; priority: string }[];
}

export interface CityRecord {
  name: string;
  country: string;
  aqi: number;
  category: string;
  mainPollutant: string;
  coordinates: { lat: number; lng: number };
}

export interface PollutionSourceItem {
  category: string;
  percentage: number;
  confidence: number;
  riskLevel: string;
  primaryPollutant: string;
  action: string;
}

export interface EnforcementDispatch {
  targetZone: string;
  actionRequired: string;
  urgency: string;
  expectedAQIDrop: string;
}
