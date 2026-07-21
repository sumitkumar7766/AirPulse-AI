import mongoose, { Schema, Document } from 'mongoose';

export interface IAIInsight extends Document {
  title: string;
  summary: string;
  impactScore: number;
  tags: string[];
  generatedAt: Date;
}

const AIInsightSchema = new Schema<IAIInsight>({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  impactScore: { type: Number, required: true },
  tags: [{ type: String }],
  generatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IAIInsight>('AIInsight', AIInsightSchema, 'ai_insights');
