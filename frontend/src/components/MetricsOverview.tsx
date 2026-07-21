'use client';

import React from 'react';
import { Sun, Clock, ShieldAlert, Bell, Users, Leaf } from 'lucide-react';
import { DashboardData } from '../types';

interface MetricsOverviewProps {
  data?: DashboardData;
  isLoading?: boolean;
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ data, isLoading }) => {
  const currentAQI = data?.currentAQI ?? 178;
  const predictedAQI = data?.predictedAQI ?? 205;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 my-4">
      
      {/* 1. Current AQI */}
      <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-500">Current AQI</span>
          <div className="p-2 rounded-2xl bg-amber-50 text-amber-500">
            <Sun className="w-4 h-4" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">{isLoading ? '--' : currentAQI}</h2>
          <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-amber-50 text-amber-600 border border-amber-200">
            Moderate
          </span>
        </div>
        {/* Wavy Sparkline SVG */}
        <svg viewBox="0 0 100 20" className="w-full h-4 text-amber-400 stroke-current fill-none stroke-2">
          <path d="M 0 15 Q 25 5, 50 12 T 100 8" />
        </svg>
      </div>

      {/* 2. Predicted AQI (24h) */}
      <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-500">Predicted AQI <span className="text-[9px] text-slate-400">(24h)</span></span>
          <div className="p-2 rounded-2xl bg-rose-50 text-rose-500">
            <Clock className="w-4 h-4" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">{isLoading ? '--' : predictedAQI}</h2>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-rose-50 text-rose-600 border border-rose-200">
              Poor
            </span>
            <span className="text-[10px] font-bold text-rose-500">↗ 15%</span>
          </div>
        </div>
        {/* Wavy Sparkline SVG */}
        <svg viewBox="0 0 100 20" className="w-full h-4 text-rose-400 stroke-current fill-none stroke-2">
          <path d="M 0 18 Q 30 8, 60 14 T 100 4" />
        </svg>
      </div>

      {/* 3. High Risk Zones */}
      <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-500">High Risk Zones</span>
          <div className="p-2 rounded-2xl bg-purple-50 text-purple-500">
            <ShieldAlert className="w-4 h-4" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">08</h2>
          <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-purple-50 text-purple-600 border border-purple-200">
            Zones
          </span>
        </div>
        {/* Wavy Sparkline SVG */}
        <svg viewBox="0 0 100 20" className="w-full h-4 text-purple-400 stroke-current fill-none stroke-2">
          <path d="M 0 12 Q 25 18, 50 8 T 100 10" />
        </svg>
      </div>

      {/* 4. Inspection Alerts */}
      <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-500">Inspection Alerts</span>
          <div className="p-2 rounded-2xl bg-orange-50 text-orange-500">
            <Bell className="w-4 h-4" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">05</h2>
          <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-orange-50 text-orange-600 border border-orange-200">
            Pending
          </span>
        </div>
        {/* Wavy Sparkline SVG */}
        <svg viewBox="0 0 100 20" className="w-full h-4 text-orange-400 stroke-current fill-none stroke-2">
          <path d="M 0 10 Q 30 16, 60 6 T 100 14" />
        </svg>
      </div>

      {/* 5. Affected Citizens */}
      <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-500">Affected Citizens</span>
          <div className="p-2 rounded-2xl bg-emerald-50 text-emerald-500">
            <Users className="w-4 h-4" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">2.4M</h2>
          <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
            People
          </span>
        </div>
        {/* Wavy Sparkline SVG */}
        <svg viewBox="0 0 100 20" className="w-full h-4 text-emerald-400 stroke-current fill-none stroke-2">
          <path d="M 0 16 Q 30 6, 60 14 T 100 8" />
        </svg>
      </div>

      {/* 6. Air Quality Score */}
      <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-500">Air Quality Score</span>
          <div className="p-2 rounded-2xl bg-teal-50 text-teal-500">
            <Leaf className="w-4 h-4" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">62</h2>
          <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-teal-50 text-teal-600 border border-teal-200">
            Good
          </span>
        </div>
        {/* Wavy Sparkline SVG */}
        <svg viewBox="0 0 100 20" className="w-full h-4 text-teal-400 stroke-current fill-none stroke-2">
          <path d="M 0 14 Q 25 4, 50 16 T 100 6" />
        </svg>
      </div>

    </div>
  );
};
