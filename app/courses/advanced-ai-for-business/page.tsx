import Nav from '../../../components/Nav';
import SectionDivider from '../../../components/SectionDivider';
import Reveal from '../../../components/Reveal';
import Link from 'next/link';

export default function AdvancedAiForBusinessPage() {
  return (
    <main>
      <Nav />
      <section className="container mx-auto px-6 py-32 scroll-mt-28">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Advanced AI for Business</h1>
          <p className="text-center text-gray-400 mb-12">
            Learn how to leverage AI to grow your business, with advanced topics like data analysis, marketing automation, and more.
          </p>
        </Reveal>
        <div className="text-center">
          <a href="/#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">
            Enroll Now for $299
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
