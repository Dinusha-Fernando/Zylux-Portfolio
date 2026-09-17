'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { mainNavItems } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code2, 
  TrendingUp, 
  Layers, 
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [pathname]);

  // Lock background body scroll when mobile drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-4 h-4 text-[#FF4F9A]" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-[#FF8A45]" />,
    Layers: <Layers className="w-4 h-4 text-[#FF6B61]" />
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0B0A0F]/90 backdrop-blur-md border-b border-[#2A2530] py-3 shadow-2xl shadow-black/50'
          : 'bg-[#0B0A0F]/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3.5 sm:py-5 border-b border-[#2A2530]/40 sm:border-b-0'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[#2A2530] bg-[#17141D] p-0.5 shadow-md shadow-[#FF4F9A]/20 group-hover:border-[#FF4F9A]/60 transition-all flex items-center justify-center flex-shrink-0">
            <Image
              src="/assets/zylux-symbol.png"
              alt="Zylux Software Solutions"
              width={36}
              height={36}
              className="w-full h-full object-cover rounded-[9px]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-extrabold tracking-tight text-white group-hover:text-white/90 leading-none">
              ZYLUX
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#FF6B61] mt-1 hidden sm:block font-semibold">
              SOFTWARE SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#17141D]/60 border border-[#2A2530] px-4 py-1.5 rounded-full backdrop-blur-md">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setSolutionsDropdownOpen(true)}
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors',
                      isActive
                        ? 'text-white bg-[#241923] border border-[#FF4F9A]/30'
                        : 'text-[#A7A1AC] hover:text-white hover:bg-white/5'
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Solutions Dropdown Menu */}
                  {solutionsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 p-2 rounded-2xl bg-[#17141D]/95 border border-[#2A2530] backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#241923] transition-colors group"
                        >
                          <div className="mt-0.5 p-2 rounded-lg bg-[#241923] border border-[#2A2530] group-hover:border-[#FF4F9A]/40 transition-colors">
                            {iconMap[subItem.icon] || <Code2 className="w-4 h-4 text-[#FF4F9A]" />}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-[#FF4F9A] transition-colors flex items-center gap-1">
                              {subItem.title}
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF4F9A]" />
                            </div>
                            <p className="text-xs text-[#A7A1AC] mt-0.5 leading-snug">
                              {subItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
                  isActive
                    ? 'text-white bg-[#241923] border border-[#FF4F9A]/30 shadow-sm shadow-[#FF4F9A]/15 font-semibold'
                    : 'text-[#A7A1AC] hover:text-white hover:bg-white/5'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA, Theme Toggle & Status Chip */}
        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <Badge variant="status" dot className="hidden xl:inline-flex text-[11px] font-mono tracking-wider font-semibold">
            PROJECT INTAKE OPEN
          </Badge>
          <ThemeToggle />
          <Button href="/contact" size="sm" showArrow variant="primary" className="shimmer-container">
            Start a Project
          </Button>
        </div>

        {/* Mobile / Tablet Header Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#FF4F9A] to-[#FF6B61] text-white shadow-sm shadow-[#FF4F9A]/30 hover:opacity-95 transition-all mr-1"
          >
            Start a Project
          </Link>
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-white/80 hover:text-white bg-[#17141D] border border-[#2A2530] hover:border-[#FF4F9A]/40 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Dynamic Viewport Height & Momentum Scrolling */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer lg:hidden fixed inset-x-0 top-[58px] sm:top-[68px] h-[calc(100dvh-58px)] sm:h-[calc(100dvh-68px)] bg-[#0B0A0F]/98 backdrop-blur-2xl border-b border-[#2A2530] overflow-y-auto touch-scroll p-5 sm:p-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl z-50">
          <div className="space-y-4">
            <div className="pb-3 border-b border-[#2A2530] flex items-center justify-between">
              <Badge variant="status" dot className="text-[11px] font-mono tracking-wider font-semibold">
                PROJECT INTAKE OPEN
              </Badge>
              <span className="text-[10px] font-mono text-[#27C93F] font-bold">
                24/7 LIVE
              </span>
            </div>

            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3.5 py-2.5 text-base font-medium rounded-xl transition-colors",
                  pathname === '/'
                    ? "text-white bg-[#241923] border border-[#FF4F9A]/30 font-semibold shadow-xs"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                )}
              >
                Home
              </Link>
              
              <div className="pt-2 pb-1">
                <div className="px-3.5 text-[11px] font-mono tracking-widest text-[#FF4F9A] uppercase mb-2 font-bold">
                  Solutions & Disciplines
                </div>
                <div className="pl-3 space-y-1 border-l-2 border-[#2A2530] ml-3.5">
                  <Link
                    href="/solutions/technology"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block py-1.5 px-2 text-sm rounded-lg transition-colors",
                      pathname === '/solutions/technology'
                        ? "text-[#FF4F9A] bg-[#241923]/60 font-semibold"
                        : "text-[#D7D3DC] hover:text-white hover:bg-white/5"
                    )}
                  >
                    Technology Studio
                  </Link>
                  <Link
                    href="/solutions/digital"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block py-1.5 px-2 text-sm rounded-lg transition-colors",
                      pathname === '/solutions/digital'
                        ? "text-[#FF4F9A] bg-[#241923]/60 font-semibold"
                        : "text-[#D7D3DC] hover:text-white hover:bg-white/5"
                    )}
                  >
                    Digital Growth Studio
                  </Link>
                  <Link
                    href="/solutions"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block py-1.5 px-2 text-sm font-semibold hover:underline",
                      pathname === '/solutions'
                        ? "text-[#FF4F9A] font-bold"
                        : "text-[#FF8A45]"
                    )}
                  >
                    View All Services →
                  </Link>
                </div>
              </div>

              <Link
                href="/work"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3.5 py-2.5 text-base font-medium rounded-xl transition-colors",
                  pathname.startsWith('/work')
                    ? "text-white bg-[#241923] border border-[#FF4F9A]/30 font-semibold"
                    : "text-[#D7D3DC] hover:text-white hover:bg-white/5"
                )}
              >
                Selected Work
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3.5 py-2.5 text-base font-medium rounded-xl transition-colors",
                  pathname === '/about'
                    ? "text-white bg-[#241923] border border-[#FF4F9A]/30 font-semibold"
                    : "text-[#D7D3DC] hover:text-white hover:bg-white/5"
                )}
              >
                About Zylux
              </Link>
              <Link
                href="/process"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3.5 py-2.5 text-base font-medium rounded-xl transition-colors",
                  pathname === '/process'
                    ? "text-white bg-[#241923] border border-[#FF4F9A]/30 font-semibold"
                    : "text-[#D7D3DC] hover:text-white hover:bg-white/5"
                )}
              >
                Our Process
              </Link>
              <Link
                href="/insights"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3.5 py-2.5 text-base font-medium rounded-xl transition-colors",
                  pathname.startsWith('/insights')
                    ? "text-white bg-[#241923] border border-[#FF4F9A]/30 font-semibold"
                    : "text-[#D7D3DC] hover:text-white hover:bg-white/5"
                )}
              >
                Insights
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3.5 py-2.5 text-base font-medium rounded-xl transition-colors",
                  pathname === '/contact'
                    ? "text-white bg-[#241923] border border-[#FF4F9A]/30 font-semibold"
                    : "text-[#D7D3DC] hover:text-white hover:bg-white/5"
                )}
              >
                Contact
              </Link>

              <div className="pt-3 pb-1 px-1">
                <ThemeToggle variant="switch" />
              </div>
            </div>
          </div>

          <div className="pt-5 pb-6 border-t border-[#2A2530] space-y-3">
            <div onClick={() => setMobileMenuOpen(false)}>
              <Button href="/contact" size="md" showArrow variant="primary" className="w-full">
                Start a Project
              </Button>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-[#A7A1AC]">
              <span>GLOBAL COVERAGE</span>
              <span className="text-[#27C93F] font-semibold">OPEN 24 HOURS</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
