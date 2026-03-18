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
  const t = await getTranslations({ locale, namespace: 'GermanPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages/german',
        zh: '/zh/languages/german',
        "x-default": '/en/languages/german'
      },
    },
  };
}

export default function GermanLanguagePage() {
  const t = useTranslations('GermanPage');

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
    engineering: { title: t('whatWeTranslate.items.engineering').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.engineering').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.engineering') },
    automotive: { title: t('whatWeTranslate.items.automotive').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.automotive').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.automotive') },
    chemicals: { title: t('whatWeTranslate.items.chemicals').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.chemicals').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.chemicals') },
    fintech: { title: t('whatWeTranslate.items.fintech').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.fintech').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.fintech') }
  };

  const whyUsItems = {
    dach: { title: t('whyUs.items.dach.title'), desc: t('whyUs.items.dach.desc') },
    technical: { title: t('whyUs.items.technical.title'), desc: t('whyUs.items.technical.desc') },
    mnc: { title: t('whyUs.items.mnc.title'), desc: t('whyUs.items.mnc.desc') }
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
