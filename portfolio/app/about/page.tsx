import { techStack } from "../../components/TechIcons";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
        Growing up in Brooklyn as the son of Pakistani immigrants, I learned early on that dedication can solve even the most complex problems. My journey in software engineering began with a drive to create smart systems—especially in AI and data science—that make a real difference in everyday life. Whether I’m building tools that forecast financial trends or developing conversational AI, I always focus on delivering clear, scalable business value.
        <br /><br />
        I’m passionate about using technology to improve the world around me, and I thrive on challenges that require both creativity and discipline. Outside of coding, you’ll find me on the soccer field chasing a win, at the gym pushing my limits, or exploring Brooklyn’s food scene with friends. I love the energy of a good match, the focus of a tough workout, and the laughter that comes from sharing stories over a great meal. These moments keep me balanced, inspired, and ready to tackle whatever comes next.
      </p>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Languages, Frameworks & Tools</h2>
        <div className="space-y-8">
          {techStack.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">{category.category}</h3>
              <div className="flex flex-wrap gap-6">
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
      </div>
    </section>
  );
}
