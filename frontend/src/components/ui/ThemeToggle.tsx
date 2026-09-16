'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  variant?: 'button' | 'switch' | 'badge';
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  variant = 'button',
  className,
  showLabel = false
}: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent SSR flash
  if (!mounted) {
    return (
      <div
        className={cn(
          'w-9 h-9 rounded-xl border border-white/10 bg-white/5 opacity-50 flex items-center justify-center',
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const isLight = theme === 'light';

  if (variant === 'switch') {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={cn(
          'flex items-center justify-between w-full px-4 py-2.5 rounded-xl border transition-all duration-200 group text-sm font-mono',
          isLight
            ? 'bg-white border-[#DDD8E0] text-[#0B0A0F] shadow-sm hover:border-[#FF4F9A]/50'
            : 'bg-[#17141D] border-[#2A2530] text-[#D7D3DC] hover:border-[#FF4F9A]/50',
          className
        )}
        aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      >
        <span className="flex items-center gap-2">
          {isLight ? (
            <Sun className="w-4 h-4 text-[#FF8A45] transition-transform duration-300 group-hover:rotate-45" />
          ) : (
            <Moon className="w-4 h-4 text-[#FF4F9A] transition-transform duration-300 group-hover:-rotate-12" />
          )}
          <span>{isLight ? 'LIGHT MODE' : 'DARK MODE'}</span>
        </span>
        <div
          className={cn(
            'w-10 h-5 rounded-full p-0.5 transition-colors relative flex items-center',
            isLight ? 'bg-[#FF8A45]/20' : 'bg-[#FF4F9A]/20'
          )}
        >
          <div
            className={cn(
              'w-4 h-4 rounded-full transition-transform duration-300 shadow-sm',
              isLight
                ? 'translate-x-5 bg-[#FF8A45]'
                : 'translate-x-0 bg-[#FF4F9A]'
            )}
          />
        </div>
      </button>
    );
  }

  if (variant === 'badge') {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={cn(
          'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-200',
          isLight
            ? 'bg-[#F7F5F8] hover:bg-white border-[#DDD8E0] text-[#0B0A0F]'
            : 'bg-[#17141D] hover:bg-[#241923] border-[#2A2530] text-[#D7D3DC] hover:text-white hover:border-[#FF4F9A]/50',
          className
        )}
        aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      >
        {isLight ? (
          <>
            <Sun className="w-3.5 h-3.5 text-[#FF8A45]" />
            <span>LIGHT</span>
          </>
        ) : (
          <>
            <Moon className="w-3.5 h-3.5 text-[#FF4F9A]" />
            <span>DARK</span>
          </>
        )}
      </button>
    );
  }

  // Default 'button' variant
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={cn(
        'relative w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4F9A]',
        isLight
          ? 'bg-white hover:bg-[#F7F5F8] border-[#DDD8E0] text-[#0B0A0F] shadow-sm hover:border-[#FF4F9A]/50 hover:shadow-md'
          : 'bg-[#17141D] hover:bg-[#241923] border-[#2A2530] text-[#D7D3DC] hover:text-white hover:border-[#FF4F9A]/55 shadow-md shadow-black/20',
        className
      )}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-4 h-4">
        {isLight ? (
          <Sun className="w-4 h-4 text-[#FF8A45] transition-all duration-300 transform group-hover:rotate-90 group-hover:scale-110" />
        ) : (
          <Moon className="w-4 h-4 text-[#FF4F9A] transition-all duration-300 transform group-hover:-rotate-12 group-hover:scale-110" />
        )}
      </div>

      {showLabel && (
        <span className="ml-2 text-xs font-mono">
          {isLight ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
}
