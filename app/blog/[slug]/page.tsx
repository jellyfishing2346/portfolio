import { notFound } from 'next/navigation';

const posts: Record<string, { title: string; date: string; content: string }> = {
  ‘engineering-culture’: {
    title: ‘Engineering Culture: Building for Impact’,
    date: ‘2026-01-30’,
    content: `
      <p>Great engineering teams are built on trust, curiosity, and a relentless focus on user value. After working on projects across data science and full-stack development, I’ve noticed that the best outcomes come less from raw technical skill and more from how a team works together.</p>

      <h2>What Makes a Strong Engineering Culture?</h2>
      <p>In my experience, three things separate high-output teams from average ones:</p>
      <ul>
        <li><strong>Psychological safety.</strong> Engineers need to feel comfortable raising concerns, asking "dumb" questions, and shipping things that might not work. Fear of failure silences the experimentation that drives real progress.</li>
        <li><strong>Shared ownership.</strong> When everyone feels responsible for the product — not just their ticket — quality goes up. Code reviews become collaborative rather than adversarial.</li>
        <li><strong>Fast feedback loops.</strong> The quicker you can go from idea to deployed code to real user signal, the faster the team learns. CI/CD, feature flags, and observability aren’t just DevOps concerns — they’re culture decisions.</li>
      </ul>

      <h2>My Own Approach</h2>
      <p>Working on projects like Travelingo taught me that a clean architecture matters far less than a clear shared understanding of the goal. We spent more time whiteboarding user flows than debating MongoDB vs PostgreSQL — and the product was better for it.</p>
      <p>I’ve also learned to value the code review process not as a gatekeeping step, but as the primary place where the team’s knowledge compounds. A comment on a PR is often worth more than an hour of documentation.</p>

      <h2>Takeaways</h2>
      <ul>
        <li>Measure outcomes, not output. Lines of code is a vanity metric.</li>
        <li>Write code for the next person who reads it, not for the machine that runs it.</li>
        <li>The best engineers I know ask more questions than they answer.</li>
      </ul>
      <p>Want to discuss engineering culture? <a href="/contact" class="text-blue-600 underline">Let’s connect!</a></p>
    `
  },
  ‘nextjs-architecture’: {
    title: ‘Next.js Architecture Deep Dive’,
    date: ‘2026-02-10’,
    content: `
      <p>This portfolio is built on the Next.js 15 App Router, Tailwind CSS v4, and TypeScript. Here’s a breakdown of the key architectural decisions and why I made them.</p>

      <h2>App Router vs Pages Router</h2>
      <p>I chose the App Router because it enables React Server Components by default, which means less JavaScript shipped to the client. Static pages like About and Blog render entirely on the server — no hydration cost. Only interactive components like the contact form, theme toggle, and animated hero are marked <code>"use client"</code>.</p>

      <h2>Tailwind CSS v4</h2>
      <p>Tailwind v4 moves all configuration into CSS with directives like <code>@variant</code> and <code>@custom-variant</code>, replacing the old <code>tailwind.config.js</code>. Dark mode is now wired with:</p>
      <pre><code>@variant dark (&:where(.dark, .dark *));</code></pre>
      <p>This gives full class-based dark mode control without any JavaScript config file.</p>

      <h2>Animation Strategy</h2>
      <p>Framer Motion handles all animations (fade-ins, the rotating role text in the hero). I kept animations to a minimum — one entrance fade per section — because over-animated portfolios feel noisy and distract from the content.</p>

      <h2>High-Level Architecture</h2>
      <pre><code>User
  └── Next.js App (App Router)
        ├── Server Components (About, Blog, Projects)
        ├── Client Components (Contact form, ThemeToggle, TypedText)
        └── API Route (EmailJS proxy)</code></pre>

      <h2>What I’d Change</h2>
      <p>If I were building this for production at scale, I’d move blog content to MDX files (or a headless CMS like Contentlayer) rather than hardcoding posts in the route file. That would make adding new posts a matter of dropping a markdown file rather than editing TypeScript.</p>

      <p>Want to see the code? <a href="https://github.com/jellyfishing2346" class="text-blue-600 underline">Check out my GitHub</a>.</p>
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
