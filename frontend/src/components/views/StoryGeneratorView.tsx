'use client';

import React, { useState } from 'react';
import { FileText, Download, Share2, Mail, Sparkles, RefreshCw } from 'lucide-react';

export const StoryGeneratorView: React.FC = () => {
  const [reportType, setReportType] = useState<'Today' | 'Weekly' | 'Monthly' | 'Emergency'>('Today');
  const [loading, setLoading] = useState(false);
  const [reportText, setReportText] = useState(
    "Air quality in MP Nagar deteriorated by 14% due to increased traffic volume and stagnant weather conditions. Immediate traffic management intervention is recommended. High-resolution satellite sensing indicates Sentinel-5P NO2 column accumulation over industrial corridors. Enforcement teams are dispatched to Zone 3."
  );

  const handleGenerate = (type: 'Today' | 'Weekly' | 'Monthly' | 'Emergency') => {
    setReportType(type);
    setLoading(true);
    setTimeout(() => {
      if (type === 'Today') {
        setReportText("Today's Air Quality Summary: Bhopal AQI spiked to 178 (Moderate to Unhealthy). Traffic emissions accounted for 52% of total speciation. Stagnant wind speeds prevented dispersion.");
      } else if (type === 'Weekly') {
        setReportText("Weekly Pollution Intelligence Report: Bhopal average AQI over the last 7 days was 172. Mid-week stubble plume arrival caused a temporary peak of 225. Green zone expansion is recommended in East Bhopal.");
      } else if (type === 'Monthly') {
        setReportText("Monthly Municipal Environmental Audit: Bhopal achieved a 4% overall improvement in air quality compared to last month due to strict construction dust enforcement and Miyawaki forest plantation.");
      } else {
        setReportText("EMERGENCY AIR POLLUTION ALERT REPORT: AQI projected to cross 205 within 24 hours. Emergency enforcement protocol active: Restrict BS-III diesel trucks & activate anti-smog water cannons immediately.");
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="space-y-6 text-[#0F172A] font-sans pb-10">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#2563EB]" /> AI Pollution Story & Automated Report Generator
          </h2>
          <p className="text-xs text-slate-500 font-medium">One-click AI environmental report synthesis for city administrators, media advisories, and municipal audits.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3.5 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all">
            <Download className="w-4 h-4" /> Export PDF
          </button>
          <button className="px-3.5 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all">
            <Mail className="w-4 h-4" /> Email Report
          </button>
          <button className="px-3.5 py-2 rounded-2xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </div>

      {/* Report Type Selector Buttons */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
        {(['Today', 'Weekly', 'Monthly', 'Emergency'] as const).map((t) => (
          <button
            key={t}
            onClick={() => handleGenerate(t)}
            className={`px-5 py-3 rounded-2xl text-xs font-black transition-all flex items-center gap-2 ${
              reportType === t
                ? t === 'Emergency'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/30'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-4 h-4" /> {t} Report
          </button>
        ))}
      </div>

      {/* Generated Report Showcase Card */}
      <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl space-y-6 relative overflow-hidden">
        
        {loading ? (
          <div className="py-16 flex flex-col items-center justify-center text-center space-y-3">
            <RefreshCw className="w-8 h-8 text-[#2563EB] animate-spin" />
            <p className="text-xs font-mono font-bold text-slate-500">Synthesizing AI Environmental Story Report...</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">AirPulse AI Story Engine</span>
                <h3 className="text-xl font-black text-[#0F172A] mt-0.5">{reportType} Environmental Report</h3>
              </div>
              <span className="text-xs font-mono font-semibold text-slate-400">Generated: {new Date().toLocaleTimeString()}</span>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 text-sm font-medium text-slate-800 leading-relaxed space-y-4">
              <p className="text-base font-bold text-[#0F172A]">Executive Summary:</p>
              <p className="text-slate-700 italic">"{reportText}"</p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-slate-500 uppercase">Key Report Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                  ⚡ AQI Peak: 178 (Moderate)
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                  🚗 Traffic Contribution: 52%
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                  🌬️ Wind Speed: 4 km/h (Stagnant)
                </div>
              </div>
            </div>
          </>
        )}

      </div>

    </div>
  );
};
