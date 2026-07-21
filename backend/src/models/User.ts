import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  role: 'admin' | 'researcher' | 'citizen';
  location: {
    city: string;
    coordinates: [number, number]; // [lng, lat]
  };
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'researcher', 'citizen'], default: 'citizen' },
  location: {
    city: { type: String, default: 'New Delhi' },
    coordinates: { type: [Number], default: [77.209, 28.6139] }
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', UserSchema, 'users');
