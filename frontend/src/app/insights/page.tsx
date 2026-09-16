import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { insightsData } from '@/data/insights';
import { Badge } from '@/components/ui/Badge';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { Clock, ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Insights & Technical Research | Zylux Software Solutions',
  description: 'In-depth essays on cybersecurity architecture, modern Next.js performance, growth engineering, and cloud scalability.'
};

export default function InsightsPage() {
  const featured = insightsData[0];
  const others = insightsData.slice(1);

  return (
    <div className="relative py-10 md:py-16 bg-[#0B0A0F] overflow-hidden">
      <CreativeBackground variant="geometry" overlayOpacity="opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Page Hero */}
        <div className="max-w-3xl space-y-3">
          <Badge variant="electric">KNOWLEDGE & ARCHITECTURE</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Zylux Insights
          </h1>
          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
            Engineering documentation, defensive security analyses, and growth playbooks 
            authored by our senior technical leadership.
          </p>
        </div>

        {/* Featured Article Box */}
        {featured && (
          <Link
            href={`/insights/${featured.slug}`}
            className="group block rounded-2xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/55 p-6 sm:p-8 transition-all duration-300 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FF4F9A]/15 text-[#FF4F9A] font-bold border border-[#FF4F9A]/30">
                    FEATURED ESSAY
                  </span>
                  <span className="text-[#A7A1AC]">•</span>
                  <span className="text-[#D7D3DC]">{featured.category}</span>
                  <span className="text-[#A7A1AC]">•</span>
                  <span className="text-[#A7A1AC] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white group-hover:text-[#FF8A45] transition-colors leading-tight">
                  {featured.title}
                </h2>

                <p className="text-sm sm:text-base text-[#D7D3DC]/80 font-sans leading-relaxed">
                  {featured.summary}
                </p>

                <div className="pt-4 border-t border-[#2A2530] flex items-center justify-between text-xs font-mono text-[#A7A1AC]">
                  <span>By {featured.author.name} • {featured.publishedDate}</span>
                  <span className="flex items-center gap-1.5 text-[#FF4F9A] font-bold group-hover:translate-x-1 transition-transform">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {featured.coverImage && (
                <div className="lg:col-span-5 relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[#2A2530] bg-[#0B0A0F]">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 530px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              )}
            </div>
          </Link>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group rounded-2xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/55 transition-all overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              {article.coverImage && (
                <div className="relative w-full aspect-[16/9] bg-[#0B0A0F] overflow-hidden border-b border-[#2A2530]">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17141D] via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#A7A1AC] mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-[#FF4F9A]/10 border border-[#FF4F9A]/20 text-[#FF4F9A] font-semibold">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2.5 group-hover:text-[#FF8A45] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D7D3DC]/80 font-sans leading-relaxed mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2A2530] flex items-center justify-between text-xs font-mono text-[#A7A1AC]">
                  <span>By {article.author.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF8A45] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
