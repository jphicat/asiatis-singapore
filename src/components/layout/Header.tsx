'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, Mail } from 'lucide-react';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services/technical' },
  { key: 'languages', href: '/languages' },
  { key: 'industries', href: '/industries' },
  { key: 'about', href: '/about' },
  { key: 'quality', href: '/quality' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to content
      </a>

      <header className="bg-[#4B1495] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl tracking-tight text-white hover:text-white">
            asiatis.com.sg
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium" aria-label="Main navigation">
            {navItems.map(({ key, href }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={key}
                  href={href as any}
                  className={`transition-colors ${isActive ? 'text-white font-bold' : 'text-white/90 hover:text-violet-300'}`}
                  {...(isActive ? { 'aria-current': 'page' as const } : {})}
                >
                  {t(key)}
                </Link>
              );
            })}
            <a
              href="mailto:email@asiatis.com.sg"
              className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-violet-500/30 transition-all inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {t('getQuote')}
            </a>
            <div className="w-px h-5 bg-white/20 mx-1" />
            <LanguageSwitcher />
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="text-white p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden bg-[#3B0E7A] border-t border-white/10 px-4 py-6 space-y-1"
            aria-label="Mobile navigation"
          >
            {navItems.map(({ key, href }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={key}
                  href={href as any}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${isActive ? 'bg-white/10 text-white font-bold' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
                  {...(isActive ? { 'aria-current': 'page' as const } : {})}
                >
                  {t(key)}
                </Link>
              );
            })}
            <a
              href="mailto:email@asiatis.com.sg"
              className="block mt-4 text-center px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-full transition-all"
            >
              {t('getQuote')}
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
