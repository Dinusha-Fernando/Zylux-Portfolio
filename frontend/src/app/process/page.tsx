import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { DigitalJourney } from '@/components/home/DigitalJourney';
import { Button } from '@/components/ui/Button';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { CheckCircle2, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Our Process | Zylux Software Solutions',
  description: 'Explore the 5-stage engineering and growth process at Zylux, from initial discovery to high-scale production deployment.'
};

export default function ProcessPage() {
  const deliveryRules = [
    { rule: 'Bi-Weekly Staging Releases', desc: 'Working code deployed to isolated preview environments every two weeks for transparent client verification.' },
    { rule: 'Automated CI/CD Pipeline', desc: 'Every git commit runs unit tests, lint checks, and security scans before touching production.' },
    { rule: 'Zero-Downtime Migration', desc: 'Database migrations and traffic transitions are executed with canary deployments and instant rollback capabilities.' },
    { rule: 'Complete Documentation & Runbooks', desc: 'We deliver comprehensive API schemas, deployment guides, and admin runbooks with full code handover.' }
  ];

  return (
    <div className="relative py-10 md:py-16 bg-[#0B0A0F] overflow-hidden">
      <CreativeBackground variant="ambient" overlayOpacity="opacity-35" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Page Hero */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase font-bold">
            DELIVERY METHODOLOGY
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
            How We Build & Scale
          </h1>
          <p className="text-sm sm:text-base text-[#D7D3DC] font-sans leading-relaxed">
            Software projects fail due to poor communication, undefined scopes, and disconnected teams. 
            Our structured, milestone-driven framework guarantees predictability, security, and velocity.
          </p>
        </div>

        {/* 5 Stage Step-through */}
        <ProcessTimeline />

        {/* 9 Step Journey */}
        <DigitalJourney />

        {/* Engineering Governance */}
        <div>
          <SectionHeader
            number="03"
            tag="GOVERNANCE"
            title="Our Non-Negotiable Standards"
            description="The engineering safeguards we uphold on every engagement, without exception."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {deliveryRules.map((r) => (
              <div
                key={r.rule}
                className="p-5 sm:p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-2 hover:border-[#FF4F9A]/55 transition-all"
              >
                <div className="flex items-center gap-2 text-[#FF8A45] font-mono text-xs font-bold uppercase mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>GUARANTEED RULE</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white">
                  {r.rule}
                </h3>
                <p className="text-xs sm:text-sm text-[#D7D3DC]/80 font-sans leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Ready to experience a structured development sprint?
          </h3>
          <p className="text-[#A7A1AC] max-w-lg mx-auto text-xs sm:text-sm">
            Let's plan your project milestones and architecture roadmap today.
          </p>
          <Button href="/contact" size="md" showArrow variant="primary">
            Initiate Project Brief
          </Button>
        </div>
      </div>
    </div>
  );
}
