'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { processStages } from '@/data/process';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionComponents';

export function ProcessTimeline() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section className="py-12 md:py-16 relative bg-[#0B0A0F] border-b border-[#2A2530]" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0.05}>
          <SectionHeader
            number="10"
            tag="METHODOLOGY"
            title="From first conversation to launch."
            description="A structured, predictable 5-stage development lifecycle engineered to prevent scope creep, guarantee security, and deliver on time."
          />
        </FadeIn>

        {/* 5 Stage Step Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-8">
          {processStages.map((stage, idx) => (
            <button
              key={stage.number}
              onClick={() => setActiveStage(idx)}
              className={cn(
                'p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-300',
                activeStage === idx
                  ? 'bg-[#241923] border-[#FF4F9A] shadow-lg shadow-[#FF4F9A]/20 scale-[1.02]'
                  : 'bg-[#17141D] border-[#2A2530] hover:border-[#FF4F9A]/40'
              )}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={cn(
                  'font-mono text-xs font-bold',
                  activeStage === idx ? 'text-[#FF4F9A]' : 'text-[#A7A1AC]'
                )}>
                  STAGE {stage.number}
                </span>
              </div>
              <div className="font-display font-bold text-xs sm:text-sm text-white">
                {stage.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Breakdown */}
        {processStages[activeStage] && (
          <div className="rounded-3xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] p-5 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-6 space-y-3.5">
                <span className="text-xs font-mono tracking-widest text-[#FF8A45] uppercase font-bold">
                  STAGE {processStages[activeStage].number} OVERVIEW
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {processStages[activeStage].subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#D7D3DC] leading-relaxed font-sans">
                  {processStages[activeStage].description}
                </p>

                <div className="pt-2">
                  <div className="p-3.5 rounded-xl bg-[#17141D] border border-[#2A2530] text-xs font-mono">
                    <span className="text-[#A7A1AC] uppercase block mb-1">STAGE DELIVERABLE:</span>
                    <span className="text-[#FF8A45] font-bold text-xs sm:text-sm">
                      {processStages[activeStage].deliverable}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-[#A7A1AC] uppercase block mb-2 font-semibold">
                  KEY ACTIVITIES & CHECKPOINTS
                </span>
                {processStages[activeStage].activities.map((act) => (
                  <div
                    key={act}
                    className="p-2.5 sm:p-3 rounded-xl bg-[#17141D] border border-[#2A2530] flex items-center gap-2.5 text-xs sm:text-sm text-white/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF4F9A] flex-shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Button href="/process" variant="secondary" size="sm" showArrow>
            Explore Detailed Process Specifications
          </Button>
        </div>
      </div>
    </section>
  );
}
