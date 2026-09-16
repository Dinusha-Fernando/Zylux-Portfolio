import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { AlertTriangle, Terminal, ArrowRight, CornerDownRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 bg-[#0B0A0F] relative overflow-hidden">
      <CreativeBackground variant="geometry" overlayOpacity="opacity-35" />
      <div className="max-w-xl w-full rounded-3xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF4F9A]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-[#241923] border border-[#2A2530] flex items-center justify-center mx-auto mb-6 text-[#FF4F9A]">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="font-mono text-xs text-[#FF8A45] tracking-widest uppercase mb-2">
          ERROR 404 // HTTP_NOT_FOUND
        </div>

        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-3">
          This route doesn't exist.
        </h1>

        <p className="text-sm sm:text-base text-[#D7D3DC]/80 mb-8 font-sans leading-relaxed">
          The requested path could not be resolved by the Zylux edge router. The packet may have been dropped or relocated.
        </p>

        {/* Animated route visualizer */}
        <div className="p-4 rounded-xl bg-[#0B0A0F] border border-[#2A2530] font-mono text-xs text-left mb-8 space-y-1.5 text-[#D7D3DC]">
          <div className="flex items-center gap-2 text-[#A7A1AC]">
            <span>GET /requested-route</span>
            <span>→</span>
            <span className="text-[#FF6B61]">FAILED</span>
          </div>
          <div className="flex items-center gap-2 text-[#FF8A45]">
            <CornerDownRight className="w-3.5 h-3.5" />
            <span>REDIRECTING TO ORIGIN: https://zylux.com/</span>
          </div>
        </div>

        <Button href="/" size="lg" showArrow variant="primary">
          Return to Zylux Core
        </Button>
      </div>
    </div>
  );
}
