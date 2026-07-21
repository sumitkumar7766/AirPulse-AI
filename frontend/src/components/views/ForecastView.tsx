'use client';

import React from 'react';
import { TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';
import { AQICharts } from '../AQICharts';

export const ForecastView: React.FC = () => {
  const forecastItems = [
    { horizon: '24 Hour Prediction', aqi: 205, confidence: 94, category: 'Very Unhealthy', impact: '+15% Increase', desc: 'Stagnant boundary layer meteorology combined with peak traffic NO2 accumulation.' },
    { horizon: '48 Hour Prediction', aqi: 220, confidence: 91, category: 'Very Unhealthy', impact: '+23% Peak', desc: 'Dense stubble biomass plume arrival over northern transport corridor.' },
    { horizon: '72 Hour Prediction', aqi: 195, confidence: 88, category: 'Unhealthy', impact: '-11% Dispersion', desc: 'Surface wind velocity expected to pick up to 14 km/h.' },
    { horizon: '7 Day Prediction', aqi: 138, confidence: 82, category: 'Moderate', impact: '-32% Rain Front', desc: 'Westerly rain front entering valley corridor and clearing particulate matter.' }
  ];

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" /> Neural AQI Predictive Forecasting Engine
          </h2>
          <p className="text-xs text-slate-500 font-medium">Multi-Horizon Deep Neural Network Trajectory & Confidence Assessment</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-600" /> Predictive Accuracy: 94.2%
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <AQICharts />

      {/* Forecast Horizons Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {forecastItems.map((item, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-3 shadow-md">
            <div>
              <span className="text-xs font-mono text-blue-600 uppercase font-bold">{item.horizon}</span>
              <div className="flex items-baseline justify-between mt-2">
                <h1 className="text-4xl font-black text-slate-900">{item.aqi}</h1>
                <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full border ${
                  item.aqi > 200 ? 'bg-purple-100 text-purple-700 border-purple-300' : 'bg-rose-100 text-rose-700 border-rose-300'
                }`}>
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-2 leading-relaxed">{item.desc}</p>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500 font-semibold">
              <span>Confidence: <strong className="text-emerald-600">{item.confidence}%</strong></span>
              <span className="text-purple-600 font-bold">{item.impact}</span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Explanation Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 text-xs text-slate-700 flex items-center gap-3 shadow-sm font-medium">
        <Sparkles className="w-5 h-5 text-purple-600 shrink-0 animate-pulse" />
        <span>
          <strong>AI Forecast Agent Reasoning:</strong> Stagnant wind speeds combined with morning boundary inversion layer will trap vehicular NO2 and industrial PM2.5 near ground level for the next 48 hours. Enforcement action is recommended prior to Wednesday peak.
        </span>
      </div>

    </div>
  );
};
