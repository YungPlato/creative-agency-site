import Nav from '../../../components/Nav';
import SectionDivider from '../../../components/SectionDivider';
import Reveal from '../../../components/Reveal';
import Link from 'next/link';

export default function AiBrandingPage() {
  return (
    <main>
      <Nav />
      <section className="container mx-auto px-6 py-32 scroll-mt-28">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">AI Branding</h1>
          <p className="text-center text-gray-400 mb-12">
            Detailed information about our AI Branding services. We help you launch with a brand you love, powered by AI.
          </p>
        </Reveal>
        <div className="text-center">
          <a href="/#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">
            Get a Quote
          </a>
          <Link href="/" className="mt-6 ml-4 inline-block px-5 py-2 rounded-md border border-white/20 hover:border-brandCyan text-white transition-all">
            Back to Home
          </Link>
        </div>
      </section>
      <SectionDivider />
    </main>
  );
}
