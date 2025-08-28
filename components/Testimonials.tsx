"use client";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Testimonial = {
  author: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  { author: 'Jamie L.', role: 'Cafe Owner', quote: 'They rebuilt our brand and automated our posts. Foot traffic is up 27%.' },
  { author: 'Priya S.', role: 'Salon Founder', quote: 'Our bookings doubled in 6 weeks. The AI workflows are a game-changer.' },
  { author: 'Omar R.', role: 'E‑commerce Lead', quote: 'Content, SEO, and reviews—handled. We rank and convert better than ever.' }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const current = testimonials[index];

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: testimonials.map((t, i) => ({
      '@type': 'Review',
      position: i + 1,
      reviewBody: t.quote,
      author: { '@type': 'Person', name: t.author },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 }
    }))
  } as const;

  return (
    <section id="testimonials" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Clients Say</h2>
      <div className="max-w-3xl mx-auto">
        <motion.blockquote
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <p className="text-xl text-gray-100">“{current.quote}”</p>
          <footer className="mt-4 text-gray-400">— {current.author}, {current.role}</footer>
        </motion.blockquote>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-brandCyan' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
    </section>
  );
}

