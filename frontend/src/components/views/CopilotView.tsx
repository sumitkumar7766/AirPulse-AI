'use client';

import React from 'react';
import { AICopilot } from '../AICopilot';

export const CopilotView: React.FC = () => {
  return (
    <div className="relative min-h-[600px] rounded-2xl bg-white border border-slate-200 p-6 shadow-md overflow-hidden flex flex-col justify-between text-slate-900">
      <div className="mb-4">
        <h2 className="text-xl font-extrabold text-slate-900">AirPulse AI Environmental Specialist Copilot</h2>
        <p className="text-xs text-slate-500 font-medium">Agentic AI Decision Engine powered by REST API <code className="text-purple-600 font-bold font-mono">POST /api/copilot</code></p>
      </div>

      <AICopilot isOpen={true} onClose={() => {}} cityName="Bhopal" currentAQI={178} />
    </div>
  );
};
