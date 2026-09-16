'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { 
  Globe, 
  ShoppingBag, 
  Layers, 
  Briefcase, 
  Smartphone, 
  Network, 
  Cpu, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/MotionComponents';

interface BuildCategory {
  id: string;
  title: string;
  tagline: string;
  icon: any;
  steps: string[];
  technologies: string[];
  link: string;
}

export function WhatWeBuild() {
  const categories: BuildCategory[] = [
    {
      id: 'web-platforms',
      title: 'Web Platforms',
      tagline: 'High-speed, SEO-engineered web applications with server-side rendering.',
      icon: Globe,
      steps: ['Discovery & Wireframing', 'UX/UI Design System', 'Next.js & React Build', 'Performance Optimization', 'Edge CDN Deployment'],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      link: '/services/web-development'
    },
    {
      id: 'e-commerce',
      title: 'E-Commerce',
      tagline: 'Custom commerce experiences built around your specific business model.',
      icon: ShoppingBag,
      steps: ['Discovery & User Flows', 'UX/UI Architecture', 'Headless Checkout Build', 'Payment Gateways & Fraud Rules', 'Automated Warehouse Sync'],
      technologies: ['Next.js', 'Django', 'Stripe', 'Redis'],
      link: '/work/abdul-fandom'
    },
    {
      id: 'saas-products',
      title: 'SaaS Products',
      tagline: 'Multi-tenant cloud applications engineered for scalability and high retention.',
      icon: Layers,
      steps: ['Domain Modeling', 'Multi-Tenant DB Schema', 'Subscription Billing', 'RBAC & Authentication', 'Telemetry & Health Metrics'],
      technologies: ['FastAPI', 'PostgreSQL', 'Docker', 'Stripe'],
      link: '/services/software-development'
    },
    {
      id: 'business-systems',
      title: 'Business Systems',
      tagline: 'Bespoke internal operations software that replaces fragmented spreadsheets.',
      icon: Briefcase,
      steps: ['Workflow Bottleneck Audit', 'Custom Schema Design', 'Role-Based Dashboards', 'Legacy Data Migration', 'Staff Training & Runbooks'],
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      link: '/services/software-development'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      tagline: 'Fluid cross-platform iOS & Android mobile applications with offline resilience.',
      icon: Smartphone,
      steps: ['Mobile UX Wireframing', 'Flutter Client Build', 'Offline SQLite Cache', 'Push Notifications', 'App Store Publishing'],
      technologies: ['Flutter', 'React Native', 'Firebase', 'Fastlane'],
      link: '/services/mobile-development'
    },
    {
      id: 'apis',
      title: 'APIs & Integrations',
      tagline: 'High-throughput, well-documented REST & GraphQL interfaces and webhooks.',
      icon: Network,
      steps: ['OpenAPI Contract Design', 'Endpoint Engineering', 'Rate-Limiting & Caching', 'Load Stress Testing', 'Developer Documentation'],
      technologies: ['FastAPI', 'Node.js', 'Redis', 'Swagger'],
      link: '/services/api-integrations'
    },
    {
      id: 'automation-systems',
      title: 'Automation Systems',
      tagline: 'Intelligent scheduled background workers and data synchronization bots.',
      icon: Cpu,
      steps: ['Process Mapping', 'Celery Task Queues', 'Idempotent Logic', 'Sandbox Simulation', 'Real-Time Error Alerting'],
      technologies: ['Python', 'Celery', 'Redis', 'Docker'],
      link: '/services/automation-systems'
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      tagline: 'Practical AI-powered assistants, document intelligence, and semantic workflows.',
      icon: Sparkles,
      steps: ['Feasibility Analysis', 'Knowledge Base Vectorization', 'Prompt & Guardrail Tuning', 'Model API Integration', 'Evaluation & Monitoring'],
      technologies: ['LangChain', 'OpenAI', 'Gemini API', 'pgvector'],
      link: '/services/ai-solutions'
    }
  ];

  const [activeId, setActiveId] = useState<string>(categories[1].id);
  const activeCategory = categories.find((c) => c.id === activeId) || categories[0];

  return (
    <section className="py-12 md:py-16 relative bg-[#0B0A0F] border-b border-[#2A2530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          tag="CAPABILITIES"
          title="From idea to infrastructure."
          description="Whatever your digital initiative, Zylux provides end-to-end technical execution. Select an architecture module below to inspect the delivery lifecycle."
        />

        {/* Desktop Interactive Layout */}
        <FadeIn direction="up" delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Category Selection Tabs */}
            <div className="lg:col-span-5 space-y-1.5">
              {categories.map((cat) => {
                const isSelected = cat.id === activeId;
                const Icon = cat.icon;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveId(cat.id)}
                    onMouseEnter={() => setActiveId(cat.id)}
                    className={cn(
                      'w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center justify-between group',
                      isSelected
                        ? 'bg-[#241923] border-[#FF4F9A] shadow-md shadow-[#FF4F9A]/15 translate-x-1.5'
                        : 'bg-[#17141D]/40 border-[#2A2530]/50 hover:bg-[#17141D] hover:border-[#FF4F9A]/40'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'p-2 rounded-lg transition-colors',
                          isSelected
                            ? 'bg-gradient-to-r from-[#FF4F9A] to-[#FF6B61] text-white shadow-sm shadow-[#FF4F9A]/30'
                            : 'bg-[#241923]/60 text-[#D7D3DC] group-hover:text-white group-hover:bg-[#241923]'
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-white text-sm sm:text-base">
                          {cat.title}
                        </div>
                        <div className="text-[11px] text-[#A7A1AC] line-clamp-1">
                          {cat.tagline}
                        </div>
                      </div>
                    </div>

                    <ArrowRight
                      className={cn(
                        'w-3.5 h-3.5 transition-all duration-300',
                        isSelected
                          ? 'opacity-100 text-[#FF4F9A] translate-x-0'
                          : 'opacity-0 -translate-x-2 group-hover:opacity-60 text-[#D7D3DC]'
                      )}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Active Category Detail Panel */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] p-5 sm:p-8 relative overflow-hidden shadow-2xl">
                {/* Corner Glow */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-[#FF4F9A]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-[#2A2530] pb-4 mb-5">
                  <div>
                    <span className="font-mono text-[11px] tracking-widest text-[#FF8A45] font-bold uppercase">
                      DELIVERY PIPELINE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                      {activeCategory.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#17141D] text-[#FF4F9A] border border-[#2A2530] font-semibold">
                    MODULE 0{categories.findIndex((c) => c.id === activeId) + 1}
                  </span>
                </div>

                <p className="text-sm text-[#D7D3DC] font-sans mb-6 leading-relaxed">
                  {activeCategory.tagline}
                </p>

                {/* 5-Step Process Timeline */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A7A1AC] font-semibold">
                    PHASED EXECUTION ROADMAP:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-1">
                    {activeCategory.steps.map((step, idx) => (
                      <div
                        key={step}
                        className="p-2.5 rounded-xl bg-[#17141D] border border-[#2A2530] text-center space-y-1 hover:border-[#FF4F9A]/50 transition-colors"
                      >
                        <div className="font-mono text-[10px] text-[#FF4F9A] font-bold">
                          0{idx + 1}
                        </div>
                        <div className="text-[11px] font-medium text-white leading-tight">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Technologies & Link */}
                <div className="pt-4 border-t border-[#2A2530] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-mono text-[#A7A1AC] mr-1">TECH STACK:</span>
                    {activeCategory.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#17141D] text-[#D7D3DC] border border-[#2A2530]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={activeCategory.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6B61] hover:text-[#FF4F9A] transition-colors hover:underline"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
