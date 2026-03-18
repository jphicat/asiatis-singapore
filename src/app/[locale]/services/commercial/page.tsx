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
  const t = await getTranslations({ locale, namespace: 'CommercialPage.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/services/commercial',
        zh: '/zh/services/commercial',
      },
    },
  };
}

export default async function CommercialTranslationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('CommercialPage');

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
            corporate: t('whatWeTranslate.items.corporate'),
            marketing: t('whatWeTranslate.items.marketing'),
            proposals: t('whatWeTranslate.items.proposals'),
            web: t('whatWeTranslate.items.web'),
            training: t('whatWeTranslate.items.training'),
            esg: t('whatWeTranslate.items.esg')
          }} 
        />

        <ServiceDifferentiators 
          heading={t('whyUs.heading')}
          items={{
            transcreation: { title: t('whyUs.items.transcreation.title'), desc: t('whyUs.items.transcreation.desc') },
            brandVoice: { title: t('whyUs.items.brandVoice.title'), desc: t('whyUs.items.brandVoice.desc') },
            marketNuance: { title: t('whyUs.items.marketNuance.title'), desc: t('whyUs.items.marketNuance.desc') },
            dtp: { title: t('whyUs.items.dtp.title'), desc: t('whyUs.items.dtp.desc') }
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
