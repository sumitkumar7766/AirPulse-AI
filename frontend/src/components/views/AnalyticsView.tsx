'use client';

import React from 'react';
import { BarChart3, TrendingUp, ShieldAlert, Award, Flame } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const AnalyticsView: React.FC = () => {
  const wardRankings = [
    { rank: 1, ward: 'Ward 24 (Industrial Area Zone 3)', aqi: 312, category: 'Hazardous', risk: 97 },
    { rank: 2, ward: 'Ward 12 (MP Nagar Corridor)', aqi: 285, category: 'Very Unhealthy', risk: 94 },
    { rank: 3, ward: 'Ward 08 (Anand Vihar Sector)', aqi: 268, category: 'Very Unhealthy', risk: 91 },
    { rank: 4, ward: 'Ward 19 (East Construction Belt)', aqi: 215, category: 'Unhealthy', risk: 84 },
    { rank: 5, ward: 'Ward 04 (Lake Front Promenade)', aqi: 74, category: 'Good', risk: 22 }
  ];

  const chartData = [
    { name: 'Ward 24', aqi: 312 },
    { name: 'Ward 12', aqi: 285 },
    { name: 'Ward 08', aqi: 268 },
    { name: 'Ward 19', aqi: 215 },
    { name: 'Ward 04', aqi: 74 }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-400" /> Municipal Ward Rankings & Pollution Analytics
          </h2>
          <p className="text-xs text-gray-400">Statistical Analysis & Top Polluted vs Cleanest Sector Performance</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400 text-xs font-bold font-mono">
          5 WARDS RANKED
        </span>
      </div>

      {/* Recharts Bar Chart */}
      <div className="rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl p-6 shadow-2xl space-y-4">
        <h3 className="text-base font-bold text-white">Ward AQI Index Comparison</h3>
        <div className="w-full h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" />
              <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 12 }} />
              <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#1f293d', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="aqi" name="AQI Index" fill="#a855f7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ward Ranking Table */}
      <div className="rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl p-6 shadow-2xl space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Award className="w-4 h-4 text-cyan-400" /> Municipal Ward Severity Directory
        </h3>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-surfaceLight text-gray-400 uppercase font-mono">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Municipal Ward</th>
                <th className="py-3 px-4">AQI Index</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Risk Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surfaceLight/60">
              {wardRankings.map((r, idx) => (
                <tr key={idx} className="hover:bg-surfaceLight/40 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-cyan-400">#{r.rank}</td>
                  <td className="py-3.5 px-4 font-bold text-white">{r.ward}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-rose-400">{r.aqi} AQI</td>
                  <td className="py-3.5 px-4">{r.category}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-amber-400">{r.risk} / 100</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
