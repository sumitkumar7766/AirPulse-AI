'use client';

import React from 'react';
import { Satellite, Radio, CloudRain, Zap } from 'lucide-react';
import { SatelliteCard } from '../SatelliteCard';

export const SatelliteView: React.FC = () => {
  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Satellite className="w-5 h-5 text-blue-600" /> Spaceborne Environmental Satellite Telemetry
          </h2>
          <p className="text-xs text-slate-500 font-medium">ESA Sentinel-5P TROPOMI & NASA MODIS Spectroradiometer Orbital Data</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono">
          ORBITAL OVERPASS: T-14 MIN
        </span>
      </div>

      <SatelliteCard />

      {/* Urban Heat Islands & Atmospheric Column Density Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase">Sentinel-5P NO2 Plume</span>
            <Radio className="w-4 h-4 text-blue-600 animate-ping" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Indo-Gangetic Basin NO2 Plume</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">Total tropospheric NO2 column density measured at 0.00018 mol/m² along high-volume industrial corridors.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-600 uppercase">NASA MODIS Thermal</span>
            <Zap className="w-4 h-4 text-amber-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Urban Heat Island (UHI) Index</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">Land Surface Temperature (LST) anomaly of +4.2°C detected over asphalt concrete logistics yards.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-purple-600 uppercase">Aerosol Optical Depth</span>
            <CloudRain className="w-4 h-4 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">UV Aerosol Index (AI: 2.4)</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">Elevated absorbing aerosol layer indicating transboundary biomass smoke entering the lower atmosphere.</p>
        </div>
      </div>

    </div>
  );
};
