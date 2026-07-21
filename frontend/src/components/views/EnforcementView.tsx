'use client';

import React from 'react';
import { Siren, Users, ArrowRight, Ban } from 'lucide-react';
import { useEnforcement } from '../../hooks/useAirPulseData';

export const EnforcementView: React.FC = () => {
  const enforcementQuery = useEnforcement('Bhopal');

  const dispatches = enforcementQuery.data?.dispatches || [
    { targetZone: 'Industrial Area Zone 3', actionRequired: 'Deploy 4 Inspection Teams to verify stack CEMS compliance and halt non-permitted furnace boilers', urgency: 'Immediate (Critical)', expectedAQIDrop: '12-16% in SO2/PM10' },
    { targetZone: 'East Sector Construction Belt', actionRequired: 'Issue stop-work notice for non-compliant fugitive dust suppression & unpaved haul roads', urgency: 'High Priority', expectedAQIDrop: '8-10% in PM10' },
    { targetZone: 'North Bypass Freight Corridor', actionRequired: 'Restrict BS-III diesel heavy commercial trucks between 07:00 and 19:00', urgency: 'High Priority', expectedAQIDrop: '15% in NO2' }
  ];

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Siren className="w-5 h-5 text-rose-600 animate-pulse" /> Enforcement Intelligence & Dispatch Dispatcher
          </h2>
          <p className="text-xs text-slate-500 font-medium">Pollution Control Board Intervention Engine & Inspection Dispatch Strategy</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-1.5">
          <Users className="w-4 h-4 text-rose-600" /> 12 Inspector Teams Active
        </span>
      </div>

      {/* Recommended Dispatch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dispatches.map((d, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-md relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-black rounded-full bg-rose-100 text-rose-700 border border-rose-300">
                  {d.urgency}
                </span>
                <Ban className="w-4 h-4 text-rose-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-3">{d.targetZone}</h3>
              <p className="text-xs text-slate-700 font-medium mt-2 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                {d.actionRequired}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500">Expected Impact:</span>
              <strong className="text-emerald-600 font-mono font-bold">{d.expectedAQIDrop}</strong>
            </div>

            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs shadow-md shadow-rose-500/20 transition-all flex items-center justify-center gap-2">
              Issue Dispatch Order <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};
