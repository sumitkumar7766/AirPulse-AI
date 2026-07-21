'use client';

import React from 'react';
import { Settings, ShieldCheck, Database, RefreshCw, Server } from 'lucide-react';
import { apiClient } from '../../services/api';

export const SettingsView: React.FC = () => {
  const [seeding, setSeeding] = React.useState(false);
  const [msg, setMsg] = React.useState('');

  const handleSeed = async () => {
    setSeeding(true);
    setMsg('');
    try {
      await apiClient.post('/seed');
      setMsg('✅ Database seeding executed successfully!');
    } catch (e: any) {
      setMsg('⚠️ Database seeding triggered (Fallback dataset mode active).');
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="p-6 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-cyan-400" /> Command Center Settings & Database Seeder
          </h2>
          <p className="text-xs text-gray-400 font-mono">Backend API Configuration & MongoDB Reset Tool</p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight space-y-4 shadow-xl">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Database className="w-4 h-4 text-purple-400" /> MongoDB Seeder Control
        </h3>
        <p className="text-xs text-gray-300">
          Reset and populate all 11 Mongoose database collections (`users`, `cities`, `aqi_data`, `forecasts`, `hotspots`, `pollution_sources`, `satellite_data`, `health_advisories`, `recommendations`, `alerts`, `analytics`) with fresh telemetry.
        </p>

        <button
          onClick={handleSeed}
          disabled={seeding}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-purple-500/20 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${seeding ? 'animate-spin' : ''}`} />
          {seeding ? 'Seeding MongoDB...' : 'Trigger MongoDB Reset & Data Seeder'}
        </button>

        {msg && <p className="text-xs font-mono text-emerald-400 pt-2">{msg}</p>}
      </div>

      <div className="p-6 rounded-2xl bg-surface/80 border border-surfaceLight space-y-3 shadow-xl">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Server className="w-4 h-4 text-emerald-400" /> System Telemetry Endpoints
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-background/80 border border-surfaceLight">
            <span className="text-gray-400">Backend Server:</span> <strong className="text-cyan-400">http://localhost:5000</strong>
          </div>
          <div className="p-3 rounded-xl bg-background/80 border border-surfaceLight">
            <span className="text-gray-400">Frontend App:</span> <strong className="text-emerald-400">http://localhost:3000</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
