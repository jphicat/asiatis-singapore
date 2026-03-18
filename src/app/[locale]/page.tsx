import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';
import ClientLogos from '@/components/home/ClientLogos';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import LanguagesSection from '@/components/home/LanguagesSection';
import WhySection from '@/components/home/WhySection';
import ContactCTA from '@/components/home/ContactCTA';

export async function generateMetadata(props: any) {
  const params = await props.params;
  const locale = params?.locale;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_SG',
      siteName: 'Asiatis Singapore',
    },
    alternates: {
      languages: {
        en: '/en',
        zh: '/zh',
      },
    },
  };
}

export default async function HomePage(props: any) {
  const params = await props.params;
  const locale = params?.locale;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ClientLogos />
      <ExpertiseSection />
      <LanguagesSection />
      <WhySection />
      <ContactCTA />
    </>
  );
}
