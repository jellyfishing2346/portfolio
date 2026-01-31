import Link from 'next/link';

const posts = [
  {
    slug: 'engineering-culture',
    title: 'Engineering Culture: Building for Impact',
    summary: 'Thoughts on what makes a great engineering team and how to build products that matter.'
  },
  {
    slug: 'nextjs-architecture',
    title: 'Next.js Architecture Deep Dive',
    summary: 'A technical breakdown of how this portfolio is structured and deployed.'
  }
];

export default function BlogPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">📝 Technical Blog</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600 mt-1">{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
