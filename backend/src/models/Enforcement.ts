import mongoose, { Schema, Document } from 'mongoose';

export interface IEnforcement extends Document {
  zoneName: string;
  cityName: string;
  actionType: 'Inspection Dispatch' | 'Construction Halt' | 'Vehicle Restriction' | 'Industrial Emission Audit';
  priority: 'High' | 'Critical' | 'Medium' | 'Low';
  recommendedInspectors: number;
  reason: string;
  status: 'Pending' | 'Dispatched' | 'Resolved';
  createdAt: Date;
}

const EnforcementSchema = new Schema<IEnforcement>({
  zoneName: { type: String, required: true },
  cityName: { type: String, required: true },
  actionType: { type: String, enum: ['Inspection Dispatch', 'Construction Halt', 'Vehicle Restriction', 'Industrial Emission Audit'], required: true },
  priority: { type: String, enum: ['High', 'Critical', 'Medium', 'Low'], required: true },
  recommendedInspectors: { type: Number, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Dispatched', 'Resolved'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IEnforcement>('Enforcement', EnforcementSchema, 'enforcement_intelligence');
