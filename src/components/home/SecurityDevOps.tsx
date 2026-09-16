import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/MotionComponents';
import { 
  ShieldCheck, 
  Terminal, 
  Lock, 
  GitBranch, 
  CheckCircle2, 
  Server, 
  Eye, 
  Cpu, 
  ArrowRight,
  Flame
} from 'lucide-react';

export function SecurityDevOps() {
  const securityNodes = [
    { name: 'APPLICATION', role: 'Input Validation & Sanitization' },
    { name: 'API GATEWAY', role: 'Rate Throttling & mTLS Encryption' },
    { name: 'AUTHENTICATION', role: 'OAuth2 / Short-Lived JWT & RBAC' },
    { name: 'SERVICES', role: 'Least-Privilege Container Isolation' },
    { name: 'DATABASE', role: 'AES-256 Encryption at Rest & In-Transit' },
    { name: 'MONITORING', role: 'Automated Intrusion Detection & SIEM' }
  ];

  const devopsPipeline = [
    { step: '01', name: 'CODE', detail: 'Feature Branch' },
    { step: '02', name: 'GIT', detail: 'Pull Request' },
    { step: '03', name: 'TEST', detail: 'Automated PyTest/Jest' },
    { step: '04', name: 'BUILD', detail: 'Multi-Stage Docker' },
    { step: '05', name: 'CI/CD', detail: 'GitHub Actions' },
    { step: '06', name: 'DEPLOY', detail: 'Zero-Downtime Rolling' },
    { step: '07', name: 'MONITOR', detail: 'Grafana & Telemetry' }
  ];

  const securityServices = [
    'Application Security Hardening',
    'API Security & Penetration Testing',
    'Full Codebase Security Audits',
    'OAuth2, Biometric & RBAC Auth',
    'Cloud Infrastructure Zero-Trust Review',
    'Vulnerability Assessment (VAPT)',
    'Real-Time Threat Monitoring',
    'Automated Dependency Vulnerability Scanners'
  ];

  return (
    <section className="py-12 md:py-16 relative bg-[#0B0A0F] border-b border-[#2A2530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* --- PART 1: CYBERSECURITY --- */}
        <FadeIn direction="up" delay={0.05}>
          <div>
            <SectionHeader
              number="07"
              tag="CYBER SECURITY"
              title="Build fast."
              highlightText="Stay protected."
              description="Security is not an add-on or a certificate to buy before launch. At Zylux, we embed zero-trust defensive engineering into every microservice, database query, and API gateway."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Security Architecture Flow */}
              <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#241923] to-[#17141D] border border-[#2A2530] p-5 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#2A2530] pb-3 mb-5">
                  <span className="font-mono text-xs text-[#FF4F9A] uppercase tracking-wider font-bold">
                    DEFENSE-IN-DEPTH ARCHITECTURE
                  </span>
                  <span className="text-xs font-mono text-[#FF8A45] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> ZERO-TRUST ENFORCED
                  </span>
                </div>

                {/* Vertical Stack Flow */}
                <div className="space-y-2.5">
                  {securityNodes.map((node, i) => (
                    <div
                      key={node.name}
                      className="p-3 rounded-xl bg-[#17141D]/70 border border-[#2A2530] hover:border-[#FF4F9A]/55 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#FF4F9A] font-bold">
                          0{i + 1}
                        </span>
                        <span className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-[#FF4F9A] transition-colors">
                          {node.name}
                        </span>
                      </div>
                      <span className="text-xs text-[#A7A1AC] font-mono hidden sm:inline-block">
                        {node.role}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-[#2A2530] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#A7A1AC] font-sans">
                    OWASP Top 10 mitigated by default. Strict Content Security Policies (CSP).
                  </p>
                  <Button href="/services/cyber-security" variant="primary" size="sm" showArrow>
                    Secure Your System
                  </Button>
                </div>
              </div>

              {/* Right: Security Services Checklist */}
              <div className="lg:col-span-5 space-y-3">
                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1">
                  Proactive Security Capabilities
                </h3>
                <p className="text-xs sm:text-sm text-[#D7D3DC]/80 mb-4">
                  We safeguard your intellectual property, client records, and transaction data 
                  against unauthorized intrusions and data breaches.
                </p>

                <div className="space-y-2">
                  {securityServices.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D7D3DC] p-2 sm:p-2.5 rounded-xl bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#27C93F] flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* --- PART 2: DEVOPS & CI/CD --- */}
        <FadeIn direction="up" delay={0.1}>
          <div>
            <SectionHeader
              number="08"
              tag="DEVOPS & CLOUD"
              title="From git push to production."
              description="Eliminate downtime, manual SSH commands, and broken deployments. We build battle-tested CI/CD continuous delivery pipelines with Docker and Cloudflare."
            />

            {/* Visual Animated CI/CD Pipeline */}
            <div className="rounded-3xl bg-[#17141D] border border-[#2A2530] p-5 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="text-xs font-mono tracking-widest text-[#FF8A45] uppercase mb-6 font-bold">
                CONTINUOUS INTEGRATION & CONTINUOUS DEPLOYMENT (CI/CD)
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3">
                {devopsPipeline.map((pipe) => (
                  <div
                    key={pipe.step}
                    className="p-3 rounded-xl bg-[#241923]/50 border border-[#2A2530] hover:border-[#FF4F9A]/55 card-interactive transition-all flex flex-col justify-between group"
                  >
                    <span className="text-[9px] font-mono text-[#A7A1AC] block mb-0.5">
                      STEP {pipe.step}
                    </span>
                    <div className="text-xs sm:text-sm font-display font-extrabold text-white group-hover:text-[#FF8A45] transition-colors truncate">
                      {pipe.name}
                    </div>
                    <div className="text-[10px] font-mono text-[#A7A1AC]/80 mt-1 truncate">
                      {pipe.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Supported Cloud & DevOps Tool Stack */}
              <div className="mt-8 pt-6 border-t border-[#2A2530] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#A7A1AC]">
                  <span className="text-[#A7A1AC]/60 text-[11px]">STACK:</span>
                  {['Docker', 'GitHub Actions', 'Nginx', 'Cloudflare', 'Linux', 'AWS', 'Grafana'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#241923]/40 border border-[#2A2530] text-[#D7D3DC] text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>

                <Button href="/services/devops-cloud" variant="secondary" size="sm" showArrow>
                  Inspect DevOps Infrastructure
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
