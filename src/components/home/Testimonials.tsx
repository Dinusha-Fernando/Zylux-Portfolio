'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonialsData } from '@/data/testimonials';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const active = testimonialsData[currentIdx];

  return (
    <section className="py-12 md:py-16 relative bg-[#0B0A0F] border-b border-[#2A2530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="11"
          tag="CLIENT OUTCOMES"
          title="What partners say."
          description="We measure our success strictly through our clients' operational performance, revenue growth, and infrastructure stability."
        />

        <div className="rounded-3xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] p-6 sm:p-10 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#FF4F9A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1 text-[#FF8A45]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FF8A45]" />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full bg-[#17141D] hover:bg-[#241923] border border-[#2A2530] hover:border-[#FF4F9A]/55 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-[#17141D] hover:bg-[#241923] border border-[#2A2530] hover:border-[#FF4F9A]/55 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <blockquote className="text-lg sm:text-xl md:text-2xl font-display font-medium text-white leading-snug mb-8">
            “{active.quote}”
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#2A2530] pt-5 gap-3">
            <div>
              <div className="font-display font-bold text-sm sm:text-base text-white">
                {active.clientName}
              </div>
              <div className="text-xs sm:text-sm text-[#A7A1AC]">
                {active.role} • <span className="text-[#FF8A45]">{active.company}</span>
              </div>
            </div>

            <div className="px-3 py-1 rounded-full bg-[#17141D] border border-[#2A2530] text-[11px] font-mono text-[#D7D3DC]">
              {active.project}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
