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
  const t = await getTranslations({ locale, namespace: 'HebrewPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages/hebrew',
        zh: '/zh/languages/hebrew',
        "x-default": '/en/languages/hebrew'
      },
    },
  };
}

export default function HebrewLanguagePage() {
  const t = useTranslations('HebrewPage');

  const faqItems = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') }
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
    tech: { title: t('whatWeTranslate.items.tech').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.tech').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.tech') },
    fintech: { title: t('whatWeTranslate.items.fintech').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.fintech').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.fintech') },
    patents: { title: t('whatWeTranslate.items.patents').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.patents').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.patents') },
    rtl: { title: t('whatWeTranslate.items.rtl').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.rtl').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.rtl') }
  };

  const whyUsItems = {
    corridor: { title: t('whyUs.items.corridor.title'), desc: t('whyUs.items.corridor.desc') },
    specialized: { title: t('whyUs.items.specialized.title'), desc: t('whyUs.items.specialized.desc') },
    formatting: { title: t('whyUs.items.formatting.title'), desc: t('whyUs.items.formatting.desc') }
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
          <Link href="/services/technical" className="text-violet-800 dark:text-violet-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mx-2">
            Technical Translation
          </Link>
          <span className="text-violet-300 dark:text-violet-700">|</span>
          <Link href="/services/legal" className="text-violet-800 dark:text-violet-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mx-2">
            Legal Translation
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
