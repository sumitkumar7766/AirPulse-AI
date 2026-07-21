'use client';

import React from 'react';
import { Wind, Bot, ShieldAlert, Activity, RefreshCw } from 'lucide-react';

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
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-background/80 border-b border-surfaceLight/50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative p-2.5 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-emerald-500/20 to-purple-500/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <Wind className="w-7 h-7 text-cyan-400 animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                AirPulse AI
              </h1>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                PRO MONOREPO
              </span>
            </div>
            <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Environmental Intelligence Platform
            </p>
          </div>
        </div>

        {/* Center - Location & Telemetry Badge */}
        <div className="hidden md:flex items-center gap-4 px-4 py-2 rounded-2xl bg-surface/60 border border-surfaceLight">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-gray-200">Active Sensor:</span>
            <span className="text-sm font-semibold text-cyan-400">{cityName}</span>
          </div>
          <div className="h-4 w-px bg-surfaceLight" />
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${isBackendConnected ? 'bg-emerald-400 shadow-emerald-500/50 shadow-sm' : 'bg-rose-500'}`} />
            <span className="text-xs font-mono text-gray-400">
              {isBackendConnected ? 'REST API CONNECTED' : 'OFFLINE MODE'}
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleCopilot}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-cyan-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-purple-500/25 border border-purple-400/30 hover:scale-105 active:scale-95"
          >
            <Bot className="w-4 h-4 animate-bounce" />
            <span>AI Copilot</span>
          </button>
          {onSignOut && (
            <button
              onClick={onSignOut}
              className="px-3 py-2.5 rounded-xl bg-surfaceLight/80 hover:bg-rose-600/20 text-gray-300 hover:text-rose-400 font-medium text-xs border border-surfaceLight transition-all"
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
