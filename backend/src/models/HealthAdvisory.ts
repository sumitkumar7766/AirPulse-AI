import mongoose, { Schema, Document } from 'mongoose';

export interface IHealthAdvisory extends Document {
  targetGroup: string;
  level: 'Safe' | 'Caution' | 'Warning' | 'Danger';
  recommendations: string[];
  maskRequired: boolean;
  purifierRecommended: boolean;
  outdoorActivities: string;
  createdAt: Date;
}

const HealthAdvisorySchema = new Schema<IHealthAdvisory>({
  targetGroup: { type: String, required: true },
  level: { type: String, enum: ['Safe', 'Caution', 'Warning', 'Danger'], required: true },
  recommendations: [{ type: String, required: true }],
  maskRequired: { type: Boolean, default: false },
  purifierRecommended: { type: Boolean, default: false },
  outdoorActivities: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IHealthAdvisory>('HealthAdvisory', HealthAdvisorySchema, 'health_advisories');
