'use client';

import React, { useState } from 'react';
import { Swords, Trophy, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const BattleModeView: React.FC = () => {
  const [city1, setCity1] = useState('Bhopal');
  const [city2, setCity2] = useState('Delhi');

  const cityDataMap: Record<string, { aqi: number; score: number; green: string; traffic: string; main: string }> = {
    Bhopal: { aqi: 178, score: 78, green: '28%', traffic: 'Moderate', main: 'PM2.5' },
    Delhi: { aqi: 285, score: 42, green: '10%', traffic: 'Severe', main: 'PM2.5 & NO2' },
    Mumbai: { aqi: 142, score: 54, green: '15%', traffic: 'Severe', main: 'PM10' },
    Indore: { aqi: 115, score: 72, green: '24%', traffic: 'Moderate', main: 'PM10' },
    Pune: { aqi: 98, score: 65, green: '20%', traffic: 'Moderate', main: 'NO2' },
    Bengaluru: { aqi: 68, score: 68, green: '22%', traffic: 'High', main: 'O3' }
  };

  const c1 = cityDataMap[city1] || cityDataMap['Bhopal'];
  const c2 = cityDataMap[city2] || cityDataMap['Delhi'];

  return (
    <div className="space-y-6 text-[#0F172A] font-sans pb-10">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
            <Swords className="w-6 h-6 text-rose-600" /> Smart City Battle Mode & Comparative Benchmark
          </h2>
          <p className="text-xs text-slate-500 font-medium">Head-to-head environmental confrontation comparing AQI, scores, green cover, and policy effectiveness.</p>
        </div>
        <span className="px-4 py-2 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 font-bold text-xs">
          HEAD-TO-HEAD BATTLE MODE
        </span>
      </div>

      {/* City Selectors */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-extrabold text-slate-500 mb-1">Select Challenger 1</label>
          <select
            value={city1}
            onChange={(e) => setCity1(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
          >
            {Object.keys(cityDataMap).map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-extrabold text-slate-500 mb-1">Select Challenger 2</label>
          <select
            value={city2}
            onChange={(e) => setCity2(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
          >
            {Object.keys(cityDataMap).map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Head-to-Head Comparison Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* City 1 Card */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 text-center relative overflow-hidden">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs">
            City Challenger A
          </span>
          <h2 className="text-3xl font-black text-[#0F172A]">{city1}</h2>
          
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Environmental Score</span>
            <h1 className="text-4xl font-black text-emerald-600">{c1.score} <span className="text-xs text-slate-400">/ 100</span></h1>
          </div>

          <div className="space-y-2 text-xs font-semibold text-slate-600 text-left pt-2 border-t border-slate-100">
            <div className="flex justify-between"><span>AQI Index:</span><strong className="text-[#0F172A]">{c1.aqi}</strong></div>
            <div className="flex justify-between"><span>Green Cover:</span><strong className="text-[#0F172A]">{c1.green}</strong></div>
            <div className="flex justify-between"><span>Traffic Density:</span><strong className="text-[#0F172A]">{c1.traffic}</strong></div>
            <div className="flex justify-between"><span>Primary Pollutant:</span><strong className="text-[#0F172A]">{c1.main}</strong></div>
          </div>
        </div>

        {/* VS Badge Center */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-600 to-indigo-600 text-white font-black text-xl flex items-center justify-center shadow-xl shadow-rose-500/30 animate-pulse">
            VS
          </div>
        </div>

        {/* City 2 Card */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 text-center relative overflow-hidden">
          <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 font-bold text-xs">
            City Challenger B
          </span>
          <h2 className="text-3xl font-black text-[#0F172A]">{city2}</h2>
          
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Environmental Score</span>
            <h1 className="text-4xl font-black text-rose-600">{c2.score} <span className="text-xs text-slate-400">/ 100</span></h1>
          </div>

          <div className="space-y-2 text-xs font-semibold text-slate-600 text-left pt-2 border-t border-slate-100">
            <div className="flex justify-between"><span>AQI Index:</span><strong className="text-[#0F172A]">{c2.aqi}</strong></div>
            <div className="flex justify-between"><span>Green Cover:</span><strong className="text-[#0F172A]">{c2.green}</strong></div>
            <div className="flex justify-between"><span>Traffic Density:</span><strong className="text-[#0F172A]">{c2.traffic}</strong></div>
            <div className="flex justify-between"><span>Primary Pollutant:</span><strong className="text-[#0F172A]">{c2.main}</strong></div>
          </div>
        </div>

      </div>

      {/* AI Battle Result Banner */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 border border-blue-200 text-xs font-medium text-slate-700 flex items-center gap-3 shadow-sm">
        <Sparkles className="w-5 h-5 text-[#2563EB] shrink-0 animate-pulse" />
        <span>
          <strong>AI Battle Summary:</strong> "{city1} currently performs <strong>{Math.round(((c1.score - c2.score) / (c2.score || 1)) * 100)}% better</strong> than {city2} in overall environmental health, driven by higher urban green canopy cover."
        </span>
      </div>

    </div>
  );
};
