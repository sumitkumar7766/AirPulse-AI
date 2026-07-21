import mongoose, { Schema, Document } from 'mongoose';

export interface IPollutionSource extends Document {
  cityName: string;
  category: 'Traffic' | 'Construction' | 'Industries' | 'Waste Burning' | 'Domestic' | 'Other';
  contributionPercentage: number;
  confidenceScore: number;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  primaryPollutant: string;
  recommendedAction: string;
  timestamp: Date;
}

const PollutionSourceSchema = new Schema<IPollutionSource>({
  cityName: { type: String, required: true },
  category: { type: String, enum: ['Traffic', 'Construction', 'Industries', 'Waste Burning', 'Domestic', 'Other'], required: true },
  contributionPercentage: { type: Number, required: true },
  confidenceScore: { type: Number, required: true },
  riskLevel: { type: String, enum: ['Low', 'Medium', 'High', 'Critical'], required: true },
  primaryPollutant: { type: String, required: true },
  recommendedAction: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IPollutionSource>('PollutionSource', PollutionSourceSchema, 'pollution_sources');
