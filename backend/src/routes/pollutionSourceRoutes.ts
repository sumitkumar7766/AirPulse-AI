import { Router } from 'express';
import { getPollutionSources } from '../controllers/pollutionSourceController';

const router = Router();
router.get('/', getPollutionSources);

export default router;
