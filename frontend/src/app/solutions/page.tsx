import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { servicesData } from '@/data/services';
import { 
  Code2, 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Globe, 
  Smartphone, 
  Network, 
  Search, 
  Mail, 
  Share2, 
  Eye, 
  Palette 
} from 'lucide-react';

export const metadata = {
  title: 'Solutions & Capabilities | Zylux Software Solutions',
  description: 'Explore the complete dual-ecosystem of Zylux Software Solutions: high-performance engineering and high-velocity digital growth.'
};

export default function SolutionsPage() {
  const techServices = servicesData.filter((s) => s.category === 'technology');
  const digitalServices = servicesData.filter((s) => s.category === 'digital');

  const iconMap: Record<string, any> = {
    Globe, Code2, Smartphone, Network, ShieldCheck, Terminal, Cpu, Sparkles,
    TrendingUp, Search, Mail, Share2, Eye, Palette
  };

  return (
    <div className="relative py-10 md:py-16 bg-[#0B0A0F] overflow-hidden">
      <CreativeBackground variant="ambient" overlayOpacity="opacity-35" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase font-bold">
            DUAL CAPABILITY ECOSYSTEM
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Everything your digital business needs to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45]">
              build and grow.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#D7D3DC] font-sans leading-relaxed">
            Choose between our specialized Technology Studio for custom software and cloud infrastructure, 
            or our Digital Growth Studio for customer acquisition and market visibility.
          </p>
        </div>

        {/* Dual Giant Category Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/55 transition-all flex flex-col justify-between group shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#FF4F9A]">
                  DISCIPLINE 01 • TECHNOLOGY
                </span>
                <Code2 className="w-7 h-7 text-[#FF4F9A]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Zylux Technology Studio
              </h2>
              <p className="text-[#D7D3DC]/80 mb-6 leading-relaxed font-sans text-sm sm:text-base">
                Bespoke software systems, high-concurrency web applications, cross-platform mobile apps, 
                cybersecurity audits, and automated cloud pipelines.
              </p>
            </div>
            <Button href="/solutions/technology" variant="primary" size="md" showArrow>
              Explore Technology Capabilities
            </Button>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF8A45]/55 transition-all flex flex-col justify-between group shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#FF8A45]">
                  DISCIPLINE 02 • GROWTH
                </span>
                <TrendingUp className="w-7 h-7 text-[#FF8A45]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Zylux Digital Growth Studio
              </h2>
              <p className="text-[#D7D3DC]/80 mb-6 leading-relaxed font-sans text-sm sm:text-base">
                Data-backed digital marketing, technical search engine optimization (SEO), email retention automation, 
                brand sentiment tracking, and high-impact design.
              </p>
            </div>
            <Button href="/solutions/digital" variant="cyan" size="md" showArrow>
              Explore Digital Growth Capabilities
            </Button>
          </div>
        </div>

        {/* Complete Capability Directory */}
        <div className="space-y-16">
          <div>
            <SectionHeader
              number="01"
              tag="TECHNOLOGY DIRECTORY"
              title="Software Engineering & Cloud Infrastructure"
              description="Explore individual technology service lines and methodologies."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {techServices.map((svc) => {
                const IconComponent = iconMap[svc.iconName] || Code2;
                return (
                  <Link
                    key={svc.id}
                    href={`/services/${svc.slug}`}
                    className="p-5 rounded-xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/55 transition-all group flex flex-col justify-between hover:-translate-y-1"
                  >
                    <div>
                      <div className="p-2.5 rounded-lg bg-[#241923] border border-[#2A2530] text-[#FF4F9A] w-fit mb-3">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-[#FF4F9A] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs text-[#D7D3DC]/70 line-clamp-2 leading-relaxed">
                        {svc.shortDescription}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-[#2A2530] flex items-center justify-between text-xs font-mono text-[#A7A1AC]">
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF4F9A] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <SectionHeader
              number="02"
              tag="GROWTH DIRECTORY"
              title="Digital Marketing & Performance Strategy"
              description="Explore multi-channel marketing, search visibility, and retention services."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {digitalServices.map((svc) => {
                const IconComponent = iconMap[svc.iconName] || TrendingUp;
                return (
                  <Link
                    key={svc.id}
                    href={`/services/${svc.slug}`}
                    className="p-5 rounded-xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF8A45]/55 transition-all group flex flex-col justify-between hover:-translate-y-1"
                  >
                    <div>
                      <div className="p-2.5 rounded-lg bg-[#241923] border border-[#2A2530] text-[#FF8A45] w-fit mb-3">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-[#FF8A45] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs text-[#D7D3DC]/70 line-clamp-2 leading-relaxed">
                        {svc.shortDescription}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-[#2A2530] flex items-center justify-between text-xs font-mono text-[#A7A1AC]">
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF8A45] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
