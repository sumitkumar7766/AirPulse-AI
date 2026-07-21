'use client';

import React from 'react';
import { IntelligenceMapView } from '../../components/views/IntelligenceMapView';
import { useHotspots } from '../../hooks/useAirPulseData';

export default function MapPage() {
  const hotspotsQuery = useHotspots();
  return <IntelligenceMapView hotspots={hotspotsQuery.data} />;
}
