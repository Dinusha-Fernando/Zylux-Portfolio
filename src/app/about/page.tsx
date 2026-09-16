import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { FadeIn, StaggerContainer, StaggerItem, FloatMotion } from '@/components/ui/MotionComponents';
import { 
  ShieldCheck, 
  Terminal, 
  Code2, 
  TrendingUp, 
  Compass, 
  Zap, 
  Award, 
  CheckCircle2,
  Users
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Zylux Software Solutions',
  description: 'Learn about the philosophy, leadership, and engineering standards behind Zylux Software Solutions.'
};

export default function AboutPage() {
  const philosophyPillars = [
    {
      motto: 'BUILD BETTER.',
      desc: 'We write defensive, typed, thoroughly tested code designed to withstand production concurrency and adversarial threats without breaking.'
    },
    {
      motto: 'THINK FURTHER.',
      desc: 'We architect software not just for next month’s release, but with scalable multi-year database schemas, cloud efficiency, and modular boundaries.'
    },
    {
      motto: 'MOVE FASTER.',
      desc: 'We remove organizational bloat and agency bureaucracy. You communicate directly with seasoned engineers and growth strategists who ship.'
    }
  ];

  const values = [
    { title: 'Zero Cliché Delivery', desc: 'No manufactured buzzwords or hand-wavy slide decks. We deliver working software, automated tests, and clear telemetry.' },
    { title: 'Full Code Sovereignty', desc: 'You own 100% of your source code, infrastructure configs, and intellectual property. No vendor lock-in, ever.' },
    { title: 'Security as Baseline', desc: 'We consider unencrypted data or vulnerable dependencies an engineering failure. Security is embedded by default.' },
    { title: 'Outcome-Driven Growth', desc: 'Every line of code and marketing dollar must tie back to tangible business velocity, operational savings, or customer revenue.' }
  ];

  return (
    <div className="relative py-10 md:py-16 bg-[#0B0A0F] overflow-hidden">
      <CreativeBackground variant="geometry" overlayOpacity="opacity-30" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Page Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <FadeIn direction="right" delay={0.05} className="lg:col-span-8 space-y-4">
            <Badge variant="electric">STUDIO MISSION & IDENTITY</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
              We are Zylux.
            </h1>
            <p className="text-lg sm:text-xl text-white/90 font-sans leading-snug">
              Technology that builds. Digital strategies that grow.
            </p>
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              Zylux Software Solutions is a modern technology studio and digital growth firm founded to dismantle 
              the artificial divide between software engineering and marketing. We help businesses build meaningful 
              digital experiences, intelligent software, and scalable infrastructure while growing their market authority online.
            </p>
          </FadeIn>

          <FadeIn direction="left" delay={0.15} className="lg:col-span-4 flex justify-center lg:justify-end">
            <FloatMotion duration={7} distance={8}>
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border border-[#2A2530] bg-[#17141D] p-1 shadow-2xl shadow-[#FF4F9A]/20 group card-interactive">
                <Image
                  src="/assets/zylux-logo.jpg"
                  alt="Zylux Software Solutions Official Brand Identity"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover rounded-[22px] group-hover:scale-105 transition-transform duration-700 img-cinematic"
                  priority
                />
              </div>
            </FloatMotion>
          </FadeIn>
        </div>

        {/* Studio Philosophy */}
        <FadeIn direction="up" delay={0.1}>
          <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] shadow-2xl relative overflow-hidden">
            <div className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase mb-8 font-bold">
              THE ZYLUX PHILOSOPHY
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophyPillars.map((p) => (
                <StaggerItem key={p.motto} className="space-y-3 p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                    {p.motto}
                  </h3>
                  <p className="text-sm text-[#D7D3DC]/80 font-sans leading-relaxed">
                    {p.desc}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* Founder & Leadership Section */}
        <FadeIn direction="up" delay={0.12}>
          <div className="p-6 sm:p-10 rounded-2xl bg-[#17141D] border border-[#2A2530] shadow-2xl card-interactive">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-[#241923]/40 border border-[#2A2530] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4F9A]/10 rounded-full blur-2xl pointer-events-none animate-pulse-glow" />
                
                {/* Founder Portrait with Glowing Gradient Frame */}
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl p-[2px] bg-gradient-to-tr from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45] shadow-[0_0_35px_rgba(255,79,154,0.25)] group mb-4">
                  <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#0B0A0F]">
                    <Image
                      src="/assets/founder-ceo.jpg"
                      alt="W.M. Dinusha Kalhara Fernando - Founder & CEO"
                      fill
                      sizes="(max-width: 768px) 160px, 180px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105 img-cinematic"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#17141D] border border-[#2A2530] text-[10px] font-mono text-[#27C93F] mb-2 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                  <span>FOUNDER & LEAD ARCHITECT</span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                  W.M. Dinusha Kalhara Fernando
                </h3>
                <p className="text-xs font-mono text-[#FF8A45] mt-1 font-semibold">
                  CEO & Founder, Zylux Software Solutions
                </p>
                <p className="text-xs text-[#A7A1AC] mt-2 max-w-xs">
                  Software Engineering • Cloud Systems • Digital Growth Strategy
                </p>

                <div className="mt-4 pt-3 border-t border-[#2A2530] w-full flex items-center justify-center gap-3">
                  <a
                    href="https://wa.me/94756388329"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-3 py-1.5 rounded-lg bg-[#27C93F]/10 border border-[#27C93F]/30 text-[#27C93F] hover:bg-[#27C93F] hover:text-white transition-all shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs text-[#FF4F9A] uppercase tracking-wider font-bold">
                  FOUNDER'S NOTE
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Engineering With Purpose
                </h3>
                <p className="text-sm sm:text-base text-[#D7D3DC]/90 font-sans leading-relaxed">
                  “I founded Zylux after witnessing too many ambitious founders and established enterprises 
                  suffer through disjointed technology partnerships. Software agencies that write code without 
                  understanding commercial distribution, and marketing agencies that run campaigns on slow, 
                  insecure websites.”
                </p>
                <p className="text-sm sm:text-base text-[#D7D3DC]/90 font-sans leading-relaxed">
                  “At Zylux, we combine technical depth—microservices, cloud containers, API security, 
                  and resilient databases—with rigorous search and customer acquisition strategy. 
                  One partner, unified accountability, and relentless focus on measurable outcomes.”
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Core Values */}
        <FadeIn direction="up" delay={0.1}>
          <div>
            <SectionHeader
              number="03"
              tag="CULTURE & STANDARDS"
              title="Our Principles of Execution"
              description="The operating standards that guide every sprint, review, and client relationship."
            />

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val) => (
                <StaggerItem key={val.title}>
                  <div className="p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-2 hover:border-[#FF4F9A]/55 card-interactive shimmer-container transition-all h-full">
                    <h4 className="text-lg font-display font-bold text-white">
                      {val.title}
                    </h4>
                    <p className="text-sm text-[#D7D3DC]/70 font-sans leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn direction="up" delay={0.1}>
          <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-[#181824] to-[#121218] border border-white/10 text-center space-y-6 shimmer-container">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Partner with Zylux on your next digital venture.
            </h3>
            <p className="text-white/60 max-w-lg mx-auto text-sm sm:text-base">
              Let's discuss how we can build, secure, and accelerate your digital platform.
            </p>
            <Button href="/contact" size="lg" showArrow variant="primary" className="shimmer-container">
              Start a Project Conversation
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
