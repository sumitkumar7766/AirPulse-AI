'use client';

import React, { useState } from 'react';
import { Camera, CheckCircle2, ShieldAlert, MapPin, Send, Sparkles } from 'lucide-react';

export const CitizenComplaintsView: React.FC = () => {
  const [issueType, setIssueType] = useState('Waste Burning');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const complaintsList = [
    { id: 'CMP-101', issue: 'Waste Burning', confidence: 94, severity: 'High', location: 'Bhopal Bypass Road', status: 'AI Verified & Inspection Dispatched', time: '10 mins ago', lat: 23.25, lng: 77.41 },
    { id: 'CMP-102', issue: 'Factory Smoke Emission', confidence: 91, severity: 'Critical', location: 'Industrial Sector 3', status: 'Notice Issued', time: '25 mins ago', lat: 23.28, lng: 77.45 },
    { id: 'CMP-103', issue: 'Construction Dust', confidence: 88, severity: 'Medium', location: 'MP Nagar Zone 2', status: 'Anti-Smog Gun Deployed', time: '1 hour ago', lat: 23.23, lng: 77.43 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-6 text-[#0F172A] font-sans pb-10">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
            <Camera className="w-6 h-6 text-[#2563EB]" /> Citizen Complaint Portal + AI Automated Verification
          </h2>
          <p className="text-xs text-slate-500 font-medium">Citizens report pollution violations; computer vision AI automatically verifies issue, confidence & dispatches enforcement.</p>
        </div>
        <span className="px-4 py-2 rounded-2xl bg-[#EFF6FF] border border-blue-200 text-[#2563EB] font-bold text-xs">
          3 COMPLAINTS VERIFIED TODAY
        </span>
      </div>

      {/* Grid: Form Left (50%) & AI Verified Feed Right (50%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Form Column */}
        <div className="lg:col-span-6 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4">
          <h3 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2">
            <Send className="w-4 h-4 text-[#2563EB]" /> Submit Environmental Complaint
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
            <div>
              <label className="block text-slate-600 mb-1">Pollution Issue Type</label>
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
              >
                <option>Waste Burning</option>
                <option>Factory Smoke</option>
                <option>Construction Dust</option>
                <option>Garbage Burning</option>
                <option>Traffic Congestion</option>
                <option>Illegal Emissions</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-600 mb-1">Description & Location</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe illegal burning, industrial smoke, or unpaved road dust..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            {/* Simulated Image Upload Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 text-center space-y-2 cursor-pointer hover:bg-blue-50/50 transition-all">
              <Camera className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-slate-500 font-medium">Click to upload photo evidence for AI computer vision scan</p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Submit Report for AI Verification
            </button>
          </form>

          {submitted && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Complaint submitted! Computer Vision AI verified "Waste Burning" with 94% confidence.
            </div>
          )}
        </div>

        {/* AI Verified Feed Column */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-500" /> AI Verified Live Complaint Feed
          </h3>

          <div className="space-y-3">
            {complaintsList.map((c, idx) => (
              <div key={idx} className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#2563EB]">{c.id}</span>
                  <span className="px-2.5 py-0.5 text-[10px] font-black rounded-full bg-rose-100 text-rose-700">
                    {c.severity} Severity
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-[#0F172A]">{c.issue}</h4>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" /> {c.location} • {c.time}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs font-medium space-y-1">
                  <div className="flex items-center justify-between font-bold text-[#2563EB]">
                    <span>AI Analysis Verification:</span>
                    <span>Confidence {c.confidence}%</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">{c.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
