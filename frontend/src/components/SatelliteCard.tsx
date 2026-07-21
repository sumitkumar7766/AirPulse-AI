'use client';

import React from 'react';
import { Satellite, Radio } from 'lucide-react';
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
    <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-md p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
            <Satellite className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">ESA Sentinel-5P Satellite Telemetry</h3>
            <p className="text-xs text-slate-500 font-medium">Total Column Gas Densities & UV Aerosol Index</p>
          </div>
        </div>
        <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 animate-ping text-blue-600" /> {sat.satelliteName}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-[11px] font-mono text-slate-500 uppercase font-bold">NO2 Column</p>
          <p className="text-xl font-black text-blue-600 mt-1">{sat.columnDensity.no2_mol_m2} <span className="text-[10px] text-slate-500">mol/m²</span></p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-[11px] font-mono text-slate-500 uppercase font-bold">SO2 Column</p>
          <p className="text-xl font-black text-emerald-600 mt-1">{sat.columnDensity.so2_mol_m2} <span className="text-[10px] text-slate-500">mol/m²</span></p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-[11px] font-mono text-slate-500 uppercase font-bold">CO Column</p>
          <p className="text-xl font-black text-purple-600 mt-1">{sat.columnDensity.co_mol_m2} <span className="text-[10px] text-slate-500">mol/m²</span></p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-[11px] font-mono text-slate-500 uppercase font-bold">UV Aerosol Index</p>
          <p className="text-xl font-black text-amber-600 mt-1">{sat.columnDensity.aerosolIndex} <span className="text-[10px] text-slate-500">Index</span></p>
        </div>
      </div>
    </div>
  );
};
