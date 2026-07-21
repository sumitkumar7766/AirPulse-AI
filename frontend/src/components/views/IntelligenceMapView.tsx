'use client';

import React, { useState } from 'react';
import { Layers, MapPin, Radio, Navigation, Eye } from 'lucide-react';
import { HotspotRecord } from '../../types';

interface IntelligenceMapViewProps {
  hotspots?: HotspotRecord[];
}

export const IntelligenceMapView: React.FC<IntelligenceMapViewProps> = ({ hotspots = [] }) => {
  const [activeLayer, setActiveLayer] = useState<'heatmap' | 'stations' | 'traffic' | 'hotspots' | 'satellite'>('heatmap');
  const [selectedStation, setSelectedStation] = useState<any | null>(null);

  const stations = [
    { name: 'Anand Vihar Telemetry Station', lat: 28.6502, lng: 77.3150, aqi: 342, pm25: 185, pm10: 280, temp: 32, humidity: 64, status: 'Hazardous' },
    { name: 'ITO Traffic Corridor Station', lat: 28.6289, lng: 77.2405, aqi: 268, pm25: 142, pm10: 210, temp: 31, humidity: 60, status: 'Very Unhealthy' },
    { name: 'RK Puram Weather Station', lat: 28.5644, lng: 77.1724, aqi: 188, pm25: 112, pm10: 175, temp: 30, humidity: 58, status: 'Unhealthy' },
    { name: 'Bhopal MP Nagar Station', lat: 23.2313, lng: 77.4326, aqi: 285, pm25: 168, pm10: 245, temp: 29, humidity: 55, status: 'Very Unhealthy' },
    { name: 'Indore Vijay Nagar Station', lat: 22.7533, lng: 75.8937, aqi: 115, pm25: 58, pm10: 95, temp: 28, humidity: 50, status: 'Moderate' }
  ];

  const currentStation = selectedStation || stations[0];

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" /> Air Quality Intelligence Geospatial Map
          </h2>
          <p className="text-xs text-slate-500 font-medium">Palantir Gotham Class GIS Layer Analysis & Station Telemetry</p>
        </div>

        {/* Layers Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs overflow-x-auto no-scrollbar font-bold">
          <button
            onClick={() => setActiveLayer('heatmap')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeLayer === 'heatmap' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            🔥 Heatmap
          </button>
          <button
            onClick={() => setActiveLayer('stations')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeLayer === 'stations' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            📡 Stations
          </button>
          <button
            onClick={() => setActiveLayer('traffic')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeLayer === 'traffic' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            🚗 Traffic Layer
          </button>
          <button
            onClick={() => setActiveLayer('hotspots')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeLayer === 'hotspots' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            💥 Hotspots
          </button>
          <button
            onClick={() => setActiveLayer('satellite')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeLayer === 'satellite' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            🛰 Sentinel NO2
          </button>
        </div>
      </div>

      {/* Main Map Box + Sidebar Popup Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Map Canvas Frame */}
        <div className="lg:col-span-2 min-h-[460px] rounded-2xl bg-slate-100 border border-slate-200 relative overflow-hidden flex flex-col justify-between p-6 shadow-md">
          
          {/* Simulated Light Mode Map Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
          
          {/* Top Status */}
          <div className="z-10 flex items-center justify-between">
            <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-blue-600 flex items-center gap-1.5 shadow-sm">
              <Navigation className="w-3.5 h-3.5 text-blue-600" /> LAT: {currentStation.lat} | LNG: {currentStation.lng}
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-emerald-600 flex items-center gap-1.5 shadow-sm">
              <Radio className="w-3.5 h-3.5 animate-ping text-emerald-600" /> LAYER ACTIVE: {activeLayer.toUpperCase()}
            </span>
          </div>

          {/* Map Station Markers Pins */}
          <div className="z-10 my-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {stations.map((s, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedStation(s)}
                className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col gap-2 ${
                  currentStation.name === s.name
                    ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-500/40 scale-105'
                    : 'bg-white/90 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-slate-900">{s.name.split(' ')[0]}</span>
                  <span className={`px-2 py-0.5 rounded-md ${s.aqi > 250 ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>
                    {s.aqi} AQI
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 flex justify-between font-medium">
                  <span>PM2.5: {s.pm25} µg/m³</span>
                  <span>PM10: {s.pm10}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Map Controls */}
          <div className="z-10 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-200 font-medium">
            <span>Tile Layer: Esri Light Canvas / OpenStreetMap</span>
            <span className="text-purple-600 font-mono font-bold">REST Endpoint: /api/hotspots & /api/aqi</span>
          </div>
        </div>

        {/* Right Station Popup Card Details */}
        <div className="lg:col-span-1 rounded-2xl bg-white border border-slate-200 p-6 shadow-md space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 border border-rose-200">
                {currentStation.status}
              </span>
              <Eye className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">{currentStation.name}</h3>
            <p className="text-xs text-slate-500 font-medium mt-1">Real-time CEMS Ground Telemetry Sensor</p>

            {/* AQI Meter */}
            <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs font-mono text-slate-500 font-bold uppercase">Live Station Index</span>
              <h1 className="text-5xl font-black text-rose-600 mt-1">{currentStation.aqi}</h1>
              <p className="text-xs text-slate-700 font-semibold mt-1">Category: {currentStation.status}</p>
            </div>

            {/* Station Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-medium">PM2.5 Level</span>
                <p className="text-base font-bold text-blue-600">{currentStation.pm25} µg/m³</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-medium">PM10 Level</span>
                <p className="text-base font-bold text-emerald-600">{currentStation.pm10} µg/m³</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-medium">Temperature</span>
                <p className="text-base font-bold text-amber-600">{currentStation.temp}°C</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-medium">Humidity</span>
                <p className="text-base font-bold text-purple-600">{currentStation.humidity}%</p>
              </div>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all">
            Download Station Raw JSON Telemetry
          </button>
        </div>

      </div>

    </div>
  );
};
