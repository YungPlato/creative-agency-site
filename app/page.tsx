import Nav from '../components/Nav';
import Hero from '../components/Hero';
import SectionDivider from '../components/SectionDivider';
import Businesses from '../components/Businesses';
import Testimonials from '../components/Testimonials';
import Reveal from '../components/Reveal';
import AiBrainIcon from '../components/icons/AiBrainIcon';
import AutomationIcon from '../components/icons/AutomationIcon';
import SeoIcon from '../components/icons/SeoIcon';
import DataIcon from '../components/icons/DataIcon';
import ContentIcon from '../components/icons/ContentIcon';
import BrandIcon from '../components/icons/BrandIcon';
import WorkflowIcon from '../components/icons/WorkflowIcon';

const pillars = [
  {
    title: 'AI Branding',
    color: 'from-brandPink',
    icon: AiBrainIcon,
    description: 'Launch with a brand you love, powered by AI.'
  },
  {
    title: 'Marketing Automation',
    color: 'from-brandCyan',
    icon: AutomationIcon,
    description: 'Automate your marketing to save time and scale.'
  },
  {
    title: 'Local SEO & Reviews',
    color: 'from-brandPink',
    icon: SeoIcon,
    description: 'Dominate local search and manage your reputation.'
  },
  {
    title: 'Data & Insights',
    color: 'from-brandCyan',
    icon: DataIcon,
    description: 'Turn data into actionable insights for growth.'
  }
];

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
          {pillars.map(card => (
            <Reveal key={card.title}>
              <div className="p-8 rounded-2xl glass group transition-all duration-300 hover:-translate-y-2 hover:shadow-glow text-center">
                <card.icon className="w-12 h-12 mx-auto mb-4 text-brandPink" />
                <h3 className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br ${card.color} to-white mb-2`}>{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider />
      <Businesses />
      <SectionDivider />

      <section id="kits" className="container mx-auto px-6 py-16 scroll-mt-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Starter Kits</h2>
          <p className="text-center text-gray-400 mb-8">Pick a kit to launch quickly with proven outcomes.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal>
            <div className="p-6 rounded-2xl glass hover:-translate-y-2 transition-all text-center">
              <ContentIcon className="w-12 h-12 mx-auto mb-4 text-brandCyan" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Content Starter</h3>
              <ul className="text-gray-300 space-y-2 list-disc pl-5 text-left">
                <li>30-day content calendar + prompts</li>
                <li>Auto-generated captions and images</li>
                <li>Posting workflow setup (1 channel)</li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="p-6 rounded-2xl glass hover:-translate-y-2 transition-all text-center">
              <BrandIcon className="w-12 h-12 mx-auto mb-4 text-brandCyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Kickstart Brand Kit</h3>
              <ul className="text-gray-300 space-y-2 list-disc pl-5 text-left">
                <li>AI-assisted naming + messaging</li>
                <li>Logo directions and color system</li>
                <li>Profile assets for all socials</li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="p-6 rounded-2xl glass hover:-translate-y-2 transition-all text-center">
              <WorkflowIcon className="w-12 h-12 mx-auto mb-4 text-brandCyan" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Starter Workflow</h3>
              <ul className="text-gray-300 space-y-2 list-disc pl-5 text-left">
                <li>One tool fully set up (e.g., reviews)</li>
                <li>Personalized prompt library</li>
                <li>Hands-on training + 30 days support</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

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

      <SectionDivider />

      <section id="pricing" className="container mx-auto px-6 py-16 scroll-mt-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-center text-gray-400 mb-8">Start with a kit, scale with a plan.</p>
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
            <a href="#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Choose</a>
          </div>
          <div className="glass rounded-2xl p-8 hover:-translate-y-2 transition-all">
            <h3 className="text-xl font-semibold text-white">Grow</h3>
            <div className="text-3xl font-extrabold mt-2">$1,299</div>
            <ul className="text-gray-300 space-y-2 list-disc pl-5 mt-4">
              <li>Two Starter Kits included</li>
              <li>Automation setup (2 tools)</li>
              <li>Monthly report + review</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Choose</a>
          </div>
          <div className="glass rounded-2xl p-8 hover:-translate-y-2 transition-all">
            <h3 className="text-xl font-semibold text-white">Scale</h3>
            <div className="text-3xl font-extrabold mt-2">$2,499</div>
            <ul className="text-gray-300 space-y-2 list-disc pl-5 mt-4">
              <li>All Starter Kits included</li>
              <li>Automation setup (4 tools)</li>
              <li>Quarterly strategy + priority support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Choose</a>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="courses" className="container mx-auto px-6 py-16 scroll-mt-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Learn AI with Our Courses</h2>
          <p className="text-center text-gray-400 mb-8">Level up your skills with our expert-led AI courses.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="p-6 rounded-2xl glass hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">AI for Beginners</h3>
              <p className="text-gray-400 mb-4">A beginner-friendly introduction to the world of AI, covering the basics of machine learning, neural networks, and more.</p>
              <div className="text-3xl font-extrabold text-white mb-4">$99</div>
              <a href="#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Enroll Now</a>
            </div>
          </Reveal>
          <Reveal>
            <div className="p-6 rounded-2xl glass hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Advanced AI for Business</h3>
              <p className="text-gray-400 mb-4">Learn how to leverage AI to grow your business, with advanced topics like data analysis, marketing automation, and more.</p>
              <div className="text-3xl font-extrabold text-white mb-4">$299</div>
              <a href="#contact" className="mt-6 inline-block px-5 py-2 rounded-md bg-brandPink text-black font-semibold hover:bg-brandCyan transition-all">Enroll Now</a>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <section id="about" className="container mx-auto px-6 py-16 scroll-mt-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Us</h2>
          <p className="max-w-3xl mx-auto text-center text-gray-400">
            We are a team of AI experts and business strategists dedicated to helping small businesses thrive in the age of AI. We believe that AI should be accessible to everyone, and we're here to help you unlock its full potential.
          </p>
        </Reveal>
      </section>

      <footer className="border-t border-brandPink/30 bg-gray-900/50">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <p className="text-gray-400">© {new Date().getFullYear()} Creative Display Name</p>
            <p className="text-gray-500 text-sm">hello@creativedisplayname.com</p>
          </div>
          <nav className="flex gap-6 items-center">
            <a href="#services" className="hover:text-brandCyan">Services</a>
            <a href="#kits" className="hover:text-brandCyan">Kits</a>
            <a href="#results" className="hover:text-brandCyan">Results</a>
            <a href="#pricing" className="hover:text-brandCyan">Pricing</a>
            <a href="#courses" className="hover:text-brandCyan">Courses</a>
            <a href="#about" className="hover:text-brandCyan">About</a>
            <a href="/sitemap.xml" className="hover:text-brandCyan">Sitemap</a>
            <a href="https://www.instagram.com/Creative_displayname" target="_blank" rel="noopener noreferrer" className="hover:text-brandCyan">Instagram</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
