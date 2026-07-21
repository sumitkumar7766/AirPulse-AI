'use client';

import React from 'react';
import { Satellite, Radio, CloudRain, ShieldCheck, Zap } from 'lucide-react';
import { SatelliteCard } from '../SatelliteCard';

export const SatelliteView: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Satellite className="w-5 h-5 text-cyan-400" /> Spaceborne Environmental Satellite Telemetry
          </h2>
          <p className="text-xs text-gray-400">ESA Sentinel-5P TROPOMI & NASA MODIS Spectroradiometer Orbital Data</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-bold font-mono">
          ORBITAL OVERPASS: T-14 MIN
        </span>
      </div>

      <SatelliteCard />

      {/* Urban Heat Islands & Atmospheric Column Density Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold">Sentinel-5P NO2 Plume</span>
            <Radio className="w-4 h-4 text-cyan-400 animate-ping" />
          </div>
          <h3 className="text-lg font-bold text-white">Indo-Gangetic Basin NO2 Plume</h3>
          <p className="text-xs text-gray-300">Total tropospheric NO2 column density measured at 0.00018 mol/m² along high-volume industrial corridors.</p>
        </div>

        <div className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold">NASA MODIS Thermal</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <h3 className="text-lg font-bold text-white">Urban Heat Island (UHI) Index</h3>
          <p className="text-xs text-gray-300">Land Surface Temperature (LST) anomaly of +4.2°C detected over asphalt concrete logistics yards.</p>
        </div>

        <div className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-purple-400 uppercase font-bold">Aerosol Optical Depth</span>
            <CloudRain className="w-4 h-4 text-purple-400" />
          </div>
          <h3 className="text-lg font-bold text-white">UV Aerosol Index (AI: 2.4)</h3>
          <p className="text-xs text-gray-300">Elevated absorbing aerosol layer indicating transboundary biomass smoke entering the lower atmosphere.</p>
        </div>
      </div>

    </div>
  );
};
