import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { journeyTimeline } from '@/data/process';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function DigitalJourney() {
  return (
    <section className="py-12 md:py-16 relative bg-[#0B0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          tag="INTEGRATED ECOSYSTEM"
          title="You don't need five different partners."
          highlightText="One unified team from idea to scale."
          description="Hiring separate agencies for UI design, frontend development, backend engineering, cloud DevOps, and digital marketing results in finger-pointing and missed deadlines. Zylux takes unified accountability for your entire digital lifecycle."
        />

        {/* Visual Timeline Bar */}
        <div className="rounded-3xl bg-[#17141D] border border-[#2A2530] p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="text-[11px] font-mono tracking-widest text-[#FF4F9A] uppercase mb-6 font-bold">
            END-TO-END DIGITAL VALUE STREAM
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-9 gap-2 sm:gap-3 relative">
            {journeyTimeline.map((item, idx) => (
              <div
                key={item.step}
                className="group p-2.5 sm:p-3 rounded-xl bg-[#241923]/40 border border-[#2A2530] hover:border-[#FF4F9A]/55 hover:bg-[#241923] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] font-mono text-[#FF8A45] block mb-0.5">
                    {item.step}
                  </span>
                  <div className="text-xs sm:text-[13px] font-display font-bold text-white group-hover:text-[#FF4F9A] transition-colors truncate">
                    {item.name}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#2A2530] flex items-center justify-between text-[10px] font-mono text-[#A7A1AC]">
                  <span className="truncate">{item.category}</span>
                  {idx < journeyTimeline.length - 1 ? (
                    <ArrowRight className="w-3 h-3 text-[#A7A1AC]/50 group-hover:text-[#FF4F9A] transition-colors flex-shrink-0" />
                  ) : (
                    <Check className="w-3 h-3 text-[#FF4F9A] flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#2A2530] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#D7D3DC] max-w-xl font-sans">
              From zero-loss cloud migrations to custom software builds and automated growth loops, 
              we act as your dedicated executive engineering and marketing arm.
            </p>
            <Button href="/process" variant="secondary" size="sm" showArrow>
              Inspect Complete Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
