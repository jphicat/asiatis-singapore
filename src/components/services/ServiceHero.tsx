import React from 'react';

interface ServiceHeroProps {
  title: string;
  intro: string;
}

export function ServiceHero({ title, intro }: ServiceHeroProps) {
  return (
    <section className="relative bg-[#4B1495] pt-32 pb-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#4B1495] to-violet-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-violet-100 leading-relaxed">{intro}</p>
        </div>
      </div>
    </section>
  );
}
