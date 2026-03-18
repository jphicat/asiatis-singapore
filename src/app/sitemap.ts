import { MetadataRoute } from 'next';

const BASE_URL = 'https://asiatis.com.sg';

const pages = [
  '',
  '/about',
  '/quality',
  '/industries',
  '/contact',
  '/services/technical',
  '/services/medical-pharma',
  '/services/legal',
  '/services/commercial',
  '/languages',
  '/languages/french',
  '/languages/german',
  '/languages/spanish',
  '/languages/italian',
  '/languages/portuguese',
  '/languages/nordic',
  '/languages/eastern-europe',
  '/languages/arabic',
  '/languages/hebrew',
  '/languages/asian',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${BASE_URL}/en${page}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${BASE_URL}/en${page}`,
        zh: `${BASE_URL}/zh${page}`,
      },
    },
  }));
}
