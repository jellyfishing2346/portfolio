import { GitHubIcon, LinkedInIcon, EmailIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-zinc-900 dark:text-zinc-100">
            Faizan Khan<span className="text-blue-500">.</span>
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
            © {year} · Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-5 text-zinc-400 dark:text-zinc-500 text-xl">
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
      </div>
    </footer>
  );
}
