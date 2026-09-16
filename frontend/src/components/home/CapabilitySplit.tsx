import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, TrendingUp, CheckCircle2, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function CapabilitySplit() {
  const techItems = [
    'Web Development',
    'Software Engineering',
    'Mobile Applications',
    'API Development',
    'Cyber Security',
    'DevOps & Cloud',
    'Automation',
    'Custom Systems'
  ];

  const digitalItems = [
    'Digital Marketing',
    'Search Engine Optimization (SEO)',
    'Email Marketing & Retention',
    'Social Media Management',
    'Brand Monitoring',
    'Graphic Design & UI/UX',
    'Content Strategy',
    'Digital Branding'
  ];

  return (
    <section className="py-12 md:py-16 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          tag="DISCIPLINES"
          title="Two disciplines."
          highlightText="One digital partner."
          description="Most companies hire one agency for web development and another for marketing, creating misaligned silos and communication overhead. Zylux synchronizes world-class software engineering with high-velocity digital growth."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Panel 1: Technology - Zylux Neon Rose */}
          <div className="group relative rounded-3xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/50 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#FF4F9A]/15">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF4F9A] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs tracking-widest text-[#FF4F9A] font-bold">
                  01 / TECHNOLOGY
                </span>
                <div className="p-2.5 rounded-xl bg-[#FF4F9A]/10 border border-[#FF4F9A]/20 text-[#FF4F9A]">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2.5">
                Zylux Technology
              </h3>

              <p className="text-[#B8B2BC] text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                We engineer digital products, platforms, and infrastructure built for 
                uncompromising performance, security, and scale.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {techItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#D7D3DC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4F9A] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#2A2530]">
              <Link
                href="/solutions/technology"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF4F9A] transition-colors"
              >
                <span>Explore Technology Studio</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#FF4F9A]" />
              </Link>
            </div>
          </div>

          {/* Panel 2: Digital Growth - Zylux Orange & Coral */}
          <div className="group relative rounded-3xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF8A45]/50 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#FF8A45]/15">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF8A45] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs tracking-widest text-[#FF8A45] font-bold">
                  02 / DIGITAL GROWTH
                </span>
                <div className="p-2.5 rounded-xl bg-[#FF8A45]/10 border border-[#FF8A45]/20 text-[#FF8A45]">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2.5">
                Zylux Digital
              </h3>

              <p className="text-[#B8B2BC] text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                We help brands become visible, memorable, and measurable across the digital 
                ecosystem through performance marketing and brand authority.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {digitalItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#D7D3DC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A45] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#2A2530]">
              <Link
                href="/solutions/digital"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF8A45] transition-colors"
              >
                <span>Explore Digital Studio</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#FF8A45]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
