'use client';

import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { TrendingUp, BarChart2, Clock } from 'lucide-react';
import { ForecastDay } from '../types';

interface AQIChartsProps {
  forecasts?: ForecastDay[];
  historical24h?: { time: string; aqi: number; pm25: number; pm10: number; no2: number }[];
}

export const AQICharts: React.FC<AQIChartsProps> = ({ forecasts = [], historical24h = [] }) => {
  const [activeTab, setActiveTab] = useState<'24h' | 'forecast'>('forecast');

  const defaultForecasts: ForecastDay[] = forecasts.length > 0 ? forecasts : [
    { date: 'Today', predictedAQI: 178, minAQI: 165, maxAQI: 190, category: 'Unhealthy', dominantPollutant: 'PM2.5', confidence: 94 },
    { date: 'Tomorrow', predictedAQI: 205, minAQI: 190, maxAQI: 225, category: 'Very Unhealthy', dominantPollutant: 'PM2.5', confidence: 91 },
    { date: '+2 Days', predictedAQI: 220, minAQI: 200, maxAQI: 245, category: 'Very Unhealthy', dominantPollutant: 'PM2.5', confidence: 88 },
    { date: '+3 Days', predictedAQI: 195, minAQI: 175, maxAQI: 210, category: 'Unhealthy', dominantPollutant: 'PM2.5', confidence: 85 },
    { date: '+4 Days', predictedAQI: 160, minAQI: 145, maxAQI: 178, category: 'Unhealthy', dominantPollutant: 'PM10', confidence: 82 },
    { date: '+5 Days', predictedAQI: 138, minAQI: 120, maxAQI: 155, category: 'Unhealthy for Sensitive', dominantPollutant: 'NO2', confidence: 79 },
    { date: '+6 Days', predictedAQI: 115, minAQI: 95, maxAQI: 130, category: 'Moderate', dominantPollutant: 'NO2', confidence: 75 }
  ];

  const default24h = historical24h.length > 0 ? historical24h : [
    { time: '00:00', aqi: 145, pm25: 88, pm10: 140, no2: 32 },
    { time: '03:00', aqi: 152, pm25: 92, pm10: 148, no2: 30 },
    { time: '06:00', aqi: 188, pm25: 122, pm10: 195, no2: 52 },
    { time: '09:00', aqi: 192, pm25: 128, pm10: 205, no2: 60 },
    { time: '12:00', aqi: 178, pm25: 112, pm10: 185, no2: 45 },
    { time: '15:00', aqi: 164, pm25: 98, pm10: 165, no2: 40 },
    { time: '18:00', aqi: 182, pm25: 115, pm10: 188, no2: 55 },
    { time: '21:00', aqi: 195, pm25: 130, pm10: 210, no2: 58 }
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-md p-6 my-6">
      
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-200">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Predictive Trajectory & Telemetry Analytics</h3>
            <p className="text-xs text-slate-500 font-medium">AI ML Predictive Models & Diurnal Telemetry</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveTab('forecast')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'forecast'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" /> 7-Day Forecast
          </button>
          <button
            onClick={() => setActiveTab('24h')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === '24h'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Clock className="w-3.5 h-3.5" /> 24-Hour Cycle
          </button>
        </div>
      </div>

      {/* Chart View */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          {activeTab === 'forecast' ? (
            <AreaChart data={defaultForecasts} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9333ea" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#9333ea" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" stroke="#64748b" tick={{ fontSize: 12, fontWeight: 600 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 12, fontWeight: 600 }} domain={[0, 'dataMax + 40']} />
              <Tooltip
                contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: '12px', color: '#0F172A', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="predictedAQI" name="Predicted AQI" stroke="#9333ea" strokeWidth={3} fillOpacity={1} fill="url(#colorPredicted)" />
            </AreaChart>
          ) : (
            <BarChart data={default24h} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" stroke="#64748b" tick={{ fontSize: 12, fontWeight: 600 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 12, fontWeight: 600 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: '12px', color: '#0F172A', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
              <Bar dataKey="pm25" name="PM2.5 (µg/m³)" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pm10" name="PM10 (µg/m³)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              <Bar dataKey="no2" name="NO2 (ppb)" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

    </div>
  );
};
