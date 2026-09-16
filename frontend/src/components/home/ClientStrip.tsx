'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Flame, 
  BarChart3, 
  RefreshCw, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight,
  Lock
} from 'lucide-react';
import { FadeIn } from '@/components/ui/MotionComponents';

interface ClientPartner {
  id: string;
  name: string;
  category: string;
  metric: string;
  metricLabel: string;
  summary: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentBorderHover: string;
  accentGlow: string;
  accentText: string;
  accentBg: string;
  badgeBorder: string;
  href: string;
}

const clientPartners: ClientPartner[] = [
  {
    id: 'abdul-fandom',
    name: 'Abdul Fandom',
    category: 'E-Commerce',
    metric: '2.4x GMV',
    metricLabel: 'Revenue Surge',
    summary: 'Global storefront & cloud checkout',
    icon: ShoppingBag,
    accentColor: '#FF4F9A',
    accentBorderHover: 'hover:border-[#FF4F9A]/60',
    accentGlow: 'hover:shadow-[#FF4F9A]/15',
    accentText: 'text-[#FF4F9A]',
    accentBg: 'bg-[#FF4F9A]/10',
    badgeBorder: 'border-[#FF4F9A]/30',
    href: '/work/abdul-fandom'
  },
  {
    id: 'sentinel-labs',
    name: 'Sentinel Labs',
    category: 'Cybersecurity',
    metric: 'Zero-Trust',
    metricLabel: 'SOC2 Ready',
    summary: 'Threat monitoring SIEM & telemetry',
    icon: ShieldCheck,
    accentColor: '#00E5FF',
    accentBorderHover: 'hover:border-[#00E5FF]/60',
    accentGlow: 'hover:shadow-[#00E5FF]/15',
    accentText: 'text-[#00E5FF]',
    accentBg: 'bg-[#00E5FF]/10',
    badgeBorder: 'border-[#00E5FF]/30',
    href: '/work/chronosentinel'
  },
  {
    id: 'aussie-supplements',
    name: 'Aussie Supplements',
    category: 'DTC Retail',
    metric: '+185%',
    metricLabel: 'Organic Reach',
    summary: 'Headless subscription & growth engine',
    icon: Flame,
    accentColor: '#FF8A45',
    accentBorderHover: 'hover:border-[#FF8A45]/60',
    accentGlow: 'hover:shadow-[#FF8A45]/15',
    accentText: 'text-[#FF8A45]',
    accentBg: 'bg-[#FF8A45]/10',
    badgeBorder: 'border-[#FF8A45]/30',
    href: '/work/aussie-supplements'
  },
  {
    id: 'sparkler-media',
    name: 'Sparkler Media',
    category: 'SaaS Platform',
    metric: '15h Saved',
    metricLabel: 'Weekly ROI',
    summary: 'Distributed automation microservices',
    icon: BarChart3,
    accentColor: '#D946EF',
    accentBorderHover: 'hover:border-[#D946EF]/60',
    accentGlow: 'hover:shadow-[#D946EF]/15',
    accentText: 'text-[#D946EF]',
    accentBg: 'bg-[#D946EF]/10',
    badgeBorder: 'border-[#D946EF]/30',
    href: '/work'
  },
  {
    id: 'return-buddies',
    name: 'Return Buddies',
    category: 'Logistics',
    metric: '4.9 ★ Rating',
    metricLabel: 'App Store',
    summary: 'Reverse logistics with live GPS dispatch',
    icon: RefreshCw,
    accentColor: '#10B981',
    accentBorderHover: 'hover:border-[#10B981]/60',
    accentGlow: 'hover:shadow-[#10B981]/15',
    accentText: 'text-[#10B981]',
    accentBg: 'bg-[#10B981]/10',
    badgeBorder: 'border-[#10B981]/30',
    href: '/work'
  }
];

export function ClientStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-5 sm:py-6 md:py-7 border-y border-[#2A2530] bg-[#121017]/95 backdrop-blur-xl overflow-hidden client-strip-section z-20">
      {/* Background Soft Glow Bloom */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-32 bg-[#FF4F9A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact, Sleek Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-5">
          {/* Left: Indicator & Headline */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#A7A1AC] uppercase">
              TRUSTED PARTNER FOR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45] font-extrabold">
                SCALING BRANDS & ENTERPRISES:
              </span>
            </span>
          </div>

          {/* Right: Quick Controls & Status Pill */}
          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#17141D] border border-[#2A2530] text-[10px] font-mono text-[#A7A1AC]">
              <Lock className="w-3 h-3 text-[#FF4F9A]" />
              <span>Zero-Trust Architecture</span>
            </span>

            {/* Scroll Navigation Arrows */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="w-7 h-7 rounded-lg bg-[#17141D] border border-[#2A2530] flex items-center justify-center text-[#D7D3DC] hover:text-white hover:border-[#FF4F9A]/50 disabled:opacity-25 disabled:pointer-events-none transition-all client-strip-btn cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="w-7 h-7 rounded-lg bg-[#17141D] border border-[#2A2530] flex items-center justify-center text-[#D7D3DC] hover:text-white hover:border-[#FF4F9A]/50 disabled:opacity-25 disabled:pointer-events-none transition-all client-strip-btn cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontally Scrollable Track with Edge Fade Masks */}
        <div className="relative">
          {/* Left Gradient Mask */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-14 bg-gradient-to-r from-[#121017] to-transparent pointer-events-none z-10 client-strip-mask-left" />
          
          {/* Right Gradient Mask */}
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-14 bg-gradient-to-l from-[#121017] to-transparent pointer-events-none z-10 client-strip-mask-right" />

          {/* Horizontal Track */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-3 sm:gap-3.5 overflow-x-auto touch-scroll py-1.5 px-1 -mx-1 overscroll-x-contain scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {clientPartners.map((client) => {
              const IconComponent = client.icon;
              return (
                <Link
                  key={client.id}
                  href={client.href}
                  className={`group shrink-0 w-[240px] sm:w-[260px] md:w-[270px] rounded-xl bg-[#17141D] border border-[#2A2530] ${client.accentBorderHover} p-3.5 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md ${client.accentGlow} card-interactive snap-start block text-left`}
                >
                  {/* Subtle Top-Right Ambient Glow */}
                  <div 
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                    style={{ backgroundColor: client.accentColor }}
                  />

                  {/* Header Row: Icon + Category + Arrow */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div 
                        className={`w-7 h-7 rounded-lg ${client.accentBg} border ${client.badgeBorder} flex items-center justify-center transition-transform group-hover:scale-105 duration-200`}
                      >
                        <IconComponent className={`w-3.5 h-3.5 ${client.accentText}`} />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#A7A1AC] px-1.5 py-0.5 rounded bg-[#241923] border border-[#2A2530] font-semibold">
                        {client.category}
                      </span>
                    </div>

                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A7A1AC] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  {/* Client Name & Metric Tagline */}
                  <div className="flex items-baseline justify-between gap-1.5 mb-1">
                    <h3 className="font-display font-bold text-sm sm:text-[15px] text-white group-hover:text-white transition-colors truncate">
                      {client.name}
                    </h3>
                    <span className={`font-mono font-bold text-[11px] sm:text-xs ${client.accentText} shrink-0`}>
                      {client.metric}
                    </span>
                  </div>

                  {/* One-Line Impact Summary */}
                  <p className="text-[11px] text-[#A7A1AC] truncate font-sans leading-tight">
                    {client.summary}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
