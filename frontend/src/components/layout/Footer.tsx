import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerLinks } from '@/data/navigation';
import { ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Footer() {
  return (
    <footer className="bg-[#0B0A0F] border-t border-[#2A2530] pt-12 md:pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4F9A]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF8A45]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tier: Brand Statement & CTA prompt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#2A2530]">
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#2A2530] bg-[#17141D] p-0.5 shadow-lg shadow-[#FF4F9A]/20 group-hover:border-[#FF4F9A]/50 transition-all flex items-center justify-center flex-shrink-0">
                <Image
                  src="/assets/zylux-symbol.png"
                  alt="Zylux Software Solutions"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-[9px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-extrabold tracking-tight text-white group-hover:text-white/90 leading-none">
                  ZYLUX
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#FF6B61] mt-1 font-semibold">
                  SOFTWARE SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-xl md:text-2xl font-display font-semibold text-white max-w-md leading-snug">
              Technology that builds.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45]">
                Digital strategies that grow.
              </span>
            </p>

            <p className="text-sm text-[#B8B2BC] max-w-md font-sans leading-relaxed">
              Zylux Software Solutions is a modern technology studio and digital growth partner. 
              We build robust web and mobile applications, secure digital infrastructure, and engineer 
              organic customer acquisition pipelines for ambitious companies worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
              <Badge variant="status" dot className="text-[10px] sm:text-[11px]">
                SYSTEMS OPERATIONAL
              </Badge>
              <span className="text-[11px] sm:text-xs font-mono text-[#A7A1AC]">
                LATENCY 18MS • TOKYO / FRANKFURT / VIRGINIA
              </span>
            </div>
          </div>

          {/* Quick Contact Box */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#17141D] border border-[#2A2530] rounded-2xl p-5 sm:p-6 md:p-8 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <span className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase font-bold">
                  READY TO BUILD?
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#241923] text-[#27C93F] border border-[#2A2530] font-bold">
                  OPEN 24 HOURS • GLOBAL SERVICE
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                Have a problem worth solving?
              </h3>
              <p className="text-sm text-[#B8B2BC]">
                Serving clients worldwide across USA, UK, Europe, Australia, and Asia-Pacific. Direct technical consultation available 24/7.
              </p>

              {/* Direct Channels Mini Strip */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <a
                  href="mailto:dkalharafernando@gmail.com"
                  className="px-2.5 py-1 rounded-lg bg-[#241923] text-[#D7D3DC] hover:text-[#FF4F9A] border border-[#2A2530] hover:border-[#FF4F9A]/40 transition-colors"
                >
                  dkalharafernando@gmail.com
                </a>
                <a
                  href="https://wa.me/94756388329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#241923] text-[#27C93F] hover:bg-[#27C93F]/15 border border-[#27C93F]/30 hover:border-[#27C93F]/60 transition-all font-semibold shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-[#241923] hover:bg-[#332A35] border border-[#2A2530] hover:border-[#FF4F9A]/50 transition-all group"
              >
                <div className="flex flex-col text-left">
                  <span className="text-xs text-[#A7A1AC] font-mono">24/7 DIRECT INTAKE</span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#FF4F9A] transition-colors">
                    Start a Project Brief →
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#FF4F9A] group-hover:to-[#FF6B61] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Tier: Directory Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-sm">
          {/* Technology */}
          <div>
            <h4 className="font-mono text-xs tracking-wider uppercase text-white/40 mb-4 font-semibold">
              01 / TECHNOLOGY
            </h4>
            <ul className="space-y-2.5 font-sans">
              {footerLinks.technology.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital */}
          <div>
            <h4 className="font-mono text-xs tracking-wider uppercase text-white/40 mb-4 font-semibold">
              02 / DIGITAL GROWTH
            </h4>
            <ul className="space-y-2.5 font-sans">
              {footerLinks.digital.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs tracking-wider uppercase text-white/40 mb-4 font-semibold">
              03 / STUDIO
            </h4>
            <ul className="space-y-2.5 font-sans">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Founder Note */}
          <div>
            <h4 className="font-mono text-xs tracking-wider uppercase text-[#A7A1AC] mb-4 font-semibold">
              04 / CONNECT
            </h4>
            <ul className="space-y-2.5 font-sans mb-6">
              {footerLinks.socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D7D3DC] hover:text-[#FF4F9A] transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="p-3.5 rounded-xl bg-[#241923] border border-[#2A2530] text-xs text-[#A7A1AC] space-y-2 card-interactive shimmer-container">
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">Founder & CEO</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#17141D] text-[#27C93F] font-bold">
                  24H OPEN
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45] shrink-0 overflow-hidden shadow-sm">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0B0A0F]">
                    <Image
                      src="/assets/founder-ceo.jpg"
                      alt="W.M. Dinusha Kalhara Fernando"
                      fill
                      sizes="44px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[#D7D3DC] font-medium leading-snug">W.M. Dinusha Kalhara Fernando</div>
                  <div className="text-[10px] font-mono text-[#FF8A45]">Principal Solutions Architect</div>
                </div>
              </div>
              <a
                href="mailto:dkalharafernando@gmail.com"
                className="block text-[11px] font-mono text-[#D7D3DC] hover:text-[#FF4F9A] transition-colors truncate"
              >
                dkalharafernando@gmail.com
              </a>
              <a
                href="https://wa.me/94756388329"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#27C93F] hover:text-white transition-colors font-semibold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                <span>Chat on WhatsApp →</span>
              </a>
              <div className="text-[10px] font-mono text-[#FF8A45] pt-1 border-t border-[#2A2530]/60">
                GLOBAL SERVICE DELIVERY • WORLDWIDE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Meta */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A7A1AC] font-mono">
          <p>© {new Date().getFullYear()} Zylux Software Solutions. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <span className="text-[#A7A1AC]/50 hidden sm:inline">THEME:</span>
            <ThemeToggle variant="badge" />
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[#D7D3DC]">Security-First</span>
            <span className="text-[#A7A1AC]/40">•</span>
            <span className="text-[#D7D3DC]">Zero-Trust Architecture</span>
            <span className="text-[#A7A1AC]/40">•</span>
            <span className="text-[#D7D3DC]">Engineered for Scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
