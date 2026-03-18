import {useTranslations} from 'next-intl';

const LOGOS = [
  'axa.png',
  'bdo.png',
  'bnp.png',
  'capgemini.png',
  'dior.png',
  'engie.png',
  'kering.png',
  'loreal.png',
  'natixis.png',
  'sanofi.png',
  'veolia.png'
];

export default function ClientLogos() {
  const t = useTranslations('HomePage.clientLogos');

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase">{t('heading')}</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {LOGOS.map((logo, index) => (
            <div key={`logo-1-${index}`} className="flex-none px-8 md:px-12 flex items-center justify-center">
              <img
                src={`https://asiatis.com/assets/logos/clients/80px/${logo}`}
                alt={logo.replace('.png', '')}
                className="h-8 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap" aria-hidden="true">
          {LOGOS.map((logo, index) => (
            <div key={`logo-2-${index}`} className="flex-none px-8 md:px-12 flex items-center justify-center">
              <img
                src={`https://asiatis.com/assets/logos/clients/80px/${logo}`}
                alt={logo.replace('.png', '')}
                className="h-8 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
