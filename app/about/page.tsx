import { techStack } from "../../components/TechIcons";

const timeline = [
  {
    type: "education",
    period: "2022 – Present",
    title: "B.S. Computer Science & Data Science",
    org: "College of Staten Island, CUNY",
    description: "Focused on algorithms, machine learning, and full-stack development.",
  },
  {
    type: "project",
    period: "2024",
    title: "Travelingo — Full-Stack Travel App",
    org: "Personal Project",
    description: "Built a full-stack travel planning platform with React, Node.js, and MongoDB.",
  },
  {
    type: "project",
    period: "2024",
    title: "AI Chatbot & ML Pipeline",
    org: "Personal Project",
    description: "Developed a conversational AI chatbot with OpenAI and an end-to-end ML pipeline with Docker deployment.",
  },
];

const currentlyLearning = [
  { name: "LangChain", desc: "Building LLM-powered apps and agents" },
  { name: "Rust", desc: "Systems programming and performance" },
  { name: "Kubernetes", desc: "Container orchestration at scale" },
  { name: "Web3 / Solidity", desc: "Smart contracts and decentralized apps" },
];

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <section className="w-full max-w-3xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">About Me</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
          Hi, I&apos;m Faizan—a Brooklyn native with a passion for learning, growth, and community. My story starts in a vibrant neighborhood, where curiosity and resilience shaped my approach to life and technology. I believe in the power of dedication, not just to solve problems, but to build meaningful connections and create positive change.
          <br /><br />
          Beyond my work as a software engineer and data scientist, I&apos;m someone who values teamwork, creativity, and balance. Whether I&apos;m strategizing on the soccer field, pushing my limits at the gym, or sharing a meal with friends, I find inspiration in every experience. I love exploring new ideas, cultures, and challenges—always striving to grow and help others do the same. My journey is about more than code; it&apos;s about making a difference, one project and one relationship at a time.
        </p>
      </section>

      {/* Timeline */}
      <section className="w-full max-w-3xl mb-16">
        <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-100 text-center">Experience &amp; Education</h2>
        <div className="relative border-l-2 border-blue-400 dark:border-blue-600 pl-8 space-y-10">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-zinc-900 shadow" />
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{item.period}</span>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">{item.title}</h3>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{item.org}</span>
              <p className="text-zinc-600 dark:text-zinc-300 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Learning */}
      <section className="w-full max-w-3xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 text-center">Currently Learning</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentlyLearning.map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-zinc-800 p-4 text-center"
            >
              <p className="font-bold text-blue-700 dark:text-blue-300 mb-1">{item.name}</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-100 text-center">Languages, Frameworks &amp; Tools</h2>
        <div className="space-y-8">
          {techStack.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">{category.category}</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {category.items.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center w-20">
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
