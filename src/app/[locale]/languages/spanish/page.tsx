import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { LanguageHero } from '@/components/languages/LanguageHero';
import { LanguageContent } from '@/components/languages/LanguageContent';
import { LanguageFAQ } from '@/components/languages/LanguageFAQ';
import { LanguageCTA } from '@/components/languages/LanguageCTA';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SpanishPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages/spanish',
        zh: '/zh/languages/spanish',
        "x-default": '/en/languages/spanish'
      },
    },
  };
}

export default function SpanishLanguagePage() {
  const t = useTranslations('SpanishPage');

  const faqItems = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') }
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
    mining: { title: t('whatWeTranslate.items.mining').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.mining').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.mining') },
    fnb: { title: t('whatWeTranslate.items.fnb').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.fnb').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.fnb') },
    pharma: { title: t('whatWeTranslate.items.pharma').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.pharma').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.pharma') },
    commercial: { title: t('whatWeTranslate.items.commercial').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.commercial').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.commercial') }
  };

  const whyUsItems = {
    latam: { title: t('whyUs.items.latam.title'), desc: t('whyUs.items.latam.desc') },
    neutral: { title: t('whyUs.items.neutral.title'), desc: t('whyUs.items.neutral.desc') },
    trade: { title: t('whyUs.items.trade.title'), desc: t('whyUs.items.trade.desc') }
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
