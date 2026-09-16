import React from 'react';
import { SelectedWork } from '@/components/home/SelectedWork';
import { CreativeBackground } from '@/components/ui/CreativeBackground';

export const metadata = {
  title: 'Selected Work & Case Studies | Zylux Software Solutions',
  description: 'Explore verified engineering case studies, e-commerce architectures, threat intelligence platforms, and digital growth campaigns by Zylux.'
};

export default function WorkPage() {
  return (
    <div className="relative py-10 md:py-14 bg-[#0B0A0F] overflow-hidden">
      <CreativeBackground variant="geometry" overlayOpacity="opacity-35" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase font-bold">
          PROVEN PORTFOLIO
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-2 tracking-tight">
          Case Studies & Results
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white/70 font-sans leading-relaxed">
          Explore how Zylux engineers platforms that handle viral traffic, protects sensitive data with zero-trust architectures, and generates scalable revenue.
        </p>
      </div>

      <div className="relative z-10">
        <SelectedWork />
      </div>
    </div>
  );
}
