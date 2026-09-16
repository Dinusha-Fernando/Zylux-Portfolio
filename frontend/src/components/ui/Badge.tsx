import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'electric' | 'cyan' | 'outline' | 'status';
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = 'default',
  dot = false,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-[#17141D] text-[#D7D3DC] border-[#2A2530]',
    electric: 'bg-[#FF4F9A]/10 text-[#FF4F9A] border-[#FF4F9A]/30',
    cyan: 'bg-[#FF8A45]/10 text-[#FF8A45] border-[#FF8A45]/30',
    outline: 'bg-transparent text-[#A7A1AC] border-[#2A2530]',
    status: 'bg-[#FF4F9A]/10 text-[#FF4F9A] border-[#FF4F9A]/30'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wider uppercase rounded-full border transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full status-dot-pulse',
            variant === 'electric' && 'bg-[#FF4F9A]',
            variant === 'cyan' && 'bg-[#FF8A45]',
            variant === 'status' && 'bg-[#FF4F9A]',
            (variant === 'default' || variant === 'outline') && 'bg-[#D7D3DC]'
          )}
        />
      )}
      <span>{children}</span>
    </div>
  );
}
