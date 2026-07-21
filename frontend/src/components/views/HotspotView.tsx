'use client';

import React from 'react';
import { Flame, AlertTriangle, ShieldAlert } from 'lucide-react';
import { HotspotMap } from '../HotspotMap';
import { HotspotRecord } from '../../types';

interface HotspotViewProps {
  hotspots?: HotspotRecord[];
}

export const HotspotView: React.FC<HotspotViewProps> = ({ hotspots = [] }) => {
  const tableData = [
    { zone: 'MP Nagar Sector 2', city: 'Bhopal', aqi: 285, riskScore: 94, priority: 'High', action: 'Immediate inspection of heavy construction dust & traffic bypass diversion' },
    { zone: 'Industrial Area Zone 3', city: 'Bhopal', aqi: 312, riskScore: 97, priority: 'Critical', action: 'Deploy emission audit team to furnace units & halt unpermitted boiler ops' },
    { zone: 'Anand Vihar Junction', city: 'New Delhi', aqi: 342, riskScore: 98, priority: 'Critical', action: 'Activate high-pressure mist cannons & deploy traffic wardens' },
    { zone: 'East Sector Corridor', city: 'Bhopal', aqi: 215, riskScore: 82, priority: 'Medium', action: 'Inspect unpaved road dust & mandate water sprinkling twice daily' },
    { zone: 'Vijay Nagar Square', city: 'Indore', aqi: 185, riskScore: 74, priority: 'Medium', action: 'Reroute heavy transit vehicles away from commercial center' }
  ];

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-600" /> AI Pollution Hotspot Detection & Risk Ranking
          </h2>
          <p className="text-xs text-slate-500 font-medium">Autonomous Risk Clustering & Inspection Dispatch Priority Table</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 animate-bounce" /> 5 Active Critical Zones
        </span>
      </div>

      {/* Map Component */}
      <HotspotMap hotspots={hotspots} />

      {/* Priority Inspection Table */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-600" /> Actionable Inspection Priority Directory
        </h3>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase font-mono font-bold">
                <th className="py-3 px-4">Zone / Location</th>
                <th className="py-3 px-4">City</th>
                <th className="py-3 px-4">AQI Level</th>
                <th className="py-3 px-4">Risk Score</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">AI Recommended Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">{row.zone}</td>
                  <td className="py-3.5 px-4 text-blue-600 font-mono font-bold">{row.city}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full font-extrabold ${
                      row.aqi > 300 ? 'bg-purple-100 text-purple-700 border border-purple-200' : 'bg-rose-100 text-rose-700 border border-rose-200'
                    }`}>
                      {row.aqi} AQI
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-extrabold text-amber-700">{row.riskScore} / 100</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                      row.priority === 'Critical' ? 'bg-rose-600 text-white' : 'bg-amber-100 text-amber-800 border border-amber-300'
                    }`}>
                      {row.priority}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 max-w-xs line-clamp-2 leading-relaxed">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
