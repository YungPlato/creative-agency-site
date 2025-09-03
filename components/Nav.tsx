"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const sections = [
  { href: '#services', label: 'Services' },
  { href: '#businesses', label: 'Businesses' },
  { href: '#kits', label: 'Kits' },
  { href: '#results', label: 'Results' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#courses', label: 'Courses' },
  { href: '#about', label: 'About' }
];

export default function Nav() {
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
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
        <button
          className="md:hidden text-gray-200 border border-white/20 rounded-md px-3 py-2"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          Menu
        </button>
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
          <ThemeToggle />
        </div>
        <a href="#contact" className="hidden md:inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all shadow-glow">
          Book a Free Demo
        </a>
      </nav>
      {open && (
        <div className="md:hidden container mx-auto px-6 pb-4">
          <div className="glass rounded-lg p-4 flex flex-col gap-3">
            {sections.map(s => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className={`py-2 rounded-md px-2 ${active === s.href ? 'text-brandCyan' : 'text-gray-300'} hover:text-brandCyan`}
              >
                {s.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 rounded-md px-2 text-black bg-brandPink font-semibold text-center hover:bg-brandCyan">
              Book a Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

