import mongoose, { Schema, Document } from 'mongoose';

export interface ISatelliteData extends Document {
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
  capturedAt: Date;
}

const SatelliteDataSchema = new Schema<ISatelliteData>({
  satelliteName: { type: String, required: true },
  sensor: { type: String, required: true },
  region: { type: String, required: true },
  columnDensity: {
    no2_mol_m2: { type: Number, required: true },
    so2_mol_m2: { type: Number, required: true },
    co_mol_m2: { type: Number, required: true },
    aerosolIndex: { type: Number, required: true }
  },
  cloudFraction: { type: Number, required: true },
  capturedAt: { type: Date, default: Date.now }
});

export default mongoose.model<ISatelliteData>('SatelliteData', SatelliteDataSchema, 'satellite_data');
