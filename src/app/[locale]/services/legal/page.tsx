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
  const t = await getTranslations({ locale, namespace: 'LegalPage.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/services/legal',
        zh: '/zh/services/legal',
      },
    },
  };
}

export default async function LegalTranslationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('LegalPage');

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
            msa: t('whatWeTranslate.items.msa'),
            nda: t('whatWeTranslate.items.nda'),
            litigation: t('whatWeTranslate.items.litigation'),
            corporate: t('whatWeTranslate.items.corporate'),
            ma: t('whatWeTranslate.items.ma'),
            hr: t('whatWeTranslate.items.hr'),
            ip: t('whatWeTranslate.items.ip')
          }} 
        />

        <ServiceDifferentiators 
          heading={t('whyUs.heading')}
          items={{
            experts: { title: t('whyUs.items.experts.title'), desc: t('whyUs.items.experts.desc') },
            systems: { title: t('whyUs.items.systems.title'), desc: t('whyUs.items.systems.desc') },
            confidentiality: { title: t('whyUs.items.confidentiality.title'), desc: t('whyUs.items.confidentiality.desc') },
            crossBorder: { title: t('whyUs.items.crossBorder.title'), desc: t('whyUs.items.crossBorder.desc') }
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
