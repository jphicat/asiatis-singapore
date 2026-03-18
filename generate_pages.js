const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'services/technical', title: 'Technical Translation', name: 'TechnicalTranslationPage' },
  { path: 'services/medical-pharma', title: 'Medical & Pharmaceutical Translation', name: 'MedicalPharmaTranslationPage' },
  { path: 'services/legal', title: 'Legal Translation', name: 'LegalTranslationPage' },
  { path: 'services/commercial', title: 'Commercial Translation', name: 'CommercialTranslationPage' },
  { path: 'languages', title: 'Our Languages', name: 'OurLanguagesPage' },
  { path: 'languages/french', title: 'French Translation', name: 'FrenchTranslationPage' },
  { path: 'languages/german', title: 'German Translation', name: 'GermanTranslationPage' },
  { path: 'languages/spanish', title: 'Spanish Translation', name: 'SpanishTranslationPage' },
  { path: 'languages/italian', title: 'Italian Translation', name: 'ItalianTranslationPage' },
  { path: 'languages/portuguese', title: 'Portuguese Translation', name: 'PortugueseTranslationPage' },
  { path: 'languages/arabic', title: 'Arabic Translation', name: 'ArabicTranslationPage' },
  { path: 'languages/hebrew', title: 'Hebrew Translation', name: 'HebrewTranslationPage' },
  { path: 'languages/nordic', title: 'Nordic Languages Translation', name: 'NordicTranslationPage' },
  { path: 'languages/eastern-europe', title: 'Eastern European Languages Translation', name: 'EasternEuropeTranslationPage' },
  { path: 'languages/asian', title: 'Asian Languages Translation', name: 'AsianTranslationPage' },
  { path: 'about', title: 'About Asiatis', name: 'AboutPage' },
  { path: 'quality', title: 'Quality Assurance', name: 'QualityPage' },
  { path: 'industries', title: 'Industries We Serve', name: 'IndustriesPage' },
  { path: 'contact', title: 'Contact Us', name: 'ContactPage' }
];

const template = (title, name) => `import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: any) {
  const params = await props.params;
  const locale = params?.locale;
  const t = await getTranslations({ locale, namespace: 'Common' });
  return { title: '${title} — Asiatis Singapore' };
}

export default function ${name}() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">${title}</h1>
      <p className="text-lg text-muted-foreground">Content coming soon.</p>
    </main>
  );
}
`;

pages.forEach(p => {
  const dir = path.join(__dirname, 'src/app/[locale]', p.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(p.title, p.name));
  console.log('Created: ' + p.path);
});
