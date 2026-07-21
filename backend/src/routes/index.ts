import { Router } from 'express';
import dashboardRoutes from './dashboardRoutes';
import aqiRoutes from './aqiRoutes';
import forecastRoutes from './forecastRoutes';
import hotspotRoutes from './hotspotRoutes';
import copilotRoutes from './copilotRoutes';
import analyticsRoutes from './analyticsRoutes';
import healthAdvisoryRoutes from './healthAdvisoryRoutes';
import satelliteRoutes from './satelliteRoutes';
import seedRoutes from './seedRoutes';
import cityRoutes from './cityRoutes';
import pollutionSourceRoutes from './pollutionSourceRoutes';
import enforcementRoutes from './enforcementRoutes';
import uspRoutes from './uspRoutes';

const router = Router();

router.use('/dashboard', dashboardRoutes);
router.use('/aqi', aqiRoutes);
router.use('/forecast', forecastRoutes);
router.use('/forecasts', forecastRoutes);
router.use('/hotspots', hotspotRoutes);
router.use('/pollution-sources', pollutionSourceRoutes);
router.use('/satellite', satelliteRoutes);
router.use('/satellite-data', satelliteRoutes);
router.use('/copilot', copilotRoutes);
router.use('/advisories', healthAdvisoryRoutes);
router.use('/health-advisories', healthAdvisoryRoutes);
router.use('/recommendations', analyticsRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/cities', cityRoutes);
router.use('/enforcement', enforcementRoutes);
router.use('/usp', uspRoutes);
router.use('/seed', seedRoutes);

export default router;
