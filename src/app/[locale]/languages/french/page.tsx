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
  const t = await getTranslations({ locale, namespace: 'FrenchPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages/french',
        zh: '/zh/languages/french',
        "x-default": '/en/languages/french'
      },
    },
  };
}

export default function FrenchLanguagePage() {
  const t = useTranslations('FrenchPage');

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
    pharma: { title: t('whatWeTranslate.items.pharma').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.pharma').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.pharma') },
    luxury: { title: t('whatWeTranslate.items.luxury').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.luxury').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.luxury') },
    legal: { title: t('whatWeTranslate.items.legal').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.legal').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.legal') },
    technical: { title: t('whatWeTranslate.items.technical').split('：')[0].split(':')[0], desc: t('whatWeTranslate.items.technical').split(/：|:/)[1]?.trim() || t('whatWeTranslate.items.technical') }
  };

  const whyUsItems = {
    dualExpertise: { title: t('whyUs.items.dualExpertise.title'), desc: t('whyUs.items.dualExpertise.desc') },
    mnc: { title: t('whyUs.items.mnc.title'), desc: t('whyUs.items.mnc.desc') },
    variants: { title: t('whyUs.items.variants.title'), desc: t('whyUs.items.variants.desc') }
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
