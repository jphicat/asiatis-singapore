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
  const t = await getTranslations({ locale, namespace: 'PortuguesePage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages/portuguese',
        zh: '/zh/languages/portuguese',
        "x-default": '/en/languages/portuguese'
      },
    },
  };
}

export default function PortugueseLanguagePage() {
  const t = useTranslations('PortuguesePage');

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
    tech: { title: t('whatWeTranslate.items.tech').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.tech').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.tech') },
    energy: { title: t('whatWeTranslate.items.energy').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.energy').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.energy') },
    ecommerce: { title: t('whatWeTranslate.items.ecommerce').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.ecommerce').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.ecommerce') },
    legal: { title: t('whatWeTranslate.items.legal').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.legal').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.legal') }
  };

  const whyUsItems = {
    dual: { title: t('whyUs.items.dual.title'), desc: t('whyUs.items.dual.desc') },
    latam: { title: t('whyUs.items.latam.title'), desc: t('whyUs.items.latam.desc') },
    techHub: { title: t('whyUs.items.techHub.title'), desc: t('whyUs.items.techHub.desc') }
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
