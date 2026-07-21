import { Router } from 'express';
import { getForecasts } from '../controllers/forecastController';

const router = Router();
router.get('/', getForecasts);

export default router;
