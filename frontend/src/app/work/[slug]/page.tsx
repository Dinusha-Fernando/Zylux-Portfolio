import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Server, 
  Star,
  ExternalLink 
} from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found | Zylux' };
  }

  return {
    title: `${project.title} — Case Study | Zylux Software Solutions`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="relative py-10 md:py-16 bg-[#0B0A0F] overflow-hidden">
      <CreativeBackground variant="geometry" overlayOpacity="opacity-30" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <Badge variant="outline">
            {project.categoryLabel}
          </Badge>
        </div>

        {/* Project Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono text-[#FF4F9A] font-bold uppercase tracking-wider">
            CASE STUDY // {project.client} ({project.year})
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#D7D3DC] font-sans leading-snug">
            {project.subtitle}
          </p>
        </div>

        {/* Project Flagship Interface Visual */}
        {project.heroImage && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#2A2530] bg-[#17141D] shadow-2xl shadow-black/80">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80 bg-[#0B0A0F]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#2A2530]">
              <span>{project.title} Production Architecture</span>
              <span className="text-[#FF8A45]">● SYSTEM VERIFIED</span>
            </div>
          </div>
        )}

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] shadow-2xl">
          {project.results.map((res) => (
            <div key={res.label} className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#FF8A45]">
                {res.metric}
              </div>
              <div className="text-xs text-[#A7A1AC] font-mono mt-1">
                {res.label}
              </div>
            </div>
          ))}
        </div>

        {/* Overview & The Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-3">
            <span className="font-mono text-xs text-[#FF6B61] uppercase tracking-widest font-bold">
              01 / THE CHALLENGE
            </span>
            <h3 className="text-xl font-display font-bold text-white">
              The Operational Bottleneck
            </h3>
            <p className="text-sm text-[#D7D3DC]/80 font-sans leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-3">
            <span className="font-mono text-xs text-[#FF8A45] uppercase tracking-widest font-bold">
              02 / THE SOLUTION
            </span>
            <h3 className="text-xl font-display font-bold text-white">
              Engineered Architecture
            </h3>
            <p className="text-sm text-[#D7D3DC]/80 font-sans leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Diagram Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] space-y-4 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#2A2530] pb-3">
            <span className="font-mono text-xs text-[#FF4F9A] uppercase tracking-wider font-bold">
              SYSTEM ARCHITECTURE SPECIFICATION
            </span>
            <span className="text-xs font-mono text-[#A7A1AC]">ZERO-DOWNTIME TOPOLOGY</span>
          </div>

          <h3 className="text-xl font-display font-bold text-white">
            {project.architecture.title}
          </h3>

          <p className="text-sm text-[#D7D3DC]/80 font-sans leading-relaxed">
            {project.architecture.description}
          </p>

          {/* Architecture Node Stream */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {project.architecture.nodes.map((node, i) => (
              <div
                key={node}
                className="p-3 rounded-xl bg-[#17141D]/80 border border-[#2A2530] flex items-center gap-3 text-xs font-mono text-white/90"
              >
                <span className="text-[#FF4F9A] font-bold">0{i + 1}</span>
                <span>{node}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Employed */}
        <div className="p-6 rounded-2xl bg-[#17141D] border border-[#2A2530] space-y-3">
          <span className="font-mono text-xs text-[#A7A1AC] uppercase tracking-wider font-bold">
            TECHNOLOGY STACK
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#241923] border border-[#2A2530] text-[#D7D3DC] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Client Testimonial */}
        {project.testimonial && (
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#FF4F9A]/30 space-y-4 relative">
            <div className="flex items-center gap-1 text-[#FF8A45]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF8A45]" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl font-display font-medium text-white leading-relaxed">
              “{project.testimonial.quote}”
            </blockquote>
            <div className="text-xs sm:text-sm text-[#A7A1AC]">
              <span className="font-bold text-white">{project.testimonial.author}</span> —{' '}
              {project.testimonial.role}, {project.testimonial.company}
            </div>
          </div>
        )}

        {/* Bottom Bar: Next Project */}
        <div className="pt-12 border-t border-[#2A2530] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center gap-4 text-left"
          >
            <div className="p-3 rounded-2xl bg-[#17141D] border border-[#2A2530] group-hover:border-[#FF4F9A]/55 transition-colors">
              <ArrowRight className="w-5 h-5 text-[#FF4F9A]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#A7A1AC] block">NEXT CASE STUDY</span>
              <span className="font-display font-bold text-lg text-white group-hover:text-[#FF4F9A] transition-colors">
                {nextProject.title} ({nextProject.categoryLabel})
              </span>
            </div>
          </Link>

          <Button href="/contact" size="md" showArrow variant="primary">
            Start a Similar Project
          </Button>
        </div>
      </div>
    </div>
  );
}
