"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const services = [
  { href: '/services/ai-branding', label: 'AI Branding' },
  { href: '/services/marketing-automation', label: 'Marketing Automation' },
  { href: '/services/local-seo-reviews', label: 'Local SEO & Reviews' },
  { href: '/services/data-insights', label: 'Data & Insights' }
];

const courses = [
  { href: '/courses/ai-for-beginners', label: 'AI for Beginners' },
  { href: '/courses/advanced-ai-for-business', label: 'Advanced AI for Business' }
];

const sections = [
  { href: '#businesses', label: 'Businesses' },
  { href: '#kits', label: 'Kits' },
  { href: '#results', label: 'Results' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

export default function Nav() {
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [coursesOpen, setCoursesOpen] = useState<boolean>(false);
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
        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brandPink to-brandCyan">
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
          <div className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className={`transition-colors hover:text-brandCyan ${active === '#services' ? 'text-brandCyan' : 'text-gray-300'}`}
            >
              Services
            </button>
            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-48 bg-gray-800/80 backdrop-blur-lg rounded-md shadow-lg"
              >
                {services.map(s => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2 text-gray-300 hover:bg-gray-700/50 hover:text-brandCyan">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/pricing" className="transition-colors hover:text-brandCyan text-gray-300">
            Pricing
          </Link>
          <div className="relative">
            <button
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
              className={`transition-colors hover:text-brandCyan ${active === '#courses' ? 'text-brandCyan' : 'text-gray-300'}`}
            >
              Courses
            </button>
            {coursesOpen && (
              <div
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
                className="absolute top-full left-0 mt-2 w-56 bg-gray-800/80 backdrop-blur-lg rounded-md shadow-lg"
              >
                {courses.map(c => (
                  <Link key={c.href} href={c.href} className="block px-4 py-2 text-gray-300 hover:bg-gray-700/50 hover:text-brandCyan">
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
