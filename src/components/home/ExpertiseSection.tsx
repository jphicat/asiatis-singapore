'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Wrench, Heart, Scale, Megaphone, ArrowRight } from 'lucide-react';

const cards = [
  { key: 'technical', icon: Wrench, href: '/services/technical' },
  { key: 'medical', icon: Heart, href: '/services/medical-pharma' },
  { key: 'legal', icon: Scale, href: '/services/legal' },
  { key: 'commercial', icon: Megaphone, href: '/services/commercial' },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ExpertiseSection() {
  const t = useTranslations('HomePage.expertise');

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-brand-foreground mb-4">
            {t('heading')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map(({ key, icon: Icon, href }) => (
            <motion.div key={key} variants={fadeUp}>
              <Link
                href={href as any}
                className="group block p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 h-full cursor-pointer"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-foreground mb-2 group-hover:text-brand-primary transition-colors">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {t(`${key}.desc`)}
                </p>
                <span className="inline-flex items-center gap-1 text-brand-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('learnMore')} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
