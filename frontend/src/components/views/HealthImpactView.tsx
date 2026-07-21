'use client';

import React from 'react';
import { HeartPulse, Activity, AlertTriangle, Users, Stethoscope, Baby, UserCheck } from 'lucide-react';

export const HealthImpactView: React.FC = () => {
  const demographics = [
    { title: 'Children Exposure Risk', level: 'High Risk', score: '78%', advice: 'Cancel outdoor assemblies & sports. Mandate HEPA filtration in classrooms.', icon: Baby, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { title: 'Senior Citizen Risk', level: 'Critical Risk', score: '92%', advice: 'Strict outdoor quarantine for age 65+ during morning temperature inversion.', icon: UserCheck, color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { title: 'Asthma Patients Load', level: 'Emergency Level', score: '95%', advice: 'Distribute bronchodilators to primary healthcare centers in Zone 3.', icon: Stethoscope, color: 'text-purple-600 bg-purple-50 border-purple-200' },
    { title: 'Outdoor Worker Impact', level: 'High Risk', score: '82%', advice: 'Mandate 15-minute indoor rest breaks every hour with N95 mask distribution.', icon: Users, color: 'text-blue-600 bg-blue-50 border-blue-200' }
  ];

  return (
    <div className="space-y-6 text-[#0F172A] font-sans pb-10">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-rose-500" /> AI Health Impact Analyzer & Hospital Load Estimator
          </h2>
          <p className="text-xs text-slate-500 font-medium">Predicts physiological impact of PM2.5/NO2 pollution on vulnerable demographic segments and hospital ER visits.</p>
        </div>
        <span className="px-4 py-2 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 font-bold text-xs">
          ESTIMATED AFFECTED: 2.4M CITIZENS
        </span>
      </div>

      {/* 4 Health Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demographics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl ${item.color} flex items-center gap-2 text-xs font-black`}>
                    <Icon className="w-5 h-5" /> {item.level}
                  </div>
                  <span className="text-2xl font-black text-rose-600">{item.score}</span>
                </div>

                <h3 className="text-lg font-black text-[#0F172A]">{item.title}</h3>

                <p className="text-xs text-slate-600 font-medium bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  {item.advice}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Hospital ER Admission Risk: <strong className="text-rose-600 font-bold">+18% Expected</strong></span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
