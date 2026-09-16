import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { CreativeBackground } from '@/components/ui/CreativeBackground';
import { 
  TrendingUp, 
  Search, 
  Mail, 
  Share2, 
  Eye, 
  Palette, 
  ArrowRight,
  CheckCircle2,
  BarChart3
} from 'lucide-react';

export const metadata = {
  title: 'Digital Growth Studio | Zylux Software Solutions',
  description: 'Data-driven performance marketing, technical SEO, social media, and retention email marketing.'
};

export default function DigitalSolutionsPage() {
  const digitalServices = servicesData.filter((s) => s.category === 'digital');

  const iconMap: Record<string, any> = {
    TrendingUp, Search, Mail, Share2, Eye, Palette
  };

  return (
    <div className="relative py-10 md:py-16 bg-[#0B0A0F] overflow-hidden">
      <CreativeBackground variant="ambient" overlayOpacity="opacity-35" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono tracking-widest text-[#FF8A45] uppercase font-bold">
            DISCIPLINE 02 // PERFORMANCE & STRATEGY
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-2 tracking-tight">
            Zylux Digital Growth Studio
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#D7D3DC] font-sans leading-relaxed">
            We help ambitious brands acquire, convert, and retain high-value customers through 
            data-backed digital marketing, technical search engine optimization, and brand authority.
          </p>
          <div className="flex gap-3 mt-5">
            <Button href="/contact" size="md" showArrow variant="cyan">
              Plan Your Growth Campaign
            </Button>
            <Button href="/work" size="md" variant="secondary">
              View Growth Results
            </Button>
          </div>
        </div>

        {/* Growth Services In-Depth List */}
        <div className="space-y-6 sm:space-y-8">
          {digitalServices.map((svc, idx) => {
            const IconComponent = iconMap[svc.iconName] || TrendingUp;
            return (
              <div
                key={svc.id}
                className="rounded-2xl bg-[#17141D] border border-[#2A2530] p-6 sm:p-8 shadow-xl hover:border-[#FF8A45]/55 transition-all relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-[#FF8A45]/10 text-[#FF8A45] border border-[#FF8A45]/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-[#A7A1AC]">GROWTH STREAM 0{idx + 1}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {svc.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#D7D3DC]/80 font-sans leading-relaxed">
                      {svc.fullDescription}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF8A45] hover:text-[#FF6B61] hover:underline"
                      >
                        <span>Inspect Full Service Specifications</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <span className="text-xs font-mono text-[#A7A1AC] uppercase tracking-wider block mb-3 font-semibold">
                        KEY CAPABILITIES
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {svc.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2 text-xs text-[#D7D3DC] p-2 rounded-lg bg-[#241923]/40 border border-[#2A2530]/50">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A45] flex-shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-[#A7A1AC] uppercase tracking-wider block mb-2 font-semibold">
                        PLATFORMS & TOOLS
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {svc.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-3 py-1 rounded-md bg-[#241923] border border-[#2A2530] text-[#D7D3DC]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flagship Digital Showcase */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#241923] to-[#17141D] border border-[#2A2530] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#FF8A45] uppercase tracking-wider font-bold">
                FLAGSHIP PERFORMANCE DEPLOYMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                Aussie Supplements: Conversion Rate & Retention Funnel
              </h3>
            </div>
            <Button href="/work/aussie-supplements" variant="cyan" size="sm" showArrow>
              Explore Full Case Study
            </Button>
          </div>

          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-[#2A2530] bg-[#0B0A0F]">
            <Image
              src="/assets/project-aussie-supplements.jpg"
              alt="Aussie Supplements Conversion Funnel"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/90">
              <span className="px-3 py-1 rounded-full bg-[#0B0A0F]/80 backdrop-blur border border-[#2A2530]">
                GROWTH MARKETING & SEO
              </span>
              <span className="text-[#FF8A45] font-bold">
                +218% Organic Search Traffic // +34% Repeat Purchase Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
