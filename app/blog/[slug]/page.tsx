import { notFound } from 'next/navigation';

const posts = {
  'engineering-culture': {
    title: 'Engineering Culture: Building for Impact',
    date: '2026-01-30',
    content: `
      <p>Great engineering teams are built on trust, curiosity, and a relentless focus on user value. In this post, I share my philosophy on building products that matter, and how culture shapes technical outcomes.</p>
      <ul>
        <li>🚀 Embrace learning and experimentation</li>
        <li>🤝 Prioritize collaboration and code reviews</li>
        <li>📈 Measure what matters, iterate fast</li>
      </ul>
      <p>Want to discuss engineering culture? <a href="/contact" class="text-blue-600 underline">Let’s connect!</a></p>
    `
  },
  'nextjs-architecture': {
    title: 'Next.js Architecture Deep Dive',
    date: '2026-01-30',
    content: `
      <p>This portfolio leverages the Next.js App Directory, server components, and Tailwind CSS for a modern, maintainable stack. Here’s a high-level architecture diagram:</p>
      <pre>
        <code>{`graph TD\n  User -->|HTTP| Next.js App\n  Next.js App -->|API| EmailJS\n  Next.js App -->|Static| Netlify CDN\n`}</code>
      </pre>
      <p>Want to see the code? <a href="https://github.com/jellyfishing2346/portfolio" class="text-blue-600 underline">Check out the repo</a>.</p>
    `
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return notFound();
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <article className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
      <a href="/blog" className="inline-block mt-8 text-blue-600 hover:underline">← Back to Blog</a>
    </main>
  );
}
