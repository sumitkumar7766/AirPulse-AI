import { Router } from 'express';
import { seedDatabaseHandler } from '../controllers/seedController';

const router = Router();
router.post('/', seedDatabaseHandler);

export default router;
