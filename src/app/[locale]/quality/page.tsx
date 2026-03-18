import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ShieldCheck, CheckCircle2, Lock, Cpu } from 'lucide-react';
import ContactCTA from '@/components/home/ContactCTA';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'QualityPage.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/quality',
        zh: '/zh/quality',
      },
    },
  };
}

export default async function QualityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('QualityPage');

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
          <ShieldCheck className="w-96 h-96 text-brand-primary" />
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">{t('process.heading')}</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {['step1', 'step2', 'step3', 'step4', 'step5'].map((step, index) => (
              <div key={step} className="flex flex-col sm:flex-row gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-brand-primary/20">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-brand-primary/30">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(`process.steps.${step}.title`)}</h3>
                  <p className="text-gray-600 text-lg">{t(`process.steps.${step}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Controls */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">{t('controls.heading')}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {['review', 'terminology', 'format', 'checklists'].map((item) => (
              <div key={item} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/20 transition-colors">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`controls.items.${item}.title`)}</h3>
                <p className="text-gray-600">{t(`controls.items.${item}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">{t('technology.heading')}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {['cat', 'memory', 'databases', 'formats'].map((item) => (
              <div key={item} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/20 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`technology.items.${item}.title`)}</h3>
                <p className="text-gray-600">{t(`technology.items.${item}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 lg:py-32 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">{t('security.heading')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {['nda', 'encryption', 'access', 'gdpr'].map((item) => (
              <div key={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Lock className="w-8 h-8 text-white/80 mb-6" />
                <h3 className="text-xl font-bold mb-3">{t(`security.items.${item}.title`)}</h3>
                <p className="text-white/80">{t(`security.items.${item}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
