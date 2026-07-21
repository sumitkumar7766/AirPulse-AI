import { Router } from 'express';
import {
  simulateIntervention,
  getEnvironmentalScores,
  getCitizenComplaints,
  getRiskRadar,
  generateStoryReport
} from '../controllers/uspController';

const router = Router();

router.post('/simulate', simulateIntervention);
router.get('/scores', getEnvironmentalScores);
router.get('/complaints', getCitizenComplaints);
router.get('/risk-radar', getRiskRadar);
router.get('/story-report', generateStoryReport);

export default router;
