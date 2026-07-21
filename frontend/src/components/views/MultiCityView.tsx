'use client';

import React, { useState } from 'react';
import { Globe2, MapPin, ArrowUpRight } from 'lucide-react';
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
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-blue-600" /> Multi-City Comparative Environmental Intelligence
          </h2>
          <p className="text-xs text-slate-500 font-medium">Cross-Metropolitan AQI Benchmark & Sectoral Comparison Across 9 Indian Hubs</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono">
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
                  ? 'bg-blue-50/80 border-blue-400 shadow-md ring-2 ring-blue-500/40'
                  : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {c.country}
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                  c.aqi > 200 ? 'bg-purple-100 text-purple-700 border-purple-200' : c.aqi > 150 ? 'bg-rose-100 text-rose-700 border-rose-200' : 'bg-emerald-100 text-emerald-700 border-emerald-200'
                }`}>
                  {c.category}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">{c.name}</h3>
                <div className="flex items-baseline gap-3 mt-1">
                  <h2 className="text-4xl font-black text-slate-900">{c.aqi}</h2>
                  <span className="text-xs text-slate-500 font-semibold">Main: {c.mainPollutant}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono font-semibold">
                <span>Status: Live Telemetry</span>
                <span className="text-blue-600 flex items-center gap-1 font-bold">Compare <ArrowUpRight className="w-3 h-3" /></span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
