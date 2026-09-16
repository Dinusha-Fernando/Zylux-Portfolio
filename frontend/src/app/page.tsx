import React from 'react';
import { Hero } from '@/components/home/Hero';
import { CapabilitySplit } from '@/components/home/CapabilitySplit';
import { ClientStrip } from '@/components/home/ClientStrip';
import { WhatWeBuild } from '@/components/home/WhatWeBuild';
import { TechServices } from '@/components/home/TechServices';
import { DigitalGrowth } from '@/components/home/DigitalGrowth';
import { DigitalJourney } from '@/components/home/DigitalJourney';
import { SelectedWork } from '@/components/home/SelectedWork';
import { SecurityDevOps } from '@/components/home/SecurityDevOps';
import { WhyZylux } from '@/components/home/WhyZylux';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { TechMarquee } from '@/components/home/TechMarquee';
import { MetricsSection } from '@/components/home/MetricsSection';
import { Testimonials } from '@/components/home/Testimonials';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { ProjectBriefCta } from '@/components/home/ProjectBriefCta';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ClientStrip />
      <CapabilitySplit />
      <WhatWeBuild />
      <TechServices />
      <DigitalGrowth />
      <DigitalJourney />
      <SelectedWork />
      <SecurityDevOps />
      <WhyZylux />
      <ProcessTimeline />
      <TechMarquee />
      <MetricsSection />
      <Testimonials />
      <InsightsPreview />
      <ProjectBriefCta />
    </div>
  );
}
