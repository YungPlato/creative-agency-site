"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Modal from './Modal';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

export default function Hero() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden pt-20 md:pt-0">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Hero3D />
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs text-gray-200 mb-4">
          <span className="h-2 w-2 rounded-full bg-brandCyan animate-pulse" /> Premium AI Agency
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white via-brandPink to-brandCyan">
          Luxury-grade AI Systems for Ambitious Brands
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Strategy, design, and automation built on AI. Elevate your brand, compress timelines, and scale with confidence.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all shadow-glow">
            Get Started
          </a>
          <button onClick={() => setOpen(true)} className="px-6 py-3 rounded-lg border border-white/20 hover:border-brandCyan text-white transition-all">
            Learn More
          </button>
        </div>
      </motion.div>
      <Modal open={open} title="What We Deliver" onClose={() => setOpen(false)}>
        <ul className="list-disc pl-5 space-y-2">
          <li>Brand systems designed with AI, from identity to messaging.</li>
          <li>Marketing automations for content, reviews, email, and CRM.</li>
          <li>Local SEO and analytics dashboards with actionable insights.</li>
          <li>Hands-on enablement so your team can run autonomously.</li>
        </ul>
      </Modal>
    </section>
  );
}

