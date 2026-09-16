import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HeroVisual } from '@/components/home/HeroVisual';
import { FadeIn } from '@/components/ui/MotionComponents';
import { ArrowRight, Terminal, Shield, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-16 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FF4F9A]/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-24 right-10 w-[350px] h-[250px] bg-[#FF8A45]/8 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Studio Micro Header Indicator with BUILD SECURE GROW motif */}
            <FadeIn direction="down" delay={0.05} duration={0.5}>
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="electric" className="text-[10px] sm:text-[11px] font-semibold">
                  ZYLUX / DIGITAL SYSTEMS
                </Badge>
                <span className="text-[#A7A1AC]/30 text-xs">•</span>
                <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase font-semibold">
                  <span className="text-[#D7D3DC]">BUILD</span>
                  <span className="text-[#FF4F9A]/60">→</span>
                  <span className="text-[#FF4F9A]">SECURE</span>
                  <span className="text-[#FF8A45]/60">→</span>
                  <span className="text-[#FF8A45]">GROW</span>
                </div>
              </div>
            </FadeIn>

            {/* Large Editorial Headline with Signature Gradient */}
            <FadeIn direction="up" delay={0.12} duration={0.65}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-display font-extrabold tracking-tight text-white leading-[1.12]">
                We build digital products that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45] animate-gradient-flow">
                  move businesses forward.
                </span>
              </h1>
            </FadeIn>

            {/* Supporting Copy */}
            <FadeIn direction="up" delay={0.2} duration={0.6}>
              <p className="text-sm sm:text-base md:text-lg text-[#B8B2BC] font-sans max-w-xl leading-relaxed">
                Zylux Software Solutions combines high-performance software engineering, 
                cybersecurity, DevOps, and digital growth to help ambitious businesses build, 
                launch, secure, and scale without friction.
              </p>
            </FadeIn>

            {/* Call to Actions */}
            <FadeIn direction="up" delay={0.28} duration={0.55}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                <Button href="/contact" size="md" showArrow variant="primary" className="shimmer-container w-full sm:w-auto text-center justify-center">
                  Start a Project
                </Button>
                <Button href="/work" size="md" variant="secondary" className="hover:border-[#FF4F9A]/50 transition-all w-full sm:w-auto text-center justify-center">
                  Explore Our Work
                </Button>
              </div>
            </FadeIn>

            {/* Micro Metrics Strip */}
            <FadeIn direction="up" delay={0.35} duration={0.6}>
              <div className="pt-4 sm:pt-5 border-t border-[#2A2530] grid grid-cols-3 gap-2 sm:gap-4 text-left">
                <div className="group cursor-default">
                  <div className="font-display text-base sm:text-xl md:text-2xl font-bold text-white transition-transform group-hover:scale-105 inline-block">99.99%</div>
                  <div className="text-[10px] sm:text-[11px] text-[#A7A1AC] font-mono mt-0.5 leading-tight">Deployment Uptime</div>
                </div>
                <div className="group cursor-default">
                  <div className="font-display text-base sm:text-xl md:text-2xl font-bold text-[#FF4F9A] transition-transform group-hover:scale-105 inline-block">Zero-Trust</div>
                  <div className="text-[10px] sm:text-[11px] text-[#A7A1AC] font-mono mt-0.5 leading-tight">Security Hardened</div>
                </div>
                <div className="group cursor-default">
                  <div className="font-display text-base sm:text-xl md:text-2xl font-bold text-[#FF8A45] transition-transform group-hover:scale-105 inline-block">2-in-1</div>
                  <div className="text-[10px] sm:text-[11px] text-[#A7A1AC] font-mono mt-0.5 leading-tight">Tech + Growth</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Digital System Visual */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <FadeIn direction="left" delay={0.25} duration={0.7} className="w-full">
              <HeroVisual />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
