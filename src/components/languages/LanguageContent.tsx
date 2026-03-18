import React from 'react';
import { Globe2 } from 'lucide-react';

interface LanguageContentProps {
  heading: string;
  items: Record<string, { title: string; desc: string }>;
}

export function LanguageContent({ heading, items }: LanguageContentProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(items).map(([key, item]) => (
            <div key={key} className="flex flex-col p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
