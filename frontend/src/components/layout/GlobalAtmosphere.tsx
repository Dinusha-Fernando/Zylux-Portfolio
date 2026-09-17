import React from 'react';
import Image from 'next/image';

export function GlobalAtmosphere() {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* =========================================================================
          DARK THEME BESPOKE ARTWORK (Obsidian, Neon Rose, Coral Fluid Trails)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 animate-ambient-drift dark-only-bg">
        <Image
          src="/assets/zylux-ambient-backdrop.jpg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-65 sm:opacity-70 mix-blend-screen scale-105"
          sizes="100vw"
        />
      </div>

      {/* Dark Depth Vignettes (Softened to let artwork and fluid trails shine through) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_45%,transparent_30%,rgba(11,10,15,0.75)_92%)] dark-only-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A0F]/30 via-transparent to-[#0B0A0F]/50 dark-only-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A0F]/35 via-transparent to-[#0B0A0F]/35 dark-only-bg" />

      {/* Dark Ambient Glows */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-[#FF4F9A]/14 rounded-full blur-[160px] animate-orb-float pointer-events-none dark-only-bg" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#FF8A45]/12 rounded-full blur-[140px] animate-orb-float-delayed pointer-events-none dark-only-bg" />
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-[#FF6B61]/12 rounded-full blur-[160px] pointer-events-none dark-only-bg" />

      {/* =========================================================================
          LIGHT THEME BESPOKE ARTWORK (Luminous Pearl, Vibrant Rose, Coral Ribbons)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 animate-ambient-drift light-only-bg">
        <Image
          src="/assets/zylux-ambient-backdrop-light.jpg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-55 mix-blend-multiply scale-105"
          sizes="100vw"
        />
      </div>

      {/* Light Depth Vignettes (Soft & Translucent - Keeps artwork crisp and visible) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_45%,transparent_30%,rgba(247,245,248,0.35)_95%)] light-only-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5F8]/30 via-transparent to-[#F7F5F8]/45 light-only-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F8]/30 via-transparent to-[#F7F5F8]/30 light-only-bg" />

      {/* Light Ambient Glows (Warm Rose & Coral Vibrancy) */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-[#D92C73]/12 rounded-full blur-[160px] animate-orb-float pointer-events-none light-only-bg" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#FF5A36]/10 rounded-full blur-[140px] animate-orb-float-delayed pointer-events-none light-only-bg" />
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-[#D84315]/8 rounded-full blur-[160px] pointer-events-none light-only-bg" />
    </div>
  );
}
