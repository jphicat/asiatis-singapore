import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import ContactCTA from '@/components/home/ContactCTA';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutPage.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/about',
        zh: '/zh/about',
      },
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('AboutPage');

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
          <Globe className="w-96 h-96 text-brand-primary" />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t('story.heading')}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              {t('story.content').split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('offices.heading')}</h2>
            <p className="text-xl text-gray-600">{t('offices.description')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['singapore', 'paris', 'montreal'].map((office) => (
              <div key={office} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <MapPin className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(`offices.${office}.title`)}</h3>
                <p className="text-gray-600 mb-4">{t(`offices.${office}.address`)}</p>
                <p className="text-sm text-gray-500">{t(`offices.${office}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">{t('approach.heading')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['b2b', 'specialized', 'pm', 'technology', 'security'].map((item) => (
              <div key={item} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/20 transition-colors">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`approach.items.${item}.title`)}</h3>
                <p className="text-gray-600">{t(`approach.items.${item}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">{t('values.heading')}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {['precision', 'consistency', 'transparency', 'partnership'].map((item) => (
              <div key={item} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-4">{t(`values.items.${item}.title`)}</h3>
                <p className="text-white/80 leading-relaxed text-lg">{t(`values.items.${item}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
