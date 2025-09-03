import Nav from '../../../components/Nav';
import SectionDivider from '../../../components/SectionDivider';
import Reveal from '../../../components/Reveal';
import Link from 'next/link';

export default function LocalSeoReviewsPage() {
  return (
    <main>
      <Nav />
      <section className="container mx-auto px-6 py-32 scroll-mt-28">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Local SEO & Reviews</h1>
          <p className="text-center text-gray-400 mb-12">
            Detailed information about our Local SEO & Reviews services. We help you dominate local search and manage your reputation.
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
