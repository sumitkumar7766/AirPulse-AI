'use client';

import React from 'react';
import { HotspotView } from '../../components/views/HotspotView';
import { useHotspots } from '../../hooks/useAirPulseData';

export default function HotspotsPage() {
  const hotspotsQuery = useHotspots();
  return <HotspotView hotspots={hotspotsQuery.data} />;
}
