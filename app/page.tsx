import Image from "next/image";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import TypedText from "../components/TypedText";
import GitHubStats from "../components/GitHubStats";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "../components/SocialIcons";

const featured = [
  {
    title: "Travelingo",
    description:
      "Full-stack travel planning app — discover destinations, build itineraries, share experiences. React + Node.js + MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "https://github.com/jellyfishing2346/travelingo/",
  },
  {
    title: "AI Chatbot",
    description:
      "Conversational AI with streaming responses built on Next.js and the OpenAI API, deployed with a clean chat UI.",
    tech: ["Next.js", "OpenAI", "TypeScript"],
    link: "#",
  },
  {
    title: "Data Dashboard",
    description:
      "Interactive data visualization dashboard with real-time filtering and animated D3.js charts built in React.",
    tech: ["React", "D3.js", "Python", "Tailwind CSS"],
    link: "#",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-6 py-20">
        <FadeIn delay={0.05}>
          <div className="relative mb-8 inline-block">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-60" />
            <Image
              src="https://avatars.githubusercontent.com/jellyfishing2346"
              alt="Faizan Khan"
              width={128}
              height={128}
              className="relative rounded-full border-2 border-white dark:border-zinc-950 shadow-xl"
              priority
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Faizan Khan
          </h1>
          <div className="h-10 mb-6">
            <TypedText />
          </div>
          <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            Software Engineer &amp; Data Scientist from Brooklyn, NY — building
            intelligent systems and full-stack applications that create
            real-world impact.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <a href="/resume.pdf" download className="btn-secondary">
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 text-zinc-400 dark:text-zinc-500 text-xl">
            <a
              href="https://github.com/jellyfishing2346"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/faizan-khan234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:faizanakhan2003@gmail.com"
              aria-label="Email"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <EmailIcon />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── Featured Projects ─────────────────────────────── */}
      <section className="divider">
        <div className="section">
          <FadeIn delay={0.05}>
            <div className="text-center mb-12">
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">A selection of my recent work</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((project) => (
              <FadeIn key={project.title} delay={0.1}>
                <div className="card flex flex-col h-full">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View on GitHub ↗
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="btn-secondary">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── GitHub Stats ──────────────────────────────────── */}
      <section className="divider">
        <div className="section">
          <div className="text-center mb-12">
            <h2 className="section-title">GitHub Activity</h2>
            <p className="section-subtitle">Open source contributions &amp; stats</p>
          </div>
          <GitHubStats />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="divider">
        <div className="section text-center">
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle max-w-lg mx-auto mt-3 mb-8">
            I&apos;m open to full-time roles, internships, and interesting side
            projects. Reach out and let&apos;s build something.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
