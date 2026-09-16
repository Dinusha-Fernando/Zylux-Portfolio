import React from 'react';
import { marqueeTechnologies } from '@/data/technologies';

export function TechMarquee() {
  return (
    <section className="py-16 bg-[#0B0A0F] border-b border-[#2A2530] overflow-hidden relative">
      {/* Edge gradient masks for infinite look */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#0B0A0F] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0B0A0F] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <span className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase font-bold">
          PRODUCTION-GRADE STACK
        </span>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
          The right technology for the problem — not technology for the sake of technology.
        </h3>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="flex overflow-x-hidden select-none py-3">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {marqueeTechnologies.concat(marqueeTechnologies).map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#17141D] border border-[#2A2530] text-[#D7D3DC] hover:text-white hover:border-[#FF4F9A]/55 hover:bg-[#241923] transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A45]" />
              <span className="font-mono text-sm font-semibold tracking-wide">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
