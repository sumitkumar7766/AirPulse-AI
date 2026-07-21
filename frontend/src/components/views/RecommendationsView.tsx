'use client';

import React from 'react';
import { Trees, CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export const RecommendationsView: React.FC = () => {
  const recommendations = [
    { title: 'Traffic Signal Green-Wave Dynamic Calibration', timeframe: 'Short Term (0-3 Months)', impact: '18% Reduction in Idling NO2 Emissions', category: 'Traffic Interventions', cost: 'Low' },
    { title: 'Miyawaki Urban Micro-Forest Plantation Zones', timeframe: 'Medium Term (3-12 Months)', impact: 'Captures ~4.5 Tons of PM2.5 annually', category: 'Green Infrastructure', cost: 'Medium' },
    { title: 'Mandatory EV Commercial Freight Transit Corridor', timeframe: 'Long Term (1-3 Years)', impact: '32% Reduction in Diesel Particulate Plumes', category: 'Clean Mobility', cost: 'High' },
    { title: 'Construction Site Continuous Dust Netting Enclosure', timeframe: 'Immediate Action', impact: '25% Reduction in Fugitive PM10 Dust', category: 'Enforcement Policy', cost: 'Low' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Trees className="w-5 h-5 text-emerald-400" /> Smart City Urban Intervention & Policy Engine
          </h2>
          <p className="text-xs text-gray-400">Long-term Proactive Structural Solutions for Urban Pollution Mitigation</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold font-mono">
          4 PROACTIVE POLICIES READY
        </span>
      </div>

      {/* Recommendations Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight flex flex-col justify-between space-y-4 shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-gray-400">{item.timeframe}</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-3">{item.title}</h3>
              <p className="text-xs text-emerald-400 font-bold mt-2 flex items-center gap-1.5 bg-background/80 p-3 rounded-xl border border-surfaceLight">
                <Zap className="w-4 h-4 text-emerald-400" /> {item.impact}
              </p>
            </div>

            <div className="pt-3 border-t border-surfaceLight/60 flex items-center justify-between text-xs">
              <span className="text-gray-400">Estimated Capex: <strong className="text-white">{item.cost}</strong></span>
              <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-1.5">
                Adopt Intervention <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
