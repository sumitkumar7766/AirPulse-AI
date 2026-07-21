'use client';

import React, { useState } from 'react';
import { MetricsOverview } from '../MetricsOverview';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Sparkles, Activity, AlertTriangle, Users, ShieldAlert, CheckCircle, Flame } from 'lucide-react';
import { DashboardData } from '../../types';

interface DashboardViewProps {
  dashboardData?: DashboardData;
  isLoading?: boolean;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ dashboardData, isLoading }) => {
  const [timeframe, setTimeframe] = useState<'24h' | '7d' | '30d'>('7d');

  const sourceData = [
    { name: 'Traffic Emissions', value: 52, color: '#f43f5e' },
    { name: 'Construction Dust', value: 22, color: '#f59e0b' },
    { name: 'Industrial Plumes', value: 15, color: '#a855f7' },
    { name: 'Waste Burning', value: 6, color: '#06b6d4' },
    { name: 'Domestic & Others', value: 5, color: '#10b981' }
  ];

  const trend24h = [
    { label: '00:00', aqi: 145 }, { label: '04:00', aqi: 162 }, { label: '08:00', aqi: 195 },
    { label: '12:00', aqi: 178 }, { label: '16:00', aqi: 165 }, { label: '20:00', aqi: 188 }
  ];

  const trend7d = [
    { label: 'Mon', aqi: 142 }, { label: 'Tue', aqi: 158 }, { label: 'Wed', aqi: 178 },
    { label: 'Thu', aqi: 205 }, { label: 'Fri', aqi: 195 }, { label: 'Sat', aqi: 160 }, { label: 'Sun', aqi: 138 }
  ];

  const trend30d = [
    { label: 'Week 1', aqi: 135 }, { label: 'Week 2', aqi: 165 },
    { label: 'Week 3', aqi: 195 }, { label: 'Week 4', aqi: 178 }
  ];

  const currentTrend = timeframe === '24h' ? trend24h : timeframe === '7d' ? trend7d : trend30d;

  return (
    <div className="space-y-6">
      
      {/* Top AI Decision Summary Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/40 via-surface/90 to-cyan-900/40 border border-purple-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/40 shrink-0">
            <Sparkles className="w-7 h-7 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">AI Executive Decision Summary</span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40">URGENT</span>
            </div>
            <h3 className="text-lg font-extrabold text-white mt-1">
              Bhopal & NCR AQI projected to cross <strong className="text-rose-400">205 (Very Unhealthy)</strong> within 24 hours.
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Stagnant boundary layer meteorology combined with peak traffic NO2 accumulation requires immediate enforcement dispatch to Zone 3.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Metric Cards */}
      <MetricsOverview data={dashboardData} isLoading={isLoading} />

      {/* Additional Hackathon Smart City Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-surface/80 border border-surfaceLight text-center">
          <p className="text-[11px] font-mono text-gray-400 uppercase flex items-center justify-center gap-1">
            <Users className="w-3.5 h-3.5 text-cyan-400" /> Affected Citizens
          </p>
          <p className="text-2xl font-extrabold text-white mt-1">2.4 Million</p>
        </div>
        <div className="p-4 rounded-xl bg-surface/80 border border-surfaceLight text-center">
          <p className="text-[11px] font-mono text-gray-400 uppercase flex items-center justify-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> Inspection Required
          </p>
          <p className="text-2xl font-extrabold text-amber-400 mt-1">5 Critical Sectors</p>
        </div>
        <div className="p-4 rounded-xl bg-surface/80 border border-surfaceLight text-center">
          <p className="text-[11px] font-mono text-gray-400 uppercase flex items-center justify-center gap-1">
            <Activity className="w-3.5 h-3.5 text-rose-400" /> Air Quality Score
          </p>
          <p className="text-2xl font-extrabold text-rose-400 mt-1">42 / 100</p>
        </div>
        <div className="p-4 rounded-xl bg-surface/80 border border-surfaceLight text-center">
          <p className="text-[11px] font-mono text-gray-400 uppercase flex items-center justify-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> City Health Index
          </p>
          <p className="text-2xl font-extrabold text-emerald-400 mt-1">68%</p>
        </div>
      </div>

      {/* Charts Section: Trend Curve + Source Pie Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: AQI Trend Curve */}
        <div className="lg:col-span-2 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Historical & Predicted AQI Trajectory</h3>
              <p className="text-xs text-gray-400">Multi-horizon neural trend curve</p>
            </div>
            <div className="flex items-center gap-1 p-1 rounded-xl bg-surfaceLight/60 border border-surfaceLight text-xs">
              <button
                onClick={() => setTimeframe('24h')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${timeframe === '24h' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
              >
                24 Hours
              </button>
              <button
                onClick={() => setTimeframe('7d')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${timeframe === '7d' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
              >
                7 Days
              </button>
              <button
                onClick={() => setTimeframe('30d')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${timeframe === '30d' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
              >
                30 Days
              </button>
            </div>
          </div>

          <div className="w-full h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentTrend} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="aqiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" />
                <XAxis dataKey="label" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} domain={[0, 250]} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#1f293d', borderRadius: '12px', color: '#fff' }} />
                <Area type="monotone" dataKey="aqi" name="AQI Index" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#aqiGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right 1 Col: Pollution Source Pie Chart */}
        <div className="lg:col-span-1 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl p-6 shadow-2xl space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-400" /> Source Attribution %
            </h3>
            <p className="text-xs text-gray-400">AI Sectoral Pollution Contribution</p>
          </div>

          <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sourceData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#1f293d', borderRadius: '12px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-surfaceLight/60">
            {sourceData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-gray-300">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}
                </span>
                <span className="font-mono font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
