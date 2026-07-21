'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Wind,
  TrendingUp,
  Flame,
  ShieldCheck,
  Globe2,
  Bot,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Activity,
  HeartPulse
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

  const features = [
    'AI AQI Forecasting',
    'Pollution Hotspot Detection',
    'Smart City Intelligence',
    'Geospatial Analytics',
    'Health Risk Advisory',
    'AI Copilot Assistant',
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col justify-between font-sans selection:bg-[#2563EB] selection:text-white relative overflow-hidden">
      
      {/* Background Animated Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Brand Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white shadow-md shadow-[#2563EB]/20">
            <Wind className="w-6 h-6 animate-pulse" />
          </div>
          <span className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
            AirPulse<span className="text-[#2563EB]">.AI</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
            ET AI Hackathon 2026
          </span>
        </div>
      </header>

      {/* Main Split Screen */}
      <main className="w-full max-w-7xl mx-auto px-6 py-6 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* LEFT SECTION (60% / 7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8 relative"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-xs font-bold text-[#2563EB]">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Next-Gen Environmental Decision Intelligence</span>
          </div>

          {/* Headings */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.1]">
              Predict. Prevent. <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
                Protect.
              </span>
            </h1>
            <p className="text-xl font-bold text-[#2563EB] max-w-xl">
              AI-Powered Urban Air Quality Intelligence Platform for Smart Cities
            </p>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
              Monitor real-time air quality, predict pollution risks across multi-horizon forecasts, detect geospatial hotspots, and empower city administrators with AI-driven environmental decision support.
            </p>
          </div>

          {/* Features Grid List */}
          <div className="grid grid-cols-2 gap-3 max-w-lg pt-2">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] bg-white/80 backdrop-blur-md p-2.5 rounded-xl border border-[#E2E8F0] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Floating Background Context Cards (Decorative Light-Theme Cards) */}
          <div className="hidden sm:flex items-center gap-4 pt-4">
            
            {/* Card 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-md flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400">Current AQI</span>
                <p className="text-sm font-extrabold text-[#0F172A]">142 Index</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-md flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-[#10B981]/10 text-[#10B981]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400">Forecast</span>
                <p className="text-sm font-extrabold text-[#10B981]">+12% Accuracy</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-md flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-[#06B6D4]/10 text-[#06B6D4]">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400">Hotspot Alert</span>
                <p className="text-sm font-extrabold text-[#0F172A]">Zone 3 Active</p>
              </div>
            </motion.div>

          </div>

          <div className="text-xs text-gray-400 font-medium pt-4">
            Built for <strong className="text-[#0F172A]">ET AI Hackathon 2026</strong>
          </div>
        </motion.div>

        {/* RIGHT SECTION (40% / 5 cols) - Styled Centered Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-2xl shadow-slate-200/80 space-y-8 relative overflow-hidden">
            
            {/* Card Subtle Top Glow */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981]" />

            {/* Logo & Heading */}
            <div className="text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white shadow-xl shadow-[#2563EB]/30">
                <Wind className="w-9 h-9 animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#0F172A] tracking-tight">
                  Welcome to AirPulse AI
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Smart Urban Air Quality Intelligence Platform
                </p>
              </div>
            </div>

            {/* Single CTA Demo Button */}
            <div className="space-y-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleEnterDemo}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] hover:from-[#1D4ED8] hover:to-[#059669] text-white font-extrabold text-base shadow-xl shadow-[#2563EB]/25 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span className="text-xl">🚀</span>
                <span>Enter Demo Platform</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Demo Access Disclaimer */}
            <div className="pt-4 border-t border-[#E2E8F0] text-center space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-[11px] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Demo Mode Enabled
              </span>
              <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                No Signup Required • No Password Required • No Registration Required
              </p>
            </div>

          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-4 border-t border-[#E2E8F0]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2 z-10">
        <p>© 2026 AirPulse AI. Urban Environmental Intelligence Platform.</p>
        <p className="font-mono text-[11px]">Rest API Connected: http://localhost:5000</p>
      </footer>

    </div>
  );
};
