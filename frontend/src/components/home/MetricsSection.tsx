import React from 'react';
import { studioMetrics } from '@/data/testimonials';

export function MetricsSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#0B0A0F] border-b border-[#2A2530] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {studioMetrics.map((metric, i) => (
            <div
              key={metric.label}
              className="p-5 sm:p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/55 transition-all flex flex-col items-center text-center group"
            >
              <span className="font-mono text-[10px] text-[#A7A1AC] mb-1.5">
                METRIC_0{i + 1}
              </span>
              <div className="text-3xl sm:text-4xl md:text-4xl font-display font-black text-white group-hover:text-[#FF8A45] transition-colors tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-sans font-medium text-[#D7D3DC] mt-1.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
