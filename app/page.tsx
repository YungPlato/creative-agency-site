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
import ContactForm from '../components/ContactForm';
import Link from 'next/link';

const pillars = [
  {
    title: 'AI Branding',
    href: '/services/ai-branding',
    color: 'from-brandPink',
    icon: AiBrainIcon,
    description: 'Launch with a brand you love, powered by AI.'
  },
  {
    title: 'Marketing Automation',
    href: '/services/marketing-automation',
    color: 'from-brandCyan',
    icon: AutomationIcon,
    description: 'Automate your marketing to save time and scale.'
  },
  {
    title: 'Local SEO & Reviews',
    href: '/services/local-seo-reviews',
    color: 'from-brandPink',
    icon: SeoIcon,
    description: 'Dominate local search and manage your reputation.'
  },
  {
    title: 'Data & Insights',
    href: '/services/data-insights',
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
              <Link href={card.href}>
                <div className="p-8 rounded-2xl glass group transition-all duration-300 hover:-translate-y-2 hover:shadow-glow text-center h-full">
                  <card.icon className="w-12 h-12 mx-auto mb-4 text-brandPink" />
                  <h3 className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br ${card.color} to-white mb-2`}>{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </div>
              </Link>
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

      <section id="actions" className="container mx-auto px-6 py-16 scroll-mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <Link href="/pricing">
              <div className="p-8 rounded-2xl glass group transition-all duration-300 hover:-translate-y-2 hover:shadow-glow text-center">
                <h3 className="text-2xl font-bold text-white mb-2">View Our Pricing</h3>
                <p className="text-gray-400">Find the perfect plan for your business.</p>
              </div>
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/courses">
              <div className="p-8 rounded-2xl glass group transition-all duration-300 hover:-translate-y-2 hover:shadow-glow text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Explore Our Courses</h3>
                <p className="text-gray-400">Learn AI from the ground up with our expert-led courses.</p>
              </div>
            </Link>
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
      <Testimonials />
      <SectionDivider />
      <ContactForm />

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
            <a href="#contact" className="hover:text-brandCyan">Contact</a>
            <a href="/sitemap.xml" className="hover:text-brandCyan">Sitemap</a>
            <a href="https://www.instagram.com/Creative_displayname" target="_blank" rel="noopener noreferrer" className="hover:text-brandCyan">Instagram</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
