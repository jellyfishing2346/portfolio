import Image from "next/image";
import GitHubStats from "../components/GitHubStats";
import FadeIn from "../components/FadeIn";
import TypedText from "../components/TypedText";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <FadeIn delay={0.1}>
        <section className="w-full max-w-3xl text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="https://avatars.githubusercontent.com/jellyfishing2346"
              alt="Faizan Khan"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">Hi, I&apos;m Faizan Khan</h1>
          <div className="mb-6 h-9">
            <TypedText />
          </div>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
            My pursuit of software engineering, a career focused on building smart systems (AI) that predict outcomes, was fueled by a simple truth I learned growing up in Brooklyn, the son of Pakistani immigrants: dedication solves complex problems. After high school, I was driven by a passion for writing code that improves everyday life. I am a versatile Software Engineer who uses advanced tools—from those that forecast financial trends to modern conversational AI—always focusing on clear, scalable business value. My commitment extends beyond the screen; I find balance and discipline in soccer, exercise, and spending time with friends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/projects"
              className="px-6 py-2 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-zinc-800 transition"
            >
              View Projects
            </a>
            <a href="/contact" className="px-6 py-2 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-zinc-800 transition">Contact Me</a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </section>
      </FadeIn>
      <FadeIn delay={0.3}>
        <section className="w-full max-w-4xl">
          <h3 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-100 text-center">Featured Projects</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900 shadow hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold mb-2">AI Chatbot</h4>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">A conversational AI chatbot built with Next.js and OpenAI API.</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm text-zinc-600 dark:text-zinc-300">Next.js</span>
                <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm text-zinc-600 dark:text-zinc-300">OpenAI</span>
                <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm text-zinc-600 dark:text-zinc-300">TypeScript</span>
              </div>
              <a href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Learn More</a>
            </div>
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900 shadow hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold mb-2">Data Dashboard</h4>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">Interactive dashboard for data visualization using React and D3.js.</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm text-zinc-600 dark:text-zinc-300">React</span>
                <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm text-zinc-600 dark:text-zinc-300">D3.js</span>
                <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm text-zinc-600 dark:text-zinc-300">Tailwind CSS</span>
              </div>
              <a href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Learn More</a>
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn delay={0.5}>
        <GitHubStats />
      </FadeIn>
    </main>
  );
}
