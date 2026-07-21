'use client';

import React from 'react';
import { ShieldCheck, UserCheck, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import { UserRole } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onSelectRole: (role: UserRole) => void;
  currentRole: UserRole;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onSelectRole, currentRole }) => {
  if (!isOpen) return null;

  const roles = [
    {
      id: 'admin' as UserRole,
      title: 'Administrator',
      icon: ShieldCheck,
      color: 'from-purple-600 to-indigo-600',
      badge: 'Full Command Rights',
      desc: 'Access to system-wide policy overrides, emergency advisory triggers, and global data seeder APIs.'
    },
    {
      id: 'inspector' as UserRole,
      title: 'Pollution Control Officer',
      icon: UserCheck,
      color: 'from-cyan-600 to-emerald-600',
      badge: 'Enforcement & Patrol',
      desc: 'Focus on hotspot inspection dispatch, industrial stack audits, construction site halt directives.'
    },
    {
      id: 'planner' as UserRole,
      title: 'City Planner',
      icon: Building2,
      color: 'from-amber-600 to-rose-600',
      badge: 'Urban Intelligence',
      desc: 'Focus on long-term 3D Digital Twin simulation, green corridor planning, EV freight zone design.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl animate-fade-in">
      <div className="w-full max-w-2xl p-8 rounded-3xl bg-surface/95 border border-surfaceLight/80 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-bold border border-cyan-800/60">
            <Sparkles className="w-3.5 h-3.5" /> HACKATHON DEMO AUTHENTICATION
          </div>
          <h2 className="text-3xl font-extrabold text-white">Select Persona Role</h2>
          <p className="text-sm text-gray-400">Choose a smart city command role to tailor your AI intelligence workspace</p>
        </div>

        {/* Roles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((r) => {
            const Icon = r.icon;
            const isSelected = currentRole === r.id;
            return (
              <div
                key={r.id}
                onClick={() => onSelectRole(r.id)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group relative overflow-hidden ${
                  isSelected
                    ? 'bg-surfaceLight/90 border-cyan-500 shadow-xl shadow-cyan-500/20 ring-2 ring-cyan-500/50'
                    : 'bg-background/80 border-surfaceLight hover:bg-surfaceLight/50'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 text-cyan-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">{r.badge}</span>
                    <h3 className="text-base font-bold text-white mt-0.5">{r.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{r.desc}</p>
                </div>

                <button className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected ? 'bg-cyan-500 text-white shadow-md' : 'bg-surfaceLight/80 text-gray-300 group-hover:bg-cyan-600 group-hover:text-white'
                }`}>
                  {isSelected ? 'Active Role' : 'Switch Role'}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
