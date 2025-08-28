import Link from 'next/link';

const posts = [
  { slug: 'ai-branding-essentials', title: 'AI Branding Essentials', date: '2025-08-01' },
  { slug: 'local-seo-with-ai', title: 'Local SEO with AI', date: '2025-08-02' },
  { slug: 'automation-for-smbs', title: 'Automation for SMBs', date: '2025-08-03' }
];

export default function BlogIndexPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="hover:text-brandCyan">
              {p.title}
            </Link>
            <div className="text-gray-500 text-sm">{p.date}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}

