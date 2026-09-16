import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { insightsData } from '@/data/insights';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { ArrowLeft, Clock, Share2, BookOpen } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found | Zylux' };
  }

  return {
    title: `${article.title} | Zylux Insights`,
    description: article.summary,
  };
}

export default async function InsightArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="relative py-10 md:py-16 bg-[#0B0A0F] overflow-hidden">
      <CreativeBackground variant="geometry" overlayOpacity="opacity-30" />
      <article className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Top Breadcrumb */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL ARTICLES</span>
        </Link>

        {/* Article Meta Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FF4F9A]/15 text-[#FF4F9A] font-bold border border-[#FF4F9A]/30">
              {article.category}
            </span>
            <span className="text-[#A7A1AC]">•</span>
            <span className="text-[#A7A1AC] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-[#A7A1AC]">•</span>
            <span className="text-[#A7A1AC]">{article.publishedDate}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#D7D3DC] font-sans leading-relaxed">
            {article.summary}
          </p>

          <div className="pt-3 pb-2 border-y border-[#2A2530] flex items-center justify-between text-xs font-mono text-[#A7A1AC]">
            <div className="flex items-center gap-2.5">
              {article.author.avatar && (
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#FF4F9A]/40 shrink-0 shadow-sm">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    sizes="32px"
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div>
                <span className="text-[#A7A1AC]/70">WRITTEN BY:</span>{' '}
                <span className="text-white font-bold">{article.author.name}</span> ({article.author.role})
              </div>
            </div>
          </div>
        </div>

        {/* Featured Cover Graphic */}
        {article.coverImage && (
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#2A2530] bg-[#0B0A0F] shadow-2xl shadow-[#FF4F9A]/5">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F] via-transparent to-transparent opacity-30 pointer-events-none" />
          </div>
        )}

        {/* Article Body */}
        <div className="space-y-8 font-sans text-[#D7D3DC]/90 leading-relaxed text-sm sm:text-base">
          {article.content.map((section, idx) => (
            <div key={section.heading} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mt-6">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {section.callout && (
                <div className="my-5 p-5 rounded-xl bg-[#17141D] border-l-4 border-[#FF4F9A] text-white font-medium text-sm sm:text-base italic">
                  “{section.callout}”
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Article Footer & Consultation Prompt */}
        <div className="pt-8 border-t border-[#2A2530] rounded-2xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] p-6 sm:p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Implement these architectural practices in your platform.
          </h3>
          <p className="text-xs sm:text-sm text-[#A7A1AC] max-w-lg mx-auto font-sans">
            Our engineering team audits, designs, and builds production-grade systems for scaling enterprises.
          </p>
          <Button href="/contact" size="md" showArrow variant="primary">
            Schedule a Technical Consultation
          </Button>
        </div>
      </article>
    </div>
  );
}
