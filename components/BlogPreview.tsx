import Link from 'next/link';

const posts = [
  { slug: 'ai-branding-essentials', title: 'AI Branding Essentials', excerpt: 'How to build a brand system with AI that resonates and converts.' },
  { slug: 'local-seo-with-ai', title: 'Local SEO with AI', excerpt: 'Rank higher and get more reviews using AI-powered workflows.' },
  { slug: 'automation-for-smbs', title: 'Automation for SMBs', excerpt: 'Save time and scale operations with practical automations.' }
];

export default function BlogPreview() {
  return (
    <section id="blog" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">From the Blog</h2>
      <p className="text-center text-gray-400 mb-8">Insights on AI, branding, and growth.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.slug} className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${p.slug}`} className="hover:text-brandCyan">{p.title}</Link>
            </h3>
            <p className="text-gray-400">{p.excerpt}</p>
            <div className="mt-4">
              <Link href={`/blog/${p.slug}`} className="text-brandCyan">Read more →</Link>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/blog" className="text-gray-300 hover:text-brandCyan">View all posts</Link>
      </div>
    </section>
  );
}

