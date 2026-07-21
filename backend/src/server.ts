import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes';
import { connectDB } from './config/db';
import { seedDatabase } from './services/seedService';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
let PORT = Number(process.env.PORT) || 5001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// CORS configuration
app.use(
  cors({
    origin: [FRONTEND_URL, 'http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'AirPulse AI Backend API', timestamp: new Date() });
});

// API Routes
app.use('/api', apiRoutes);

// Error Handling Middleware
app.use(errorHandler);

const listenOnPort = (portToTry: number) => {
  const server = app.listen(portToTry, () => {
    console.log(`🚀 AirPulse AI Backend running on http://localhost:${portToTry}`);
    console.log(`🔗 CORS configured to allow requests from: ${FRONTEND_URL}`);
  });

  server.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${portToTry} is in use (e.g. macOS AirPlay). Trying alternative port ${portToTry + 1}...`);
      listenOnPort(portToTry + 1);
    } else {
      console.error('❌ Server error:', err);
    }
  });
};

const startServer = async () => {
  await connectDB();
  await seedDatabase();
  listenOnPort(PORT);
};

startServer();
