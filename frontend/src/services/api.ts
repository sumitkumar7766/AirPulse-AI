import axios from 'axios';
import {
  DashboardData,
  AQIRecord,
  HotspotRecord,
  ForecastDay,
  HealthAdvisoryItem,
  SatelliteRecord,
  CopilotResponse,
  AnalyticsData,
  CityRecord,
  PollutionSourceItem,
  EnforcementDispatch
} from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const getDashboardMetrics = async (): Promise<DashboardData> => {
  const response = await apiClient.get<DashboardData>('/dashboard');
  return response.data;
};

export const getAQIData = async (): Promise<AQIRecord[]> => {
  const response = await apiClient.get<AQIRecord[]>('/aqi');
  return response.data;
};

export const getHotspots = async (): Promise<HotspotRecord[]> => {
  const response = await apiClient.get<HotspotRecord[]>('/hotspots');
  return response.data;
};

export const getForecasts = async (): Promise<ForecastDay[]> => {
  const response = await apiClient.get<ForecastDay[]>('/forecast');
  return response.data;
};

export const getHealthAdvisories = async (): Promise<HealthAdvisoryItem[]> => {
  const response = await apiClient.get<HealthAdvisoryItem[]>('/advisories');
  return response.data;
};

export const getSatelliteData = async (): Promise<SatelliteRecord[]> => {
  const response = await apiClient.get<SatelliteRecord[]>('/satellite');
  return response.data;
};

export const getAnalytics = async (): Promise<AnalyticsData> => {
  const response = await apiClient.get<AnalyticsData>('/analytics');
  return response.data;
};

export const getCities = async (): Promise<CityRecord[]> => {
  const response = await apiClient.get<CityRecord[]>('/cities');
  return response.data;
};

export const getPollutionSources = async (city?: string): Promise<{ cityName: string; attribution: PollutionSourceItem[] }> => {
  const response = await apiClient.get<{ cityName: string; attribution: PollutionSourceItem[] }>('/pollution-sources', { params: { city } });
  return response.data;
};

export const getEnforcement = async (city?: string): Promise<{ cityName: string; dispatches: EnforcementDispatch[] }> => {
  const response = await apiClient.get<{ cityName: string; dispatches: EnforcementDispatch[] }>('/enforcement', { params: { city } });
  return response.data;
};

export const askCopilot = async (prompt: string, cityName?: string, currentAQI?: number): Promise<CopilotResponse> => {
  const response = await apiClient.post<CopilotResponse>('/copilot', {
    prompt,
    cityName,
    currentAQI,
  });
  return response.data;
};
