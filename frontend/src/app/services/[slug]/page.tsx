import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  TrendingUp 
} from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service Not Found | Zylux' };
  }

  return {
    title: `${service.title} Services | Zylux Software Solutions`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProject = projectsData.find((p) => 
    p.category === service.category || 
    p.technologies.some((t) => service.technologies.includes(t))
  ) || projectsData[0];

  return (
    <div className="relative py-10 md:py-16 bg-[#0B0A0F] overflow-hidden">
      <CreativeBackground variant="ambient" overlayOpacity="opacity-30" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <Link
            href={service.category === 'technology' ? '/solutions/technology' : '/solutions/digital'}
            className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO {service.category.toUpperCase()} STUDIO</span>
          </Link>

          <Badge variant={service.category === 'technology' ? 'electric' : 'cyan'}>
            {service.category.toUpperCase()} CAPABILITY
          </Badge>
        </div>

        {/* Service Hero */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-[#FF4F9A] font-bold uppercase tracking-wider">
            ZYLUX CAPABILITY SPECIFICATION // {service.id}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#D7D3DC] font-sans leading-snug">
            {service.tagline}
          </p>
          <p className="text-sm sm:text-base text-[#D7D3DC]/80 font-sans max-w-3xl leading-relaxed">
            {service.fullDescription}
          </p>
          <div className="pt-2">
            <Button href="/contact" size="md" showArrow variant={service.category === 'technology' ? 'primary' : 'cyan'}>
              Engage Zylux for {service.title}
            </Button>
          </div>
        </div>

        {/* Capabilities & Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-3">
            <span className="font-mono text-xs text-[#FF8A45] uppercase tracking-widest font-bold">
              01 / WHAT WE EXECUTE
            </span>
            <h3 className="text-xl font-display font-bold text-white">
              Technical Capabilities
            </h3>
            <div className="space-y-2.5 pt-2">
              {service.capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D7D3DC]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A45] flex-shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-3">
            <span className="font-mono text-xs text-[#FF4F9A] uppercase tracking-widest font-bold">
              02 / WHAT YOU RECEIVE
            </span>
            <h3 className="text-xl font-display font-bold text-white">
              Tangible Deliverables
            </h3>
            <div className="space-y-2.5 pt-2">
              {service.deliverables.map((del) => (
                <div key={del} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D7D3DC]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4F9A] flex-shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step-by-Step Delivery Workflow */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-6">
          <div>
            <span className="font-mono text-xs text-[#A7A1AC] uppercase tracking-wider font-bold">
              SYSTEMATIC PROCESS
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
              How We Deliver {service.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.workflow.map((wf) => (
              <div key={wf.step} className="p-5 rounded-2xl bg-[#241923]/60 border border-[#2A2530] space-y-2">
                <span className="text-xs font-mono text-[#FF4F9A] font-bold">
                  STEP {wf.step}
                </span>
                <h4 className="text-base font-display font-bold text-white">
                  {wf.title}
                </h4>
                <p className="text-xs text-[#D7D3DC]/80 font-sans leading-relaxed">
                  {wf.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Technologies */}
        <div className="p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-3">
          <span className="font-mono text-xs text-[#A7A1AC] uppercase tracking-wider font-bold">
            SUPPORTED STACK & PLATFORMS
          </span>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#241923] border border-[#2A2530] text-[#D7D3DC] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Related Production Case Study */}
        {relatedProject && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-[#FF8A45] uppercase tracking-wider font-bold">
                  PRODUCTION CASE STUDY
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                  {relatedProject.title} — {relatedProject.subtitle}
                </h3>
              </div>
              <Button href={`/work/${relatedProject.slug}`} variant="outline" size="sm" showArrow>
                View Full Architecture
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 relative aspect-video rounded-xl overflow-hidden border border-[#2A2530] bg-[#0B0A0F] group">
                <Image
                  src={relatedProject.heroImage}
                  alt={relatedProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90">
                  <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur border border-[#2A2530]">
                    {relatedProject.categoryLabel}
                  </span>
                  <span className="text-[#A7A1AC]">{relatedProject.year}</span>
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <p className="text-xs sm:text-sm text-[#D7D3DC]/80 leading-relaxed font-sans">
                  {relatedProject.overview}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {relatedProject.results.slice(0, 2).map((res) => (
                    <div key={res.label} className="p-3 rounded-xl bg-[#241923]/40 border border-[#2A2530]">
                      <div className="text-lg sm:text-xl font-mono font-bold text-[#FF8A45]">
                        {res.metric}
                      </div>
                      <div className="text-[11px] text-[#A7A1AC] font-sans mt-0.5 leading-tight">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-4">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#FF8A45]" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {service.faq.map((f) => (
                <div key={f.question} className="p-4 rounded-xl bg-[#241923]/40 border border-[#2A2530] space-y-1.5">
                  <div className="font-display font-bold text-white text-sm sm:text-base">
                    {f.question}
                  </div>
                  <p className="text-xs sm:text-sm text-[#D7D3DC]/80 leading-relaxed font-sans">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#241923] to-[#17141D] border border-[#2A2530] text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
            Ready to integrate {service.title} into your business?
          </h3>
          <p className="text-[#A7A1AC] max-w-xl mx-auto text-xs sm:text-sm">
            Book an introductory architecture discovery session with our senior engineers.
          </p>
          <Button href="/contact" size="md" showArrow variant="primary">
            Start a Project Brief
          </Button>
        </div>
      </div>
    </div>
  );
}
