export const runEnforcementAgent = async (cityName: string) => {
  return {
    cityName,
    dispatches: [
      { targetZone: 'Industrial Area Zone 3', actionRequired: 'Deploy 4 Inspection Teams to verify stack CEMS compliance', urgency: 'Immediate (Critical)', expectedAQIDrop: '12-16% in SO2/PM10' },
      { targetZone: 'East Sector Construction Belt', actionRequired: 'Issue stop-work notice for non-compliant dust suppression', urgency: 'High Priority', expectedAQIDrop: '8-10% in PM10' },
      { targetZone: 'North Bypass Freight Corridor', actionRequired: 'Restrict BS-III diesel trucks between 07:00 and 19:00', urgency: 'High Priority', expectedAQIDrop: '15% in NO2' }
    ]
  };
};
