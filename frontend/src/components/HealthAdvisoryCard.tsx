'use client';

import React from 'react';
import { ShieldCheck, AlertCircle, Heart } from 'lucide-react';
import { HealthAdvisoryItem } from '../types';

interface HealthAdvisoryCardProps {
  advisories?: HealthAdvisoryItem[];
}

export const HealthAdvisoryCard: React.FC<HealthAdvisoryCardProps> = ({ advisories = [] }) => {
  const items: HealthAdvisoryItem[] = advisories.length > 0 ? advisories : [
    {
      targetGroup: 'General Population',
      level: 'Warning',
      recommendations: [
        'Wear N95/FFP2 filter masks near major transit arteries',
        'Avoid strenuous outdoor cardio exercises during peak morning inversion',
        'Operate indoor True-HEPA air purification units'
      ],
      maskRequired: true,
      purifierRecommended: true,
      outdoorActivities: 'Restricted'
    },
    {
      targetGroup: 'Asthmatic & Elderly Citizens',
      level: 'Danger',
      recommendations: [
        'Avoid all outdoor non-essential activities',
        'Maintain bronchodilator inhalers readily accessible',
        'Keep doors and window seals completely closed'
      ],
      maskRequired: true,
      purifierRecommended: true,
      outdoorActivities: 'Strictly Prohibited'
    }
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-md p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">Health & Medical Protocols</h3>
          <p className="text-xs text-slate-500 font-medium">Target Group Precautions & Exposure Mitigation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, idx) => (
          <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500" />
                  {item.targetGroup}
                </h4>
                <span className={`px-3 py-0.5 text-xs font-black rounded-full border ${
                  item.level === 'Danger' ? 'bg-rose-100 text-rose-700 border-rose-300' : 'bg-amber-100 text-amber-700 border-amber-300'
                }`}>
                  {item.level}
                </span>
              </div>
              <ul className="space-y-2">
                {(item.recommendations || []).map((rec, rIdx) => (
                  <li key={rIdx} className="text-xs text-slate-700 font-medium flex items-start gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-200 text-xs">
              <span className={`px-2.5 py-1 rounded-lg border font-bold ${item.maskRequired ? 'bg-rose-100 text-rose-700 border-rose-300' : 'bg-slate-200 text-slate-700'}`}>
                N95 Mask: {item.maskRequired ? 'REQUIRED' : 'OPTIONAL'}
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-bold ${item.purifierRecommended ? 'bg-emerald-100 text-emerald-700 border-emerald-300' : 'bg-slate-200 text-slate-700'}`}>
                HEPA Purifier: {item.purifierRecommended ? 'RECOMMENDED' : 'NONE'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
