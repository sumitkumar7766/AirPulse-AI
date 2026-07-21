'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Wind,
  TrendingUp,
  MapPin,
  Building2,
  Globe2,
  HeartPulse,
  Bot,
  ArrowRight,
  ShieldCheck,
  Lock,
  CloudRain,
  Leaf,
  Trophy
} from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const handleEnterDemo = () => {
    localStorage.setItem('role', 'administrator');
    localStorage.setItem('isLoggedIn', 'true');
    onLogin();
  };

  const featureCards = [
    { title: 'AI AQI Forecasting', icon: TrendingUp, color: 'text-blue-600 bg-blue-50' },
    { title: 'Pollution Hotspot Detection', icon: MapPin, color: 'text-rose-500 bg-rose-50' },
    { title: 'Smart City Intelligence', icon: Building2, color: 'text-cyan-600 bg-cyan-50' },
    { title: 'Geospatial Analytics', icon: Globe2, color: 'text-purple-600 bg-purple-50' },
    { title: 'Health Risk Advisory', icon: HeartPulse, color: 'text-emerald-600 bg-emerald-50' },
    { title: 'AI Copilot Assistant', icon: Bot, color: 'text-amber-500 bg-amber-50' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col justify-between font-sans selection:bg-[#2563EB] selection:text-white relative overflow-hidden">
      
      {/* Background Soft Dot Grid & Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Split Screen */}
      <main className="w-full max-w-[1340px] mx-auto px-6 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10">
        
        {/* ========================================================= */}
        {/* LEFT SECTION (60% / 7 cols) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-7 relative"
        >
          {/* Logo & Sub-tagline */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2563EB] via-[#3B82F6] to-[#06B6D4] flex items-center justify-center text-white shadow-lg shadow-[#2563EB]/25">
                <Wind className="w-7 h-7 animate-pulse" />
              </div>
              <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
                AirPulse <span className="text-[#2563EB]">AI</span>
              </h1>
            </div>
            <p className="text-xs font-semibold text-slate-500 tracking-wide pl-1">
              Smart Air. Smart City. Better Tomorrow.
            </p>
          </div>

          {/* Headings */}
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
              Predict. Prevent. <span className="text-[#2563EB]">Protect.</span>
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-slate-600 max-w-xl">
              AI-Powered Urban Air Quality Intelligence Platform for Smart Cities
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed font-medium">
              Monitor air quality, predict pollution risks, identify hotspots, and empower city administrators with AI-driven environmental intelligence.
            </p>
          </div>

          {/* 6 Feature Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl pt-1">
            {featureCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className={`p-2.5 rounded-xl ${card.color} shrink-0 transition-transform group-hover:scale-110`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A] leading-tight">{card.title}</span>
                </div>
              );
            })}
          </div>

          {/* Smart City 3D Isometric Illustration with Bobbing AQI Pins */}
          <div className="relative w-full h-[260px] sm:h-[300px] mt-4 rounded-3xl bg-gradient-to-b from-blue-50/50 via-cyan-50/30 to-slate-50 border border-slate-200/60 overflow-hidden flex items-end justify-center p-4">
            
            {/* Background Clouds & Birds */}
            <div className="absolute top-6 left-10 opacity-40 animate-pulse">
              <CloudRain className="w-10 h-10 text-blue-400" />
            </div>

            {/* 3D Smart City SVG Isometric Buildings Group */}
            <div className="relative w-full max-w-lg h-full flex items-end justify-center">
              
              {/* Isometric City Base Plate */}
              <svg viewBox="0 0 500 240" className="w-full h-auto drop-shadow-xl">
                {/* Island Platform */}
                <path d="M 50 140 L 250 50 L 450 140 L 250 230 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2" />
                <path d="M 50 140 L 250 230 L 250 245 L 50 155 Z" fill="#94A3B8" />
                <path d="M 250 230 L 450 140 L 450 155 L 250 245 Z" fill="#64748B" />

                {/* River / Water Stream */}
                <path d="M 120 172 C 180 160, 220 180, 280 170 C 340 160, 390 175, 410 160 L 420 165 L 390 180 C 330 190, 270 175, 210 190 Z" fill="#38BDF8" opacity="0.8" />

                {/* Buildings Group - Left Sector */}
                <rect x="110" y="80" width="24" height="60" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1" rx="2" />
                <rect x="140" y="60" width="30" height="80" fill="#60A5FA" stroke="#2563EB" strokeWidth="1" rx="2" />
                <rect x="175" y="90" width="20" height="50" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1" rx="2" />

                {/* Center High-rise Towers */}
                <rect x="210" y="40" width="36" height="110" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" rx="3" />
                <rect x="252" y="55" width="28" height="95" fill="#60A5FA" stroke="#2563EB" strokeWidth="1.5" rx="3" />
                <rect x="285" y="70" width="32" height="80" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1.5" rx="3" />

                {/* Right Sector Commercial Buildings */}
                <rect x="325" y="85" width="26" height="65" fill="#60A5FA" stroke="#2563EB" strokeWidth="1" rx="2" />
                <rect x="355" y="65" width="32" height="85" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" rx="2" />
                <rect x="392" y="100" width="22" height="50" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1" rx="2" />
              </svg>

              {/* Floating 3D AQI Map Pins (Bobbing Animation) */}
              
              {/* Pin 1: AQI 68 Good (Green) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-12 left-12 flex flex-col items-center group cursor-pointer"
              >
                <div className="px-3 py-1.5 rounded-full bg-white border-2 border-[#10B981] shadow-lg flex flex-col items-center text-center">
                  <span className="text-[9px] font-bold text-[#10B981] uppercase tracking-wider">AQI</span>
                  <span className="text-xs font-black text-[#0F172A]">68</span>
                  <span className="text-[8px] font-bold text-[#10B981]">Good</span>
                </div>
                <div className="w-0.5 h-6 bg-[#10B981]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-md animate-ping" />
              </motion.div>

              {/* Pin 2: AQI 112 Moderate (Yellow) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-4 left-36 flex flex-col items-center group cursor-pointer"
              >
                <div className="px-3 py-1.5 rounded-full bg-white border-2 border-[#F59E0B] shadow-lg flex flex-col items-center text-center">
                  <span className="text-[9px] font-bold text-[#F59E0B] uppercase tracking-wider">AQI</span>
                  <span className="text-xs font-black text-[#0F172A]">112</span>
                  <span className="text-[8px] font-bold text-[#F59E0B]">Moderate</span>
                </div>
                <div className="w-0.5 h-8 bg-[#F59E0B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shadow-md animate-ping" />
              </motion.div>

              {/* Pin 3: AQI 142 Unhealthy (Red) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-8 right-32 flex flex-col items-center group cursor-pointer"
              >
                <div className="px-3 py-1.5 rounded-full bg-white border-2 border-[#EF4444] shadow-lg flex flex-col items-center text-center">
                  <span className="text-[9px] font-bold text-[#EF4444] uppercase tracking-wider">AQI</span>
                  <span className="text-xs font-black text-[#0F172A]">142</span>
                  <span className="text-[8px] font-bold text-[#EF4444]">Unhealthy</span>
                </div>
                <div className="w-0.5 h-7 bg-[#EF4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444] shadow-md animate-ping" />
              </motion.div>

              {/* Pin 4: AQI 198 Poor (Purple) */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute top-14 right-10 flex flex-col items-center group cursor-pointer"
              >
                <div className="px-3 py-1.5 rounded-full bg-white border-2 border-[#9333EA] shadow-lg flex flex-col items-center text-center">
                  <span className="text-[9px] font-bold text-[#9333EA] uppercase tracking-wider">AQI</span>
                  <span className="text-xs font-black text-[#0F172A]">198</span>
                  <span className="text-[8px] font-bold text-[#9333EA]">Poor</span>
                </div>
                <div className="w-0.5 h-6 bg-[#9333EA]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#9333EA] shadow-md animate-ping" />
              </motion.div>

            </div>
          </div>

          {/* Bottom Hackathon Trophy Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-[#0F172A]">
            <Trophy className="w-4 h-4 text-[#2563EB]" />
            <span>Built for ET AI Hackathon 2026</span>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* RIGHT SECTION (40% / 5 cols) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center space-y-5"
        >
          {/* Top 3 Floating Metric Cards Header */}
          <div className="w-full grid grid-cols-3 gap-3">
            
            {/* Metric 1: Wind Speed */}
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#2563EB] shrink-0">
                <Wind className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Wind Speed</span>
                <p className="text-xs font-black text-[#0F172A]">18 <span className="text-[10px] font-semibold text-slate-500">km/h NW</span></p>
              </div>
            </div>

            {/* Metric 2: AQI Index */}
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-[#10B981] shrink-0">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Air Quality Index</span>
                <p className="text-xs font-black text-[#0F172A]">142 <span className="text-[10px] font-semibold text-rose-500">Unhealthy</span></p>
              </div>
            </div>

            {/* Metric 3: PM 2.5 */}
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-purple-50 text-[#9333EA] shrink-0">
                <CloudRain className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">PM 2.5</span>
                <p className="text-xs font-black text-[#0F172A]">78 <span className="text-[10px] font-semibold text-purple-600">µg/m³</span></p>
              </div>
            </div>

          </div>

          {/* Main Centered Login Card */}
          <div className="w-full p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-2xl shadow-slate-200/90 space-y-7 text-center relative overflow-hidden">
            
            {/* Top Blue Gradient Circle Logo */}
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-tr from-[#2563EB] via-[#3B82F6] to-[#06B6D4] p-1 flex items-center justify-center shadow-xl shadow-[#2563EB]/30 relative group">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#1D4ED8] to-[#0284C7] flex items-center justify-center text-white">
                <Wind className="w-10 h-10 animate-pulse" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#10B981] border-2 border-white shadow-sm" />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-[#0F172A] tracking-tight">
                Welcome to <span className="text-[#2563EB]">AirPulse AI</span>
              </h2>
              <p className="text-xs font-semibold text-slate-500">
                Smart Urban Air Quality Intelligence Platform
              </p>
            </div>

            {/* Heartbeat Pulse Line Separator */}
            <div className="flex items-center justify-center gap-2 my-2 opacity-60">
              <div className="h-px w-16 bg-slate-200" />
              <svg viewBox="0 0 40 16" className="w-8 h-4 text-[#2563EB] stroke-current fill-none stroke-2">
                <path d="M 0 8 L 12 8 L 16 2 L 20 14 L 24 6 L 28 10 L 32 8 L 40 8" />
              </svg>
              <div className="h-px w-16 bg-slate-200" />
            </div>

            {/* Single Large Enter Demo Platform Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleEnterDemo}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#06B6D4] hover:from-[#1D4ED8] hover:to-[#0369A1] text-white font-extrabold text-base shadow-xl shadow-[#2563EB]/30 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span className="text-xl">🚀</span>
              <span>Enter Demo Platform</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </motion.button>

            {/* Demo Access Info Box */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2563EB]">
                <ShieldCheck className="w-4 h-4" /> Demo Mode Enabled
              </div>
              <div className="grid grid-cols-3 gap-1 text-[11px] font-semibold text-slate-600 border-t border-blue-100 pt-2">
                <span>No Signup Required</span>
                <span className="border-x border-blue-200/80 px-1">No Password Required</span>
                <span>No Registration Required</span>
              </div>
            </div>

            {/* Security Footer */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
              <Lock className="w-3.5 h-3.5" />
              <span>Secure • Fast • Intelligent • Reliable</span>
            </div>

          </div>

          {/* Bottom Green Banner Pill */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-sm text-xs font-bold text-[#10B981]">
            <Leaf className="w-4 h-4" />
            <span>Empowering Cities. Enhancing Lives.</span>
          </div>

        </motion.div>

      </main>

    </div>
  );
};
