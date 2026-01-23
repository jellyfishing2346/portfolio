const projects = [
  {
    title: "AI Chatbot",
    description: "A conversational AI chatbot built with Next.js and OpenAI API.",
    tech: ["Next.js", "OpenAI", "TypeScript"],
    link: "#",
    category: "Software Engineering",
  },
  {
    title: "Travelingo",
    description: "A full-stack travel planning web app that helps users discover destinations, plan itineraries, and share experiences. Built with React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "https://github.com/jellyfishing2346/travelingo/",
    category: "Software Engineering",
  },
  {
    title: "Data Dashboard",
    description: "Interactive dashboard for data visualization using React and D3.js.",
    tech: ["React", "D3.js", "Tailwind CSS"],
    link: "#",
    category: "Data Science",
  },
  {
    title: "ML Pipeline",
    description: "End-to-end machine learning pipeline with model deployment.",
    tech: ["Python", "scikit-learn", "Docker"],
    link: "#",
    category: "Data Engineering",
  },
];

export default function Projects() {
  // Group projects by category
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      <section className="w-full max-w-4xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900">Projects</h1>
        <p className="text-zinc-600 mb-8">
          Explore some of my recent work in software engineering, data science, and machine learning.
        </p>
        {categories.map((cat) => (
          <div key={cat} className="mb-12 text-left">
            <h2 className="text-2xl font-bold mb-6 text-blue-700">{cat}</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.filter((p) => p.category === cat).map((project) => (
                <div key={project.title} className="rounded-lg border border-zinc-200 p-6 bg-white shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900">{project.title}</h3>
                  <p className="text-zinc-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-zinc-100 rounded text-sm text-zinc-600">{t}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
