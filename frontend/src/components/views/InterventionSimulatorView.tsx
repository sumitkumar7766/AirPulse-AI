'use client';

import React, { useState } from 'react';
import { Sliders, Sparkles, TrendingDown, Heart, Users, RefreshCw } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const InterventionSimulatorView: React.FC = () => {
  const [traffic, setTraffic] = useState(20);
  const [construction, setConstruction] = useState(30);
  const [industrial, setIndustrial] = useState(15);
  const [waste, setWaste] = useState(40);
  const [trees, setTrees] = useState(10000);
  const [greenZone, setGreenZone] = useState(15);

  const currentAQI = 280;

  // Real-time calculation formula
  const trafficDelta = traffic * 0.4;
  const constructionDelta = construction * 0.25;
  const industrialDelta = industrial * 0.2;
  const wasteDelta = waste * 0.1;
  const treeDelta = (trees / 1000) * 0.8;
  const greenDelta = greenZone * 0.3;

  const totalReductionPercent = Math.min(65, Math.round(trafficDelta + constructionDelta + industrialDelta + wasteDelta + treeDelta + greenDelta));
  const predictedAQI = Math.max(50, Math.round(currentAQI * (1 - totalReductionPercent / 100)));
  const healthRiskReduction = Math.round(totalReductionPercent * 0.65);
  const affectedPopulationReduction = Math.round(totalReductionPercent * 0.5);

  const chartData = [
    { label: 'Current AQI', aqi: currentAQI, fill: '#EF4444' },
    { label: 'After Intervention', aqi: predictedAQI, fill: '#10B981' }
  ];

  return (
    <div className="space-y-6 text-[#0F172A] font-sans pb-10">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-xl space-y-2 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-2xl bg-white/20 backdrop-blur-md">
            <Sliders className="w-6 h-6 animate-pulse" />
          </span>
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider">
            WINNER USP FEATURE 🧠
          </span>
        </div>
        <h1 className="text-3xl font-black tracking-tight">AI Environmental Intervention Simulator</h1>
        <p className="text-sm font-medium text-blue-100 max-w-2xl leading-relaxed">
          Test policy decisions and green infrastructure expansions in real-time. Predict exact AQI reductions, health risk decreases, and population impact before deploying city capital.
        </p>
      </div>

      {/* Main Grid: Sliders Left (60%) & AI Output Right (40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sliders Input Column */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-6">
          <h2 className="text-lg font-extrabold text-[#0F172A] flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#2563EB]" /> Adjust Policy Parameters
          </h2>

          <div className="space-y-5">
            {/* Slider 1: Traffic */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-extrabold">
                <span className="text-slate-700">Traffic Reduction</span>
                <span className="text-[#2563EB] font-mono">{traffic}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
              />
            </div>

            {/* Slider 2: Construction */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-extrabold">
                <span className="text-slate-700">Construction Dust Control</span>
                <span className="text-[#2563EB] font-mono">{construction}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                value={construction}
                onChange={(e) => setConstruction(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
              />
            </div>

            {/* Slider 3: Industrial */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-extrabold">
                <span className="text-slate-700">Industrial Emission Cut</span>
                <span className="text-[#2563EB] font-mono">{industrial}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={industrial}
                onChange={(e) => setIndustrial(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
              />
            </div>

            {/* Slider 4: Waste Burning */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-extrabold">
                <span className="text-slate-700">Waste Burning Restriction</span>
                <span className="text-[#2563EB] font-mono">{waste}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={waste}
                onChange={(e) => setWaste(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
              />
            </div>

            {/* Slider 5: Trees */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-extrabold">
                <span className="text-slate-700">Tree Plantation Count</span>
                <span className="text-emerald-600 font-mono">{trees.toLocaleString()} Trees</span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={trees}
                onChange={(e) => setTrees(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
            </div>

            {/* Slider 6: Green Zone */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-extrabold">
                <span className="text-slate-700">Green Zone Expansion</span>
                <span className="text-emerald-600 font-mono">{greenZone}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={greenZone}
                onChange={(e) => setGreenZone(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
            </div>
          </div>
        </div>

        {/* AI Output Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Key Impact Metric Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-md text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Current AQI</span>
              <h2 className="text-4xl font-black text-rose-600 mt-1">{currentAQI}</h2>
              <span className="text-[10px] font-bold text-rose-500">Poor (Before)</span>
            </div>

            <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-md text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Predicted AQI</span>
              <h2 className="text-4xl font-black text-emerald-600 mt-1">{predictedAQI}</h2>
              <span className="text-[10px] font-bold text-emerald-600">Moderate (After)</span>
            </div>
          </div>

          {/* 3 Impact Percentage Badges */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-600 flex items-center gap-1.5">
                <TrendingDown className="w-4 h-4 text-emerald-500" /> Pollution Reduction
              </span>
              <span className="text-sm font-black text-emerald-600">{totalReductionPercent}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-600 flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500" /> Health Risk Reduction
              </span>
              <span className="text-sm font-black text-rose-600">{healthRiskReduction}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-600 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#2563EB]" /> Affected Population Cut
              </span>
              <span className="text-sm font-black text-[#2563EB]">{affectedPopulationReduction}%</span>
            </div>
          </div>

          {/* Before vs After Chart */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-2">
            <h3 className="text-xs font-extrabold text-slate-600">Before vs After Intervention Comparison</h3>
            <div className="w-full h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="label" stroke="#64748B" tick={{ fontSize: 10, fontWeight: 700 }} />
                  <YAxis stroke="#64748B" tick={{ fontSize: 10, fontWeight: 700 }} domain={[0, 300]} />
                  <Tooltip contentStyle={{ borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }} />
                  <Bar dataKey="aqi" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Recommendation Banner */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-xs font-medium text-slate-700 space-y-1 shadow-sm">
            <div className="flex items-center gap-1.5 text-[#2563EB] font-extrabold">
              <Sparkles className="w-4 h-4" /> AI Recommendation
            </div>
            <p className="leading-relaxed">
              "Reducing traffic by <strong>{traffic}%</strong> and planting <strong>{trees.toLocaleString()} trees</strong> would generate the highest environmental benefit, reducing AQI from {currentAQI} to {predictedAQI}."
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
