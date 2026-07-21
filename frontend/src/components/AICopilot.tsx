'use client';

import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, RefreshCw } from 'lucide-react';
import { useCopilotMutation } from '../hooks/useAirPulseData';

interface AICopilotProps {
  isOpen: boolean;
  onClose: () => void;
  cityName?: string;
  currentAQI?: number;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
  source?: string;
  time: string;
}

export const AICopilot: React.FC<AICopilotProps> = ({
  isOpen,
  onClose,
  cityName = 'New Delhi',
  currentAQI = 178
}) => {
  const [promptInput, setPromptInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Hello! I am your **AirPulse AI Specialist Agent**.\n\nCurrent sensor telemetry for **${cityName}** reports an AQI of **${currentAQI} (Unhealthy)**.\n\nAsk me anything about health advisories, stubble plume trajectories, 7-day predictions, or local hotspot causes!`,
      source: 'AirPulse Environmental Engine',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const copilotMutation = useCopilotMutation();

  const handleSend = async (textToSend?: string) => {
    const queryText = textToSend || promptInput;
    if (!queryText.trim() || copilotMutation.isPending) return;

    const userMsg: Message = {
      sender: 'user',
      text: queryText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setPromptInput('');

    try {
      const response = await copilotMutation.mutateAsync({
        prompt: queryText,
        cityName,
        currentAQI
      });

      const botMsg: Message = {
        sender: 'bot',
        text: response.answer,
        source: response.source,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      const errorMsg: Message = {
        sender: 'bot',
        text: `⚠️ **Connection Error:** Failed to reach AirPulse AI backend at \`POST /api/copilot\`. Please ensure backend server is running on port 5000.`,
        source: 'Error Handler',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-white/95 border-l border-slate-200 backdrop-blur-2xl shadow-2xl flex flex-col justify-between text-slate-900">
      
      {/* Header */}
      <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-blue-100 text-blue-600 border border-blue-200">
            <Bot className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
              AirPulse AI Copilot
              <Sparkles className="w-4 h-4 text-blue-600" />
            </h3>
            <p className="text-xs text-slate-500 font-mono">REST API Agent: <code className="text-purple-600 font-bold">POST /api/copilot</code></p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[88%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none shadow-blue-500/20'
                  : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-bl-none'
              }`}
            >
              <div className="whitespace-pre-wrap font-medium">{msg.text}</div>
              {msg.source && (
                <div className="mt-2 pt-2 border-t border-slate-200 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                  <span>Engine: {msg.source}</span>
                  <span>{msg.time}</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {copilotMutation.isPending && (
          <div className="flex items-center gap-2 text-xs text-blue-600 font-mono bg-blue-50 p-3 rounded-xl border border-blue-200 w-max animate-pulse font-bold">
            <RefreshCw className="w-4 h-4 animate-spin" />
            Executing AI Agent Inference...
          </div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="px-5 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar border-t border-slate-200 bg-slate-50">
        <button
          onClick={() => handleSend('What health precautions should I take today?')}
          className="px-3 py-1.5 rounded-full bg-white hover:bg-blue-50 text-xs font-semibold text-slate-700 whitespace-nowrap transition-all border border-slate-200 shadow-sm"
        >
          🛡️ Health Precautions
        </button>
        <button
          onClick={() => handleSend('Why is the AQI level high in New Delhi?')}
          className="px-3 py-1.5 rounded-full bg-white hover:bg-blue-50 text-xs font-semibold text-slate-700 whitespace-nowrap transition-all border border-slate-200 shadow-sm"
        >
          🔥 Hotspot Causes
        </button>
        <button
          onClick={() => handleSend('What is the 72-hour forecast trajectory?')}
          className="px-3 py-1.5 rounded-full bg-white hover:bg-blue-50 text-xs font-semibold text-slate-700 whitespace-nowrap transition-all border border-slate-200 shadow-sm"
        >
          🔮 72h Forecast
        </button>
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-slate-200 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="Ask AirPulse AI Agent..."
            className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-all shadow-inner"
          />
          <button
            type="submit"
            disabled={!promptInput.trim() || copilotMutation.isPending}
            className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 transition-all shadow-md shadow-blue-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};
