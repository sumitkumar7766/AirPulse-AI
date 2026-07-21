import mongoose, { Schema, Document } from 'mongoose';

export interface IAQIData extends Document {
  cityName: string;
  aqi: number;
  category: 'Good' | 'Moderate' | 'Unhealthy for Sensitive Groups' | 'Unhealthy' | 'Very Unhealthy' | 'Hazardous';
  pollutants: {
    pm25: number;
    pm10: number;
    no2: number;
    so2: number;
    co: number;
    o3: number;
  };
  temperature: number;
  humidity: number;
  windSpeed: number;
  timestamp: Date;
}

const AQIDataSchema = new Schema<IAQIData>({
  cityName: { type: String, required: true },
  aqi: { type: Number, required: true },
  category: { type: String, required: true },
  pollutants: {
    pm25: { type: Number, required: true },
    pm10: { type: Number, required: true },
    no2: { type: Number, required: true },
    so2: { type: Number, required: true },
    co: { type: Number, required: true },
    o3: { type: Number, required: true }
  },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  windSpeed: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IAQIData>('AQIData', AQIDataSchema, 'aqi_data');
