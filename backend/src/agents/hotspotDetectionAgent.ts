export const runHotspotDetectionAgent = async (cityName: string) => {
  return [
    { zone: 'MP Nagar Sector 2', aqi: 285, riskScore: 94, priority: 'High', recommendedAction: 'Immediate inspection of heavy construction dust & traffic bypass diversion' },
    { zone: 'Industrial Area Zone 3', aqi: 312, riskScore: 97, priority: 'Critical', recommendedAction: 'Deploy emission audit team to furnace units & halt unpermitted boiler ops' },
    { zone: 'Anand Vihar Junction', aqi: 342, riskScore: 98, priority: 'Critical', recommendedAction: 'Activate high-pressure mist cannons & deploy traffic wardens' },
    { zone: 'East Sector Corridor', aqi: 215, riskScore: 82, priority: 'Medium', recommendedAction: 'Inspect unpaved road dust & mandate water sprinkling twice daily' }
  ];
};
