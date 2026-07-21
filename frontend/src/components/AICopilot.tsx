'use client';

import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
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
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-background/95 border-l border-surfaceLight backdrop-blur-2xl shadow-2xl flex flex-col justify-between">
      
      {/* Header */}
      <div className="p-5 border-b border-surfaceLight flex items-center justify-between bg-surface/50">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-400">
            <Bot className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-1.5">
              AirPulse AI Copilot
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </h3>
            <p className="text-xs text-gray-400">REST API Agent: <code className="text-purple-400">POST /api/copilot</code></p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-surfaceLight transition-all"
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
              className={`max-w-[88%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-br-none shadow-lg shadow-cyan-500/10'
                  : 'bg-surface/90 border border-surfaceLight text-gray-200 rounded-bl-none shadow-xl'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.text}</div>
              {msg.source && (
                <div className="mt-2 pt-2 border-t border-white/10 text-[10px] text-gray-400 font-mono flex items-center justify-between">
                  <span>Engine: {msg.source}</span>
                  <span>{msg.time}</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {copilotMutation.isPending && (
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono bg-surface/80 p-3 rounded-xl border border-surfaceLight w-max animate-pulse">
            <RefreshCw className="w-4 h-4 animate-spin" />
            Executing AI Agent Inference...
          </div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="px-5 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar border-t border-surfaceLight/40">
        <button
          onClick={() => handleSend('What health precautions should I take today?')}
          className="px-3 py-1.5 rounded-full bg-surfaceLight/60 hover:bg-surfaceLight text-xs text-gray-300 whitespace-nowrap transition-all border border-surfaceLight"
        >
          🛡️ Health Precautions
        </button>
        <button
          onClick={() => handleSend('Why is the AQI level high in New Delhi?')}
          className="px-3 py-1.5 rounded-full bg-surfaceLight/60 hover:bg-surfaceLight text-xs text-gray-300 whitespace-nowrap transition-all border border-surfaceLight"
        >
          🔥 Hotspot Causes
        </button>
        <button
          onClick={() => handleSend('What is the 72-hour forecast trajectory?')}
          className="px-3 py-1.5 rounded-full bg-surfaceLight/60 hover:bg-surfaceLight text-xs text-gray-300 whitespace-nowrap transition-all border border-surfaceLight"
        >
          🔮 72h Forecast
        </button>
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-surfaceLight bg-surface/50">
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
            className="flex-1 px-4 py-3 rounded-xl bg-background border border-surfaceLight text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
          />
          <button
            type="submit"
            disabled={!promptInput.trim() || copilotMutation.isPending}
            className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white disabled:opacity-40 transition-all shadow-lg shadow-purple-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};
