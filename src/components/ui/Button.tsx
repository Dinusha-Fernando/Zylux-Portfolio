import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cyan' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  showArrow?: boolean;
  external?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  showArrow = false,
  external = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none group';

  const variants = {
    primary: 'bg-gradient-to-r from-[#FF4F9A] via-[#FF6B61] to-[#FF8A45] hover:opacity-95 text-white shadow-lg shadow-[#FF4F9A]/30 hover:shadow-[#FF4F9A]/50 border border-white/20',
    secondary: 'bg-[#17141D] hover:bg-[#332A35] text-[#D7D3DC] hover:text-white border border-[#2A2530] hover:border-[rgba(255,79,154,0.55)] shadow-md shadow-black/30',
    cyan: 'bg-gradient-to-r from-[#FF6B61] to-[#FF8A45] hover:opacity-95 text-white font-semibold shadow-lg shadow-[#FF6B61]/25 border border-white/20',
    ghost: 'bg-transparent hover:bg-[#17141D] text-[#D7D3DC] hover:text-white',
    outline: 'bg-transparent border border-[#2A2530] hover:border-[rgba(255,79,154,0.55)] text-[#D7D3DC] hover:text-white hover:bg-[#17141D]/50'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5'
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
}
