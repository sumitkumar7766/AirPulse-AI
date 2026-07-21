'use client';

import React from 'react';
import { Satellite, Radio, CloudRain } from 'lucide-react';
import { SatelliteRecord } from '../types';

interface SatelliteCardProps {
  satellites?: SatelliteRecord[];
}

export const SatelliteCard: React.FC<SatelliteCardProps> = ({ satellites = [] }) => {
  const sat: SatelliteRecord = satellites[0] || {
    satelliteName: 'Sentinel-5P TROPOMI',
    sensor: 'UV-VIS Spectrometer',
    region: 'Indo-Gangetic Basin',
    columnDensity: { no2_mol_m2: 0.00018, so2_mol_m2: 0.00004, co_mol_m2: 0.024, aerosolIndex: 2.4 },
    cloudFraction: 0.12,
    capturedAt: new Date().toISOString()
  };

  return (
    <div className="w-full rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl shadow-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Satellite className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">ESA Sentinel-5P Satellite Telemetry</h3>
            <p className="text-xs text-gray-400">Total Column Gas Densities & UV Aerosol Index</p>
          </div>
        </div>
        <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60 flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 animate-ping" /> {sat.satelliteName}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-background/80 border border-surfaceLight text-center">
          <p className="text-[11px] font-mono text-gray-400 uppercase">NO2 Column</p>
          <p className="text-xl font-extrabold text-cyan-400 mt-1">{sat.columnDensity.no2_mol_m2} <span className="text-[10px] text-gray-400">mol/m²</span></p>
        </div>

        <div className="p-4 rounded-xl bg-background/80 border border-surfaceLight text-center">
          <p className="text-[11px] font-mono text-gray-400 uppercase">SO2 Column</p>
          <p className="text-xl font-extrabold text-emerald-400 mt-1">{sat.columnDensity.so2_mol_m2} <span className="text-[10px] text-gray-400">mol/m²</span></p>
        </div>

        <div className="p-4 rounded-xl bg-background/80 border border-surfaceLight text-center">
          <p className="text-[11px] font-mono text-gray-400 uppercase">CO Column</p>
          <p className="text-xl font-extrabold text-purple-400 mt-1">{sat.columnDensity.co_mol_m2} <span className="text-[10px] text-gray-400">mol/m²</span></p>
        </div>

        <div className="p-4 rounded-xl bg-background/80 border border-surfaceLight text-center">
          <p className="text-[11px] font-mono text-gray-400 uppercase">UV Aerosol Index</p>
          <p className="text-xl font-extrabold text-amber-400 mt-1">{sat.columnDensity.aerosolIndex} <span className="text-[10px] text-gray-400">Index</span></p>
        </div>
      </div>
    </div>
  );
};
