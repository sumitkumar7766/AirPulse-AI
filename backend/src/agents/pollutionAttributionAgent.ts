export const runPollutionAttributionAgent = async (cityName: string) => {
  return {
    cityName,
    attribution: [
      { category: 'Traffic', percentage: 52, confidence: 96, riskLevel: 'High', primaryPollutant: 'NO2 & PM2.5', action: 'Restrict heavy commercial diesel transit during 06:00-11:00 peak hours' },
      { category: 'Construction', percentage: 22, confidence: 92, riskLevel: 'High', primaryPollutant: 'PM10 (Fugitive Dust)', action: 'Mandate anti-smog guns & green netting canvas on all active sites' },
      { category: 'Industries', percentage: 15, confidence: 89, riskLevel: 'Medium', primaryPollutant: 'SO2 & Chemical Smog', action: 'Audit continuous emission monitoring systems (CEMS) in Zone 3' },
      { category: 'Waste Burning', percentage: 6, confidence: 84, riskLevel: 'Medium', primaryPollutant: 'Dioxins & PM2.5', action: 'Deploy night municipal patrol teams to landfill borders' },
      { category: 'Domestic & Others', percentage: 5, confidence: 78, riskLevel: 'Low', primaryPollutant: 'CO', action: 'Promote electric induction cooking adoption' }
    ]
  };
};
