import { EmailIcon, LinkedInIcon, GitHubIcon } from "../../components/SocialIcons";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
        Feel free to reach out for collaboration or just to say hi!
      </p>
      <form
        className="flex flex-col gap-4 mb-8"
        action="mailto:faizanakhan2003@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition self-start"
        >
          Send Message
        </button>
      </form>
      <div className="flex gap-6 mt-4">
        <a href="mailto:faizanakhan2003@gmail.com" aria-label="Email" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-2xl">
          <EmailIcon />
        </a>
        <a href="https://www.linkedin.com/in/faizan-khan234" aria-label="LinkedIn" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-2xl">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/jellyfishing2346" aria-label="GitHub" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-2xl">
          <GitHubIcon />
        </a>
      </div>
    </section>
  );
}
