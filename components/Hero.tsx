"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Lottie from 'lottie-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974" alt="Abstract tech background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
        <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 120L60 130C120 140 240 160 360 155C480 150 600 120 720 100C840 80 960 70 1080 85C1200 100 1320 140 1380 160L1440 180V200H0V120Z" fill="url(#g)"/>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D900FF" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div style={{ opacity }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white via-brandPink to-brandCyan">
          AI Solutions & Creative Branding for Small Business Growth
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Launch fast, scale smart. We combine brand design with AI automation to grow your revenue.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all shadow-glow">
            Get Started
          </a>
          <a href="#services" className="px-6 py-3 rounded-lg border border-white/20 hover:border-brandCyan text-white transition-all">
            Explore Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}

