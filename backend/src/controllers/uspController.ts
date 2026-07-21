import { Request, Response } from 'express';

export const simulateIntervention = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      trafficReduction = 20,
      constructionReduction = 30,
      industrialReduction = 15,
      wasteBurningControl = 40,
      treePlantationCount = 10000,
      greenZoneExpansion = 15
    } = req.body;

    const currentAQI = 280;

    // Simulation calculation formula
    const trafficDelta = (trafficReduction * 0.4);
    const constructionDelta = (constructionReduction * 0.25);
    const industrialDelta = (industrialReduction * 0.2);
    const wasteDelta = (wasteBurningControl * 0.1);
    const treeDelta = (treePlantationCount / 1000) * 0.8;
    const greenDelta = (greenZoneExpansion * 0.3);

    const totalReductionPercent = Math.min(65, Math.round(trafficDelta + constructionDelta + industrialDelta + wasteDelta + treeDelta + greenDelta));
    const predictedAQI = Math.max(50, Math.round(currentAQI * (1 - totalReductionPercent / 100)));
    const healthRiskReduction = Math.round(totalReductionPercent * 0.65);
    const affectedPopulationReduction = Math.round(totalReductionPercent * 0.5);

    res.json({
      success: true,
      currentAQI,
      predictedAQI,
      pollutionReductionPercent: totalReductionPercent,
      healthRiskReductionPercent: healthRiskReduction,
      affectedPopulationReductionPercent: affectedPopulationReduction,
      impactScore: Math.min(98, 50 + Math.round(totalReductionPercent * 0.7)),
      costBenefitRatio: '1 : 4.2',
      aiRecommendation: `Reducing traffic by ${trafficReduction}% and planting ${treePlantationCount.toLocaleString()} trees generates the highest environmental benefit with an estimated AQI drop to ${predictedAQI}.`,
      chartBeforeAfter: [
        { label: 'Current AQI', value: currentAQI },
        { label: 'After Intervention', value: predictedAQI }
      ]
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getEnvironmentalScores = async (_req: Request, res: Response): Promise<void> => {
  try {
    const cityScores = [
      { city: 'Bhopal', score: 78, category: 'Good', greenCover: '28%', trafficDensity: 'Moderate', complaints: 14, growthRate: '-4%' },
      { city: 'Indore', score: 72, category: 'Good', greenCover: '24%', trafficDensity: 'Moderate', complaints: 18, growthRate: '-2%' },
      { city: 'Bengaluru', score: 68, category: 'Moderate', greenCover: '22%', trafficDensity: 'High', complaints: 32, growthRate: '+1%' },
      { city: 'Pune', score: 65, category: 'Moderate', greenCover: '20%', trafficDensity: 'Moderate', complaints: 24, growthRate: '0%' },
      { city: 'Mumbai', score: 54, category: 'Moderate', greenCover: '15%', trafficDensity: 'Severe', complaints: 48, growthRate: '+3%' },
      { city: 'Kolkata', score: 48, category: 'Poor', greenCover: '12%', trafficDensity: 'Severe', complaints: 56, growthRate: '+5%' },
      { city: 'Delhi', score: 42, category: 'Critical', greenCover: '10%', trafficDensity: 'Severe', complaints: 92, growthRate: '+8%' }
    ];

    res.json({ success: true, scores: cityScores });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getCitizenComplaints = async (_req: Request, res: Response): Promise<void> => {
  try {
    const complaints = [
      { id: 'CMP-101', issueType: 'Waste Burning', confidence: 94, severity: 'High', location: 'Bhopal Bypass Rd', status: 'AI Verified & Dispatch Pending', image: '/placeholder.jpg', time: '10 mins ago', lat: 23.25, lng: 77.41 },
      { id: 'CMP-102', issueType: 'Factory Smoke', confidence: 91, severity: 'Critical', location: 'Industrial Sector 3', status: 'Inspection Team En-route', image: '/placeholder.jpg', time: '25 mins ago', lat: 23.28, lng: 77.45 },
      { id: 'CMP-103', issueType: 'Construction Dust', confidence: 88, severity: 'Medium', location: 'MP Nagar Zone 2', status: 'Notice Issued', image: '/placeholder.jpg', time: '1 hour ago', lat: 23.23, lng: 77.43 }
    ];

    res.json({ success: true, complaints });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getRiskRadar = async (_req: Request, res: Response): Promise<void> => {
  try {
    res.json({
      success: true,
      riskLevel24h: 'High Risk',
      riskLevel48h: 'Severe Risk',
      riskLevel72h: 'Medium Risk',
      radarMetrics: [
        { metric: 'AQI Index', value: 85 },
        { metric: 'Stagnant Wind', value: 90 },
        { metric: 'Traffic Volume', value: 75 },
        { metric: 'Satellite NO2', value: 80 },
        { metric: 'Industrial Plumes', value: 70 },
        { metric: 'Thermal Inversion', value: 88 }
      ]
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const generateStoryReport = async (req: Request, res: Response): Promise<void> => {
  try {
    const { reportType = 'Today' } = req.query;

    const reportText = `Air quality in MP Nagar deteriorated by 14% due to increased traffic volume and stagnant weather conditions. Immediate traffic management intervention is recommended. High-resolution satellite sensing indicates Sentinel-5P NO2 column accumulation over industrial corridors. Enforcement teams are dispatched to Zone 3.`;

    res.json({
      success: true,
      reportType,
      title: `${reportType} Environmental Intelligence Story`,
      generatedAt: new Date().toISOString(),
      summaryText: reportText,
      keyHighlights: [
        'AQI Spiked to 205 (Very Unhealthy) at 08:00 AM',
        'Vehicular traffic accounted for 52% of total PM2.5 speciation',
        'Stagnant wind speeds (< 4 km/h) trapped boundary inversion layer'
      ]
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
