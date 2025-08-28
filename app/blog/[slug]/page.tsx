import { notFound } from 'next/navigation';

const posts = {
  'ai-branding-essentials': {
    title: 'AI Branding Essentials',
    body: 'Learn how to build a consistent, compelling brand system using AI tools.'
  },
  'local-seo-with-ai': {
    title: 'Local SEO with AI',
    body: 'Use AI to optimize your listings, generate posts, and respond to reviews.'
  },
  'automation-for-smbs': {
    title: 'Automation for SMBs',
    body: 'Automate repetitive tasks to save time and scale operations smartly.'
  }
} as const;

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = (posts as any)[params.slug];
  if (!post) return notFound();
  return (
    <main className="container mx-auto px-6 py-16">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-300">{post.body}</p>
      </article>
    </main>
  );
}

