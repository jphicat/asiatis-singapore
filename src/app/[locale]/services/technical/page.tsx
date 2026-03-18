import { getTranslations } from 'next-intl/server';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceContent } from '@/components/services/ServiceContent';
import { ServiceDifferentiators } from '@/components/services/ServiceDifferentiators';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { ServiceCTA } from '@/components/services/ServiceCTA';
import Script from 'next/script';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'TechnicalPage.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/services/technical',
        zh: '/zh/services/technical',
      },
    },
  };
}

export default async function TechnicalTranslationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('TechnicalPage');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": t('faq.q1'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a1') } },
      { "@type": "Question", "name": t('faq.q2'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a2') } },
      { "@type": "Question", "name": t('faq.q3'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a3') } },
      { "@type": "Question", "name": t('faq.q4'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a4') } }
    ]
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <ServiceHero title={t('hero.h1')} intro={t('hero.intro')} />
        
        <ServiceContent 
          heading={t('whatWeTranslate.heading')} 
          items={{
            manuals: t('whatWeTranslate.items.manuals'),
            dataSheets: t('whatWeTranslate.items.dataSheets'),
            reports: t('whatWeTranslate.items.reports'),
            patents: t('whatWeTranslate.items.patents'),
            safety: t('whatWeTranslate.items.safety'),
            software: t('whatWeTranslate.items.software')
          }} 
        />

        <ServiceDifferentiators 
          heading={t('whyUs.heading')}
          items={{
            experts: { title: t('whyUs.items.experts.title'), desc: t('whyUs.items.experts.desc') },
            terminology: { title: t('whyUs.items.terminology.title'), desc: t('whyUs.items.terminology.desc') },
            standards: { title: t('whyUs.items.standards.title'), desc: t('whyUs.items.standards.desc') },
            formats: { title: t('whyUs.items.formats.title'), desc: t('whyUs.items.formats.desc') }
          }}
        />

        <ServiceFAQ 
          heading={t('faq.heading')}
          items={[
            { question: t('faq.q1'), answer: t('faq.a1') },
            { question: t('faq.q2'), answer: t('faq.a2') },
            { question: t('faq.q3'), answer: t('faq.a3') },
            { question: t('faq.q4'), answer: t('faq.a4') }
          ]}
        />

        <ServiceCTA heading={t('cta.heading')} body={t('cta.body')} buttonText={t('cta.button')} />
      </main>
    </>
  );
}
