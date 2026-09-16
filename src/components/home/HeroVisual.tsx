'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Database, Smartphone, Globe, Cpu, BarChart3, Activity, Lock } from 'lucide-react';

export function HeroVisual() {
  const [activeNode, setActiveNode] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const floatingTags = [
    { label: 'WEB', color: 'border-[#D7D3DC]/30 text-[#D7D3DC] bg-[#D7D3DC]/10' },
    { label: 'MOBILE', color: 'border-[#FF8A45]/30 text-[#FF8A45] bg-[#FF8A45]/10' },
    { label: 'CLOUD', color: 'border-[#FF6B61]/30 text-[#FF6B61] bg-[#FF6B61]/10' },
    { label: 'SECURITY', color: 'border-[#FF4F9A]/40 text-[#FF4F9A] bg-[#FF4F9A]/10' },
    { label: 'AI', color: 'border-[#FF4F9A]/30 text-[#FF6F9E] bg-[#FF4F9A]/10' },
    { label: 'GROWTH', color: 'border-[#FF8A45]/30 text-[#FF8A45] bg-[#FF8A45]/10' }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-0 sm:p-2 md:p-4">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4F9A]/15 via-transparent to-[#FF8A45]/15 rounded-3xl blur-2xl pointer-events-none" />

      {/* Outer System Frame - Zylux Graphite & Card Border */}
      <div className="relative w-full min-h-[300px] sm:min-h-[340px] sm:aspect-[4/3] rounded-2xl bg-[#17141D] border border-[#2A2530] backdrop-blur-xl p-3.5 sm:p-5 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/80">
        {/* Frame Top Header */}
        <div className="flex items-center justify-between border-b border-[#2A2530] pb-2 sm:pb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF4F9A] inline-block shadow-sm shadow-[#FF4F9A]/50" />
            <span className="w-2 h-2 rounded-full bg-[#FF6B61] inline-block shadow-sm shadow-[#FF6B61]/50" />
            <span className="w-2 h-2 rounded-full bg-[#FF8A45] inline-block shadow-sm shadow-[#FF8A45]/50" />
            <span className="w-3.5 h-3.5 rounded overflow-hidden ml-1 border border-[#2A2530] inline-flex items-center justify-center bg-[#241923]">
              <img src="/assets/zylux-symbol.png" alt="Z" className="w-full h-full object-cover" />
            </span>
            <span className="ml-1 font-mono text-[9px] sm:text-[11px] text-[#A7A1AC]">ZYLUX_NODE_01</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#FF4F9A] animate-pulse" />
            <span className="font-mono text-[8px] sm:text-[10px] text-[#FF4F9A] font-bold">CLUSTER: ONLINE</span>
          </div>
        </div>

        {/* Floating Tags Row */}
        <div className="flex flex-wrap gap-1 justify-center py-1 sm:py-1.5">
          {floatingTags.map((tag) => (
            <span
              key={tag.label}
              className={`text-[8px] sm:text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border transition-all duration-300 ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Central Dynamic Architecture Visualizer */}
        <div className="relative flex-grow flex items-center justify-center my-0.5 sm:my-1 w-full h-full min-h-[160px] sm:min-h-[170px]">
          {/* SVG Animated Connector Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#332A35]" viewBox="0 0 360 200" fill="none">
            {/* Top Node to Middle Left */}
            <path d="M 180 35 L 65 100" strokeWidth="1.2" strokeDasharray="3 3" />
            {/* Top Node to Middle Center */}
            <path d="M 180 35 L 180 100" strokeWidth="1.2" strokeDasharray="3 3" />
            {/* Top Node to Middle Right */}
            <path d="M 180 35 L 295 100" strokeWidth="1.2" strokeDasharray="3 3" />
            {/* Middle to Bottom */}
            <path d="M 65 125 L 180 170" strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M 180 125 L 180 170" strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M 295 125 L 180 170" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* Pulsing Animated Packets in Signature Accents */}
            <circle cx="180" cy="35" r="2.5" fill="#FF4F9A">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="65" cy="100" r="2.5" fill="#FF6B61">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="295" cy="100" r="2.5" fill="#FF8A45">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Node 1: Zylux API Gateway (Top Center) */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2">
            <div className={`px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#241923] border transition-all duration-300 flex items-center gap-1.5 shadow-md ${
              activeNode === 0 ? 'border-[#FF4F9A] shadow-[#FF4F9A]/30 scale-105' : 'border-[#2A2530]'
            }`}>
              <Lock className="w-3 h-3 text-[#FF4F9A]" />
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white tracking-wide">ZYLUX API</span>
            </div>
          </div>

          {/* Node 2: Web App (Middle Left) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-3">
            <div className={`px-2 sm:px-2.5 py-1.5 rounded-lg bg-[#241923] border transition-all duration-300 flex items-center gap-1.5 shadow-md ${
              activeNode === 1 ? 'border-[#FF6B61] shadow-[#FF6B61]/30 scale-105' : 'border-[#2A2530]'
            }`}>
              <Globe className="w-3 h-3 text-[#FF6B61]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-white">WEB APP</span>
            </div>
          </div>

          {/* Node 3: Cloud Database (Middle Center) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <div className={`px-2 sm:px-2.5 py-1.5 rounded-lg bg-[#241923] border transition-all duration-300 flex items-center gap-1.5 shadow-md ${
              activeNode === 2 ? 'border-[#FF4F9A] shadow-[#FF4F9A]/30 scale-105' : 'border-[#2A2530]'
            }`}>
              <Database className="w-3 h-3 text-[#FF6F9E]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-white">POSTGRES</span>
            </div>
          </div>

          {/* Node 4: Mobile App (Middle Right) */}
          <div className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-3">
            <div className={`px-2 sm:px-2.5 py-1.5 rounded-lg bg-[#241923] border transition-all duration-300 flex items-center gap-1.5 shadow-md ${
              activeNode === 3 ? 'border-[#FF8A45] shadow-[#FF8A45]/30 scale-105' : 'border-[#2A2530]'
            }`}>
              <Smartphone className="w-3 h-3 text-[#FF8A45]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-white">MOBILE</span>
            </div>
          </div>

          {/* Node 5: Real-Time Analytics & Growth (Bottom Center) */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
            <div className={`px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#241923] border transition-all duration-300 flex items-center gap-1.5 shadow-md ${
              activeNode === 4 ? 'border-[#FF8A45] shadow-[#FF8A45]/30 scale-105' : 'border-[#2A2530]'
            }`}>
              <BarChart3 className="w-3 h-3 text-[#FF8A45]" />
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white tracking-wide">ANALYTICS</span>
            </div>
          </div>
        </div>

        {/* Frame Bottom Telemetry Bar */}
        <div className="pt-2 border-t border-[#2A2530] flex items-center justify-between text-[8px] sm:text-[10px] font-mono text-[#A7A1AC]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span>RESILIENCE: 99.99%</span>
            <span>•</span>
            <span>LATENCY: 12ms</span>
          </div>
          <span className="text-[#FF4F9A] font-bold">SECURED</span>
        </div>
      </div>
    </div>
  );
}
