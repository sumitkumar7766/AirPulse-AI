import mongoose, { Schema, Document } from 'mongoose';

export interface IHotspot extends Document {
  title: string;
  cityName: string;
  lat: number;
  lng: number;
  intensity: 'Low' | 'Medium' | 'High' | 'Severe' | 'Critical';
  aqiValue: number;
  primaryCause: string;
  radiusKm: number;
  activeStatus: boolean;
  detectedAt: Date;
}

const HotspotSchema = new Schema<IHotspot>({
  title: { type: String, required: true },
  cityName: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  intensity: { type: String, enum: ['Low', 'Medium', 'High', 'Severe', 'Critical'], required: true },
  aqiValue: { type: Number, required: true },
  primaryCause: { type: String, required: true },
  radiusKm: { type: Number, required: true },
  activeStatus: { type: Boolean, default: true },
  detectedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IHotspot>('Hotspot', HotspotSchema, 'hotspots');
