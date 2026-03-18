'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-brand-foreground text-brand-secondary py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-bold text-white text-lg mb-3">{t('singapore')}</p>
            <p className="text-sm leading-relaxed">541 Orchard Road, #09-01<br />Liat Towers, Singapore 238881</p>
            <div className="flex items-center gap-2 mt-3 text-sm">
              <Phone className="w-4 h-4 text-violet-400" />
              <a href="tel:+6569500209" className="hover:text-white transition-colors">+65 6950 0209</a>
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm">
              <Mail className="w-4 h-4 text-violet-400" />
              <a href="mailto:email@asiatis.com.sg" className="hover:text-white transition-colors">email@asiatis.com.sg</a>
            </div>
          </div>
          <div>
            <p className="font-bold text-white text-lg mb-3">{t('paris')}</p>
            <p className="text-sm leading-relaxed">58 Avenue de Wagram<br />75017 Paris, France</p>
            <div className="flex items-center gap-2 mt-3 text-sm">
              <Phone className="w-4 h-4 text-violet-400" />
              <a href="tel:+33184257879" className="hover:text-white transition-colors">+33 1 8425 7879</a>
            </div>
          </div>
          <div>
            <p className="font-bold text-white text-lg mb-3">{t('montreal')}</p>
            <p className="text-sm leading-relaxed">{t('montrealDesc')}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <nav className="flex flex-wrap gap-x-8 gap-y-2 justify-center text-sm" aria-label="Footer navigation">
            <Link href="/about" className="hover:text-white transition-colors">{t('aboutLink')}</Link>
            <Link href="/services/technical" className="hover:text-white transition-colors">{t('servicesLink')}</Link>
            <Link href="/languages" className="hover:text-white transition-colors">{t('languagesLink')}</Link>
            <Link href="/industries" className="hover:text-white transition-colors">{t('industriesLink')}</Link>
            <Link href="/quality" className="hover:text-white transition-colors">{t('qualityLink')}</Link>
            <Link href="/contact" className="hover:text-white transition-colors">{t('contactLink')}</Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Asiatis Singapore. {t('rights')}
        </div>
      </div>
    </footer>
  );
}
