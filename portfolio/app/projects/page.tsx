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
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900 shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm text-zinc-600 dark:text-zinc-300">{t}</span>
              ))}
            </div>
            <a href={project.link} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
