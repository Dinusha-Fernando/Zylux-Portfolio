import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Network, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const metadata = {
  title: 'Technology Studio | Zylux Software Solutions',
  description: 'Enterprise web applications, custom software systems, cybersecurity, and DevOps infrastructure.'
};

export default function TechnologySolutionsPage() {
  const techServices = servicesData.filter((s) => s.category === 'technology');

  const iconMap: Record<string, any> = {
    Globe, Code2, Smartphone, Network, ShieldCheck, Terminal, Cpu, Sparkles
  };

  return (
    <div className="relative py-10 md:py-16 bg-[#0B0A0F] overflow-hidden">
      <CreativeBackground variant="geometry" overlayOpacity="opacity-35" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase font-bold">
            DISCIPLINE 01 // ENGINEERING & INFRASTRUCTURE
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-2 tracking-tight">
            Zylux Technology Studio
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#D7D3DC] font-sans leading-relaxed">
            We engineer mission-critical digital products, high-throughput backend APIs, 
            resilient mobile apps, and hardened cloud infrastructure.
          </p>
          <div className="flex gap-3 mt-5">
            <Button href="/contact" size="md" showArrow variant="primary">
              Discuss Your Tech Stack
            </Button>
            <Button href="/work" size="md" variant="secondary">
              View Engineering Work
            </Button>
          </div>
        </div>

        {/* Services In-Depth List */}
        <div className="space-y-6 sm:space-y-8">
          {techServices.map((svc, idx) => {
            const IconComponent = iconMap[svc.iconName] || Code2;
            return (
              <div
                key={svc.id}
                className="rounded-2xl bg-[#17141D] border border-[#2A2530] p-6 sm:p-8 shadow-xl hover:border-[#FF4F9A]/55 transition-all relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-[#FF4F9A]/10 text-[#FF4F9A] border border-[#FF4F9A]/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-[#A7A1AC]">MODULE 0{idx + 1}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {svc.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#D7D3DC]/80 font-sans leading-relaxed">
                      {svc.fullDescription}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B61] hover:text-[#FF4F9A] hover:underline"
                      >
                        <span>Inspect Full Service Specifications</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <span className="text-xs font-mono text-[#A7A1AC] uppercase tracking-wider block mb-3 font-semibold">
                        CORE CAPABILITIES
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {svc.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2 text-xs text-[#D7D3DC] p-2 rounded-lg bg-[#241923]/40 border border-[#2A2530]/50">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4F9A] flex-shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-[#A7A1AC] uppercase tracking-wider block mb-2 font-semibold">
                        PRIMARY TECHNOLOGIES
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {svc.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-3 py-1 rounded-md bg-[#241923] border border-[#2A2530] text-[#D7D3DC]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flagship Technology Showcase */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#241923] to-[#17141D] border border-[#2A2530] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#FF4F9A] uppercase tracking-wider font-bold">
                FLAGSHIP ENGINEERING DEPLOYMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                ChronoSentinel: Real-Time SIEM Threat Intelligence
              </h3>
            </div>
            <Button href="/work/chronosentinel" variant="primary" size="sm" showArrow>
              Explore Full Case Study
            </Button>
          </div>

          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-[#2A2530] bg-[#0B0A0F]">
            <Image
              src="/assets/project-chronosentinel.jpg"
              alt="ChronoSentinel SIEM Dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/90">
              <span className="px-3 py-1 rounded-full bg-[#0B0A0F]/80 backdrop-blur border border-[#2A2530]">
                CYBERSECURITY & TELEMETRY
              </span>
              <span className="text-[#FF8A45] font-bold">
                Telemetry Pipeline: 50,000 EPS // &lt;1.8s Mean Threat Isolation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
