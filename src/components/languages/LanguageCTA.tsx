import React from 'react';
import { Mail } from 'lucide-react';

interface LanguageCTAProps {
  heading: string;
  body: string;
  buttonText: string;
}

export function LanguageCTA({ heading, body, buttonText }: LanguageCTAProps) {
  return (
    <section className="py-24 bg-violet-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-sphere.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{heading}</h2>
          <p className="text-lg text-violet-200 mb-10 whitespace-pre-line">{body}</p>
          <a
            href="mailto:email@asiatis.com.sg"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-900 hover:bg-violet-50 font-bold rounded-full shadow-lg transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>{buttonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
