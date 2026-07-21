'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
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
  Box,
  Siren,
  Settings,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { UserRole } from '../types';

interface SidebarProps {
  userRole: UserRole;
  onOpenRoleModal: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  userRole,
  onOpenRoleModal,
  isCollapsed,
  onToggleCollapse
}) => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { href: '/map', label: 'Air Quality Map', icon: MapPin, badge: 'Live' },
    { href: '/forecast', label: 'AQI Forecasting', icon: TrendingUp, badge: 'AI' },
    { href: '/hotspots', label: 'Pollution Hotspots', icon: Flame, badge: '8' },
    { href: '/attribution', label: 'Source Attribution', icon: Factory, badge: null },
    { href: '/enforcement', label: 'Enforcement Intel', icon: Siren, badge: 'Priority' },
    { href: '/digital-twin', label: '3D Digital Twin', icon: Box, badge: '3D WOW' },
    { href: '/satellite', label: 'Satellite Intel', icon: Satellite, badge: null },
    { href: '/copilot', label: 'AI Copilot', icon: Bot, badge: 'Agent' },
    { href: '/health', label: 'Citizen Advisory', icon: HeartPulse, badge: null },
    { href: '/multi-city', label: 'Multi-City Intel', icon: Globe2, badge: '9 Cities' },
    { href: '/recommendations', label: 'Smart City Plan', icon: Trees, badge: null },
    { href: '/analytics', label: 'Analytics & Rankings', icon: BarChart3, badge: null },
    { href: '/settings', label: 'Settings', icon: Settings, badge: null }
  ];

  const roleLabelMap: Record<UserRole, string> = {
    admin: 'Administrator',
    inspector: 'Control Officer',
    planner: 'City Planner'
  };

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-white/95 border-r border-slate-200 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between shadow-xl ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20">
              <Box className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                AirPulse<span className="text-blue-600">.AI</span>
              </h2>
              <p className="text-[10px] text-slate-500 font-mono font-bold">COMMAND CENTER v2.0</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="mx-auto p-2 rounded-xl bg-blue-50 text-blue-600">
            <Box className="w-6 h-6" />
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Persona Role Switcher Card */}
      {!isCollapsed && (
        <div className="mx-4 my-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-100 text-blue-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-mono font-bold uppercase">Role Active</p>
              <p className="text-xs font-bold text-slate-900">{roleLabelMap[userRole]}</p>
            </div>
          </div>
          <button
            onClick={onOpenRoleModal}
            className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-blue-600 shadow-sm"
          >
            Switch
          </button>
        </div>
      )}

      {/* Navigation Links List */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 custom-scrollbar">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all duration-200 group ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600 shadow-sm font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
              {!isCollapsed && (
                <span className="flex-1 text-left line-clamp-1">{item.label}</span>
              )}
              {!isCollapsed && item.badge && (
                <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-full ${
                  item.badge === '3D WOW'
                    ? 'bg-purple-100 text-purple-700 border border-purple-200 animate-pulse'
                    : 'bg-slate-200/80 text-slate-600'
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom Footer info */}
      {!isCollapsed && (
        <div className="p-4 border-t border-slate-200 text-[11px] text-slate-500 font-mono text-center font-semibold">
          REST API: <span className="text-emerald-600">http://localhost:5000</span>
        </div>
      )}
    </aside>
  );
};
