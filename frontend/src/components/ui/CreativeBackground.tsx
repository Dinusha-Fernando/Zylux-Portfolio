import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CreativeBackgroundProps {
  variant?: 'ambient' | 'geometry' | 'subtle';
  className?: string;
  overlayOpacity?: string;
  showVignette?: boolean;
}

export function CreativeBackground({
  variant = 'ambient',
  className,
  overlayOpacity = 'opacity-60',
  showVignette = true
}: CreativeBackgroundProps) {
  const darkImgSrc = variant === 'geometry' 
    ? '/assets/zylux-geometry-mesh.jpg' 
    : '/assets/zylux-ambient-backdrop.jpg';

  const lightImgSrc = variant === 'geometry'
    ? '/assets/zylux-geometry-mesh-light.jpg'
    : '/assets/zylux-ambient-backdrop-light.jpg';

  return (
    <div className={cn("absolute inset-0 z-0 pointer-events-none overflow-hidden select-none", className)}>
      {/* Opaque Base Canvas to isolate from global backdrop and prevent double images */}
      <div className="absolute inset-0 bg-[#0B0A0F] creative-bg-canvas -z-10" />

      {/* Dark Theme High-Resolution Creative Artwork (Enhanced visibility) */}
      <Image
        src={darkImgSrc}
        alt="Zylux Creative Brand Atmosphere"
        fill
        priority
        unoptimized
        sizes="100vw"
        className={cn(
          "object-cover object-center transform transition-transform duration-1000 dark-only-bg",
          overlayOpacity === 'opacity-35' || overlayOpacity === 'opacity-30'
            ? 'opacity-60 sm:opacity-65'
            : overlayOpacity,
          "mix-blend-screen"
        )}
      />

      {/* Light Theme High-Resolution Creative Artwork (Vibrant, high-contrast) */}
      <Image
        src={lightImgSrc}
        alt="Zylux Creative Brand Atmosphere"
        fill
        priority
        unoptimized
        sizes="100vw"
        className={cn(
          "object-cover object-center transform transition-transform duration-1000 light-only-bg",
          "opacity-60 sm:opacity-65",
          "mix-blend-multiply"
        )}
      />

      {/* Atmospheric Vignette and Depth Gradients */}
      {showVignette && (
        <>
          {/* Dark Mode Vignette & Edge Fades (Softened so artwork is clearly visible) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(11,10,15,0.75)_90%)] dark-only-bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F]/80 via-transparent to-[#0B0A0F]/50 dark-only-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A0F]/50 via-transparent to-[#0B0A0F]/50 dark-only-bg" />

          {/* Light Mode Vignette & Edge Fades (Translucent - Never masks the artwork) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(247,245,248,0.35)_90%)] light-only-bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F8]/35 via-transparent to-[#F7F5F8]/25 light-only-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F8]/25 via-transparent to-[#F7F5F8]/25 light-only-bg" />
        </>
      )}

      {/* Dark Mode Glow Orbs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#FF4F9A]/16 rounded-full blur-[140px] pointer-events-none dark-only-bg" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#FF8A45]/14 rounded-full blur-[120px] pointer-events-none dark-only-bg" />

      {/* Light Mode Glow Orbs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#D92C73]/12 rounded-full blur-[140px] pointer-events-none light-only-bg" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#FF5A36]/10 rounded-full blur-[120px] pointer-events-none light-only-bg" />
    </div>
  );
}
