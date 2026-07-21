'use client';

import React from 'react';
import { Radar, ShieldAlert, Activity, AlertTriangle } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar as RechartsRadar, Tooltip } from 'recharts';

export const RiskRadarView: React.FC = () => {
  const radarData = [
    { metric: 'AQI Index', value: 85 },
    { metric: 'Stagnant Wind', value: 90 },
    { metric: 'Traffic Volume', value: 75 },
    { metric: 'Satellite NO2', value: 80 },
    { metric: 'Industrial Plumes', value: 70 },
    { metric: 'Thermal Inversion', value: 88 }
  ];

  return (
    <div className="space-y-6 text-[#0F172A] font-sans pb-10">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
            <Radar className="w-6 h-6 text-purple-600 animate-spin-slow" /> City-Wide Pollution Risk Radar Engine
          </h2>
          <p className="text-xs text-slate-500 font-medium">Multi-source intelligence combining AQI, Meteorology, Traffic, Satellite NO2 and Boundary Layer Dynamics.</p>
        </div>
        <span className="px-4 py-2 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 font-bold text-xs flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4 text-rose-600 animate-bounce" /> 48h SEVERE RISK ALERT
        </span>
      </div>

      {/* 3 Risk Horizon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 24h Risk */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-2 text-center">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase">24 Hour Horizon</span>
          <h2 className="text-3xl font-black text-rose-600">High Risk</h2>
          <p className="text-xs text-slate-500 font-medium">Predicted AQI: 205 (Very Unhealthy)</p>
        </div>

        {/* 48h Risk */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-2 text-center">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase">48 Hour Horizon</span>
          <h2 className="text-3xl font-black text-purple-600">Severe Risk</h2>
          <p className="text-xs text-slate-500 font-medium">Predicted AQI: 220 (Peak Plume Arrival)</p>
        </div>

        {/* 72h Risk */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-2 text-center">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase">72 Hour Horizon</span>
          <h2 className="text-3xl font-black text-amber-600">Medium Risk</h2>
          <p className="text-xs text-slate-500 font-medium">Predicted AQI: 195 (Wind Dispersion)</p>
        </div>

      </div>

      {/* Main Radar Chart & Risk Gauge Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Radar Chart Column */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4">
          <h3 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-600" /> Multi-Factor Pollution Risk Radar
          </h3>

          <div className="w-full h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#CBD5E1" />
                <PolarAngleAxis dataKey="metric" stroke="#64748B" tick={{ fontSize: 11, fontWeight: 700 }} />
                <PolarRadiusAxis stroke="#64748B" domain={[0, 100]} />
                <RechartsRadar name="Risk Index" dataKey="value" stroke="#9333EA" fill="#9333EA" fillOpacity={0.5} />
                <Tooltip contentStyle={{ borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Breakdown Column */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-500" /> Critical Risk Drivers Breakdown
            </h3>
            
            <div className="space-y-3 pt-3">
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-100 text-xs font-semibold space-y-1">
                <div className="flex justify-between text-rose-700 font-extrabold">
                  <span>Stagnant Wind Velocity</span>
                  <span>90 / 100</span>
                </div>
                <p className="text-slate-600 text-[11px]">Wind speeds below 4 km/h prevent horizontal pollutant dispersion.</p>
              </div>

              <div className="p-3 rounded-2xl bg-purple-50 border border-purple-100 text-xs font-semibold space-y-1">
                <div className="flex justify-between text-purple-700 font-extrabold">
                  <span>Thermal Inversion Layer</span>
                  <span>88 / 100</span>
                </div>
                <p className="text-slate-600 text-[11px]">Morning boundary layer compression trapping ground emissions.</p>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-100 text-xs font-semibold space-y-1">
                <div className="flex justify-between text-amber-700 font-extrabold">
                  <span>Satellite NO2 Accumulation</span>
                  <span>80 / 100</span>
                </div>
                <p className="text-slate-600 text-[11px]">Sentinel-5P UV column density detected over traffic bottlenecks.</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-medium">
            Risk Radar Engine evaluates 12 telemetry parameters every 15 minutes.
          </div>
        </div>

      </div>

    </div>
  );
};
