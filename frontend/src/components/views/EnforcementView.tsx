'use client';

import React from 'react';
import { Siren, Users, ShieldAlert, CheckCircle2, ArrowRight, Ban } from 'lucide-react';
import { useEnforcement } from '../../hooks/useAirPulseData';

export const EnforcementView: React.FC = () => {
  const enforcementQuery = useEnforcement('Bhopal');

  const dispatches = enforcementQuery.data?.dispatches || [
    { targetZone: 'Industrial Area Zone 3', actionRequired: 'Deploy 4 Inspection Teams to verify stack CEMS compliance and halt non-permitted furnace boilers', urgency: 'Immediate (Critical)', expectedAQIDrop: '12-16% in SO2/PM10' },
    { targetZone: 'East Sector Construction Belt', actionRequired: 'Issue stop-work notice for non-compliant fugitive dust suppression & unpaved haul roads', urgency: 'High Priority', expectedAQIDrop: '8-10% in PM10' },
    { targetZone: 'North Bypass Freight Corridor', actionRequired: 'Restrict BS-III diesel heavy commercial trucks between 07:00 and 19:00', urgency: 'High Priority', expectedAQIDrop: '15% in NO2' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Siren className="w-5 h-5 text-rose-400 animate-pulse" /> Enforcement Intelligence & Dispatch Dispatcher
          </h2>
          <p className="text-xs text-gray-400">Pollution Control Board Intervention Engine & Inspection Dispatch Strategy</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 text-xs font-bold flex items-center gap-1.5">
          <Users className="w-4 h-4" /> 12 Inspector Teams Active
        </span>
      </div>

      {/* Recommended Dispatch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dispatches.map((d, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight flex flex-col justify-between space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl" />
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40">
                  {d.urgency}
                </span>
                <Ban className="w-4 h-4 text-rose-400" />
              </div>
              <h3 className="text-lg font-bold text-white mt-3">{d.targetZone}</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed bg-background/80 p-3 rounded-xl border border-surfaceLight">
                {d.actionRequired}
              </p>
            </div>

            <div className="pt-3 border-t border-surfaceLight/60 flex items-center justify-between text-xs">
              <span className="text-gray-400">Expected Impact:</span>
              <strong className="text-emerald-400 font-mono font-bold">{d.expectedAQIDrop}</strong>
            </div>

            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs shadow-lg shadow-rose-600/20 transition-all flex items-center justify-center gap-2">
              Issue Dispatch Order <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};
