'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Code2,
  Globe,
  Smartphone,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  MoveHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CapabilityOption {
  id: string;
  label: string;
  sub: string;
  icon: React.ElementType;
  badge: string;
  accentGradient: string;
  glowColor: string;
  borderColor: string;
  tags: string[];
}

export const CAPABILITY_OPTIONS: CapabilityOption[] = [
  {
    id: '01',
    label: 'Custom Software / SaaS',
    sub: 'High-Scale Cloud Architecture',
    icon: Code2,
    badge: 'CORE ENGINE',
    accentGradient: 'from-[#FF4F9A] to-[#FF6B61]',
    glowColor: 'rgba(255, 79, 154, 0.35)',
    borderColor: '#FF4F9A',
    tags: ['Multi-Tenant', 'Distributed Cloud', '99.99% SLA']
  },
  {
    id: '02',
    label: 'Web Application',
    sub: 'Next.js 15 & React Ecosystem',
    icon: Globe,
    badge: 'ULTRA FAST',
    accentGradient: 'from-[#A855F7] to-[#EC4899]',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    borderColor: '#A855F7',
    tags: ['Server Components', 'Edge APIs', 'Sub-Second UX']
  },
  {
    id: '03',
    label: 'Mobile App (iOS/Android)',
    sub: 'React Native & Cross-Platform',
    icon: Smartphone,
    badge: 'DUAL OS',
    accentGradient: 'from-[#06B6D4] to-[#3B82F6]',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    borderColor: '#06B6D4',
    tags: ['Native Performance', 'Offline-First', 'Store Publish']
  },
  {
    id: '04',
    label: 'Cybersecurity & Audits',
    sub: 'Zero-Trust Architecture & SIEM',
    icon: ShieldCheck,
    badge: 'AIRTIGHT',
    accentGradient: 'from-[#10B981] to-[#059669]',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    borderColor: '#10B981',
    tags: ['Pen-Testing', 'SOC2 / HIPAA', 'Hardened Cloud']
  },
  {
    id: '05',
    label: 'Cloud & DevOps Systems',
    sub: 'AWS, Kubernetes & CI/CD Pipelines',
    icon: Cpu,
    badge: 'TERABYTE SCALE',
    accentGradient: 'from-[#F59E0B] to-[#EF4444]',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    borderColor: '#F59E0B',
    tags: ['Auto-Scale K8s', 'Zero-Downtime', 'Infra-as-Code']
  },
  {
    id: '06',
    label: 'Digital Growth & SEO',
    sub: 'Performance Acquisition & CRO',
    icon: TrendingUp,
    badge: 'MAX CONVERSION',
    accentGradient: 'from-[#EC4899] to-[#F97316]',
    glowColor: 'rgba(236, 72, 153, 0.35)',
    borderColor: '#EC4899',
    tags: ['Technical SEO', 'Conversion Funnels', 'Speed Score']
  },
  {
    id: '07',
    label: 'API & Microservices',
    sub: 'High-Throughput REST & gRPC',
    icon: Layers,
    badge: 'SUB-10MS',
    accentGradient: 'from-[#6366F1] to-[#8B5CF6]',
    glowColor: 'rgba(99, 102, 241, 0.35)',
    borderColor: '#6366F1',
    tags: ['Kafka / RabbitMQ', 'Rate Limiting', 'Low Latency']
  },
  {
    id: '08',
    label: 'AI & Workflow Automation',
    sub: 'Autonomous Agents & Vector RAG',
    icon: Sparkles,
    badge: 'INTELLIGENT',
    accentGradient: 'from-[#D946EF] to-[#FF4F9A]',
    glowColor: 'rgba(217, 70, 239, 0.35)',
    borderColor: '#D946EF',
    tags: ['Custom Agents', 'Vector Search / RAG', 'LLM Tuning']
  }
];

interface CapabilityScrollSelectorProps {
  selectedNeeds: string[];
  onToggleNeed: (label: string) => void;
  onSelectAll?: () => void;
  onClearAll?: () => void;
}

export function CapabilityScrollSelector({
  selectedNeeds,
  onToggleNeed,
  onSelectAll,
  onClearAll
}: CapabilityScrollSelectorProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);

  // Measure and update scroll indicators
  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      setScrollProgress(100);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      setActiveIndex(0);
      return;
    }

    const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    // Approximate active card
    const cardWidth = 240; // card width + gap
    const index = Math.min(CAPABILITY_OPTIONS.length - 1, Math.max(0, Math.round(scrollLeft / cardWidth)));
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    updateScrollState();
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    // Wheel event to scroll horizontally when hovering over track
    const handleWheel = (e: WheelEvent) => {
      // Only hijack vertical scroll if user has not scrolled to the extreme end or shiftKey is not used
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // native horizontal already
      if (e.deltaY !== 0) {
        const canScroll = (e.deltaY > 0 && container.scrollLeft < container.scrollWidth - container.clientWidth) ||
                          (e.deltaY < 0 && container.scrollLeft > 0);
        if (canScroll) {
          e.preventDefault();
          container.scrollBy({ left: e.deltaY * 1.5, behavior: 'auto' });
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  // Scroll by buttons
  const handleScrollDirection = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -260 : 260;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // Direct jump to index
  const handleScrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = 245;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftStart(scrollRef.current.scrollLeft);
    setDraggedDistance(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    setDraggedDistance(Math.abs(walk));
    scrollRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleCardClick = (label: string) => {
    // If user dragged more than 8px, it was a swipe gesture, not a click
    if (draggedDistance > 8) return;
    onToggleNeed(label);
  };

  return (
    <div className="relative space-y-3 select-none">
      {/* =========================================================================
          CONTROL & HUD HEADER
          ========================================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-xs font-mono tracking-wider uppercase text-[#A7A1AC] font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F9A] animate-pulse flex-shrink-0" />
            <span>01 // WHAT CAPABILITY DOES YOUR PROJECT REQUIRE?</span>
          </label>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#241923] text-[#FF4F9A] border border-[#2A2530] font-bold flex-shrink-0">
            {selectedNeeds.length} OF {CAPABILITY_OPTIONS.length} ACTIVE
          </span>
        </div>

        {/* Action HUD: Numbered capsule jump buttons & Arrows */}
        <div className="flex items-center justify-between sm:justify-end gap-2">
          {/* Quick Select/Reset helper */}
          <div className="flex items-center gap-1 text-[10px] font-mono">
            {onSelectAll && (
              <button
                type="button"
                onClick={onSelectAll}
                className="px-2 py-0.5 rounded-md text-[#A7A1AC] hover:text-white bg-[#110E17] border border-[#2A2530] hover:border-[#FF4F9A]/50 transition-colors"
              >
                All
              </button>
            )}
            {onClearAll && selectedNeeds.length > 1 && (
              <button
                type="button"
                onClick={onClearAll}
                className="px-2 py-0.5 rounded-md text-[#A7A1AC] hover:text-[#FF6B61] bg-[#110E17] border border-[#2A2530] hover:border-[#FF6B61]/50 transition-colors"
              >
                Reset
              </button>
            )}
          </div>

          {/* Direct index pills */}
          <div className="hidden md:flex items-center gap-1 bg-[#110E17] p-1 rounded-xl border border-[#2A2530]">
            {CAPABILITY_OPTIONS.map((opt, idx) => {
              const isSelected = selectedNeeds.includes(opt.label);
              const isCurrent = activeIndex === idx;
              return (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => handleScrollToIndex(idx)}
                  className={cn(
                    "w-5 h-5 rounded-lg text-[10px] font-mono flex items-center justify-center transition-all",
                    isCurrent
                      ? "bg-gradient-to-r from-[#FF4F9A] to-[#FF6B61] text-white font-bold shadow-xs shadow-[#FF4F9A]/40"
                      : isSelected
                      ? "bg-[#241923] text-[#FF4F9A] font-semibold border border-[#FF4F9A]/30"
                      : "text-[#A7A1AC]/60 hover:text-white hover:bg-[#241923]"
                  )}
                  title={`Jump to ${opt.label}`}
                >
                  {opt.id}
                </button>
              );
            })}
          </div>

          {/* Left / Right Chevron Controls */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => handleScrollDirection('left')}
              disabled={!canScrollLeft}
              className={cn(
                "w-7 h-7 rounded-xl flex items-center justify-center border transition-all duration-200",
                canScrollLeft
                  ? "bg-[#241923] hover:bg-[#332A35] hover:scale-105 border-[#2A2530] text-white shadow-xs"
                  : "bg-[#17141D] border-[#2A2530]/40 text-[#A7A1AC]/30 cursor-not-allowed"
              )}
              aria-label="Scroll capabilities left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScrollDirection('right')}
              disabled={!canScrollRight}
              className={cn(
                "w-7 h-7 rounded-xl flex items-center justify-center border transition-all duration-200",
                canScrollRight
                  ? "bg-[#241923] hover:bg-[#332A35] hover:scale-105 border-[#2A2530] text-white shadow-xs"
                  : "bg-[#17141D] border-[#2A2530]/40 text-[#A7A1AC]/30 cursor-not-allowed"
              )}
              aria-label="Scroll capabilities right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          DYNAMIC CYBER TRACK PROGRESS BAR
          ========================================================================= */}
      <div className="h-1 w-full bg-[#110E17] rounded-full overflow-hidden relative border border-[#2A2530]/60">
        <div
          className="h-full bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45] rounded-full transition-all duration-150 relative shadow-[0_0_8px_#FF4F9A]"
          style={{ width: `${Math.max(12, scrollProgress)}%` }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_6px_#ffffff]" />
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE HORIZONTAL SCROLL TRACK WITH AMBIENT GRADIENT MASKS
          ========================================================================= */}
      <div className="relative group">
        {/* Left Ambient Fade Mask */}
        <div
          className={cn(
            "pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-14 bg-gradient-to-r from-[#17141D] to-transparent z-10 transition-opacity duration-300 rounded-l-2xl",
            canScrollLeft ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Right Ambient Fade Mask */}
        <div
          className={cn(
            "pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-14 bg-gradient-to-l from-[#17141D] to-transparent z-10 transition-opacity duration-300 rounded-r-2xl",
            canScrollRight ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={cn(
            "flex gap-3 overflow-x-auto no-scrollbar py-2 px-1 snap-x snap-mandatory scroll-smooth touch-scroll overscroll-x-contain",
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          )}
        >
          {CAPABILITY_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedNeeds.includes(opt.label);

            return (
              <div
                key={opt.id}
                onClick={() => handleCardClick(opt.label)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onToggleNeed(opt.label);
                  }
                }}
                className={cn(
                  'w-[215px] sm:w-[245px] flex-shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group/card relative overflow-hidden focus:outline-none',
                  isSelected
                    ? 'bg-gradient-to-b from-[#241923] via-[#1F1722] to-[#17141D] border-[#FF4F9A] shadow-lg shadow-[#FF4F9A]/15 ring-1 ring-[#FF4F9A]/40'
                    : 'bg-[#1C1724]/80 hover:bg-[#241923] border-[#2A2530] hover:border-[#FF4F9A]/40'
                )}
              >
                {/* Background Ambient Glow on Selection */}
                {isSelected && (
                  <div
                    className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-40 transition-opacity"
                    style={{ background: opt.borderColor }}
                  />
                )}

                {/* Top Row: System ID, Badge & Selection Checkmark */}
                <div>
                  <div className="flex items-center justify-between w-full mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-[#A7A1AC] font-semibold">
                        SYS_{opt.id}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#110E17] text-[#A7A1AC] border border-[#2A2530]">
                        {opt.badge}
                      </span>
                    </div>

                    {/* Selection Indicator Checkbox */}
                    <div
                      className={cn(
                        "w-5 h-5 rounded-lg border flex items-center justify-center transition-all duration-200",
                        isSelected
                          ? "bg-gradient-to-r from-[#FF4F9A] to-[#FF6B61] border-[#FF4F9A] text-white shadow-xs shadow-[#FF4F9A]/40 scale-105"
                          : "border-[#2A2530] bg-[#110E17] group-hover/card:border-[#FF4F9A]/60"
                      )}
                    >
                      {isSelected ? (
                        <Check className="w-3 h-3 stroke-[3]" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A2530] group-hover/card:bg-[#FF4F9A]" />
                      )}
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-2">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/card:scale-105 shadow-sm",
                        isSelected
                          ? `bg-gradient-to-br ${opt.accentGradient} text-white shadow-md`
                          : "bg-[#110E17] text-[#A7A1AC] border border-[#2A2530] group-hover/card:text-white"
                      )}
                      style={{
                        boxShadow: isSelected ? `0 4px 14px ${opt.glowColor}` : undefined
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <h4
                        className={cn(
                          "text-xs sm:text-sm font-semibold leading-snug transition-colors line-clamp-2",
                          isSelected ? "text-white" : "text-[#D7D3DC] group-hover/card:text-white"
                        )}
                      >
                        {opt.label}
                      </h4>
                      <p className="text-[11px] font-mono text-[#A7A1AC] mt-0.5 line-clamp-1">
                        {opt.sub}
                      </p>
                    </div>
                  </div>

                  {/* Micro Tech Tags */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {opt.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "text-[9px] font-mono px-1.5 py-0.5 rounded transition-colors",
                          isSelected
                            ? "bg-[#110E17] text-[#FF8A45] border border-[#2A2530]"
                            : "bg-[#110E17]/80 text-[#A7A1AC] border border-[#2A2530]/70"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Status Ribbon */}
                <div className="pt-3 mt-3 border-t border-[#2A2530]/60 flex items-center justify-between text-[10px] font-mono">
                  {isSelected ? (
                    <span className="flex items-center gap-1.5 text-[#27C93F] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                      SELECTED & QUEUED
                    </span>
                  ) : (
                    <span className="text-[#A7A1AC]/70 group-hover/card:text-[#FF4F9A] transition-colors">
                      + ADD TO SCOPE
                    </span>
                  )}
                  <span className="text-[#A7A1AC]/50">
                    {opt.id}/08
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE FOOTER STRIP: ACTIVE SELECTIONS & GESTURE HINT
          ========================================================================= */}
      <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] font-mono border-t border-[#2A2530]/40">
        {/* Swipe / Drag helper prompt */}
        <div className="flex items-center gap-1.5 text-[#A7A1AC]/70">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#FF4F9A] animate-pulse flex-shrink-0" />
          <span className="hidden sm:inline">
            DRAG HORIZONTALLY OR USE ARROWS & NUMBER PILLS TO BROWSE ALL 8 MODULES
          </span>
          <span className="sm:hidden">
            SWIPE HORIZONTALLY FOR ALL 8 MODULES
          </span>
        </div>

        {/* Selected chips count or pills */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
          <span className="text-[#A7A1AC] flex-shrink-0">ACTIVE:</span>
          {selectedNeeds.map((need) => (
            <button
              type="button"
              key={need}
              onClick={() => onToggleNeed(need)}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#241923] text-[#FF4F9A] border border-[#2A2530] hover:border-[#FF6B61] text-[9px] font-mono flex-shrink-0 group/pill"
              title="Click to remove from brief"
            >
              <span className="truncate max-w-[120px]">{need}</span>
              <X className="w-2.5 h-2.5 opacity-60 group-hover/pill:opacity-100" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
