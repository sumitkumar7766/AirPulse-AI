'use client';

import React from 'react';
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

export type ActiveModule =
  | 'dashboard'
  | 'map'
  | 'forecast'
  | 'hotspots'
  | 'attribution'
  | 'satellite'
  | 'copilot'
  | 'health'
  | 'analytics'
  | 'multicity'
  | 'recommendations'
  | 'digitaltwin'
  | 'enforcement'
  | 'settings';

interface SidebarProps {
  activeModule: ActiveModule;
  onSelectModule: (mod: ActiveModule) => void;
  userRole: UserRole;
  onOpenRoleModal: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeModule,
  onSelectModule,
  userRole,
  onOpenRoleModal,
  isCollapsed,
  onToggleCollapse
}) => {
  const menuItems = [
    { id: 'dashboard' as ActiveModule, label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'map' as ActiveModule, label: 'Air Quality Map', icon: MapPin, badge: 'Live' },
    { id: 'forecast' as ActiveModule, label: 'AQI Forecasting', icon: TrendingUp, badge: 'AI' },
    { id: 'hotspots' as ActiveModule, label: 'Pollution Hotspots', icon: Flame, badge: '8' },
    { id: 'attribution' as ActiveModule, label: 'Source Attribution', icon: Factory, badge: null },
    { id: 'enforcement' as ActiveModule, label: 'Enforcement Intel', icon: Siren, badge: 'Priority' },
    { id: 'digitaltwin' as ActiveModule, label: '3D Digital Twin', icon: Box, badge: '3D WOW' },
    { id: 'satellite' as ActiveModule, label: 'Satellite Intel', icon: Satellite, badge: null },
    { id: 'copilot' as ActiveModule, label: 'AI Copilot', icon: Bot, badge: 'Agent' },
    { id: 'health' as ActiveModule, label: 'Citizen Advisory', icon: HeartPulse, badge: null },
    { id: 'multicity' as ActiveModule, label: 'Multi-City Intel', icon: Globe2, badge: '9 Cities' },
    { id: 'recommendations' as ActiveModule, label: 'Smart City Plan', icon: Trees, badge: null },
    { id: 'analytics' as ActiveModule, label: 'Analytics & Rankings', icon: BarChart3, badge: null },
    { id: 'settings' as ActiveModule, label: 'Settings', icon: Settings, badge: null }
  ];

  const roleLabelMap: Record<UserRole, string> = {
    admin: 'Administrator',
    inspector: 'Control Officer',
    planner: 'City Planner'
  };

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-surface/95 border-r border-surfaceLight/80 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between shadow-2xl ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* Brand Header */}
      <div className="p-5 border-b border-surfaceLight/60 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20">
              <Box className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                AirPulse AI
              </h2>
              <p className="text-[10px] text-gray-400 font-mono">COMMAND CENTER v2.0</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="mx-auto p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Box className="w-6 h-6" />
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-surfaceLight transition-all"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Persona Role Switcher Card */}
      {!isCollapsed && (
        <div className="mx-4 my-3 p-3 rounded-2xl bg-background/80 border border-surfaceLight flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-mono uppercase">Role Active</p>
              <p className="text-xs font-bold text-white">{roleLabelMap[userRole]}</p>
            </div>
          </div>
          <button
            onClick={onOpenRoleModal}
            className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-surfaceLight hover:bg-cyan-600 hover:text-white transition-all text-cyan-400"
          >
            Switch
          </button>
        </div>
      )}

      {/* Navigation Links List */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 custom-scrollbar">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectModule(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-600/30 via-emerald-600/20 to-transparent text-cyan-400 border-l-4 border-cyan-400 shadow-lg shadow-cyan-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-surfaceLight/50'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
              {!isCollapsed && (
                <span className="flex-1 text-left line-clamp-1">{item.label}</span>
              )}
              {!isCollapsed && item.badge && (
                <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-full ${
                  item.badge === '3D WOW'
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40 animate-pulse'
                    : 'bg-surfaceLight text-gray-400'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Footer info */}
      {!isCollapsed && (
        <div className="p-4 border-t border-surfaceLight/60 text-[11px] text-gray-400 font-mono text-center">
          Rest API: <span className="text-emerald-400">http://localhost:5000</span>
        </div>
      )}
    </aside>
  );
};
