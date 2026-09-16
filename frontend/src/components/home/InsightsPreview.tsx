import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { insightsData } from '@/data/insights';
import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionComponents';

export function InsightsPreview() {
  return (
    <section className="py-12 md:py-16 relative bg-[#0B0A0F] border-b border-[#2A2530]" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <SectionHeader
              number="12"
              tag="RESEARCH & WRITING"
              title="Insights & Engineering Notes."
              description="Deep technical analyses, architectural post-mortems, and data-backed digital growth strategies."
              className="mb-0"
            />

            <Button href="/insights" variant="secondary" size="sm" showArrow className="hover:border-[#FF4F9A]/50">
              View All Articles
            </Button>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {insightsData.map((article) => (
            <StaggerItem key={article.id}>
              <Link
                href={`/insights/${article.slug}`}
                className="group rounded-3xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 card-interactive shimmer-container shadow-xl h-full"
              >
                {/* Cover Image */}
                {article.coverImage && (
                  <div className="relative w-full aspect-[16/9] bg-[#0B0A0F] overflow-hidden border-b border-[#2A2530]">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover img-cinematic group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17141D] via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#A7A1AC] mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FF4F9A]/10 border border-[#FF4F9A]/20 text-[#FF4F9A] font-semibold">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2.5 group-hover:text-[#FF8A45] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D7D3DC]/80 leading-relaxed line-clamp-3 mb-5 font-sans">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[#2A2530] flex items-center justify-between text-[11px] font-mono text-[#A7A1AC]">
                    <div className="flex items-center gap-2">
                      {article.author.avatar && (
                        <div className="relative w-5 h-5 rounded-full overflow-hidden border border-[#FF4F9A]/40 shrink-0">
                          <Image
                            src={article.author.avatar}
                            alt={article.author.name}
                            fill
                            sizes="20px"
                            className="object-cover object-top"
                          />
                        </div>
                      )}
                      <span className="truncate max-w-[170px]">{article.author.name}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8A45] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
