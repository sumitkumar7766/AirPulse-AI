'use client';

import React, { useState } from 'react';
import { MapPin, Flame, AlertTriangle, Layers, Navigation } from 'lucide-react';
import { HotspotRecord } from '../types';

interface HotspotMapProps {
  hotspots?: HotspotRecord[];
}

export const HotspotMap: React.FC<HotspotMapProps> = ({ hotspots = [] }) => {
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotRecord | null>(hotspots[0] || null);

  const displayHotspots = hotspots.length > 0 ? hotspots : [
    { title: 'Anand Vihar Thermal Zone', cityName: 'New Delhi', lat: 28.6502, lng: 77.3150, intensity: 'Severe' as const, aqiValue: 342, primaryCause: 'Stubble Burning & Thermal Emission', radiusKm: 4.5, activeStatus: true },
    { title: 'Ito Junction Corridor', cityName: 'New Delhi', lat: 28.6289, lng: 77.2405, intensity: 'High' as const, aqiValue: 268, primaryCause: 'Vehicular Gridlock Exhaust', radiusKm: 2.8, activeStatus: true },
    { title: 'Tangerang Industrial Corridor', cityName: 'Jakarta', lat: -6.1783, lng: 106.63, intensity: 'Severe' as const, aqiValue: 289, primaryCause: 'Coal Power Plume', radiusKm: 5.2, activeStatus: true },
    { title: 'Port of Long Beach Logistics Bay', cityName: 'Los Angeles', lat: 33.7541, lng: -118.216, intensity: 'Medium' as const, aqiValue: 128, primaryCause: 'Diesel Freight Freight', radiusKm: 3.5, activeStatus: true }
  ];

  const active = selectedHotspot || displayHotspots[0];

  return (
    <div className="w-full rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl shadow-2xl p-6 flex flex-col justify-between">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Geospatial Hotspot Vector Map</h3>
            <p className="text-xs text-gray-400">Live MongoDB Coordinate Feed & Radius Impact</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-950 text-amber-400 border border-amber-800/60">
            {displayHotspots.length} Active Hotspots
          </span>
        </div>
      </div>

      {/* Map Interactive Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Interactive Cluster Selector */}
        <div className="lg:col-span-1 space-y-3 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
          {displayHotspots.map((item, idx) => {
            const isSelected = active.title === item.title;
            return (
              <div
                key={idx}
                onClick={() => setSelectedHotspot(item)}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500/20 via-surface to-surface border-amber-500/60 shadow-lg shadow-amber-500/10'
                    : 'bg-surfaceLight/40 border-surfaceLight/80 hover:bg-surfaceLight/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.cityName}
                  </span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    item.intensity === 'Severe' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  }`}>
                    {item.intensity} ({item.aqiValue} AQI)
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white line-clamp-1">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.primaryCause}</p>
              </div>
            );
          })}
        </div>

        {/* Right: Map Telemetry Showcase Box */}
        <div className="lg:col-span-2 rounded-xl bg-background/90 border border-surfaceLight p-5 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
          
          {/* Simulated Map Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#1f293d_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

          {/* Top telemetry bar */}
          <div className="z-10 flex items-center justify-between">
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-lg border border-surfaceLight">
              <Navigation className="w-3.5 h-3.5 text-cyan-400" />
              LAT: {active.lat.toFixed(4)} | LNG: {active.lng.toFixed(4)}
            </span>
            <span className="text-xs text-emerald-400 flex items-center gap-1 bg-surface/80 px-3 py-1.5 rounded-lg border border-surfaceLight">
              <Layers className="w-3.5 h-3.5" />
              Radius: {active.radiusKm} km Impact Zone
            </span>
          </div>

          {/* Central Animated Radar / Map Marker Focus */}
          <div className="z-10 my-auto flex flex-col items-center justify-center text-center p-6">
            <div className="relative mb-4">
              <div className="w-20 h-20 rounded-full bg-rose-500/20 animate-ping absolute inset-0" />
              <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center relative shadow-2xl shadow-amber-500/40">
                <AlertTriangle className="w-8 h-8 text-amber-400 animate-bounce" />
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-white">{active.title}</h3>
            <p className="text-sm text-gray-300 max-w-md mt-1">{active.primaryCause}</p>
            <div className="flex items-center gap-3 mt-4">
              <div className="px-4 py-1.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 text-sm font-bold">
                AQI Peak: {active.aqiValue}
              </div>
              <div className="px-4 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-sm font-bold">
                Status: {active.activeStatus ? 'ACTIVE MONITORING' : 'RESOLVED'}
              </div>
            </div>
          </div>

          {/* Bottom attribution */}
          <div className="z-10 flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-surfaceLight/60">
            <span>Tile Source: Esri / Sentinel Pollution Mapping</span>
            <span>REST API Endpoint: <code className="text-purple-400 font-mono">/api/hotspots</code></span>
          </div>

        </div>

      </div>

    </div>
  );
};
