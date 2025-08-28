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

      <section id="services" className="container mx-auto px-6 py-16 scroll-mt-28">
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

      <section id="about" className="container mx-auto px-6 py-16 scroll-mt-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Built for AI-Powered Growth</h2>
          <p className="max-w-3xl mx-auto text-center text-gray-400">
            We design brand systems and deploy AI automations that attract, convert, and retain customers. From content to reviews to SEO, your growth engine runs on AI.
          </p>
        </Reveal>
      </section>

      <section id="kits" className="container mx-auto px-6 py-16 scroll-mt-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Starter Kits</h2>
          <p className="text-center text-gray-400 mb-8">Pick a kit to launch quickly with proven outcomes.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[ 'AI Content Starter', 'Kickstart Brand Kit', 'AI Starter Workflow' ].map(title => (
            <Reveal key={title}>
              <div className="p-6 rounded-2xl glass hover:-translate-y-2 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400">Templates, tools, and training to move fast.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="results" className="container mx-auto px-6 py-16 scroll-mt-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Results That Compound</h2>
          <p className="text-center text-gray-400 mb-8">Better branding, higher rankings, faster content—measurable outcomes.</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{k:'Avg. CTR',v:'+38%'},{k:'Bookings',v:'x2'},{k:'Review Reply Time',v:'<5m'},{k:'Content Output',v:'x5'}].map(m => (
            <div key={m.k} className="glass rounded-xl py-8">
              <div className="text-3xl font-extrabold text-white">{m.v}</div>
              <div className="text-gray-400 mt-2">{m.k}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-6 py-16 scroll-mt-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-center text-gray-400 mb-8">Start with a kit, scale with a plan.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{t:'Launch',p:'$499'},{t:'Grow',p:'$1,499'},{t:'Scale',p:'$2,999'}].map(plan => (
            <div key={plan.t} className="glass rounded-2xl p-8 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-semibold text-white">{plan.t}</h3>
              <div className="text-3xl font-extrabold mt-2">{plan.p}</div>
              <a href="#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Choose</a>
            </div>
          ))}
        </div>
      </section>

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

