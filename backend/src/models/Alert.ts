import mongoose, { Schema, Document } from 'mongoose';

export interface IAlert extends Document {
  title: string;
  severity: 'Info' | 'Warning' | 'Hazardous' | 'Emergency';
  region: string;
  message: string;
  active: boolean;
  issuedAt: Date;
}

const AlertSchema = new Schema<IAlert>({
  title: { type: String, required: true },
  severity: { type: String, enum: ['Info', 'Warning', 'Hazardous', 'Emergency'], required: true },
  region: { type: String, required: true },
  message: { type: String, required: true },
  active: { type: Boolean, default: true },
  issuedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IAlert>('Alert', AlertSchema, 'alerts');
