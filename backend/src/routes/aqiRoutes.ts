import { Router } from 'express';
import { getAQIData } from '../controllers/aqiController';

const router = Router();
router.get('/', getAQIData);

export default router;
