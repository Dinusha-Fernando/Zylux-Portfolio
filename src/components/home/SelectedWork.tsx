'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import { ProjectCategory, Project } from '@/types';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Layers, 
  Sparkles,
  MoveHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filterCategories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'software', label: 'SaaS & Enterprise' },
    { id: 'digital', label: 'Digital Growth' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  // Calculate counts per filter
  const getCount = (filterId: ProjectCategory) => {
    if (filterId === 'all') return projectsData.length;
    return projectsData.filter((p) => p.category === filterId).length;
  };

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  // Update scroll progress and active index
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (maxScroll <= 0) {
      setScrollProgress(100);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      setCurrentIndex(0);
      return;
    }

    const currentScroll = container.scrollLeft;
    const progress = Math.min(100, Math.max(0, (currentScroll / maxScroll) * 100));
    setScrollProgress(progress);

    setCanScrollLeft(currentScroll > 10);
    setCanScrollRight(currentScroll < maxScroll - 10);

    const card = container.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 20 : 380;
    const index = Math.min(filteredProjects.length - 1, Math.round(currentScroll / cardWidth));
    setCurrentIndex(index);
  }, [filteredProjects.length]);

  useEffect(() => {
    handleScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, [handleScroll, activeFilter]);

  // Scroll helpers
  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 20 : 380;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 20 : 380;

    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  const handleFilterSelect = (filterId: ProjectCategory) => {
    setActiveFilter(filterId);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 relative bg-[#0B0A0F] border-b border-[#2A2530] overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-7 sm:mb-9 gap-5">
          <div className="max-w-xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase font-bold">
                06 // PROVEN PORTFOLIO
              </span>
              <span className="text-[#A7A1AC]/40">•</span>
              <span className="text-xs font-mono text-[#A7A1AC] uppercase">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight leading-tight">
              Production Work &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45]">
                Verified Scale.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#D7D3DC] font-sans leading-relaxed">
              Explore our mission-critical SaaS platforms, zero-trust cybersecurity architectures, and high-concurrency commerce systems.
            </p>
          </div>

          {/* Controls Deck: Project Counter + Navigation Arrows */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            {/* Project Index Counter Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17141D] border border-[#2A2530] font-mono text-xs text-[#D7D3DC]">
              <span className="text-[#FF4F9A] font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[#A7A1AC]/40">/</span>
              <span className="text-[#A7A1AC]">
                {String(filteredProjects.length).padStart(2, '0')}
              </span>
            </div>

            {/* Scroll Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollTo('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200",
                  canScrollLeft
                    ? "bg-[#17141D] hover:bg-[#241923] border-[#2A2530] hover:border-[#FF4F9A]/60 text-white shadow-md hover:scale-105"
                    : "bg-[#17141D]/30 border-[#2A2530]/30 text-[#A7A1AC]/30 cursor-not-allowed"
                )}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200",
                  canScrollRight
                    ? "bg-[#17141D] hover:bg-[#241923] border-[#2A2530] hover:border-[#FF4F9A]/60 text-white shadow-md hover:scale-105"
                    : "bg-[#17141D]/30 border-[#2A2530]/30 text-[#A7A1AC]/30 cursor-not-allowed"
                )}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-2 border-b border-[#2A2530]/60">
          <div className="flex flex-wrap gap-1 p-1 rounded-2xl bg-[#17141D] border border-[#2A2530] shadow-lg">
            {filterCategories.map((f) => {
              const count = getCount(f.id);
              if (count === 0 && f.id !== 'all') return null;
              const isSelected = activeFilter === f.id;

              return (
                <button
                  key={f.id}
                  onClick={() => handleFilterSelect(f.id)}
                  className={cn(
                    'px-2.5 sm:px-3 py-1 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5',
                    isSelected
                      ? 'bg-gradient-to-r from-[#FF4F9A] to-[#FF6B61] text-white shadow-sm shadow-[#FF4F9A]/20 font-semibold'
                      : 'text-[#A7A1AC] hover:text-white hover:bg-white/5'
                  )}
                >
                  <span>{f.label}</span>
                  <span
                    className={cn(
                      'text-[9px] font-mono px-1.5 py-0.5 rounded-full',
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-[#241923] text-[#A7A1AC]'
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-[#A7A1AC]/60">
            <MoveHorizontal className="w-3.5 h-3.5 text-[#FF4F9A] animate-pulse" />
            <span>SWIPE HORIZONTALLY TO EXPLORE</span>
          </div>
        </div>

        {/* ==========================================================================
            CREATIVE HORIZONTALLY SCROLLABLE CARDS (COMPACT & BALANCED SCALE)
            ========================================================================== */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-5 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 touch-scroll overscroll-x-contain cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'smooth' }}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="w-[85vw] max-w-[340px] sm:max-w-none sm:w-[360px] md:w-[380px] lg:w-[400px] flex-shrink-0 snap-start rounded-2xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/60 card-interactive shimmer-container overflow-hidden flex flex-col justify-between shadow-xl shadow-black/60 group"
            >
              {/* Top Viewport: Compact Browser Chrome + Uncluttered Screenshot */}
              <div className="relative w-full overflow-hidden bg-[#0B0A0F] border-b border-[#2A2530]">
                {/* Sleek Minimalist Browser Bar */}
                <div className="px-3 py-2 bg-[#17141D] border-b border-[#2A2530] flex items-center justify-between text-xs">
                  {/* Traffic light micro-dots */}
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                  </div>

                  {/* Micro Category Pill */}
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#241923] text-[#FF4F9A] border border-[#2A2530] font-medium">
                    {project.categoryLabel}
                  </span>

                  {/* Index number */}
                  <span className="font-mono text-[10px] text-[#A7A1AC]">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Unobstructed Crisp Screenshot Viewport */}
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative w-full aspect-[16/10] overflow-hidden bg-[#0B0A0F]"
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    priority={index < 3}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 85vw, 400px"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17141D] via-transparent to-transparent pointer-events-none opacity-40" />

                  {/* Floating Highlight Metric Pill on bottom of image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono">
                    <div className="flex items-center gap-1.5 truncate">
                      {project.category === 'security' ? (
                        <ShieldCheck className="w-3.5 h-3.5 text-[#FF4F9A] flex-shrink-0" />
                      ) : project.category === 'mobile' ? (
                        <Cpu className="w-3.5 h-3.5 text-[#FF8A45] flex-shrink-0" />
                      ) : (
                        <TrendingUp className="w-3.5 h-3.5 text-[#FF6B61] flex-shrink-0" />
                      )}
                      <span className="text-[#D7D3DC] text-[11px] truncate">{project.results[0].label}</span>
                    </div>
                    <span className="font-display font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#FF4F9A] to-[#FF8A45] text-xs flex-shrink-0 pl-1">
                      {project.results[0].metric}
                    </span>
                  </div>
                </Link>
              </div>

              {/* Bottom Editorial Content */}
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3.5">
                <div className="space-y-1.5">
                  {/* Client & Year */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#A7A1AC]">
                    <span>CLIENT: {project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Headline Title */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="group/title inline-block"
                  >
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r group-hover/title:from-[#FF4F9A] group-hover/title:to-[#FF8A45] transition-all tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Subtitle */}
                  <p className="text-xs font-mono text-[#FF8A45] line-clamp-1">
                    {project.subtitle}
                  </p>

                  {/* Short narrative summary */}
                  <p className="text-xs text-[#B8B2BC] leading-relaxed font-sans line-clamp-2 pt-0.5">
                    {project.overview}
                  </p>
                </div>

                {/* Tech Stack Chips & Action Link */}
                <div className="pt-2 border-t border-[#2A2530] flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#241923] border border-[#2A2530] text-[#D7D3DC]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono px-1 py-0.5 text-[#A7A1AC]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-white group-hover:text-[#FF4F9A] transition-colors flex-shrink-0"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================================================
            LIVE PROGRESS RAIL & DOT JUMPERS
            ========================================================================== */}
        <div className="mt-3 sm:mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Glowing Track Progress Rail */}
          <div className="w-full sm:w-1/2 h-1 bg-[#17141D] rounded-full overflow-hidden border border-[#2A2530] relative">
            <div
              className="h-full bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45] rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(255,79,154,0.6)]"
              style={{ width: `${Math.max(16, scrollProgress)}%` }}
            />
          </div>

          {/* Jump Dots & Full Directory Link */}
          <div className="flex items-center gap-3">
            {/* Interactive Dots */}
            <div className="flex items-center gap-1.5">
              {filteredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Jump to project ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    currentIndex === i
                      ? "w-6 bg-gradient-to-r from-[#FF4F9A] to-[#FF6B61]"
                      : "w-1.5 bg-[#2A2530] hover:bg-[#FF4F9A]/50"
                  )}
                />
              ))}
            </div>

            <Link
              href="/work"
              className="text-xs font-mono font-semibold text-[#A7A1AC] hover:text-white transition-colors flex items-center gap-1 ml-2"
            >
              <span>ALL CASE STUDIES</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
