'use client';

import React, { useState } from 'react';
import { Globe2, MapPin, Activity, ArrowUpRight, TrendingUp } from 'lucide-react';
import { useCities } from '../../hooks/useAirPulseData';

export const MultiCityView: React.FC = () => {
  const citiesQuery = useCities();
  const [selectedCity, setSelectedCity] = useState('Bhopal');

  const defaultCities = [
    { name: 'Delhi', country: 'India', aqi: 285, category: 'Very Unhealthy', mainPollutant: 'PM2.5' },
    { name: 'Mumbai', country: 'India', aqi: 142, category: 'Unhealthy for Sensitive', mainPollutant: 'PM10' },
    { name: 'Bhopal', country: 'India', aqi: 178, category: 'Unhealthy', mainPollutant: 'PM2.5' },
    { name: 'Indore', country: 'India', aqi: 115, category: 'Moderate', mainPollutant: 'PM10' },
    { name: 'Pune', country: 'India', aqi: 98, category: 'Moderate', mainPollutant: 'NO2' },
    { name: 'Hyderabad', country: 'India', aqi: 132, category: 'Moderate', mainPollutant: 'PM2.5' },
    { name: 'Bengaluru', country: 'India', aqi: 68, category: 'Good', mainPollutant: 'O3' },
    { name: 'Chennai', country: 'India', aqi: 82, category: 'Good', mainPollutant: 'PM10' },
    { name: 'Kolkata', country: 'India', aqi: 210, category: 'Very Unhealthy', mainPollutant: 'PM2.5' }
  ];

  const cityList = citiesQuery.data || defaultCities;

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-cyan-400" /> Multi-City Comparative Environmental Intelligence
          </h2>
          <p className="text-xs text-gray-400">Cross-Metropolitan AQI Benchmark & Sectoral Comparison Across 9 Indian Hubs</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-bold font-mono">
          9 CITIES MONITORED
        </span>
      </div>

      {/* Grid of 9 Cities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cityList.map((c, idx) => {
          const isSelected = selectedCity === c.name;
          return (
            <div
              key={idx}
              onClick={() => setSelectedCity(c.name)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-surface/90 border-cyan-400 shadow-xl shadow-cyan-500/20 ring-2 ring-cyan-500/50'
                  : 'bg-surface/70 border-surfaceLight hover:bg-surface/90'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {c.country}
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                  c.aqi > 200 ? 'bg-purple-500/20 text-purple-400 border-purple-500/40' : c.aqi > 150 ? 'bg-rose-500/20 text-rose-400 border-rose-500/40' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                }`}>
                  {c.category}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">{c.name}</h3>
                <div className="flex items-baseline gap-3 mt-1">
                  <h2 className="text-4xl font-extrabold text-white">{c.aqi}</h2>
                  <span className="text-xs text-gray-400">Main: {c.mainPollutant}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-surfaceLight/60 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                <span>Status: Live Telemetry</span>
                <span className="text-cyan-400 flex items-center gap-1">Compare <ArrowUpRight className="w-3 h-3" /></span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
