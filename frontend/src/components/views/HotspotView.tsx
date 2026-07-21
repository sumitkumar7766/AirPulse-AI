'use client';

import React from 'react';
import { Flame, AlertTriangle, ShieldAlert, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
    <div className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" /> AI Pollution Hotspot Detection & Risk Ranking
          </h2>
          <p className="text-xs text-gray-400">Autonomous Risk Clustering & Inspection Dispatch Priority Table</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4 animate-bounce" /> 5 Active Critical Zones
        </span>
      </div>

      {/* Map Component */}
      <HotspotMap hotspots={hotspots} />

      {/* Priority Inspection Table */}
      <div className="rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl p-6 shadow-2xl space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-400" /> Actionable Inspection Priority Directory
        </h3>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-surfaceLight text-gray-400 uppercase font-mono">
                <th className="py-3 px-4">Zone / Location</th>
                <th className="py-3 px-4">City</th>
                <th className="py-3 px-4">AQI Level</th>
                <th className="py-3 px-4">Risk Score</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">AI Recommended Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surfaceLight/60">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-surfaceLight/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">{row.zone}</td>
                  <td className="py-3.5 px-4 text-cyan-400 font-mono">{row.city}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full font-bold ${
                      row.aqi > 300 ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    }`}>
                      {row.aqi} AQI
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-amber-400">{row.riskScore} / 100</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                      row.priority === 'Critical' ? 'bg-rose-500 text-white' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}>
                      {row.priority}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-gray-300 max-w-xs line-clamp-2">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
