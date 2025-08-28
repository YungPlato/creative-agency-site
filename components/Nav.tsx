"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const sections = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#kits', label: 'Kits' },
  { href: '#results', label: 'Results' },
  { href: '#pricing', label: 'Pricing' }
];

export default function Nav() {
  const [active, setActive] = useState<string>('');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.5, 1] }
    );

    sections.forEach(s => {
      const el = document.querySelector(s.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center glass">
        <Link href="#" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brandPink to-brandCyan">
          Creative Display Name
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          {sections.map(s => (
            <a
              key={s.href}
              href={s.href}
              className={`transition-colors hover:text-brandCyan ${active === s.href ? 'text-brandCyan' : 'text-gray-300'}`}
            >
              {s.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden md:inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all shadow-glow">
          Book a Free Demo
        </a>
      </nav>
    </header>
  );
}

