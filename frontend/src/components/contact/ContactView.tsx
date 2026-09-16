'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionComponents';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectBriefCta } from '@/components/home/ProjectBriefCta';
import {
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  MapPin,
  Copy,
  Check,
  MessageSquare,
  ChevronDown,
  Globe,
  Terminal,
  Lock,
  Zap,
  ArrowRight,
  Server,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function ContactView() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Live clocks for regional hubs (with SSR hydration safety)
  const [nyTime, setNyTime] = useState<string>('');
  const [colomboTime, setColomboTime] = useState<string>('');

  useEffect(() => {
    const updateClocks = () => {
      try {
        const now = new Date();
        setNyTime(
          now.toLocaleTimeString('en-US', {
            timeZone: 'America/New_York',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        );
        setColomboTime(
          now.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Colombo',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        );
      } catch {
        setNyTime('11:00 AM EST');
        setColomboTime('08:30 PM IST');
      }
    };

    updateClocks();
    const timer = setInterval(updateClocks, 30000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const faqs = [
    {
      q: 'How is our intellectual property protected prior to discussion?',
      a: 'We execute a mutual bilateral NDA before receiving proprietary technical documentation or code repositories. You retain 100% ownership of all source code, database architectures, and digital assets created. We never claim vendor lock-in or proprietary licensing over your IP.'
    },
    {
      q: 'What is the typical turnaround from project brief to milestone kick-off?',
      a: 'Our engineering leadership reviews all briefs within 24 hours. Following an initial 30-minute technical discovery call, we deliver a structured Architecture Specification and milestone schedule within 48 hours. Most projects kick off within 5 to 7 business days.'
    },
    {
      q: 'Can Zylux augment our existing in-house software or DevOps team?',
      a: 'Yes. We routinely deploy dedicated engineering pods and principal specialists who integrate seamlessly into your GitHub/GitLab repositories, Jira sprints, and daily standups. We adhere strictly to your CI/CD pipelines and internal architecture conventions.'
    },
    {
      q: 'What engagement models and pricing structures do you offer?',
      a: 'We offer three structured models: (1) Fixed-Scope Milestone Delivery with deterministic deliverables and timelines; (2) Dedicated Engineering Pods for continuous product velocity; and (3) Strategic Architecture & Security Retainers for fractional CTO/DevOps oversight.'
    },
    {
      q: 'How do we communicate throughout active project execution?',
      a: 'Clients receive a dedicated private Slack or Teams channel with our engineering team, weekly milestone demos, real-time staging environments, and transparent sprint reporting. You communicate directly with the engineers building your platform.'
    }
  ];

  return (
    <div className="relative py-12 md:py-20 bg-[#0B0A0F] overflow-hidden">
      {/* Bespoke ambient creative background */}
      <CreativeBackground variant="ambient" overlayOpacity="opacity-35" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* =========================================================================
            1. HERO COMMAND HUB
            ========================================================================= */}
        {/* =========================================================================
            1. HERO COMMAND HUB
            ========================================================================= */}
        <FadeIn direction="up" delay={0.05}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Badge variant="status" dot className="text-[10px] sm:text-xs text-center max-w-full">
                <span className="sm:hidden">OPEN 24 HOURS • GLOBAL SERVICE</span>
                <span className="hidden sm:inline">OPEN 24 HOURS // 24/7 GLOBAL SERVICE DELIVERY</span>
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-[1.08]">
              Direct Access to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45] animate-gradient-flow">
                Engineering Leadership.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#D7D3DC] font-sans leading-relaxed">
              Skip commissioned account salespeople and bloated agency slide decks. Connect directly with principal software architects and technical directors. Providing enterprise engineering and digital solutions globally, open 24 hours.
            </p>
          </div>
        </FadeIn>

        {/* =========================================================================
            2. DIRECT HIGH-TOUCH CHANNELS STRIP (3 INTERACTIVE CARDS)
            ========================================================================= */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Direct Architecture Email */}
          <StaggerItem>
            <div className="p-6 rounded-3xl bg-[#17141D]/90 border border-[#2A2530] hover:border-[#FF4F9A]/60 card-interactive shimmer-container transition-all group flex flex-col justify-between space-y-4 h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl p-[1.5px] bg-gradient-to-tr from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45] shrink-0 overflow-hidden shadow-md group-hover:scale-105 transition-transform">
                      <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-[#0B0A0F]">
                        <Image
                          src="/assets/founder-ceo.jpg"
                          alt="Dinusha Kalhara Fernando - Founder & CEO"
                          fill
                          sizes="44px"
                          className="object-cover object-top img-cinematic"
                        />
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#241923] border border-[#2A2530] flex items-center justify-center text-[#FF4F9A]">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#241923] text-[#27C93F] border border-[#2A2530] font-bold">
                    24/7 OPEN • SLA &lt; 24H
                  </span>
                </div>
                <div>
                  <h2 className="text-base font-display font-bold text-white">Direct Architecture Desk</h2>
                  <p className="text-xs text-[#A7A1AC] mt-1 leading-relaxed">
                    Send technical briefs, RFPs, or API specs directly to founder & engineering lead Dinusha Kalhara Fernando.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2A2530] flex items-center justify-between">
                <a
                  href="mailto:dkalharafernando@gmail.com"
                  className="text-sm font-mono font-semibold text-white hover:text-[#FF4F9A] transition-colors truncate"
                >
                  dkalharafernando@gmail.com
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyEmail('dkalharafernando@gmail.com')}
                  className="p-1.5 rounded-lg bg-[#241923] text-[#A7A1AC] hover:text-white hover:bg-[#332A35] transition-colors ml-2"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#27C93F]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </StaggerItem>

          {/* Card 2: Direct WhatsApp Consultation */}
          <StaggerItem>
            <div className="p-6 rounded-3xl bg-[#17141D]/90 border border-[#2A2530] hover:border-[#27C93F]/60 card-interactive shimmer-container transition-all group flex flex-col justify-between space-y-4 h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#241923] border border-[#2A2530] flex items-center justify-center text-[#27C93F] group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#241923] text-[#27C93F] border border-[#27C93F]/40 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                    ONLINE 24/7
                  </span>
                </div>
                <div>
                  <h2 className="text-base font-display font-bold text-white">Direct WhatsApp Advisory</h2>
                  <p className="text-xs text-[#A7A1AC] mt-1 leading-relaxed">
                    Connect directly with our engineering leadership for rapid scoping, instant messaging, or production incident consultation.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2A2530]">
                <a
                  href="https://wa.me/94756388329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#241923] to-[#1a2e22] border border-[#27C93F]/40 hover:border-[#27C93F] text-[#27C93F] hover:text-white transition-all group/btn shadow-xs"
                >
                  <span className="text-xs font-mono font-semibold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#27C93F]" />
                    <span>Chat on WhatsApp</span>
                  </span>
                  <span className="text-xs font-mono font-bold group-hover/btn:translate-x-1 transition-transform">
                    START CHAT →
                  </span>
                </a>
              </div>
            </div>
          </StaggerItem>

          {/* Card 3: Security & NDA Sovereignty */}
          <StaggerItem>
            <div className="p-6 rounded-3xl bg-[#17141D]/90 border border-[#2A2530] hover:border-[#FF6B61]/60 card-interactive shimmer-container transition-all group flex flex-col justify-between space-y-4 h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#241923] border border-[#2A2530] flex items-center justify-center text-[#27C93F] group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#241923] text-[#27C93F] border border-[#2A2530] font-bold">
                    GLOBAL SERVICE
                  </span>
                </div>
                <div>
                  <h2 className="text-base font-display font-bold text-white">Global Client Delivery & IP</h2>
                  <p className="text-xs text-[#A7A1AC] mt-1 leading-relaxed">
                    We serve clients globally across North America, Europe, Australia, and Asia. Governed by mutual NDA with 100% code sovereignty.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2A2530] flex items-center justify-between text-xs font-mono text-[#A7A1AC]">
                <span>GLOBAL COVERAGE</span>
                <span className="text-[#27C93F] font-bold">MUTUAL NDA STANDARD</span>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* =========================================================================
            3. GLOBAL ENGINEERING HUBS & REGIONAL NOC DESKS
            ========================================================================= */}
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[#2A2530]">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase font-bold">
                  OPERATIONAL INFRASTRUCTURE
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
                  Global Engineering Hubs
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#A7A1AC] font-sans max-w-md">
                Synchronized cross-timezone engineering delivering continuous architectural momentum and rapid response.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hub 1: North America Desk */}
              <div className="p-5 sm:p-8 rounded-3xl bg-[#17141D]/80 border border-[#2A2530] hover:border-[#FF4F9A]/50 card-interactive shimmer-container transition-all space-y-6 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🇺🇸</span>
                      <span className="text-sm font-mono font-bold text-white">NORTH AMERICA DESK</span>
                    </div>
                    <div className="text-xs text-[#A7A1AC]">New York & Eastern Seaboard Operations</div>
                  </div>

                  {/* Live Clock Badge */}
                  <div className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#241923] border border-[#2A2530] text-right shrink-0">
                    <div className="text-[9px] sm:text-[10px] font-mono text-[#A7A1AC]">LOCAL TIME</div>
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-[#FF4F9A] flex items-center gap-1 sm:gap-1.5 justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                      {nyTime || '11:00 AM EST'}
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-[#D7D3DC] font-sans">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FF4F9A] flex-shrink-0" />
                    <span>Coverage: 09:00 – 18:00 EST (Mon–Fri)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#FF4F9A] flex-shrink-0" />
                    <span>Focus: Enterprise Architecture, US Client Services, Product Scoping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FF4F9A] flex-shrink-0" />
                    <span className="truncate">Direct: <code className="text-white font-mono text-[11px] sm:text-xs">dkalharafernando@gmail.com</code></span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A2530] flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono text-[#A7A1AC]">
                  <span>OPERATIONAL STATUS</span>
                  <span className="text-[#27C93F] font-bold">24/7 ACTIVE COLLABORATION</span>
                </div>
              </div>

              {/* Hub 2: Asia-Pacific Engineering HQ & NOC */}
              <div className="p-5 sm:p-8 rounded-3xl bg-[#17141D]/80 border border-[#2A2530] hover:border-[#FF8A45]/50 card-interactive shimmer-container transition-all space-y-6 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🇱🇰</span>
                      <span className="text-sm font-mono font-bold text-white">ASIA-PACIFIC CORE HQ</span>
                    </div>
                    <div className="text-xs text-[#A7A1AC]">Colombo High-Tech Engineering Campus</div>
                  </div>

                  {/* Live Clock Badge */}
                  <div className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#241923] border border-[#2A2530] text-right shrink-0">
                    <div className="text-[9px] sm:text-[10px] font-mono text-[#A7A1AC]">LOCAL TIME</div>
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-[#FF8A45] flex items-center gap-1 sm:gap-1.5 justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                      {colomboTime || '09:30 PM +05:30'}
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-[#D7D3DC] font-sans">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FF8A45] flex-shrink-0" />
                    <span>Coverage: Open 24 Hours • 24/7/365 Global SRE Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#FF8A45] flex-shrink-0" />
                    <span>Focus: Full-Stack Engineering, Cloud Infrastructure, Cyber NOC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#27C93F] flex-shrink-0" />
                    <span className="truncate">
                      Direct Channel:{' '}
                      <a
                        href="https://wa.me/94756388329"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#27C93F] hover:underline font-mono font-semibold"
                      >
                        WhatsApp →
                      </a>
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A2530] flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono text-[#A7A1AC]">
                  <span>NOC STATUS</span>
                  <span className="text-[#27C93F] font-bold">OPEN 24 HOURS // GLOBAL</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* =========================================================================
            4. THE INTERACTIVE PROJECT BRIEF & INTAKE CONSOLE
            ========================================================================= */}
        <div className="pt-4">
          <ProjectBriefCta />
        </div>

        {/* =========================================================================
            5. CLIENT SCOPING FAQ ACCORDION
            ========================================================================= */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase font-bold">
              TRANSPARENCY & ASSURANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              Frequently Addressed Inquiries
            </h2>
            <p className="text-sm text-[#A7A1AC] font-sans">
              Clear parameters regarding intellectual property, engineering engagement, and technical deliverables.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.q}
                  className={cn(
                    "rounded-2xl border transition-all duration-200 overflow-hidden",
                    isOpen
                      ? "bg-[#17141D] border-[#FF4F9A]/50 shadow-md shadow-[#FF4F9A]/10"
                      : "bg-[#17141D]/70 border-[#2A2530] hover:border-[#2A2530]/80"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>
                    <div
                      className={cn(
                        "w-7 h-7 rounded-xl flex items-center justify-center border flex-shrink-0 transition-transform duration-200",
                        isOpen
                          ? "bg-[#241923] border-[#FF4F9A] text-[#FF4F9A] rotate-180"
                          : "bg-[#110E17] border-[#2A2530] text-[#A7A1AC]"
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#D7D3DC] font-sans leading-relaxed border-t border-[#2A2530]/60 pt-4 animate-in fade-in-50 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            6. EXECUTIVE DIRECT LINE CALLOUT BANNER
            ========================================================================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#17141D] via-[#201524] to-[#17141D] border border-[#2A2530] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Prefer an immediate voice or video dialogue?
            </h3>
            <p className="text-xs sm:text-sm text-[#D7D3DC] max-w-xl">
              Connect with our project leadership directly on WhatsApp or schedule a structured 20-minute architecture scoping session.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/94756388329"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="md">
                <MessageSquare className="w-4 h-4 mr-2 text-white" />
                Chat on WhatsApp
              </Button>
            </a>
            <a href="mailto:dkalharafernando@gmail.com">
              <Button variant="secondary" size="md">
                <Mail className="w-4 h-4 mr-2 text-[#A7A1AC]" />
                Send Technical Brief
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
