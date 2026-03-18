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
  const t = await getTranslations({ locale, namespace: 'NordicPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages/nordic',
        zh: '/zh/languages/nordic',
        "x-default": '/en/languages/nordic'
      },
    },
  };
}

export default function NordicLanguagePage() {
  const t = useTranslations('NordicPage');

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
    maritime: { title: t('whatWeTranslate.items.maritime').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.maritime').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.maritime') },
    energy: { title: t('whatWeTranslate.items.energy').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.energy').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.energy') },
    lifescience: { title: t('whatWeTranslate.items.lifescience').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.lifescience').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.lifescience') },
    it: { title: t('whatWeTranslate.items.it').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.it').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.it') }
  };

  const whyUsItems = {
    comprehensive: { title: t('whyUs.items.comprehensive.title'), desc: t('whyUs.items.comprehensive.desc') },
    quality: { title: t('whyUs.items.quality.title'), desc: t('whyUs.items.quality.desc') },
    compliance: { title: t('whyUs.items.compliance.title'), desc: t('whyUs.items.compliance.desc') }
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
