'use client';

import React from 'react';
import { Wind, Bot, Activity } from 'lucide-react';

interface HeaderProps {
  onToggleCopilot: () => void;
  cityName?: string;
  isBackendConnected?: boolean;
  onSignOut?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleCopilot,
  cityName = 'New Delhi',
  isBackendConnected = true,
  onSignOut
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/85 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative p-2.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20">
            <Wind className="w-6 h-6 animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                AirPulse<span className="text-blue-600">.AI</span>
              </h1>
              <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                SMART CITY COMMAND
              </span>
            </div>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Environmental Decision Intelligence
            </p>
          </div>
        </div>

        {/* Center - Location & Telemetry Badge */}
        <div className="hidden md:flex items-center gap-4 px-4 py-2 rounded-2xl bg-slate-100/80 border border-slate-200 shadow-inner">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-semibold text-slate-500">Active Sensor:</span>
            <span className="text-xs font-bold text-blue-600">{cityName}</span>
          </div>
          <div className="h-4 w-px bg-slate-300" />
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${isBackendConnected ? 'bg-emerald-500 shadow-emerald-500/50 shadow-sm' : 'bg-rose-500'}`} />
            <span className="text-[11px] font-mono font-bold text-slate-600">
              {isBackendConnected ? 'REST API CONNECTED' : 'OFFLINE MODE'}
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleCopilot}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Bot className="w-4 h-4 animate-bounce" />
            <span>AI Copilot</span>
          </button>
          {onSignOut && (
            <button
              onClick={onSignOut}
              className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 font-bold text-xs border border-slate-200 transition-all"
              title="Exit Demo to Login Page"
            >
              Exit Demo
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
