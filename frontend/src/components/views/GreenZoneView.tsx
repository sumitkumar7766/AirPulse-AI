'use client';

import React from 'react';
import { Trees, Leaf, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export const GreenZoneView: React.FC = () => {
  const recommendations = [
    { zone: 'East Bhopal Transport Belt', recommendation: 'Miyawaki Dense Urban Forest', trees: 5000, expectedAQIDrop: '8%', score: 94, category: 'Urban Forest' },
    { zone: 'Industrial Sector 3 Buffer Zone', recommendation: 'Green Canopy Buffer Strip', trees: 8000, expectedAQIDrop: '12%', score: 96, category: 'Green Corridor' },
    { zone: 'MP Nagar Traffic Junction', recommendation: 'Vertical Green Wall & Park Expansion', trees: 2500, expectedAQIDrop: '5%', score: 88, category: 'Park Expansion' },
    { zone: 'Kolar Road Residential Corridor', recommendation: 'Street Canopy Plantation', trees: 3500, expectedAQIDrop: '6%', score: 85, category: 'Tree Plantation' }
  ];

  return (
    <div className="space-y-6 text-[#0F172A] font-sans pb-10">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
            <Trees className="w-6 h-6 text-emerald-600" /> AI Green Zone Recommendation Engine
          </h2>
          <p className="text-xs text-slate-500 font-medium">Machine learning identifies high-impact target locations for Miyawaki urban forests, green corridors, and park expansions.</p>
        </div>
        <span className="px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs flex items-center gap-1">
          <Leaf className="w-4 h-4 text-emerald-600" /> 4 HIGH-IMPACT ZONES IDENTIFIED
        </span>
      </div>

      {/* Main Grid: 4 Recommendation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((item, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-extrabold">
                  {item.category}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">Impact Score: {item.score}/100</span>
              </div>

              <h3 className="text-lg font-black text-[#0F172A] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-500" /> {item.zone}
              </h3>

              <p className="text-xs text-slate-600 font-medium bg-slate-50 p-3 rounded-2xl border border-slate-200">
                Recommended Action: <strong>{item.recommendation}</strong> ({item.trees.toLocaleString()} Trees)
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> Expected AQI Improvement: {item.expectedAQIDrop}
              </div>
              <button className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1">
                Approve Zone <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
