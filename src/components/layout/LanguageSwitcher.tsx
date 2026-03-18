'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/routing';
import {ChangeEvent, useTransition} from 'react';
import {Globe} from 'lucide-react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <div className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors cursor-pointer">
      <Globe className="w-4 h-4" />
      <select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
        className="bg-transparent text-sm focus:outline-none cursor-pointer appearance-none uppercase font-medium"
        aria-label="Select language"
      >
        <option value="en" className="text-black">EN</option>
        <option value="zh" className="text-black">ZH</option>
      </select>
    </div>
  );
}
