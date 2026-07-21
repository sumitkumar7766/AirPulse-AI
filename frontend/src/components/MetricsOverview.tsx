'use client';

import React from 'react';
import { MotionDiv } from './MotionWrapper';
import { Activity, Flame, ShieldAlert, TrendingUp } from 'lucide-react';
import { DashboardData } from '../types';

interface MetricsOverviewProps {
  data?: DashboardData;
  isLoading?: boolean;
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ data, isLoading }) => {
  const currentAQI = data?.currentAQI ?? 178;
  const predictedAQI = data?.predictedAQI ?? 205;
  const hotspotsCount = data?.hotspots ?? 8;
  const alertsCount = data?.alerts ?? 3;

  const getAQIBadge = (val: number) => {
    if (val <= 50) return { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', label: 'Good' };
    if (val <= 100) return { bg: 'bg-amber-50 text-amber-700 border-amber-200', label: 'Moderate' };
    if (val <= 150) return { bg: 'bg-orange-50 text-orange-700 border-orange-200', label: 'Unhealthy for Sensitive' };
    if (val <= 200) return { bg: 'bg-rose-50 text-rose-700 border-rose-200', label: 'Unhealthy' };
    return { bg: 'bg-purple-50 text-purple-700 border-purple-200', label: 'Very Unhealthy' };
  };

  const currentBadge = getAQIBadge(currentAQI);
  const predictedBadge = getAQIBadge(predictedAQI);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
      
      {/* 1. Current AQI Card */}
      <MotionDiv
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentBadge.bg}`}>
            {currentBadge.label}
          </span>
        </div>
        <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">Current AQI Index</p>
        <div className="flex items-baseline gap-3 mt-1">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">{isLoading ? '---' : currentAQI}</h2>
          <span className="text-xs text-rose-600 font-bold">Live Telemetry</span>
        </div>
      </MotionDiv>

      {/* 2. Predicted AQI Card */}
      <MotionDiv
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
            <TrendingUp className="w-6 h-6" />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${predictedBadge.bg}`}>
            {predictedBadge.label}
          </span>
        </div>
        <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">Predicted AQI (+24h)</p>
        <div className="flex items-baseline gap-3 mt-1">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">{isLoading ? '---' : predictedAQI}</h2>
          <span className="text-xs text-purple-600 font-bold">+15% Trend</span>
        </div>
      </MotionDiv>

      {/* 3. Hotspots Card */}
      <MotionDiv
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
            <Flame className="w-6 h-6" />
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold border bg-amber-50 text-amber-700 border-amber-200">
            Geospatial Clusters
          </span>
        </div>
        <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">Active Hotspots</p>
        <div className="flex items-baseline gap-3 mt-1">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">{isLoading ? '---' : hotspotsCount}</h2>
          <span className="text-xs text-amber-600 font-bold">Critical Sectors</span>
        </div>
      </MotionDiv>

      {/* 4. Active Alerts Card */}
      <MotionDiv
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold border bg-blue-50 text-blue-700 border-blue-200">
            Emergency System
          </span>
        </div>
        <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">Active Advisories</p>
        <div className="flex items-baseline gap-3 mt-1">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">{isLoading ? '---' : alertsCount}</h2>
          <span className="text-xs text-blue-600 font-bold">Health Advisories</span>
        </div>
      </MotionDiv>

    </div>
  );
};
