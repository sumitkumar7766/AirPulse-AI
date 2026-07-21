'use client';

import React from 'react';
import { AICopilot } from '../AICopilot';

export const CopilotView: React.FC = () => {
  return (
    <div className="relative min-h-[600px] rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
      <div className="mb-4">
        <h2 className="text-xl font-extrabold text-white">AirPulse AI Environmental Specialist Copilot</h2>
        <p className="text-xs text-gray-400">Agentic AI Decision Engine powered by REST API <code className="text-purple-400 font-mono">POST /api/copilot</code></p>
      </div>

      <AICopilot isOpen={true} onClose={() => {}} cityName="Bhopal" currentAQI={178} />
    </div>
  );
};
