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
  const t = await getTranslations({ locale, namespace: 'AsianPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages/asian',
        zh: '/zh/languages/asian',
        "x-default": '/en/languages/asian'
      },
    },
  };
}

export default function AsianLanguagePage() {
  const t = useTranslations('AsianPage');

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
    chinese: { title: t('whatWeTranslate.items.chinese').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.chinese').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.chinese') },
    jk: { title: t('whatWeTranslate.items.jk').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.jk').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.jk') },
    asean: { title: t('whatWeTranslate.items.asean').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.asean').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.asean') },
    india: { title: t('whatWeTranslate.items.india').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.india').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.india') }
  };

  const whyUsItems = {
    cross: { title: t('whyUs.items.cross.title'), desc: t('whyUs.items.cross.desc') },
    regional: { title: t('whyUs.items.regional.title'), desc: t('whyUs.items.regional.desc') },
    breadth: { title: t('whyUs.items.breadth.title'), desc: t('whyUs.items.breadth.desc') }
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
