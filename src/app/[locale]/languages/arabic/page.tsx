import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { LanguageHero } from '@/components/languages/LanguageHero';
import { LanguageContent } from '@/components/languages/LanguageContent';
import { LanguageFAQ } from '@/components/languages/LanguageFAQ';
import { LanguageCTA } from '@/components/languages/LanguageCTA';
import { getLangDir } from 'rtl-detect';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ArabicPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages/arabic',
        zh: '/zh/languages/arabic',
        "x-default": '/en/languages/arabic'
      },
    },
  };
}

export default function ArabicLanguagePage() {
  const t = useTranslations('ArabicPage');

  const faqItems = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const industryItems = {
    msa: { title: t('whatWeTranslate.items.msa').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.msa').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.msa') },
    dialects: { title: t('whatWeTranslate.items.dialects').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.dialects').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.dialects') },
    rtl: { title: t('whatWeTranslate.items.rtl').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.rtl').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.rtl') },
    cross: { title: t('whatWeTranslate.items.cross').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.cross').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.cross') }
  };

  const whyUsItems = {
    finance: { title: t('whyUs.items.finance.title'), desc: t('whyUs.items.finance.desc') },
    investment: { title: t('whyUs.items.investment.title'), desc: t('whyUs.items.investment.desc') },
    dtp: { title: t('whyUs.items.dtp.title'), desc: t('whyUs.items.dtp.desc') }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <LanguageHero 
        title={t('hero.h1')} 
        intro={t('hero.intro')} 
      />

      <div className="bg-violet-50 dark:bg-violet-950/20 py-8 border-y border-violet-100 dark:border-violet-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm font-medium">
          <span className="text-violet-600 dark:text-violet-400 mr-2 opacity-70">Related Services:</span>
          <Link href="/services/legal" className="text-violet-800 dark:text-violet-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mx-2">
            Legal Translation
          </Link>
          <span className="text-violet-300 dark:text-violet-700">|</span>
          <Link href="/services/commercial" className="text-violet-800 dark:text-violet-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mx-2">
            Commercial Translation
          </Link>
        </div>
      </div>

      <LanguageContent 
        heading={t('whatWeTranslate.heading')} 
        items={industryItems} 
      />

      <LanguageContent 
        heading={t('whyUs.heading')} 
        items={whyUsItems} 
      />

      <LanguageFAQ 
        heading={t('faq.heading')} 
        items={faqItems} 
      />

      <LanguageCTA 
        heading={t('cta.heading')} 
        body={t('cta.body')} 
        buttonText={t('cta.button')} 
      />
    </main>
  );
}
