export const runHealthAdvisoryAgent = async (currentAQI: number) => {
  return [
    { category: 'Children', severity: 'High Risk', guidance: 'Cancel outdoor sports & morning assemblies. Keep indoors with HEPA air purifiers.' },
    { category: 'Senior Citizens', severity: 'Critical Risk', guidance: 'Avoid all outdoor exposure. Wear N95 respirator masks if step outdoor is necessary.' },
    { category: 'Asthma Patients', severity: 'Emergency Risk', guidance: 'Keep rescue inhalers accessible. Avoid peak morning hours (06:00 - 10:00).' },
    { category: 'Pregnant Women', severity: 'High Risk', guidance: 'Minimize exposure to fine particulates (PM2.5) to protect fetal cardiovascular health.' },
    { category: 'Outdoor Workers', severity: 'High Risk', guidance: 'Mandate 15-minute rest breaks inside air-filtered shelters and distribute N95 masks.' },
    { category: 'General Citizens', severity: 'Moderate Risk', guidance: 'Limit prolonged strenuous physical exertion near high-density traffic intersections.' }
  ];
};
