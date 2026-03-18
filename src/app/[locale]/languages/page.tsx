import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { LanguageHero } from '@/components/languages/LanguageHero';
import { LanguageCTA } from '@/components/languages/LanguageCTA';
import { getLangDir } from 'rtl-detect';
import { Link } from '@/i18n/routing';
import { Globe2 } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'LanguagesHubPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        en: '/en/languages',
        zh: '/zh/languages',
        "x-default": '/en/languages'
      },
    },
  };
}

export default function LanguagesHubPage() {
  const t = useTranslations('LanguagesHubPage');

  const regions = [
    {
      title: t('sections.european'),
      description: '',
      isCore: true,
      languages: [
        { name: 'French', link: '/languages/french' },
        { name: 'German', link: '/languages/german' },
        { name: 'Spanish', link: '/languages/spanish' },
        { name: 'Italian', link: '/languages/italian' },
        { name: 'Portuguese', link: '/languages/portuguese' },
      ],
    },
    {
      title: t('sections.nordic'),
      description: '',
      isCore: true,
      languages: [
        { name: 'Nordic Languages', link: '/languages/nordic' },
      ],
    },
    {
      title: t('sections.eastern'),
      description: '',
      isCore: false,
      languages: [
        { name: 'Eastern European', link: '/languages/eastern-europe' },
      ],
    },
    {
      title: t('sections.middleEast'),
      description: '',
      isCore: false,
      languages: [
        { name: 'Arabic', link: '/languages/arabic' },
        { name: 'Hebrew', link: '/languages/hebrew' },
      ],
    },
    {
      title: t('sections.asian'),
      description: '',
      isCore: false,
      languages: [
        { name: 'Asian Languages', link: '/languages/asian' },
      ],
    },
  ];

  return (
    <main>
      <LanguageHero 
        title={t('hero.h1')} 
        intro={t('hero.intro')} 
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div 
                key={index} 
                className={`flex flex-col p-6 rounded-2xl border ${region.isCore ? 'border-primary/20 bg-primary/5 shadow-sm' : 'border-border bg-card'}`}
              >
                {region.isCore && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit mb-4">
                    <Globe2 className="w-3.5 h-3.5" />
                    Core Strength
                  </span>
                )}
                <h2 className="text-2xl font-bold text-foreground mb-3">{region.title}</h2>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {region.languages.map((lang, langIdx) => (
                    <Link
                      key={langIdx}
                      href={lang.link as any}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                    >
                      {lang.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LanguageCTA 
        heading={t('cta.heading')} 
        body={t('cta.body')} 
        buttonText={t('cta.button')} 
      />
    </main>
  );
}
