import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {Outfit, Noto_Sans_SC} from 'next/font/google';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlobalSchema from '@/components/seo/GlobalSchema';
import './globals.css';

const outfit = Outfit({subsets: ['latin'], variable: '--font-outfit'});
const notoSansSC = Noto_Sans_SC({subsets: ['latin'], weight: ['400', '700'], variable: '--font-noto-sans-sc'});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(props: any) {
  const params = await props.params;
  const locale = params?.locale;
  return {
    title: 'Asiatis Singapore',
    description: 'Welcome to Asiatis Singapore',
    alternates: {
      languages: {
        en: '/en',
        zh: '/zh',
      },
    },
  };
}

export default async function LocaleLayout(
  props: {
    children: React.ReactNode;
    params: any;
  }
) {
  const params = await props.params;
  const locale = params?.locale;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${outfit.variable} ${notoSansSC.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-grow">{props.children}</main>
            <Footer />
          </div>
          <GlobalSchema />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
