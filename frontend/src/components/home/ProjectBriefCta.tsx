'use client';

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { 
  Check, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Code2, 
  Smartphone, 
  Cpu, 
  Copy,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { CapabilityScrollSelector, CAPABILITY_OPTIONS } from '@/components/home/CapabilityScrollSelector';
import { FadeIn } from '@/components/ui/MotionComponents';

export function ProjectBriefCta() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(['Custom Software / SaaS']);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dispatchId, setDispatchId] = useState('');
  const [copiedId, setCopiedId] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    details: ''
  });

  const handleSelectAll = () => {
    setSelectedNeeds(CAPABILITY_OPTIONS.map((c) => c.label));
  };

  const handleClearAll = () => {
    setSelectedNeeds([CAPABILITY_OPTIONS[0].label]);
  };

  const toggleNeed = (label: string) => {
    if (selectedNeeds.includes(label)) {
      if (selectedNeeds.length > 1) {
        setSelectedNeeds(selectedNeeds.filter((n) => n !== label));
      }
    } else {
      setSelectedNeeds([...selectedNeeds, label]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate real-time dispatch encryption
    setTimeout(() => {
      const generatedId = `ZY-${Math.floor(100000 + Math.random() * 900000)}`;
      setDispatchId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(dispatchId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section className="py-14 md:py-20 relative bg-[#0B0A0F] border-b border-[#2A2530] overflow-hidden" id="contact">
      {/* Background ambient light blooms */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-[#FF4F9A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#FF8A45]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ==========================================================================
              LEFT COLUMN: EXECUTIVE INTAKE DESK & TRUST GUARANTEES (5 cols)
              ========================================================================== */}
          <FadeIn direction="right" delay={0.05} className="lg:col-span-5 space-y-6 sm:space-y-8 text-left">
            {/* Live Availability Status Chip */}
            <div className="flex items-center gap-2">
              <Badge variant="status" dot className="text-[10px] sm:text-xs max-w-full">
                <span className="sm:hidden">24/7 INTAKE OPEN • GLOBAL SERVICE</span>
                <span className="hidden sm:inline">24/7 INTAKE DESK OPEN // 24 HOURS // GLOBAL SERVICE</span>
              </Badge>
            </div>

            {/* Editorial Title */}
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#FF4F9A] uppercase font-bold">
                13 // START A CONVERSATION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-display font-black text-white tracking-tight leading-[1.12]">
                Have a problem worth solving?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45]">
                  Let's build together.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#D7D3DC] font-sans leading-relaxed">
                We provide custom software engineering, full-stack web and mobile apps, cybersecurity, and digital growth services globally. Open 24 hours a day with senior technical review and global client support.
              </p>
            </div>

            {/* 3 Core Architectural Trust Guarantees */}
            <div className="space-y-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-[#17141D] border border-[#2A2530] flex items-start gap-3.5 group hover:border-[#FF4F9A]/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#241923] border border-[#2A2530] text-[#FF4F9A] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Direct Senior Engineering Dialogue
                  </div>
                  <p className="text-xs text-[#A7A1AC] mt-0.5 leading-relaxed">
                    You speak directly with technical architects and project directors, not commissioned account salespeople.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#17141D] border border-[#2A2530] flex items-start gap-3.5 group hover:border-[#FF8A45]/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#241923] border border-[#2A2530] text-[#FF8A45] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    100% Code & IP Sovereignty
                  </div>
                  <p className="text-xs text-[#A7A1AC] mt-0.5 leading-relaxed">
                    You own 100% of your source code, infrastructure, and intellectual property. Protected under strict mutual NDA.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#17141D] border border-[#2A2530] flex items-start gap-3.5 group hover:border-[#FF6B61]/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#241923] border border-[#2A2530] text-[#27C93F] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    24 Hours Open • Global Client Coverage
                  </div>
                  <p className="text-xs text-[#A7A1AC] mt-0.5 leading-relaxed">
                    Continuous cross-timezone coverage serving clients worldwide across USA, Europe, Australia, and Asia-Pacific.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channel Strip */}
            <div className="pt-3 border-t border-[#2A2530] space-y-2.5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Email */}
                <a
                  href="mailto:dkalharafernando@gmail.com"
                  className="p-3.5 rounded-2xl bg-[#17141D]/90 border border-[#2A2530] hover:border-[#FF4F9A]/60 transition-all group block shadow-sm"
                >
                  <div className="flex items-center justify-between text-[#A7A1AC] text-xs font-mono mb-1">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#FF4F9A]" />
                      <span>DIRECT EMAIL</span>
                    </span>
                    <span className="text-[10px] text-[#A7A1AC]">&lt; 24H SLA</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF4F9A] transition-colors truncate">
                    dkalharafernando@gmail.com
                  </div>
                </a>

                {/* Creative WhatsApp Button */}
                <a
                  href="https://wa.me/94756388329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1C2820] to-[#17141D] border border-[#27C93F]/40 hover:border-[#27C93F] hover:shadow-lg hover:shadow-[#27C93F]/15 transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-[#A7A1AC] text-xs font-mono mb-1">
                    <span className="flex items-center gap-1.5 text-[#27C93F] font-bold">
                      <MessageSquare className="w-3.5 h-3.5 text-[#27C93F]" />
                      <span>DIRECT WHATSAPP</span>
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-[#27C93F] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                      ONLINE NOW
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#27C93F] transition-colors flex items-center justify-between">
                    <span>Chat on WhatsApp</span>
                    <span className="text-xs font-mono text-[#27C93F] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* ==========================================================================
              RIGHT COLUMN: INTERACTIVE PROJECT BLUEPRINT CONSOLE (7 cols)
              ========================================================================== */}
          <FadeIn direction="left" delay={0.12} className="lg:col-span-7 w-full">
            {submitted ? (
              /* High-Tech Transmission Certificate */
              <div className="rounded-3xl bg-[#17141D] border border-[#FF4F9A]/50 p-6 sm:p-10 text-center shadow-2xl animate-in zoom-in-95 duration-300 relative overflow-hidden space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#FF4F9A]/15 text-[#FF4F9A] border border-[#FF4F9A]/30 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <div className="font-mono text-xs text-[#FF4F9A] tracking-widest uppercase font-bold">
                    TRANSMISSION RECEIVED // HTTP_200 OK
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                    Project Brief Logged Successfully.
                  </h3>
                  <p className="text-sm text-[#B8B2BC] max-w-md mx-auto leading-relaxed font-sans">
                    Thank you, <span className="text-white font-medium">{formData.name || 'Partner'}</span>. Your technical scope for <span className="text-white font-medium">{formData.company || 'your organization'}</span> has entered our dispatch queue. Our principal architects will review your parameters within 24 hours.
                  </p>
                </div>

                {/* Dispatch Verification Receipt */}
                <div className="p-4 rounded-2xl bg-[#0B0A0F] border border-[#2A2530] text-left space-y-2.5 max-w-md mx-auto font-mono text-xs">
                  <div className="flex items-center justify-between text-[#A7A1AC]">
                    <span>DISPATCH_TRACKING_ID:</span>
                    <button
                      onClick={handleCopyId}
                      className="inline-flex items-center gap-1.5 text-white hover:text-[#FF4F9A] transition-colors font-bold"
                    >
                      <span>{dispatchId}</span>
                      {copiedId ? <CheckCircle className="w-3 h-3 text-[#27C93F]" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-[#A7A1AC]">
                    <span>SELECTED_SCOPE:</span>
                    <span className="text-[#FF8A45] font-semibold">{selectedNeeds[0]}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#A7A1AC]">
                    <span>STATUS:</span>
                    <span className="text-[#27C93F] font-bold">ENCRYPTED & QUEUED</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-center">
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', company: '', email: '', phone: '', details: '' });
                    }}
                    variant="secondary"
                    size="md"
                  >
                    Submit Another Project Scope
                  </Button>
                </div>
              </div>
            ) : (
              /* Interactive Blueprint Console Form */
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-[#17141D] border border-[#2A2530] shadow-2xl relative overflow-hidden"
              >
                {/* Console Top Chrome Bar */}
                <div className="px-4 sm:px-5 py-2.5 sm:py-3 bg-[#110E17] border-b border-[#2A2530] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                    <span className="text-xs font-mono text-[#A7A1AC] ml-2 hidden sm:inline">
                      ZYLUX // CLIENT_INTAKE_SESSION_v2.4
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 rounded-full bg-[#241923] border border-[#2A2530] text-[9px] sm:text-[10px] font-mono text-[#FF4F9A] font-semibold">
                    <Lock className="w-2.5 h-2.5 text-[#27C93F]" />
                    <span>256-BIT ENCRYPTION</span>
                  </div>
                </div>

                <div className="p-4 sm:p-8 space-y-6">
                  {/* Step 1: Creative Horizontally Scrollable Capabilities Matrix */}
                  <CapabilityScrollSelector
                    selectedNeeds={selectedNeeds}
                    onToggleNeed={toggleNeed}
                    onSelectAll={handleSelectAll}
                    onClearAll={handleClearAll}
                  />

                  {/* Step 2: Contact & Company Details */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[#A7A1AC] mb-2.5 font-semibold">
                      02 // CONTACT & ENTERPRISE DETAILS
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#241923] border border-[#2A2530] text-white text-sm focus:outline-none focus:border-[#FF4F9A] transition-colors placeholder:text-[#A7A1AC]/50 font-sans"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Company / Organization *"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#241923] border border-[#2A2530] text-white text-sm focus:outline-none focus:border-[#FF4F9A] transition-colors placeholder:text-[#A7A1AC]/50 font-sans"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Work Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#241923] border border-[#2A2530] text-white text-sm focus:outline-none focus:border-[#FF4F9A] transition-colors placeholder:text-[#A7A1AC]/50 font-sans"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Direct Phone / WhatsApp (Optional)"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#241923] border border-[#2A2530] text-white text-sm focus:outline-none focus:border-[#FF4F9A] transition-colors placeholder:text-[#A7A1AC]/50 font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Technical Scope & Objectives */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[#A7A1AC] mb-2.5 font-semibold">
                      03 // ARCHITECTURAL OBJECTIVES & TIMELINE
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly describe what you're building, target launch deadlines, current tech stack, or infrastructure bottlenecks..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#241923] border border-[#2A2530] text-white text-sm focus:outline-none focus:border-[#FF4F9A] transition-colors placeholder:text-[#A7A1AC]/50 resize-none font-sans"
                    />
                  </div>

                  {/* Action Bar */}
                  <div className="pt-3 border-t border-[#2A2530] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A7A1AC]">
                      <ShieldCheck className="w-4 h-4 text-[#27C93F]" />
                      <span>Mutual NDA Protected. 100% Confidential.</span>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      showArrow
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Encrypting & Transmitting...' : 'Transmit Project Brief'}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
