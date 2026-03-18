import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Briefcase, Building2, Stethoscope, Settings, Landmark, Laptop, Gem, Ship } from 'lucide-react';
import Link from 'next/link';
import ContactCTA from '@/components/home/ContactCTA';

const iconMap: Record<string, React.ReactNode> = {
  legal: <Landmark className="w-8 h-8" />,
  medical: <Stethoscope className="w-8 h-8" />,
  technical: <Settings className="w-8 h-8" />,
  finance: <Briefcase className="w-8 h-8" />,
  it: <Laptop className="w-8 h-8" />,
  luxury: <Gem className="w-8 h-8" />,
  energy: <Ship className="w-8 h-8" />,
  corporate: <Building2 className="w-8 h-8" />,
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'IndustriesPage.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/industries',
        zh: '/zh/industries',
      },
    },
  };
}

export default async function IndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('IndustriesPage');

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6 tracking-tight">
              {t('hero.h1')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              {t('hero.intro')}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
          <Building2 className="w-96 h-96 text-brand-primary" />
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {['legal', 'medical', 'technical', 'finance', 'it', 'luxury', 'energy', 'corporate'].map((ind) => (
              <Link key={ind} href={`/${locale}${t(`industries.${ind}.link`)}`} className="group flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-primary/30 transition-all">
                <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {iconMap[ind]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`industries.${ind}.title`)}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{t(`industries.${ind}.desc`)}</p>
                <div className="text-brand-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center max-w-3xl mx-auto bg-brand-primary/5 p-8 md:p-12 rounded-3xl border border-brand-primary/10">
            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
              {t('cta.text')}
            </p>
            <div className="mt-8">
              <Link href={`/${locale}/contact`} className="btn-primary inline-flex">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
