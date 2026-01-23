import { techStack } from "../../components/TechIcons";

export default function About() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      <section className="w-full max-w-3xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-zinc-900">About Me</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Hi, I'm Faizan—a Brooklyn native with a passion for learning, growth, and community. My story starts in a vibrant neighborhood, where curiosity and resilience shaped my approach to life and technology. I believe in the power of dedication, not just to solve problems, but to build meaningful connections and create positive change.
          <br /><br />
          Beyond my work as a software engineer and data scientist, I’m someone who values teamwork, creativity, and balance. Whether I’m strategizing on the soccer field, pushing my limits at the gym, or sharing a meal with friends, I find inspiration in every experience. I love exploring new ideas, cultures, and challenges—always striving to grow and help others do the same. My journey is about more than code; it’s about making a difference, one project and one relationship at a time.
        </p>
      </section>
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-zinc-900 text-center">Languages, Frameworks & Tools</h2>
        <div className="space-y-8">
          {techStack.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-bold mb-2 text-blue-700">{category.category}</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {category.items.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center w-20">
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <span className="text-sm text-zinc-700 text-center">{tech.name}</span>
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
