import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactPage.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/contact',
        zh: '/zh/contact',
      },
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ContactPage');

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6 tracking-tight">
              {t('hero.h1')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {t('hero.intro')}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
          <MessageSquare className="w-96 h-96 text-brand-primary" />
        </div>
      </section>

      {/* Primary Contact Methods */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a href={`mailto:${t('methods.email')}`} className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl shadow-gray-200/50 hover:-translate-y-1 transition-transform border border-gray-100">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('methods.email')}</h3>
              <p className="text-gray-500 text-center">{t('methods.quote')}</p>
            </a>
            
            <a href={`tel:${t('methods.phone')}`} className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl shadow-gray-200/50 hover:-translate-y-1 transition-transform border border-gray-100">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('methods.phone')}</h3>
              <p className="text-gray-500 text-center">Singapore Local Support</p>
            </a>
          </div>
        </div>
      </section>

      {/* How to get a quote */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('quote.heading')}</h2>
            <ul className="space-y-4 mb-8">
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex-shrink-0 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold shadow-sm">
                    {item}
                  </div>
                  <p className="text-lg text-gray-700 pt-1">{t(`quote.items.${item}`)}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-600 font-medium">
                {t('quote.response')}
              </p>
              <a href={`mailto:${t('methods.email')}`} className="btn-primary flex-shrink-0">
                {t('quote.button')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Our Global Locations</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['singapore', 'paris', 'montreal'].map((office) => {
              const officeData = t.raw(`offices.${office}`) as Record<string, string>;
              return (
              <div key={office} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{officeData.title}</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    {officeData.address1}<br />
                    {officeData.address2 && <>{officeData.address2}</>}
                  </p>
                  
                  {officeData.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <a href={`tel:${officeData.phone}`} className="hover:text-brand-primary transition-colors text-lg font-medium">
                        {officeData.phone}
                      </a>
                    </div>
                  )}
                  
                  {officeData.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <a href={`mailto:${officeData.email}`} className="hover:text-brand-primary transition-colors">
                        {officeData.email}
                      </a>
                    </div>
                  )}
                  
                  {officeData.hours && (
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <Clock className="w-5 h-5 text-brand-primary" />
                      <span className="font-medium text-gray-800">{officeData.hours}</span>
                    </div>
                  )}
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>
    </main>
  );
}
