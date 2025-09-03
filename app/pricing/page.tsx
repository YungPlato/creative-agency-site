import Nav from '../../components/Nav';
import SectionDivider from '../../components/SectionDivider';
import Reveal from '../../components/Reveal';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main>
      <Nav />
      <section className="container mx-auto px-6 py-32 scroll-mt-28">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Simple Pricing</h1>
          <p className="text-center text-gray-400 mb-12">
            Start with a kit, scale with a plan.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-8 hover:-translate-y-2 transition-all">
            <h3 className="text-xl font-semibold text-white">Launch</h3>
            <div className="text-3xl font-extrabold mt-2">$399</div>
            <ul className="text-gray-300 space-y-2 list-disc pl-5 mt-4">
              <li>One Starter Kit included</li>
              <li>1hr strategy call</li>
              <li>Templates and guides</li>
            </ul>
            <a href="/#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Choose</a>
          </div>
          <div className="glass rounded-2xl p-8 hover:-translate-y-2 transition-all">
            <h3 className="text-xl font-semibold text-white">Grow</h3>
            <div className="text-3xl font-extrabold mt-2">$1,299</div>
            <ul className="text-gray-300 space-y-2 list-disc pl-5 mt-4">
              <li>Two Starter Kits included</li>
              <li>Automation setup (2 tools)</li>
              <li>Monthly report + review</li>
            </ul>
            <a href="/#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Choose</a>
          </div>
          <div className="glass rounded-2xl p-8 hover:-translate-y-2 transition-all">
            <h3 className="text-xl font-semibold text-white">Scale</h3>
            <div className="text-3xl font-extrabold mt-2">$2,499</div>
            <ul className="text-gray-300 space-y-2 list-disc pl-5 mt-4">
              <li>All Starter Kits included</li>
              <li>Automation setup (4 tools)</li>
              <li>Quarterly strategy + priority support</li>
            </ul>
            <a href="/#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Choose</a>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/" className="mt-6 ml-4 inline-block px-5 py-2 rounded-md border border-white/20 hover:border-brandCyan text-white transition-all">
            Back to Home
          </Link>
        </div>
      </section>
      <SectionDivider />
    </main>
  );
}
