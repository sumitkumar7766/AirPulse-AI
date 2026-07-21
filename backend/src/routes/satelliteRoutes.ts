import { Router } from 'express';
import { getSatelliteData } from '../controllers/satelliteController';

const router = Router();
router.get('/', getSatelliteData);

export default router;
