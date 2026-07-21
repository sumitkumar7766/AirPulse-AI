'use client';

import React from 'react';
import { HeartPulse, Baby, UserCheck, Stethoscope, Heart, HardHat, Users } from 'lucide-react';

export const HealthAdvisoryView: React.FC = () => {
  const demographics = [
    { category: 'Children', icon: Baby, risk: 'High Risk', guidance: 'Cancel outdoor sports & morning assemblies. Keep indoors with HEPA air purifiers active.', color: 'from-amber-500 to-orange-600' },
    { category: 'Senior Citizens', icon: UserCheck, risk: 'Critical Risk', guidance: 'Avoid all outdoor exposure. Wear N95 respirator masks if stepping outdoor is mandatory.', color: 'from-rose-500 to-red-600' },
    { category: 'Asthma Patients', icon: Stethoscope, risk: 'Emergency Risk', guidance: 'Keep rescue bronchodilator inhalers accessible. Strictly avoid exposure between 06:00 - 10:00.', color: 'from-purple-500 to-indigo-600' },
    { category: 'Pregnant Women', icon: Heart, risk: 'High Risk', guidance: 'Minimize exposure to fine particulates (PM2.5) to protect fetal cardiovascular health.', color: 'from-pink-500 to-rose-600' },
    { category: 'Outdoor Workers', icon: HardHat, risk: 'High Risk', guidance: 'Mandate 15-minute rest breaks inside air-filtered shelters every hour & distribute N95 masks.', color: 'from-cyan-500 to-blue-600' },
    { category: 'General Citizens', icon: Users, risk: 'Moderate Risk', guidance: 'Limit prolonged strenuous physical exertion near high-density traffic intersections.', color: 'from-emerald-500 to-teal-600' }
  ];

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-emerald-600" /> Citizen Demographic Health Advisory Matrix
          </h2>
          <p className="text-xs text-slate-500 font-medium">AI Medical Protocols & Exposure Guidance per Population Group</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-mono">
          N95 MASK DIRECTIVE ACTIVE
        </span>
      </div>

      {/* 6 Demographics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demographics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 border border-rose-200">
                    {item.risk}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-4">{item.category}</h3>
                <p className="text-xs text-slate-700 font-medium mt-2 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {item.guidance}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500 font-bold">
                <span>N95 Required: <strong className="text-emerald-600">YES</strong></span>
                <span>Indoor HEPA: <strong className="text-purple-600">RECOMMENDED</strong></span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
