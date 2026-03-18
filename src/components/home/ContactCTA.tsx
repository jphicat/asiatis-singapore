'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ContactCTA() {
  const t = useTranslations('HomePage.cta');

  return (
    <section className="section-padding bg-gradient-to-br from-brand-primary to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">
            {t('heading')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {t('body')}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href={`mailto:${t('email')}`}
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              {t('buttonEmail')}
            </a>
            <a
              href={`tel:${t('phone')}`}
              className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              {t('phone')}
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="text-white/80 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            {t('address')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
