'use client';

import React from 'react';
import { BarChart3, Award } from 'lucide-react';
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
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-600" /> Municipal Ward Rankings & Pollution Analytics
          </h2>
          <p className="text-xs text-slate-500 font-medium">Statistical Analysis & Top Polluted vs Cleanest Sector Performance</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold font-mono">
          5 WARDS RANKED
        </span>
      </div>

      {/* Recharts Bar Chart */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md space-y-4">
        <h3 className="text-base font-bold text-slate-900">Ward AQI Index Comparison</h3>
        <div className="w-full h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12, fontWeight: 600 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 12, fontWeight: 600 }} />
              <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: '12px', color: '#0F172A', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
              <Bar dataKey="aqi" name="AQI Index" fill="#9333ea" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ward Ranking Table */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-4 h-4 text-blue-600" /> Municipal Ward Severity Directory
        </h3>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase font-mono font-bold">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Municipal Ward</th>
                <th className="py-3 px-4">AQI Index</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Risk Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold">
              {wardRankings.map((r, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-blue-600">#{r.rank}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{r.ward}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-rose-600">{r.aqi} AQI</td>
                  <td className="py-3.5 px-4 text-slate-700">{r.category}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-amber-600">{r.risk} / 100</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
