import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getDashboardMetrics,
  getAQIData,
  getHotspots,
  getForecasts,
  getHealthAdvisories,
  getSatelliteData,
  getAnalytics,
  getCities,
  getPollutionSources,
  getEnforcement,
  askCopilot
} from '../services/api';

export const useDashboard = () => {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: getDashboardMetrics,
    refetchInterval: 30000,
  });
};

export const useAQIData = () => {
  return useQuery({
    queryKey: ['aqiData'],
    queryFn: getAQIData,
  });
};

export const useHotspots = () => {
  return useQuery({
    queryKey: ['hotspots'],
    queryFn: getHotspots,
  });
};

export const useForecasts = () => {
  return useQuery({
    queryKey: ['forecasts'],
    queryFn: getForecasts,
  });
};

export const useHealthAdvisories = () => {
  return useQuery({
    queryKey: ['healthAdvisories'],
    queryFn: getHealthAdvisories,
  });
};

export const useSatelliteData = () => {
  return useQuery({
    queryKey: ['satelliteData'],
    queryFn: getSatelliteData,
  });
};

export const useAnalytics = () => {
  return useQuery({
    queryKey: ['analytics'],
    queryFn: getAnalytics,
  });
};

export const useCities = () => {
  return useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
  });
};

export const usePollutionSources = (city?: string) => {
  return useQuery({
    queryKey: ['pollutionSources', city],
    queryFn: () => getPollutionSources(city),
  });
};

export const useEnforcement = (city?: string) => {
  return useQuery({
    queryKey: ['enforcement', city],
    queryFn: () => getEnforcement(city),
  });
};

export const useCopilotMutation = () => {
  return useMutation({
    mutationFn: ({ prompt, cityName, currentAQI }: { prompt: string; cityName?: string; currentAQI?: number }) =>
      askCopilot(prompt, cityName, currentAQI),
  });
};
