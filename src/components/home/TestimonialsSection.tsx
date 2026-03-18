'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Star } from 'lucide-react';
import Script from 'next/script';

const testimonials = [
  {
    id: 1,
    quote: {
      en: "We were really impressed with the quality of your work and the care you took in capturing the tone and messaging. We chose Asiatis after testing several agencies.",
      zh: "我们对您工作的质量以及您在翻译中对语气和信息的把握印象深刻。在测试了多家机构后，我们选择了Asiatis。"
    },
    name: "Tomer V.",
    title: "Marketing Coordinator",
    company: "Marketing agency, Winnipeg",
    sector: "Marketing",
    date: "2025-06",
    rating: 5
  },
  {
    id: 2,
    quote: {
      en: "We come back every year for our magazine translation. The quality is consistent and our team has its preferences — a sign you're part of our process.",
      zh: "我们每年都回来翻译我们的杂志。质量始终如一，我们的团队有自己的偏好——这说明您已成为我们流程的一部分。"
    },
    name: "Adriana B.",
    title: "Marketing Manager",
    company: "Private aviation, Canada",
    sector: "Aviation",
    date: "2025-09",
    rating: 5
  },
  {
    id: 3,
    quote: {
      en: "Perfect, thank you. The script went straight to the director.",
      zh: "完美，谢谢。剧本直接交给了导演。"
    },
    name: "Manon A.",
    title: "Production",
    company: "Film production, Paris",
    sector: "Cinema",
    date: "2025",
    rating: 5
  },
  {
    id: 4,
    quote: {
      en: "Everything is perfect! Thank you for your excellent service and professionalism.",
      zh: "一切都很完美！感谢您出色的服务和专业精神。"
    },
    name: "Stéphanie G.",
    title: "Producer",
    company: "Audiovisual production",
    sector: "Audiovisual",
    date: "2025",
    rating: 5,
    source: "Google Reviews"
  }
];

// Simple Google "G" SVG Logo
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function TestimonialsSection() {
  const locale = useLocale();

  // Create JSON-LD array for Review schemas
  const reviewSchema = testimonials.map(t => ({
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Asiatis Singapore Translation Agency",
      "image": "https://asiatis.com.sg/logo.png"
    },
    "author": {
      "@type": "Person",
      "name": t.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.rating.toString(),
      "bestRating": "5"
    },
    "reviewBody": locale === 'zh' ? t.quote.zh : t.quote.en,
    "datePublished": t.date.length === 4 ? `${t.date}-01` : t.date
  }));

  return (
    <section className="section-padding bg-slate-50">
      <Script 
        id="check-reviews-schema" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} 
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {locale === 'zh' ? '客户的声音' : 'What Our Clients Say'}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {locale === 'zh' ? '来自世界各地满意客户的好评与信赖。' : 'Trusted by global businesses and creative agencies.'}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {testimonial.source === 'Google Reviews' && <GoogleLogo />}
              </div>
              
              <blockquote className={`flex-grow text-slate-700 leading-relaxed mb-8 italic ${locale === 'zh' ? 'font-zh text-lg' : 'text-lg'}`}>
                "{locale === 'zh' ? testimonial.quote.zh : testimonial.quote.en}"
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-lg select-none">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.title}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
