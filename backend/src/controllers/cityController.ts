import { Request, Response } from 'express';

export const getCities = async (req: Request, res: Response) => {
  const citiesList = [
    { name: 'Delhi', country: 'India', aqi: 285, category: 'Very Unhealthy', mainPollutant: 'PM2.5', coordinates: { lat: 28.6139, lng: 77.2090 } },
    { name: 'Mumbai', country: 'India', aqi: 142, category: 'Unhealthy for Sensitive', mainPollutant: 'PM10', coordinates: { lat: 19.0760, lng: 72.8777 } },
    { name: 'Bhopal', country: 'India', aqi: 178, category: 'Unhealthy', mainPollutant: 'PM2.5', coordinates: { lat: 23.2599, lng: 77.4126 } },
    { name: 'Indore', country: 'India', aqi: 115, category: 'Moderate', mainPollutant: 'PM10', coordinates: { lat: 22.7196, lng: 75.8577 } },
    { name: 'Pune', country: 'India', aqi: 98, category: 'Moderate', mainPollutant: 'NO2', coordinates: { lat: 18.5204, lng: 73.8567 } },
    { name: 'Hyderabad', country: 'India', aqi: 132, category: 'Moderate', mainPollutant: 'PM2.5', coordinates: { lat: 17.3850, lng: 78.4867 } },
    { name: 'Bengaluru', country: 'India', aqi: 68, category: 'Good', mainPollutant: 'O3', coordinates: { lat: 12.9716, lng: 77.5946 } },
    { name: 'Chennai', country: 'India', aqi: 82, category: 'Good', mainPollutant: 'PM10', coordinates: { lat: 13.0827, lng: 80.2707 } },
    { name: 'Kolkata', country: 'India', aqi: 210, category: 'Very Unhealthy', mainPollutant: 'PM2.5', coordinates: { lat: 22.5726, lng: 88.3639 } }
  ];

  return res.json(citiesList);
};
