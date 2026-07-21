import mongoose, { Schema, Document } from 'mongoose';

export interface ICity extends Document {
  name: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  population: number;
  timezone: string;
}

const CitySchema = new Schema<ICity>({
  name: { type: String, required: true },
  country: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  population: { type: Number, required: true },
  timezone: { type: String, default: 'UTC' }
});

export default mongoose.model<ICity>('City', CitySchema, 'cities');
