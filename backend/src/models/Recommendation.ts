import mongoose, { Schema, Document } from 'mongoose';

export interface IRecommendation extends Document {
  category: 'Policy' | 'Industrial' | 'Personal' | 'Traffic';
  title: string;
  actionItems: string[];
  expectedImpact: string;
  priority: 'High' | 'Medium' | 'Low';
  createdAt: Date;
}

const RecommendationSchema = new Schema<IRecommendation>({
  category: { type: String, enum: ['Policy', 'Industrial', 'Personal', 'Traffic'], required: true },
  title: { type: String, required: true },
  actionItems: [{ type: String, required: true }],
  expectedImpact: { type: String, required: true },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IRecommendation>('Recommendation', RecommendationSchema, 'recommendations');
