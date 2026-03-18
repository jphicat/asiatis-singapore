import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { LanguageHero } from '@/components/languages/LanguageHero';
import { LanguageContent } from '@/components/languages/LanguageContent';
import { LanguageFAQ } from '@/components/languages/LanguageFAQ';
import { LanguageCTA } from '@/components/languages/LanguageCTA';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'EasternEuropePage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages/eastern-europe',
        zh: '/zh/languages/eastern-europe',
        "x-default": '/en/languages/eastern-europe'
      },
    },
  };
}

export default function EasternEuropeLanguagePage() {
  const t = useTranslations('EasternEuropePage');

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
    russian: { title: t('whatWeTranslate.items.russian').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.russian').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.russian') },
    polish: { title: t('whatWeTranslate.items.polish').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.polish').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.polish') },
    czech: { title: t('whatWeTranslate.items.czech').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.czech').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.czech') },
    others: { title: t('whatWeTranslate.items.others').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.others').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.others') }
  };

  const whyUsItems = {
    energy: { title: t('whyUs.items.energy.title'), desc: t('whyUs.items.energy.desc') },
    manufacturing: { title: t('whyUs.items.manufacturing.title'), desc: t('whyUs.items.manufacturing.desc') },
    it: { title: t('whyUs.items.it.title'), desc: t('whyUs.items.it.desc') }
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

      {/* Internal Links Block */}
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
