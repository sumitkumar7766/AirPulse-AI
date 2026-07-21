'use client';

import React from 'react';
import { TrendingUp, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { AQICharts } from '../AQICharts';

export const ForecastView: React.FC = () => {
  const forecastItems = [
    { horizon: '24 Hour Prediction', aqi: 205, confidence: 94, category: 'Very Unhealthy', impact: '+15% Increase', desc: 'Stagnant boundary layer meteorology combined with peak traffic NO2 accumulation.' },
    { horizon: '48 Hour Prediction', aqi: 220, confidence: 91, category: 'Very Unhealthy', impact: '+23% Peak', desc: 'Dense stubble biomass plume arrival over northern transport corridor.' },
    { horizon: '72 Hour Prediction', aqi: 195, confidence: 88, category: 'Unhealthy', impact: '-11% Dispersion', desc: 'Surface wind velocity expected to pick up to 14 km/h.' },
    { horizon: '7 Day Prediction', aqi: 138, confidence: 82, category: 'Moderate', impact: '-32% Rain Front', desc: 'Westerly rain front entering valley corridor and clearing particulate matter.' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-400" /> Neural AQI Predictive Forecasting Engine
          </h2>
          <p className="text-xs text-gray-400">Multi-Horizon Deep Neural Network Trajectory & Confidence Assessment</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400 text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> Predictive Accuracy: 94.2%
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <AQICharts />

      {/* Forecast Horizons Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {forecastItems.map((item, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-surface/80 border border-surfaceLight flex flex-col justify-between space-y-3 shadow-xl">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold">{item.horizon}</span>
              <div className="flex items-baseline justify-between mt-2">
                <h1 className="text-4xl font-extrabold text-white">{item.aqi}</h1>
                <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full border ${
                  item.aqi > 200 ? 'bg-purple-500/20 text-purple-400 border-purple-500/40' : 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                }`}>
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-2">{item.desc}</p>
            </div>

            <div className="pt-3 border-t border-surfaceLight/60 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span>Confidence: <strong className="text-emerald-400">{item.confidence}%</strong></span>
              <span className="text-purple-400">{item.impact}</span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Explanation Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/40 to-surface/90 border border-purple-500/30 text-xs text-gray-300 flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-purple-400 shrink-0 animate-pulse" />
        <span>
          <strong>AI Forecast Agent Reasoning:</strong> Stagnant wind speeds combined with morning boundary inversion layer will trap vehicular NO2 and industrial PM2.5 near ground level for the next 48 hours. Enforcement action is recommended prior to Wednesday peak.
        </span>
      </div>

    </div>
  );
};
