'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Mail, ArrowRight, Award, Globe, Building, Briefcase, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HeroSection() {
  const t = useTranslations('HomePage');

  const trustItems = [
    { text: t('trustBar.experience'), icon: Award },
    { text: t('trustBar.languages'), icon: Globe },
    { text: t('trustBar.offices'), icon: Building },
    { text: t('trustBar.b2b'), icon: Briefcase },
  ];

  return (
    <section className="relative bg-[#f8f9fa] pt-20 pb-16 md:pt-32 md:pb-24 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Sphere */}
      <div
          className="absolute inset-0 w-full h-full"
          style={{
              backgroundImage: 'url(/hero-sphere.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: '80% center',
              backgroundRepeat: 'no-repeat'
          }}
      >
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mb-16"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-sm font-semibold text-slate-600 mb-8 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              SINGAPORE • PARIS • MONTREAL
            </motion.div>

            {/* H1 */}
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              <span className="block text-slate-900">{t('hero.h1Line1')}</span>
              <span className="block text-brand-primary">{t('hero.h1Line2')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="text-xl text-slate-600 font-medium mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </motion.p>

            {/* In Brief */}
            <motion.div variants={fadeUp} className="mb-10 space-y-3">
              <div className="font-semibold text-slate-900">{t('hero.inBriefTitle')}</div>
              <ul className="space-y-2">
                {['experience', 'offices', 'services'].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span>{t(`hero.inBriefPoints.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="mailto:email@asiatis.com.sg"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-lg shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                {t('hero.ctaQuote')}
              </a>
              <Link
                href="/services/technical"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-slate-900 border-2 border-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
              >
                {t('hero.ctaServices')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUp} className="text-sm text-slate-500 font-medium ml-4">
              {t('hero.contactInfo')}
            </motion.div>
          </motion.div>

          {/* Stats / Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:bg-slate-50/80 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-brand-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-slate-900 text-center text-sm md:text-base">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
