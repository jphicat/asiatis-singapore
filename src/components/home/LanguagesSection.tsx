'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function LanguagePill({ name, href, primary = false }: { name: string; href: string; primary?: boolean }) {
  return (
    <Link
      href={href as any}
      className={`px-5 py-2.5 rounded-full font-medium border transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md ${
        primary
          ? 'bg-brand-primary text-white border-brand-primary shadow-sm hover:bg-brand-foreground hover:border-brand-foreground'
          : 'bg-white text-slate-700 border-gray-200 hover:border-brand-primary hover:text-brand-primary'
      }`}
    >
      {name}
    </Link>
  );
}

export default function LanguagesSection() {
  const t = useTranslations('HomePage.languages');

  const primary = [
    { key: 'french', href: '/languages/french' },
    { key: 'german', href: '/languages/german' },
    { key: 'spanish', href: '/languages/spanish' },
    { key: 'italian', href: '/languages/italian' },
    { key: 'portuguese', href: '/languages/portuguese' },
  ];

  const nordic = [
    { key: 'swedish', href: '/languages/nordic' },
    { key: 'norwegian', href: '/languages/nordic' },
    { key: 'danish', href: '/languages/nordic' },
    { key: 'finnish', href: '/languages/nordic' },
    { key: 'russian', href: '/languages/eastern-europe' },
    { key: 'polish', href: '/languages/eastern-europe' },
  ];

  const middleEast = [
    { key: 'arabic', href: '/languages/arabic' },
    { key: 'hebrew', href: '/languages/hebrew' },
  ];

  const asian = [
    { key: 'chinese', href: '/languages/asian' },
    { key: 'japanese', href: '/languages/asian' },
    { key: 'korean', href: '/languages/asian' },
    { key: 'thai', href: '/languages/asian' },
    { key: 'vietnamese', href: '/languages/asian' },
    { key: 'malay', href: '/languages/asian' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-brand-primary/5 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center text-brand-foreground mb-14">
            {t('heading')}
          </motion.h2>

          {/* European Languages (Primary) */}
          <motion.div variants={fadeUp} className="mb-10">
            <h3 className="text-xl font-bold text-brand-foreground mb-5 text-center">
              {t('europeHeading')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {primary.map(({ key, href }) => (
                <LanguagePill key={key} name={t(`primaryLanguages.${key}`)} href={href} primary />
              ))}
            </div>
          </motion.div>

          {/* Nordic & Eastern Europe */}
          <motion.div variants={fadeUp} className="mb-10">
            <h3 className="text-lg font-semibold text-slate-700 mb-4 text-center">
              {t('nordicHeading')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {nordic.map(({ key, href }) => (
                <LanguagePill key={key} name={t(`nordicLanguages.${key}`)} href={href} />
              ))}
            </div>
          </motion.div>

          {/* Middle East */}
          <motion.div variants={fadeUp} className="mb-10">
            <h3 className="text-lg font-semibold text-slate-700 mb-2 text-center">
              {t('middleEastHeading')}
            </h3>
            <p className="text-sm text-slate-500 text-center mb-4">{t('middleEastNote')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {middleEast.map(({ key, href }) => (
                <LanguagePill key={key} name={t(`middleEastLanguages.${key}`)} href={href} />
              ))}
            </div>
          </motion.div>

          {/* Asian Languages */}
          <motion.div variants={fadeUp} className="mb-10">
            <h3 className="text-lg font-semibold text-slate-700 mb-2 text-center">
              {t('asianHeading')}
            </h3>
            <p className="text-sm text-slate-500 text-center mb-4">{t('asianNote')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {asian.map(({ key, href }) => (
                <LanguagePill key={key} name={t(`asianLanguages.${key}`)} href={href} />
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="text-center mt-8">
            <Link
              href="/languages"
              className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline"
            >
              {t('viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
