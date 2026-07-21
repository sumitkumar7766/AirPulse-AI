'use client';

import React from 'react';
import { Trees, Zap, ArrowRight } from 'lucide-react';

export const RecommendationsView: React.FC = () => {
  const recommendations = [
    { title: 'Traffic Signal Green-Wave Dynamic Calibration', timeframe: 'Short Term (0-3 Months)', impact: '18% Reduction in Idling NO2 Emissions', category: 'Traffic Interventions', cost: 'Low' },
    { title: 'Miyawaki Urban Micro-Forest Plantation Zones', timeframe: 'Medium Term (3-12 Months)', impact: 'Captures ~4.5 Tons of PM2.5 annually', category: 'Green Infrastructure', cost: 'Medium' },
    { title: 'Mandatory EV Commercial Freight Transit Corridor', timeframe: 'Long Term (1-3 Years)', impact: '32% Reduction in Diesel Particulate Plumes', category: 'Clean Mobility', cost: 'High' },
    { title: 'Construction Site Continuous Dust Netting Enclosure', timeframe: 'Immediate Action', impact: '25% Reduction in Fugitive PM10 Dust', category: 'Enforcement Policy', cost: 'Low' }
  ];

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Trees className="w-5 h-5 text-emerald-600" /> Smart City Urban Intervention & Policy Engine
          </h2>
          <p className="text-xs text-slate-500 font-medium">Long-term Proactive Structural Solutions for Urban Pollution Mitigation</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-mono">
          4 PROACTIVE POLICIES READY
        </span>
      </div>

      {/* Recommendations Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
                  {item.category}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500">{item.timeframe}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-3">{item.title}</h3>
              <p className="text-xs text-emerald-700 font-bold mt-2 flex items-center gap-1.5 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                <Zap className="w-4 h-4 text-emerald-600" /> {item.impact}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Estimated Capex: <strong className="text-slate-900 font-bold">{item.cost}</strong></span>
              <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5">
                Adopt Intervention <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
