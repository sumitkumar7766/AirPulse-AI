import mongoose from 'mongoose';

export let isMongoConnected = false;

export const connectDB = async (): Promise<boolean> => {
  const uri = process.env.MONGODB_URI;
  if (!uri || uri.trim() === '') {
    console.log('⚠️ MONGODB_URI is not provided. Operating with in-memory fallback dataset.');
    isMongoConnected = false;
    return false;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
    isMongoConnected = true;
    return true;
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    console.log('⚠️ Falling back to in-memory dataset mode.');
    isMongoConnected = false;
    return false;
  }
};
