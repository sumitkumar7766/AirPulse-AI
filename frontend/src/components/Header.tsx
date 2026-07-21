'use client';

import React from 'react';
import { Sun, Bell } from 'lucide-react';

interface HeaderProps {
  onToggleCopilot: () => void;
  cityName?: string;
  isBackendConnected?: boolean;
  onSignOut?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleCopilot,
  cityName = 'Bhopal',
  onSignOut
}) => {
  return (
    <header className="w-full bg-[#F8FAFC] pt-6 pb-2 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      
      {/* Welcome Title */}
      <div>
        <h1 className="text-2xl font-black text-[#0F172A] tracking-tight flex items-center gap-2">
          Welcome back, Administrator <span className="text-xl">👋</span>
        </h1>
        <p className="text-xs font-semibold text-slate-500 mt-0.5">
          Here's what's happening in {cityName} today.
        </p>
      </div>

      {/* Right Top Status Cards: Weather + Date/Time + Notification Bell */}
      <div className="flex items-center gap-3">
        
        {/* Weather Card */}
        <div className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-50 text-amber-500">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-black text-[#0F172A]">25°C</p>
            <p className="text-[10px] font-semibold text-slate-400">Clear Sky</p>
          </div>
        </div>

        {/* Date & Time Card */}
        <div className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
          <p className="text-xs font-black text-[#0F172A]">20 May 2026</p>
          <p className="text-[10px] font-semibold text-slate-400">10:30 AM</p>
        </div>

        {/* Notification Bell */}
        <button
          onClick={onToggleCopilot}
          className="relative p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-slate-600 hover:text-[#2563EB]"
          title="Notifications & Copilot"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-extrabold flex items-center justify-center border-2 border-white">
            3
          </span>
        </button>

      </div>

    </header>
  );
};
