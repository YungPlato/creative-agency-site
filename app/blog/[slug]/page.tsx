import { notFound } from 'next/navigation';

const posts = {
  'ai-branding-essentials': {
    title: 'AI Branding Essentials',
    body:
      'Build a consistent, compelling brand system using AI. From naming and voice to visual identity, AI accelerates discovery and iteration—without sacrificing taste.'
  },
  'local-seo-with-ai': {
    title: 'Local SEO with AI',
    body:
      'Optimize your Google Business Profile, generate weekly posts, and reply to reviews instantly. AI helps you rank for the right keywords and win trust locally.'
  },
  'automation-for-smbs': {
    title: 'Automation for SMBs',
    body:
      'Automate repetitive tasks like scheduling, routing leads, content creation, and reporting. Gain back hours weekly and scale operations with confidence.'
  }
} as const;

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = (posts as any)[params.slug];
  if (!post) return notFound();
  return (
    <main className="container mx-auto px-6 py-16">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-300 leading-relaxed mb-6">{post.body}</p>
        <h2 className="text-2xl font-semibold mb-2">Key Takeaways</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
          <li>Practical steps to implement now</li>
          <li>Tools and prompts to speed up work</li>
          <li>Metrics to track impact</li>
        </ul>
        <section aria-label="Article structured data">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                headline: post.title,
                author: { '@type': 'Organization', name: 'Creative Display Name' },
                publisher: { '@type': 'Organization', name: 'Creative Display Name' }
              })
            }}
          />
        </section>
      </article>
    </main>
  );
}

