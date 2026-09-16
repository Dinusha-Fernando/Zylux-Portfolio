import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { whyZyluxPillars } from '@/data/testimonials';

export function WhyZylux() {
  return (
    <section className="py-12 md:py-16 relative bg-[#0B0A0F] border-b border-[#2A2530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="09"
          tag="PHILOSOPHY"
          title="Why Zylux?"
          description="We reject generic agency clichés. We partner with organizations that value engineering craftsmanship, architectural integrity, and tangible business expansion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {whyZyluxPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-7 rounded-3xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-[#FF4F9A]/10"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#FF4F9A] block mb-3">
                  {pillar.number} / PILLAR
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2.5 group-hover:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B8B2BC] leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#2A2530] flex items-center justify-between text-[11px] font-mono text-[#A7A1AC]">
                <span>VERIFIED STANDARD</span>
                <span className="text-[#FF6B61] font-semibold">● ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
