import Nav from '../../components/Nav';
import SectionDivider from '../../components/SectionDivider';
import Reveal from '../../components/Reveal';
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <main>
      <Nav />
      <section className="container mx-auto px-6 py-32 scroll-mt-28">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">AI Courses</h1>
          <p className="text-center text-gray-400 mb-12">
            Level up your skills with our expert-led AI courses.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <Link href="/courses/ai-for-beginners">
              <div className="p-6 rounded-2xl glass hover:-translate-y-2 transition-all h-full">
                <h3 className="text-xl font-semibold text-white mb-2">AI for Beginners</h3>
                <p className="text-gray-400 mb-4">A beginner-friendly introduction to the world of AI, covering the basics of machine learning, neural networks, and more.</p>
                <div className="text-3xl font-extrabold text-white mb-4">$99</div>
                <div className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Enroll Now</div>
              </div>
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/courses/advanced-ai-for-business">
              <div className="p-6 rounded-2xl glass hover:-translate-y-2 transition-all h-full">
                <h3 className="text-xl font-semibold text-white mb-2">Advanced AI for Business</h3>
                <p className="text-gray-400 mb-4">Learn how to leverage AI to grow your business, with advanced topics like data analysis, marketing automation, and more.</p>
                <div className="text-3xl font-extrabold text-white mb-4">$299</div>
                <div className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Enroll Now</div>
              </div>
            </Link>
          </Reveal>
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
