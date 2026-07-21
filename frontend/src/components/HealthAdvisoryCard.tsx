'use client';

import React from 'react';
import { ShieldCheck, AlertCircle, Heart, Wind } from 'lucide-react';
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
    <div className="w-full rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl shadow-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Health & Medical Protocols</h3>
          <p className="text-xs text-gray-400">Target Group Precautions & Exposure Mitigation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, idx) => (
          <div key={idx} className="p-5 rounded-xl bg-background/80 border border-surfaceLight flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400" />
                  {item.targetGroup}
                </h4>
                <span className={`px-3 py-0.5 text-xs font-extrabold rounded-full border ${
                  item.level === 'Danger' ? 'bg-rose-500/20 text-rose-400 border-rose-500/40' : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                }`}>
                  {item.level}
                </span>
              </div>
              <ul className="space-y-2">
                {(item.recommendations || []).map((rec, rIdx) => (
                  <li key={rIdx} className="text-xs text-gray-300 flex items-start gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-surfaceLight/60 text-xs">
              <span className={`px-2.5 py-1 rounded-lg border font-semibold ${item.maskRequired ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' : 'bg-surfaceLight text-gray-400'}`}>
                N95 Mask: {item.maskRequired ? 'REQUIRED' : 'OPTIONAL'}
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-semibold ${item.purifierRecommended ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-surfaceLight text-gray-400'}`}>
                HEPA Purifier: {item.purifierRecommended ? 'RECOMMENDED' : 'NONE'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
