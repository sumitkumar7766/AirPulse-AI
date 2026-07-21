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
    if (val <= 50) return { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/40', label: 'Good' };
    if (val <= 100) return { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/40', label: 'Moderate' };
    if (val <= 150) return { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/40', label: 'Unhealthy for Sensitive' };
    if (val <= 200) return { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/40', label: 'Unhealthy' };
    return { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/40', label: 'Very Unhealthy' };
  };

  const currentBadge = getAQIBadge(currentAQI);
  const predictedBadge = getAQIBadge(predictedAQI);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
      
      {/* 1. Current AQI Card */}
      <MotionDiv
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight backdrop-blur-md shadow-xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-all" />
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentBadge.bg} ${currentBadge.text} ${currentBadge.border}`}>
            {currentBadge.label}
          </span>
        </div>
        <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Current AQI Index</p>
        <div className="flex items-baseline gap-3 mt-1">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">{isLoading ? '---' : currentAQI}</h2>
          <span className="text-xs text-rose-400 font-medium">Live Telemetry</span>
        </div>
      </MotionDiv>

      {/* 2. Predicted AQI Card */}
      <MotionDiv
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight backdrop-blur-md shadow-xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
            <TrendingUp className="w-6 h-6" />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${predictedBadge.bg} ${predictedBadge.text} ${predictedBadge.border}`}>
            {predictedBadge.label}
          </span>
        </div>
        <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Predicted AQI (+24h)</p>
        <div className="flex items-baseline gap-3 mt-1">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">{isLoading ? '---' : predictedAQI}</h2>
          <span className="text-xs text-purple-400 font-medium">+15% Trend</span>
        </div>
      </MotionDiv>

      {/* 3. Hotspots Card */}
      <MotionDiv
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight backdrop-blur-md shadow-xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
            <Flame className="w-6 h-6" />
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold border bg-amber-500/20 text-amber-400 border-amber-500/40">
            Geospatial Clusters
          </span>
        </div>
        <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Active Hotspots</p>
        <div className="flex items-baseline gap-3 mt-1">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">{isLoading ? '---' : hotspotsCount}</h2>
          <span className="text-xs text-amber-400 font-medium">Critical Sectors</span>
        </div>
      </MotionDiv>

      {/* 4. Active Alerts Card */}
      <MotionDiv
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight backdrop-blur-md shadow-xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold border bg-cyan-500/20 text-cyan-400 border-cyan-500/40">
            Emergency System
          </span>
        </div>
        <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Active Advisories</p>
        <div className="flex items-baseline gap-3 mt-1">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">{isLoading ? '---' : alertsCount}</h2>
          <span className="text-xs text-cyan-400 font-medium">Health Advisories</span>
        </div>
      </MotionDiv>

    </div>
  );
};
