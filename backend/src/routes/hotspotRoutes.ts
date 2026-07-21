import { Router } from 'express';
import { getHotspots } from '../controllers/hotspotController';

const router = Router();
router.get('/', getHotspots);

export default router;
