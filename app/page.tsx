import Nav from '../components/Nav';
import Hero from '../components/Hero';
import SectionDivider from '../components/SectionDivider';
import ImageGrid from '../components/ImageGrid';
import Testimonials from '../components/Testimonials';
import Reveal from '../components/Reveal';

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <SectionDivider />

      <section id="services" className="container mx-auto px-6 py-16">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Four Pillars of Growth</h2>
          <p className="text-center text-gray-400 mb-12">The foundation of our strategy to elevate your business.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            title: 'AI Branding', color: 'from-brandPink'
          }, { title: 'Marketing Automation', color: 'from-brandCyan' }, { title: 'Local SEO & Reviews', color: 'from-brandPink' }, { title: 'Data & Insights', color: 'from-brandCyan' }].map(card => (
            <Reveal key={card.title}>
              <div className="p-8 rounded-2xl glass group transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
                <h3 className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br ${card.color} to-white mb-2`}>{card.title}</h3>
                <p className="text-gray-400">Launch with a brand you love</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider />
      <ImageGrid />
      <SectionDivider />
      <Testimonials />

      <footer className="border-t border-brandPink/30 bg-gray-900/50">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400">© {new Date().getFullYear()} Creative Display Name</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/Creative_displayname" target="_blank" rel="noopener noreferrer" className="hover:text-brandCyan">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

