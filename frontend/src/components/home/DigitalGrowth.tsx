'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { 
  TrendingUp, 
  Search, 
  Mail, 
  Share2, 
  Eye, 
  Palette, 
  BarChart, 
  ArrowUpRight, 
  CheckCircle,
  Activity
} from 'lucide-react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionComponents';

export function DigitalGrowth() {
  const [selectedTimeline, setSelectedTimeline] = useState<'30D' | '90D' | '12M'>('90D');

  const metricsData = {
    '30D': { reach: '+48%', visibility: '+24%', ctr: '+12%', mentions: '+31%' },
    '90D': { reach: '+184%', visibility: '+72%', ctr: '+31%', mentions: '+94%' },
    '12M': { reach: '+420%', visibility: '+195%', ctr: '+58%', mentions: '+310%' }
  };

  const current = metricsData[selectedTimeline];

  const digitalCapabilities = [
    { title: 'Digital Marketing & CRO', desc: 'Paid performance campaigns across Meta, Google & LinkedIn with rigorous conversion rate optimization.', icon: TrendingUp, slug: 'digital-marketing' },
    { title: 'Technical SEO Strategy', desc: 'Schema markup, core web vitals, keyword authority, and programmatic search architecture.', icon: Search, slug: 'seo' },
    { title: 'Email Marketing & Retention', desc: 'Automated Klaviyo customer onboarding drips, churn prevention, and personalized sequences.', icon: Mail, slug: 'email-marketing' },
    { title: 'Social Media Management', desc: 'Executive thought leadership, viral visual assets, and active community engagement.', icon: Share2, slug: 'social-media' },
    { title: 'Brand Monitoring & Sentiment', desc: '24/7 web social listening, review management, and competitor intelligence.', icon: Eye, slug: 'brand-monitoring' },
    { title: 'Graphic Design & UI/UX', desc: 'Figma product design systems, investor decks, and high-impact digital brand guidelines.', icon: Palette, slug: 'graphic-design' }
  ];

  return (
    <section className="py-12 md:py-16 relative bg-[#0B0A0F] border-y border-[#2A2530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          tag="GROWTH"
          title="Technology gets you online."
          highlightText="Growth gets you noticed."
          description="Building an incredible software product is only half the battle. Zylux builds the data-driven growth pipelines that attract, convert, and retain high-value customers."
        />

        {/* Campaign Dashboard Simulation Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] p-5 sm:p-7 mb-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#FF8A45]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-[#2A2530] gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#FF8A45]/10 text-[#FF8A45] border border-[#FF8A45]/20">
                <BarChart className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#A7A1AC]">ANALYTICS AGGREGATOR</span>
                <h4 className="text-base font-display font-bold text-white flex items-center gap-2">
                  Campaign Performance Intelligence
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#FF8A45] bg-[#FF8A45]/10 px-2 py-0.5 rounded-full">
                    <Activity className="w-2.5 h-2.5 animate-pulse" /> LIVE
                  </span>
                </h4>
              </div>
            </div>

            {/* Timeline Filter Pills */}
            <div className="flex items-center gap-1 bg-[#17141D] p-1 rounded-xl border border-[#2A2530]">
              {(['30D', '90D', '12M'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTimeline(t)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedTimeline === t
                      ? 'bg-gradient-to-r from-[#FF6B61] to-[#FF8A45] text-white shadow-md'
                      : 'text-[#A7A1AC] hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Live Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
            {/* Reach */}
            <div className="p-4 rounded-xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF8A45]/40 transition-all">
              <div className="text-[11px] font-mono text-[#A7A1AC] uppercase tracking-wider mb-1">
                Organic Reach
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#FF8A45]">
                {current.reach}
              </div>
              <div className="text-[10px] text-[#A7A1AC]/70 mt-0.5 font-mono">
                vs baseline period
              </div>
            </div>

            {/* Visibility */}
            <div className="p-4 rounded-xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF8A45]/40 transition-all">
              <div className="text-[11px] font-mono text-[#A7A1AC] uppercase tracking-wider mb-1">
                Search Visibility
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                {current.visibility}
              </div>
              <div className="text-[10px] text-[#A7A1AC]/70 mt-0.5 font-mono">
                Top 3 keyword SERPs
              </div>
            </div>

            {/* Email CTR */}
            <div className="p-4 rounded-xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/40 transition-all">
              <div className="text-[11px] font-mono text-[#A7A1AC] uppercase tracking-wider mb-1">
                Email CTR
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#FF4F9A]">
                {current.ctr}
              </div>
              <div className="text-[10px] text-[#A7A1AC]/70 mt-0.5 font-mono">
                Automated drip conversion
              </div>
            </div>

            {/* Brand Mentions */}
            <div className="p-4 rounded-xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF6B61]/40 transition-all">
              <div className="text-[11px] font-mono text-[#A7A1AC] uppercase tracking-wider mb-1">
                Brand Mentions
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#FF6B61]">
                {current.mentions}
              </div>
              <div className="text-[10px] text-[#A7A1AC]/70 mt-0.5 font-mono">
                Positive web sentiment
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#2A2530] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#A7A1AC] font-mono">
            <span>DATA SOURCE: AGGREGATED CLIENT BENCHMARKS ACROSS COMMERCE & SAAS</span>
            <Link href="/solutions/digital" className="text-[#FF8A45] hover:text-[#FF6B61] transition-colors hover:underline font-semibold">
              Explore Complete Digital Growth Studio →
            </Link>
          </div>
        </div>

        {/* Digital Growth Capabilities Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {digitalCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <StaggerItem key={cap.title}>
                <Link
                  href={`/services/${cap.slug}`}
                  className="group p-5 sm:p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/60 transition-all duration-300 card-interactive shimmer-container flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="p-2.5 rounded-xl bg-[#241923] border border-[#2A2530] group-hover:bg-[#FF8A45]/10 group-hover:border-[#FF8A45]/30 transition-colors w-fit mb-4 text-[#FF8A45]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-display font-bold text-white mb-2 group-hover:text-[#FF8A45] transition-colors">
                      {cap.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#D7D3DC]/80 leading-relaxed font-sans">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#2A2530] flex items-center justify-between text-xs font-semibold text-[#D7D3DC] group-hover:text-white">
                    <span>Learn Strategy</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8A45] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
