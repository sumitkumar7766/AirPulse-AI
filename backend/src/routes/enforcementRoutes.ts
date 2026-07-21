import { Router } from 'express';
import { getEnforcementIntelligence } from '../controllers/enforcementController';

const router = Router();
router.get('/', getEnforcementIntelligence);

export default router;
