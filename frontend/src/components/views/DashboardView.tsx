'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MetricsOverview } from '../MetricsOverview';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Factory,
  Siren,
  Satellite,
  Trees,
  HeartPulse,
  ChevronDown,
  Layers,
  Building2,
  Car,
  Wind,
  Radio,
  SlidersHorizontal,
  Bot
} from 'lucide-react';
import { DashboardData } from '../../types';

interface DashboardViewProps {
  dashboardData?: DashboardData;
  isLoading?: boolean;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ dashboardData, isLoading }) => {
  const [selectedCityTool, setSelectedCityTool] = useState<'Pollution' | 'Buildings' | 'Traffic' | 'Weather' | 'Sensors'>('Pollution');

  const trend7DaysData = [
    { day: '14 May', aqi: 120 },
    { day: '15 May', aqi: 155 },
    { day: '16 May', aqi: 225 },
    { day: '17 May', aqi: 210 },
    { day: '18 May', aqi: 185 },
    { day: '19 May', aqi: 178, active: true },
    { day: '20 May', aqi: 240 }
  ];

  const sourceData = [
    { name: 'Traffic', value: 52, color: '#3B82F6' },
    { name: 'Construction', value: 22, color: '#F59E0B' },
    { name: 'Industries', value: 15, color: '#8B5CF6' },
    { name: 'Waste Burning', value: 7, color: '#06B6D4' },
    { name: 'Others', value: 4, color: '#64748B' }
  ];

  const hotspotsList = [
    { zone: 'MP Nagar', aqi: 285, risk: 94, priority: 'High', action: 'Inspect Now', buttonColor: 'bg-rose-50 text-rose-600 border-rose-200' },
    { zone: 'Industrial Area', aqi: 248, risk: 88, priority: 'High', action: 'Inspect Now', buttonColor: 'bg-rose-50 text-rose-600 border-rose-200' },
    { zone: 'ISBT Area', aqi: 212, risk: 78, priority: 'Medium', action: 'Monitor', buttonColor: 'bg-blue-50 text-blue-600 border-blue-200' },
    { zone: 'Habib Ganj', aqi: 168, risk: 58, priority: 'Medium', action: 'Monitor', buttonColor: 'bg-blue-50 text-blue-600 border-blue-200' },
    { zone: 'Kolar Road', aqi: 120, risk: 42, priority: 'Low', action: 'Observe', buttonColor: 'bg-slate-100 text-slate-600 border-slate-200' }
  ];

  const healthAdvisories = [
    { group: 'Children', text: 'Limit outdoor play', dot: 'bg-amber-400' },
    { group: 'Senior Citizens', text: 'Use mask outdoors', dot: 'bg-orange-500' },
    { group: 'Asthma Patients', text: 'Avoid heavy exertion', dot: 'bg-rose-500' },
    { group: 'Outdoor Workers', text: 'Take frequent breaks', dot: 'bg-amber-400' },
    { group: 'General Public', text: 'Use mask if needed', dot: 'bg-amber-400' }
  ];

  return (
    <div className="space-y-6 text-[#0F172A] font-sans pb-10">
      
      {/* 6 Top Indicator Cards */}
      <MetricsOverview data={dashboardData} isLoading={isLoading} />

      {/* Main 3-Column Grid Layout matching reference image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ========================================================= */}
        {/* COLUMN 1: LEFT SIDE (Map + 3D Digital Twin) - 5 cols */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Card 1: Air Quality Intelligence Map */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-[#0F172A]">Air Quality Intelligence Map</h3>
              <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live
              </span>
            </div>

            {/* Map Canvas Frame */}
            <div className="relative w-full h-[260px] rounded-2xl bg-[#F1F5F9] border border-slate-200 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
              
              {/* Map Heatmap Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 via-amber-200/50 to-rose-300/60 opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
              
              {/* Map Title & Zoom Controls */}
              <div className="z-10 flex items-start justify-between">
                <div className="flex flex-col gap-1 bg-white/90 p-1 rounded-xl border border-slate-200 shadow-sm">
                  <button className="w-7 h-7 rounded-lg text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center">+</button>
                  <button className="w-7 h-7 rounded-lg text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center">-</button>
                  <div className="h-px bg-slate-200 my-0.5" />
                  <button className="w-7 h-7 rounded-lg text-slate-700 hover:bg-slate-100 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-blue-600" />
                  </button>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200 shadow-sm text-xs font-extrabold text-[#0F172A]">
                  Bhopal Region
                </div>
              </div>

              {/* Map Heatmap Pin Markers */}
              <div className="z-10 relative w-full h-full flex items-center justify-center">
                <div className="absolute top-10 left-16 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-emerald-300 shadow-sm text-[10px] font-bold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Good
                </div>
                <div className="absolute top-12 right-20 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-amber-300 shadow-sm text-[10px] font-bold text-amber-700">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> Moderate
                </div>
                <div className="absolute bottom-16 left-28 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-orange-300 shadow-sm text-[10px] font-bold text-orange-700">
                  <span className="w-2 h-2 rounded-full bg-orange-500" /> Unhealthy
                </div>
                <div className="absolute bottom-12 right-16 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-purple-300 shadow-sm text-[10px] font-bold text-purple-700">
                  <span className="w-2 h-2 rounded-full bg-purple-500" /> Very Unhealthy
                </div>
              </div>

              {/* Bottom Legend Color Bar */}
              <div className="z-10 grid grid-cols-5 text-[9px] font-extrabold text-center rounded-xl bg-white/95 border border-slate-200 p-1.5 shadow-sm">
                <div className="text-emerald-700 border-r border-slate-200">Good<br /><span className="text-[8px] font-semibold text-slate-400">0-50</span></div>
                <div className="text-amber-700 border-r border-slate-200">Moderate<br /><span className="text-[8px] font-semibold text-slate-400">51-100</span></div>
                <div className="text-orange-700 border-r border-slate-200">Unhealthy<br /><span className="text-[8px] font-semibold text-slate-400">101-200</span></div>
                <div className="text-rose-700 border-r border-slate-200">Very Unhealthy<br /><span className="text-[8px] font-semibold text-slate-400">201-300</span></div>
                <div className="text-purple-700">Hazardous<br /><span className="text-[8px] font-semibold text-slate-400">301+</span></div>
              </div>

            </div>
          </div>

          {/* Card 2: 3D Smart City Digital Twin */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-[#0F172A]">3D Smart City Digital Twin</h3>
              <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live
              </span>
            </div>

            {/* 3D City Preview Box */}
            <div className="relative w-full h-[240px] rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
              
              {/* Simulated 3D City Mesh Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
              
              {/* Floating AQI Pills over 3D City */}
              <div className="z-10 relative w-full h-full flex items-center justify-around">
                <div className="px-2.5 py-1 rounded-xl bg-[#10B981]/90 border border-white/40 text-white text-[10px] font-black shadow-lg animate-pulse">
                  AQI 82 <span className="font-semibold text-[8px]">Good</span>
                </div>
                <div className="px-2.5 py-1 rounded-xl bg-[#F59E0B]/90 border border-white/40 text-white text-[10px] font-black shadow-lg animate-pulse">
                  AQI 145 <span className="font-semibold text-[8px]">Moderate</span>
                </div>
                <div className="px-2.5 py-1 rounded-xl bg-[#EF4444]/90 border border-white/40 text-white text-[10px] font-black shadow-lg animate-pulse">
                  AQI 210 <span className="font-semibold text-[8px]">Poor</span>
                </div>
                <div className="px-2.5 py-1 rounded-xl bg-[#9333EA]/90 border border-white/40 text-white text-[10px] font-black shadow-lg animate-pulse">
                  AQI 285 <span className="font-semibold text-[8px]">Very Unhealthy</span>
                </div>
              </div>

              {/* Bottom 5 Toolbar Buttons */}
              <div className="z-10 flex items-center justify-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/20 text-[10px] font-bold text-white">
                <button
                  onClick={() => setSelectedCityTool('Buildings')}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${selectedCityTool === 'Buildings' ? 'bg-white text-slate-900 shadow-sm' : 'hover:bg-white/20'}`}
                >
                  <Building2 className="w-3 h-3" /> Buildings
                </button>
                <button
                  onClick={() => setSelectedCityTool('Traffic')}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${selectedCityTool === 'Traffic' ? 'bg-white text-slate-900 shadow-sm' : 'hover:bg-white/20'}`}
                >
                  <Car className="w-3 h-3" /> Traffic
                </button>
                <button
                  onClick={() => setSelectedCityTool('Pollution')}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${selectedCityTool === 'Pollution' ? 'bg-[#2563EB] text-white shadow-sm font-extrabold' : 'hover:bg-white/20'}`}
                >
                  <Wind className="w-3 h-3" /> Pollution
                </button>
                <button
                  onClick={() => setSelectedCityTool('Weather')}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${selectedCityTool === 'Weather' ? 'bg-white text-slate-900 shadow-sm' : 'hover:bg-white/20'}`}
                >
                  <Radio className="w-3 h-3" /> Weather
                </button>
                <button
                  onClick={() => setSelectedCityTool('Sensors')}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${selectedCityTool === 'Sensors' ? 'bg-white text-slate-900 shadow-sm' : 'hover:bg-white/20'}`}
                >
                  <SlidersHorizontal className="w-3 h-3" /> Sensors
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* COLUMN 2: CENTER SIDE (Trend + Sources + Hotspots) - 4 cols */}
        {/* ========================================================= */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Card 1: AQI Trend (7 Days) */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-[#0F172A]">AQI Trend (7 Days)</h3>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600">
                <span>7 Days</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Recharts Line Chart */}
            <div className="w-full h-[170px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trend7DaysData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="day" stroke="#94A3B8" tick={{ fontSize: 10, fontWeight: 600 }} />
                  <YAxis stroke="#94A3B8" tick={{ fontSize: 10, fontWeight: 600 }} domain={[0, 300]} />
                  <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }} />
                  <Line type="monotone" dataKey="aqi" stroke="#2563EB" strokeWidth={3} dot={{ r: 4, fill: '#2563EB' }} activeDot={{ r: 7 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Card 2: Pollution Sources */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-3">
            <h3 className="text-base font-extrabold text-[#0F172A]">Pollution Sources</h3>
            
            <div className="grid grid-cols-12 gap-3 items-center">
              {/* Donut Chart */}
              <div className="col-span-5 h-[130px] relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={sourceData} cx="50%" cy="50%" innerRadius={36} outerRadius={54} paddingAngle={3} dataKey="value">
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-[9px] font-bold text-slate-400">Total</span>
                  <span className="text-xs font-black text-[#0F172A]">100%</span>
                </div>
              </div>

              {/* Legend List */}
              <div className="col-span-7 space-y-1.5 text-xs font-bold">
                {sourceData.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[#0F172A]">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                      <span className="text-slate-600 text-[11px] font-semibold">{s.name}</span>
                    </span>
                    <span className="font-mono text-xs">{s.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Pollution Hotspots Table */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-[#0F172A]">Pollution Hotspots</h3>
              <Link href="/hotspots" className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-0.5">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                    <th className="pb-2">Zone</th>
                    <th className="pb-2">AQI</th>
                    <th className="pb-2">Risk Score</th>
                    <th className="pb-2">Priority</th>
                    <th className="pb-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 font-semibold text-[11px]">
                  {hotspotsList.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-2.5 font-bold text-[#0F172A]">{row.zone}</td>
                      <td className="py-2.5 font-mono text-rose-600 font-bold">{row.aqi}</td>
                      <td className="py-2.5 font-mono text-slate-600">{row.risk}</td>
                      <td className="py-2.5">
                        <span className={`px-2 py-0.5 text-[9px] font-black rounded ${row.priority === 'High' ? 'bg-rose-100 text-rose-700' : row.priority === 'Medium' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'}`}>
                          {row.priority}
                        </span>
                      </td>
                      <td className="py-2.5 text-right">
                        <button className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border ${row.buttonColor}`}>
                          {row.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* COLUMN 3: RIGHT SIDE (AI Insight + Health + Quick Actions) - 3 cols */}
        {/* ========================================================= */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Card 1: AI Insight */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-50/90 via-slate-50 to-purple-50/60 border border-blue-100 shadow-md space-y-3 relative overflow-hidden">
            <div className="flex items-center gap-2 text-[#2563EB]">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <h3 className="text-sm font-black">AI Insight</h3>
            </div>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              AQI in North Bhopal is expected to increase by <strong className="text-rose-600">18%</strong> within the next 24 hours due to low wind speed and high traffic density.
            </p>
            <Link
              href="/copilot"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:underline pt-1"
            >
              View Full Insight <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Health Advisory */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-emerald-600">
                <HeartPulse className="w-4 h-4" />
                <h3 className="text-sm font-extrabold text-[#0F172A]">Health Advisory</h3>
              </div>
              <span className="px-2 py-0.5 text-[9px] font-extrabold rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                AQI 178 - Moderate
              </span>
            </div>

            <div className="space-y-2 pt-1 text-xs font-semibold">
              {healthAdvisories.map((h, idx) => (
                <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-700">{h.group}</span>
                  <span className="text-slate-500 font-medium flex items-center gap-1 text-[11px]">
                    {h.text}
                    <span className={`w-2 h-2 rounded-full ${h.dot}`} />
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/health"
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:underline pt-1"
            >
              View Full Advisory <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: AI Copilot Quick Actions */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-purple-600">
              <Bot className="w-4 h-4" />
              <h3 className="text-sm font-extrabold text-[#0F172A]">AI Copilot Quick Actions</h3>
            </div>

            <div className="space-y-2 pt-1">
              <Link
                href="/copilot"
                className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200/80 text-xs font-bold text-slate-700 hover:text-[#2563EB] transition-all group"
              >
                <span className="flex items-center gap-2">🧙 Which area is most polluted?</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/copilot"
                className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200/80 text-xs font-bold text-slate-700 hover:text-[#2563EB] transition-all group"
              >
                <span className="flex items-center gap-2">🔮 Predict AQI for tomorrow</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/copilot"
                className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200/80 text-xs font-bold text-slate-700 hover:text-[#2563EB] transition-all group"
              >
                <span className="flex items-center gap-2">📋 Suggest inspection plan</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/copilot"
                className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200/80 text-xs font-bold text-slate-700 hover:text-[#2563EB] transition-all group"
              >
                <span className="flex items-center gap-2">💡 How can we reduce pollution?</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* BOTTOM ROW: 6 Feature Highlights Pill Cards matching reference */}
      {/* ========================================================= */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
        
        <Link href="/forecast" className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 group">
          <div className="p-2 rounded-xl bg-blue-50 text-[#2563EB] w-max group-hover:scale-110 transition-transform">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-[#0F172A]">AI AQI Forecasting</h4>
            <p className="text-[10px] text-slate-400 font-semibold mt-0.5 leading-snug">Predict air quality for next 24h, 48h & 7 days</p>
          </div>
        </Link>

        <Link href="/attribution" className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 group">
          <div className="p-2 rounded-xl bg-amber-50 text-amber-500 w-max group-hover:scale-110 transition-transform">
            <Factory className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-[#0F172A]">Pollution Source Engine</h4>
            <p className="text-[10px] text-slate-400 font-semibold mt-0.5 leading-snug">Identify major pollution sources with AI</p>
          </div>
        </Link>

        <Link href="/enforcement" className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 group">
          <div className="p-2 rounded-xl bg-emerald-50 text-emerald-500 w-max group-hover:scale-110 transition-transform">
            <Siren className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-[#0F172A]">Enforcement Intelligence</h4>
            <p className="text-[10px] text-slate-400 font-semibold mt-0.5 leading-snug">AI suggests inspection & action plans</p>
          </div>
        </Link>

        <Link href="/satellite" className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 group">
          <div className="p-2 rounded-xl bg-purple-50 text-purple-500 w-max group-hover:scale-110 transition-transform">
            <Satellite className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-[#0F172A]">Satellite Intelligence</h4>
            <p className="text-[10px] text-slate-400 font-semibold mt-0.5 leading-snug">Real-time satellite data and overlays</p>
          </div>
        </Link>

        <Link href="/recommendations" className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 group">
          <div className="p-2 rounded-xl bg-cyan-50 text-cyan-500 w-max group-hover:scale-110 transition-transform">
            <Trees className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-[#0F172A]">Smart City Insights</h4>
            <p className="text-[10px] text-slate-400 font-semibold mt-0.5 leading-snug">Data-driven recommendations for cleaner cities</p>
          </div>
        </Link>

        <Link href="/health" className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 group">
          <div className="p-2 rounded-xl bg-rose-50 text-rose-500 w-max group-hover:scale-110 transition-transform">
            <HeartPulse className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-[#0F172A]">Health Risk Advisory</h4>
            <p className="text-[10px] text-slate-400 font-semibold mt-0.5 leading-snug">Protect citizens with AI-powered health alerts</p>
          </div>
        </Link>

      </div>

    </div>
  );
};
