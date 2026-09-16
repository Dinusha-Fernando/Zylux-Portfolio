import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { servicesData } from '@/data/services';
import { 
  Globe, 
  Code2, 
  Smartphone, 
  Network, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export function TechServices() {
  const techServices = servicesData.filter((s) => s.category === 'technology');

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6 text-[#FF4F9A]" />,
    Code2: <Code2 className="w-6 h-6 text-[#FF4F9A]" />,
    Smartphone: <Smartphone className="w-6 h-6 text-[#FF4F9A]" />,
    Network: <Network className="w-6 h-6 text-[#FF4F9A]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#FF4F9A]" />,
    Terminal: <Terminal className="w-6 h-6 text-[#FF4F9A]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#FF4F9A]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#FF4F9A]" />
  };

  return (
    <section className="py-12 md:py-16 relative bg-[#0B0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          tag="ENGINEERING"
          title="Engineering for the real world."
          description="We do not build toy prototypes or superficial templates. Every technical deliverable is engineered with type safety, comprehensive test coverage, and hardened zero-trust security."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {techServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/55 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF4F9A]/10 overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF4F9A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#241923]/60 border border-[#2A2530] group-hover:bg-[#FF4F9A]/10 group-hover:border-[#FF4F9A]/30 transition-colors">
                    {iconMap[service.iconName] || <Code2 className="w-5 h-5 text-[#FF4F9A]" />}
                  </div>
                  <span className="text-[10px] font-mono text-[#A7A1AC] group-hover:text-[#FF4F9A] transition-colors">
                    MOD_{service.id.slice(0, 3).toUpperCase()}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#D7D3DC]/80 line-clamp-3 mb-5 leading-relaxed font-sans">
                  {service.shortDescription}
                </p>

                {/* Capabilities snippet */}
                <div className="space-y-1 mb-5 pt-3 border-t border-[#2A2530]">
                  {service.capabilities.slice(0, 3).map((cap) => (
                    <div key={cap} className="text-[11px] sm:text-xs text-[#A7A1AC] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#FF4F9A]" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#2A2530] flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#D7D3DC] group-hover:text-[#FF4F9A] transition-colors"
                >
                  <span>View Capability</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="text-[10px] font-mono text-[#A7A1AC]/60">
                  {service.technologies[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
