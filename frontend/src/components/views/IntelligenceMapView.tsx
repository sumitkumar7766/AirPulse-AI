'use client';

import React, { useState } from 'react';
import { Layers, MapPin, Wind, Flame, Navigation, Radio, Eye } from 'lucide-react';
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
    <div className="space-y-6">
      
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" /> Air Quality Intelligence Geospatial Map
          </h2>
          <p className="text-xs text-gray-400">Palantir Gotham Class GIS Layer Analysis & Station Telemetry</p>
        </div>

        {/* Layers Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surfaceLight/60 border border-surfaceLight text-xs overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveLayer('heatmap')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${activeLayer === 'heatmap' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
          >
            🔥 Heatmap
          </button>
          <button
            onClick={() => setActiveLayer('stations')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${activeLayer === 'stations' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
          >
            📡 Stations
          </button>
          <button
            onClick={() => setActiveLayer('traffic')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${activeLayer === 'traffic' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
          >
            🚗 Traffic Layer
          </button>
          <button
            onClick={() => setActiveLayer('hotspots')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${activeLayer === 'hotspots' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
          >
            💥 Hotspots
          </button>
          <button
            onClick={() => setActiveLayer('satellite')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${activeLayer === 'satellite' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
          >
            🛰 Sentinel NO2
          </button>
        </div>
      </div>

      {/* Main Map Box + Sidebar Popup Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Map Canvas Frame */}
        <div className="lg:col-span-2 min-h-[460px] rounded-2xl bg-background/90 border border-surfaceLight relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
          
          {/* Simulated Dark Mode Map Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1f293d_1px,transparent_1px)] [background-size:20px_20px] opacity-70" />
          
          {/* Simulated Heatmap Plume Gradient Overlay */}
          {activeLayer === 'heatmap' && (
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-950/40 via-amber-950/30 to-emerald-950/20 pointer-events-none blur-3xl animate-pulse" />
          )}

          {/* Top Status */}
          <div className="z-10 flex items-center justify-between">
            <span className="px-3 py-1.5 rounded-xl bg-surface/90 border border-surfaceLight text-xs font-mono text-cyan-400 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5" /> LAT: {currentStation.lat} | LNG: {currentStation.lng}
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-surface/90 border border-surfaceLight text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 animate-ping" /> LAYER ACTIVE: {activeLayer.toUpperCase()}
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
                    ? 'bg-surface/90 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-surface/60 border-surfaceLight/80 hover:bg-surface/80'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-300 font-bold">{s.name.split(' ')[0]}</span>
                  <span className={`px-2 py-0.5 rounded-md font-bold ${s.aqi > 250 ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {s.aqi} AQI
                  </span>
                </div>
                <div className="text-[11px] text-gray-400 flex justify-between">
                  <span>PM2.5: {s.pm25} µg/m³</span>
                  <span>PM10: {s.pm10}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Map Controls */}
          <div className="z-10 flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-surfaceLight/60">
            <span>Tile Layer: Esri Dark Gray Canvas / OpenStreetMap</span>
            <span className="text-purple-400 font-mono">REST Endpoint: /api/hotspots & /api/aqi</span>
          </div>
        </div>

        {/* Right Station Popup Card Details */}
        <div className="lg:col-span-1 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl p-6 shadow-2xl space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40">
                {currentStation.status}
              </span>
              <Eye className="w-4 h-4 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white">{currentStation.name}</h3>
            <p className="text-xs text-gray-400 mt-1">Real-time CEMS Ground Telemetry Sensor</p>

            {/* AQI Meter */}
            <div className="my-5 p-4 rounded-xl bg-background/80 border border-surfaceLight text-center">
              <span className="text-xs font-mono text-gray-400 uppercase">Live Station Index</span>
              <h1 className="text-5xl font-extrabold text-rose-400 mt-1">{currentStation.aqi}</h1>
              <p className="text-xs text-gray-300 mt-1">Category: {currentStation.status}</p>
            </div>

            {/* Station Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-surfaceLight/40 border border-surfaceLight">
                <span className="text-gray-400">PM2.5 Level</span>
                <p className="text-base font-bold text-cyan-400">{currentStation.pm25} µg/m³</p>
              </div>
              <div className="p-3 rounded-lg bg-surfaceLight/40 border border-surfaceLight">
                <span className="text-gray-400">PM10 Level</span>
                <p className="text-base font-bold text-emerald-400">{currentStation.pm10} µg/m³</p>
              </div>
              <div className="p-3 rounded-lg bg-surfaceLight/40 border border-surfaceLight">
                <span className="text-gray-400">Temperature</span>
                <p className="text-base font-bold text-amber-400">{currentStation.temp}°C</p>
              </div>
              <div className="p-3 rounded-lg bg-surfaceLight/40 border border-surfaceLight">
                <span className="text-gray-400">Humidity</span>
                <p className="text-base font-bold text-purple-400">{currentStation.humidity}%</p>
              </div>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-600/30 transition-all">
            Download Station Raw JSON Telemetry
          </button>
        </div>

      </div>

    </div>
  );
};
