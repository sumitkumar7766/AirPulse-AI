import { Router } from 'express';
import { handleCopilotQuery } from '../controllers/copilotController';

const router = Router();
router.post('/', handleCopilotQuery);

export default router;
