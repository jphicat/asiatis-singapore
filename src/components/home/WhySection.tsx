'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Building2, Clock, Target, ShieldCheck } from 'lucide-react';

const items = [
  { key: 'offices', icon: Building2 },
  { key: 'timezone', icon: Clock },
  { key: 'specialization', icon: Target },
  { key: 'process', icon: ShieldCheck },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function WhySection() {
  const t = useTranslations('HomePage.why');

  return (
    <section className="section-padding bg-gradient-to-br from-brand-foreground to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t('heading')}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {items.map(({ key, icon: Icon }) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-primary/30 rounded-xl flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{t(`${key}.title`)}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{t(`${key}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
