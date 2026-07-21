'use client';

import React, { useState } from 'react';
import { Clock, Play, Pause, RotateCcw, Calendar } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const TimeMachineView: React.FC = () => {
  const [range, setRange] = useState<'7d' | '30d' | '6m' | '1y'>('30d');
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderVal, setSliderVal] = useState(70);

  const timelineData = [
    { label: 'Jan', aqi: 240, score: 45 },
    { label: 'Feb', aqi: 210, score: 52 },
    { label: 'Mar', aqi: 180, score: 60 },
    { label: 'Apr', aqi: 165, score: 65 },
    { label: 'May', aqi: 178, score: 62 },
    { label: 'Jun', aqi: 110, score: 78 },
    { label: 'Jul', aqi: 85, score: 88 }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="space-y-6 text-[#0F172A] font-sans pb-10">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
            <Clock className="w-6 h-6 text-[#2563EB]" /> Air Quality Time Machine & Historical Playback
          </h2>
          <p className="text-xs text-slate-500 font-medium">Travel back through environmental history to analyze historical AQI trends, source shifts, and policy impact.</p>
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-bold">
          {(['7d', '30d', '6m', '1y'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1.5 rounded-xl transition-all ${range === r ? 'bg-[#2563EB] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {r.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Time Machine Playback Bar */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-3 rounded-2xl bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setSliderVal(0)}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Selected Time Point: May 2026
              </span>
              <p className="text-xs text-slate-500 font-medium">AQI Historical Value: 178</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs">
            PLAYBACK SPEED 1X
          </span>
        </div>

        {/* Timeline Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderVal}
          onChange={(e) => setSliderVal(Number(e.target.value))}
          className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
        />
      </div>

      {/* Historical Trend Chart */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-3">
        <h3 className="text-base font-extrabold text-[#0F172A]">Historical Environmental Telemetry Chart</h3>
        <div className="w-full h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="label" stroke="#64748B" tick={{ fontSize: 11, fontWeight: 700 }} />
              <YAxis stroke="#64748B" tick={{ fontSize: 11, fontWeight: 700 }} domain={[0, 300]} />
              <Tooltip contentStyle={{ borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }} />
              <Area type="monotone" dataKey="aqi" name="Historical AQI" stroke="#2563EB" fill="#2563EB" fillOpacity={0.2} strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};
