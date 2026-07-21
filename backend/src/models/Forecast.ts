import mongoose, { Schema, Document } from 'mongoose';

export interface IForecastDay {
  date: string;
  predictedAQI: number;
  minAQI: number;
  maxAQI: number;
  category: string;
  dominantPollutant: string;
  confidence: number;
}

export interface IForecast extends Document {
  cityName: string;
  generatedAt: Date;
  forecasts: IForecastDay[];
}

const ForecastSchema = new Schema<IForecast>({
  cityName: { type: String, required: true },
  generatedAt: { type: Date, default: Date.now },
  forecasts: [
    {
      date: { type: String, required: true },
      predictedAQI: { type: Number, required: true },
      minAQI: { type: Number, required: true },
      maxAQI: { type: Number, required: true },
      category: { type: String, required: true },
      dominantPollutant: { type: String, required: true },
      confidence: { type: Number, required: true }
    }
  ]
});

export default mongoose.model<IForecast>('Forecast', ForecastSchema, 'forecasts');
