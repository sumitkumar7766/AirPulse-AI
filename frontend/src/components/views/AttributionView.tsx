'use client';

import React from 'react';
import { Factory, Car, Construction, Flame, Home, AlertCircle } from 'lucide-react';

export const AttributionView: React.FC = () => {
  const attributions = [
    {
      category: 'Traffic Emissions',
      percentage: 52,
      confidence: 96,
      riskLevel: 'High',
      primaryPollutant: 'NO2 & PM2.5',
      icon: Car,
      color: 'from-rose-500 to-red-600',
      action: 'Restrict heavy commercial diesel transit during peak morning hours (06:00 - 11:00)'
    },
    {
      category: 'Construction Dust',
      percentage: 22,
      confidence: 92,
      riskLevel: 'High',
      primaryPollutant: 'PM10 (Fugitive Dust)',
      icon: Construction,
      color: 'from-amber-500 to-orange-600',
      action: 'Mandate anti-smog guns and 100% green canvas netting on active commercial building sites'
    },
    {
      category: 'Industrial Plumes',
      percentage: 15,
      confidence: 89,
      riskLevel: 'Medium',
      primaryPollutant: 'SO2 & Chemical Smog',
      icon: Factory,
      color: 'from-purple-500 to-indigo-600',
      action: 'Audit Continuous Emission Monitoring Systems (CEMS) in Industrial Sector 3'
    },
    {
      category: 'Waste & Biomass Burning',
      percentage: 6,
      confidence: 84,
      riskLevel: 'Medium',
      primaryPollutant: 'Dioxins & PM2.5',
      icon: Flame,
      color: 'from-cyan-500 to-blue-600',
      action: 'Deploy night municipal patrol teams to landfill borders and illegal burning hotspots'
    },
    {
      category: 'Domestic & Others',
      percentage: 5,
      confidence: 78,
      riskLevel: 'Low',
      primaryPollutant: 'CO & VOCs',
      icon: Home,
      color: 'from-emerald-500 to-teal-600',
      action: 'Promote electric induction cooking and clean fuel subsidies in residential wards'
    }
  ];

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Factory className="w-5 h-5 text-rose-600" /> AI Pollution Source Attribution Engine
          </h2>
          <p className="text-xs text-slate-500 font-medium">Chemical Speciation & Machine Learning Sectoral Root-Cause Identification</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
          Primary Driver: Vehicular Exhaust (52%)
        </span>
      </div>

      {/* Grid of Sectoral Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attributions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-900">{item.percentage}%</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-4">{item.category}</h3>
                <p className="text-xs text-slate-500 font-mono font-semibold mt-0.5">Pollutant: {item.primaryPollutant}</p>

                {/* Progress bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden my-3">
                  <div className={`h-full bg-gradient-to-r ${item.color}`} style={{ width: `${item.percentage}%` }} />
                </div>

                <p className="text-xs text-slate-700 font-medium flex items-start gap-1.5 mt-2 bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed">
                  <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item.action}</span>
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500 font-bold">
                <span>Confidence: <strong className="text-emerald-600">{item.confidence}%</strong></span>
                <span className="text-amber-600">Risk: {item.riskLevel}</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
