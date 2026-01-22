export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
        I am a passionate software engineer and data scientist with a love for building impactful projects. My expertise spans full-stack development, machine learning, and data visualization.
      </p>
      <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
        <li>Languages: Python, JavaScript, TypeScript</li>
        <li>Frameworks: Next.js, React, Node.js</li>
        <li>Data Science: Pandas, NumPy, scikit-learn, TensorFlow</li>
        <li>Other: SQL, Docker, Git</li>
      </ul>
    </section>
  );
}
