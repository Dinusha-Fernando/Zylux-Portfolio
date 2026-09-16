import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

interface SectionHeaderProps {
  number?: string;
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  highlightText?: string;
}

export function SectionHeader({
  number,
  tag,
  title,
  description,
  align = 'left',
  className,
  highlightText
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-8 md:mb-10',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center gap-2 mb-3',
          align === 'center' && 'justify-center'
        )}
      >
        {number && (
          <span className="font-mono text-xs text-[#FF4F9A] font-semibold tracking-wider">
            {number}
          </span>
        )}
        {number && tag && (
          <span className="text-[#A7A1AC]/40 text-xs">/</span>
        )}
        {tag && (
          <Badge variant="outline" className="text-[10px] sm:text-[11px] font-medium tracking-widest text-[#D7D3DC]">
            {tag}
          </Badge>
        )}
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-[38px] font-display font-bold tracking-tight text-white leading-snug">
        {title}{' '}
        {highlightText && (
          <span className="inline sm:block text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45]">
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-3 text-sm sm:text-base text-[#B8B2BC] leading-relaxed font-sans max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
