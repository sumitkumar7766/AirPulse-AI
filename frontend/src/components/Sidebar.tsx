'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Wind,
  LayoutDashboard,
  MapPin,
  TrendingUp,
  Flame,
  Factory,
  Satellite,
  Bot,
  HeartPulse,
  BarChart3,
  Globe2,
  Trees,
  Settings,
  Sliders,
  Award,
  Camera,
  Radar,
  FileText,
  Clock,
  Swords,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { UserRole } from '../types';

interface SidebarProps {
  userRole?: UserRole;
  onOpenRoleModal?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { href: '/simulator', label: 'AI Intervention Simulator', icon: Sliders, badge: 'USP WINNER' },
    { href: '/environmental-score', label: 'Env Intelligence Score', icon: Award, badge: 'USP' },
    { href: '/citizen-complaints', label: 'Citizen AI Verification', icon: Camera, badge: 'USP' },
    { href: '/risk-radar', label: 'Pollution Risk Radar', icon: Radar, badge: 'USP' },
    { href: '/story-generator', label: 'Pollution Story Generator', icon: FileText, badge: 'USP' },
    { href: '/green-zones', label: 'Green Zone Engine', icon: Trees, badge: 'USP' },
    { href: '/time-machine', label: 'Air Quality Time Machine', icon: Clock, badge: 'USP' },
    { href: '/battle-mode', label: 'Smart City Battle Mode', icon: Swords, badge: 'USP' },
    { href: '/health-impact', label: 'Health Impact Analyzer', icon: HeartPulse, badge: 'USP' },
    { href: '/map', label: 'Air Quality Map', icon: MapPin, badge: null },
    { href: '/forecast', label: 'AQI Forecasting', icon: TrendingUp, badge: null },
    { href: '/hotspots', label: 'Pollution Hotspots', icon: Flame, badge: null },
    { href: '/attribution', label: 'Pollution Sources', icon: Factory, badge: null },
    { href: '/satellite', label: 'Satellite Intelligence', icon: Satellite, badge: null },
    { href: '/copilot', label: 'AI Copilot Specialist', icon: Bot, badge: 'Agent' },
    { href: '/multi-city', label: 'Multi-City Intel', icon: Globe2, badge: null },
    { href: '/analytics', label: 'Analytics & Leaderboard', icon: BarChart3, badge: null },
    { href: '/settings', label: 'Settings', icon: Settings, badge: null },
  ];

  return (
    <aside className="fixed top-0 left-0 bottom-0 z-40 w-72 bg-white border-r border-slate-200/80 flex flex-col justify-between p-5 shadow-sm overflow-y-auto custom-scrollbar">
      
      {/* Brand Header */}
      <div className="space-y-1 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Wind className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
            AirPulse <span className="text-[#2563EB]">AI</span>
          </h2>
        </div>
        <p className="text-[10px] font-semibold text-slate-400 pl-1">
          Smart Urban Environmental Intelligence
        </p>
      </div>

      {/* Nav Menu Links */}
      <nav className="my-3 space-y-1 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (pathname === '/' && item.href === '/dashboard');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full flex items-center gap-3 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all duration-200 ${
                isActive
                  ? 'bg-[#EFF6FF] text-[#2563EB] shadow-sm font-extrabold'
                  : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#2563EB]' : 'text-slate-400'}`} />
              <span className="flex-1 line-clamp-1">{item.label}</span>
              {item.badge && (
                <span className={`px-1.5 py-0.5 text-[9px] font-black rounded-full ${
                  item.badge === 'USP WINNER'
                    ? 'bg-purple-100 text-purple-700 animate-pulse'
                    : 'bg-blue-50 text-blue-600'
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section: AI Copilot Box + User Card */}
      <div className="space-y-3 pt-3 border-t border-slate-100">
        
        {/* AirPulse AI Copilot Callout Card */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100 space-y-1.5 relative overflow-hidden">
          <div className="flex items-center gap-2 text-[#2563EB]">
            <div className="p-1 rounded-xl bg-white shadow-sm border border-blue-100">
              <Bot className="w-4 h-4 text-[#2563EB]" />
            </div>
            <span className="text-xs font-extrabold">AirPulse AI Copilot</span>
          </div>
          <p className="text-[10px] font-medium text-slate-500 leading-snug">
            Ask questions, run simulations, or request inspection plans...
          </p>
          <Link
            href="/copilot"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white border border-blue-200 text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all text-[10px] font-bold shadow-sm group"
          >
            <span>Launch Copilot</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* User Profile Card */}
        <div className="flex items-center justify-between p-2 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xs">
              A
            </div>
            <div>
              <p className="text-xs font-bold text-[#0F172A] leading-tight">Administrator</p>
              <p className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Demo Access
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>

      </div>

    </aside>
  );
};
