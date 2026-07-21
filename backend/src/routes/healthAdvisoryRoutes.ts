import { Router } from 'express';
import { getHealthAdvisories } from '../controllers/healthAdvisoryController';

const router = Router();
router.get('/', getHealthAdvisories);

export default router;
