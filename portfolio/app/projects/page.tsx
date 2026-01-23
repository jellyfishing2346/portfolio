const projects = [
  {
    title: "AI Chatbot",
    description: "A conversational AI chatbot built with Next.js and OpenAI API.",
    tech: ["Next.js", "OpenAI", "TypeScript"],
    link: "#",
  },
  {
    title: "Data Dashboard",
    description: "Interactive dashboard for data visualization using React and D3.js.",
    tech: ["React", "D3.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "ML Pipeline",
    description: "End-to-end machine learning pipeline with model deployment.",
    tech: ["Python", "scikit-learn", "Docker"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      <section className="w-full max-w-4xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-8 text-zinc-900">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-lg border border-zinc-200 p-6 bg-white shadow hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-2 text-zinc-900">{project.title}</h2>
              <p className="text-zinc-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-zinc-100 rounded text-sm text-zinc-600">{t}</span>
                ))}
              </div>
              <a
                href={project.link}
                className="px-6 py-2 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-zinc-900 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
