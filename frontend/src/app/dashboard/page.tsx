'use client';

import React from 'react';
import { DashboardView } from '../../components/views/DashboardView';
import { useDashboard } from '../../hooks/useAirPulseData';

export default function DashboardPage() {
  const dashboardQuery = useDashboard();
  return <DashboardView dashboardData={dashboardQuery.data} isLoading={dashboardQuery.isLoading} />;
}
