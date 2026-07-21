'use client';

import React from 'react';
import { Award, ShieldCheck, Trophy, ArrowUpRight } from 'lucide-react';

export const EnvScoreView: React.FC = () => {
  const cityScores = [
    { city: 'Bhopal', score: 78, category: 'Good', greenCover: '28%', trafficDensity: 'Moderate', complaints: 14, growthRate: '-4%', badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { city: 'Indore', score: 72, category: 'Good', greenCover: '24%', trafficDensity: 'Moderate', complaints: 18, growthRate: '-2%', badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { city: 'Bengaluru', score: 68, category: 'Moderate', greenCover: '22%', trafficDensity: 'High', complaints: 32, growthRate: '+1%', badgeColor: 'bg-amber-50 text-amber-600 border-amber-200' },
    { city: 'Pune', score: 65, category: 'Moderate', greenCover: '20%', trafficDensity: 'Moderate', complaints: 24, growthRate: '0%', badgeColor: 'bg-amber-50 text-amber-600 border-amber-200' },
    { city: 'Mumbai', score: 54, category: 'Moderate', greenCover: '15%', trafficDensity: 'Severe', complaints: 48, growthRate: '+3%', badgeColor: 'bg-amber-50 text-amber-600 border-amber-200' },
    { city: 'Kolkata', score: 48, category: 'Poor', greenCover: '12%', trafficDensity: 'Severe', complaints: 56, growthRate: '+5%', badgeColor: 'bg-rose-50 text-rose-600 border-rose-200' },
    { city: 'Delhi', score: 42, category: 'Critical', greenCover: '10%', trafficDensity: 'Severe', complaints: 92, growthRate: '+8%', badgeColor: 'bg-rose-100 text-rose-700 border-rose-300' }
  ];

  return (
    <div className="space-y-6 text-[#0F172A] font-sans pb-10">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
            <Award className="w-6 h-6 text-[#2563EB]" /> Environmental Intelligence Score Engine
          </h2>
          <p className="text-xs text-slate-500 font-medium">Proprietary 0-100 Municipal Scoring Matrix based on AQI, Green Cover, Traffic, Weather & Complaints</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-50 text-[#2563EB] font-bold text-xs border border-blue-200">
          <ShieldCheck className="w-4 h-4" /> AI Certified Score Matrix
        </div>
      </div>

      {/* Circular Score Cards for Top Cities */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Card 1: Bhopal */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col items-center text-center space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 rounded-full bg-emerald-50 border-4 border-[#10B981] flex flex-col items-center justify-center shadow-lg">
            <span className="text-3xl font-black text-[#10B981]">78</span>
            <span className="text-[9px] font-bold text-slate-400">/ 100</span>
          </div>
          <h3 className="text-lg font-black text-[#0F172A]">Bhopal</h3>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-extrabold">
            Good Category
          </span>
          <p className="text-xs text-slate-500 font-medium">Green Cover: 28% • Growth Rate: -4%</p>
        </div>

        {/* Card 2: Indore */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col items-center text-center space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 rounded-full bg-emerald-50 border-4 border-[#10B981] flex flex-col items-center justify-center shadow-lg">
            <span className="text-3xl font-black text-[#10B981]">72</span>
            <span className="text-[9px] font-bold text-slate-400">/ 100</span>
          </div>
          <h3 className="text-lg font-black text-[#0F172A]">Indore</h3>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-extrabold">
            Good Category
          </span>
          <p className="text-xs text-slate-500 font-medium">Green Cover: 24% • Growth Rate: -2%</p>
        </div>

        {/* Card 3: Delhi */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col items-center text-center space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 rounded-full bg-rose-50 border-4 border-[#EF4444] flex flex-col items-center justify-center shadow-lg">
            <span className="text-3xl font-black text-[#EF4444]">42</span>
            <span className="text-[9px] font-bold text-slate-400">/ 100</span>
          </div>
          <h3 className="text-lg font-black text-[#0F172A]">Delhi</h3>
          <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-xs font-extrabold">
            Critical Category
          </span>
          <p className="text-xs text-slate-500 font-medium">Green Cover: 10% • Growth Rate: +8%</p>
        </div>

      </div>

      {/* City Leaderboard Directory */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4">
        <h3 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" /> Municipal Environmental Leaderboard Rankings
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                <th className="pb-3">Rank</th>
                <th className="pb-3">City</th>
                <th className="pb-3">Score</th>
                <th className="pb-3">Category</th>
                <th className="pb-3">Green Cover</th>
                <th className="pb-3">Traffic</th>
                <th className="pb-3">Complaints</th>
                <th className="pb-3 text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold text-xs">
              {cityScores.map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-3 font-mono font-bold text-[#2563EB]">#{idx + 1}</td>
                  <td className="py-3 font-extrabold text-[#0F172A]">{c.city}</td>
                  <td className="py-3 font-mono font-black text-slate-900">{c.score} / 100</td>
                  <td className="py-3">
                    <span className={`px-2.5 py-0.5 text-[10px] font-extrabold rounded-full border ${c.badgeColor}`}>
                      {c.category}
                    </span>
                  </td>
                  <td className="py-3 text-slate-600">{c.greenCover}</td>
                  <td className="py-3 text-slate-600">{c.trafficDensity}</td>
                  <td className="py-3 font-mono text-slate-600">{c.complaints}</td>
                  <td className="py-3 text-right font-mono font-bold text-emerald-600">{c.growthRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
