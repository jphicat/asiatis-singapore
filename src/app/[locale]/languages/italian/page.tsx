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
  const t = await getTranslations({ locale, namespace: 'ItalianPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages/italian',
        zh: '/zh/languages/italian',
        "x-default": '/en/languages/italian'
      },
    },
  };
}

export default function ItalianLanguagePage() {
  const t = useTranslations('ItalianPage');

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
    luxury: { title: t('whatWeTranslate.items.luxury').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.luxury').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.luxury') },
    manufacturing: { title: t('whatWeTranslate.items.manufacturing').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.manufacturing').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.manufacturing') },
    fnb: { title: t('whatWeTranslate.items.fnb').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.fnb').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.fnb') },
    legal: { title: t('whatWeTranslate.items.legal').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.legal').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.legal') }
  };

  const whyUsItems = {
    style: { title: t('whyUs.items.style.title'), desc: t('whyUs.items.style.desc') },
    technical: { title: t('whyUs.items.technical.title'), desc: t('whyUs.items.technical.desc') },
    eu: { title: t('whyUs.items.eu.title'), desc: t('whyUs.items.eu.desc') }
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
