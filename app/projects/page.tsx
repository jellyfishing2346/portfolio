import MermaidDiagram from '../../components/MermaidDiagram';

const projects = [
	{
		title: 'AI Chatbot',
		description: 'A conversational AI chatbot built with Next.js and OpenAI API.',
		tech: ['Next.js', 'OpenAI', 'TypeScript'],
		link: '#',
		demo: 'https://ai-chatbot-demo.example.com/',
		architecture: `graph TD\n  User -->|Message| Next.js App\n  Next.js App -->|API| OpenAI\n  Next.js App -->|UI| React Components`,
		challenges: [
			'Integrating OpenAI API securely on the server side.',
			'Managing real-time chat state and streaming responses.',
			'Ensuring accessibility and mobile responsiveness.',
		],
		code: `// Example: Fetching a response from OpenAI\nconst response = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message }) });`,
		category: 'Software Engineering',
	},
	{
		title: 'Travelingo',
		description:
			'A full-stack travel planning web app that helps users discover destinations, plan itineraries, and share experiences. Built with React, Node.js, and MongoDB.',
		tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
		link: 'https://github.com/jellyfishing2346/travelingo/',
		demo: 'https://travelingo-demo.example.com/',
		architecture: `graph TD\n  User -->|HTTP| React App\n  React App -->|API| Express.js Server\n  Express.js Server -->|DB| MongoDB`,
		challenges: [
			'Designing a flexible itinerary data model.',
			'Implementing authentication and user sessions.',
			'Optimizing MongoDB queries for performance.',
		],
		code: `// Example: Creating a new trip\nfetch('/api/trips', { method: 'POST', body: JSON.stringify({ ... }) });`,
		category: 'Software Engineering',
	},
	{
		title: 'Data Dashboard',
		description: 'Interactive dashboard for data visualization using React and D3.js.',
		tech: ['React', 'D3.js', 'Tailwind CSS'],
		link: '#',
		demo: 'https://dashboard-demo.example.com/',
		architecture: `graph TD\n  User -->|HTTP| React App\n  React App -->|Charts| D3.js\n  React App -->|API| Data Source`,
		challenges: [
			'Handling large datasets efficiently in the browser.',
			'Creating reusable and animated D3.js components.',
			'Responsive design for all devices.',
		],
		code: `// Example: Rendering a D3 chart\nd3.select('#chart').data(data).enter().append('rect')`,
		category: 'Data Science',
	},
	{
		title: 'ML Pipeline',
		description: 'End-to-end machine learning pipeline with model deployment.',
		tech: ['Python', 'scikit-learn', 'Docker'],
		link: '#',
		demo: 'https://ml-pipeline-demo.example.com/',
		architecture: `graph TD\n  Data -->|Preprocess| Python Script\n  Python Script -->|Train| scikit-learn\n  scikit-learn -->|Export| Model\n  Model -->|Serve| Docker API`,
		challenges: [
			'Automating data preprocessing and feature engineering.',
			'Containerizing the model for scalable deployment.',
			'Monitoring model performance in production.',
		],
		code: `# Example: Model training\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier().fit(X_train, y_train)`,
		category: 'Data Engineering',
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
							{projects
								.filter((p) => p.category === cat)
								.map((project) => (
									<div
										key={project.title}
										className="card"
									>
										<h3 className="text-xl font-semibold mb-2 text-zinc-900">
											{project.title}
										</h3>
										<p className="text-zinc-700 mb-4">{project.description}</p>
										<div className="flex flex-wrap gap-2 mb-4 justify-center">
											{project.tech.map((t) => (
												<span
													key={t}
													className="px-2 py-1 bg-zinc-100 rounded text-sm text-zinc-600"
												>
													{t}
												</span>
											))}
										</div>
										<div className="flex flex-wrap gap-3 mb-4 justify-center">
											<a
												href={project.link}
												className="btn-primary bg-zinc-900 hover:bg-zinc-800"
												target="_blank"
												rel="noopener noreferrer"
											>
												View Code
											</a>
											{project.demo && project.demo !== '#' && (
												<a
													href={project.demo}
													className="btn-primary"
													target="_blank"
													rel="noopener noreferrer"
												>
													Live Demo
												</a>
											)}
										</div>
										<details className="mt-2 cursor-pointer">
											<summary className="font-semibold text-blue-700">
												Technical Deep Dive
											</summary>
											<div className="mt-2 text-sm text-zinc-700">
												<strong>Architecture:</strong>
												{project.architecture &&
												project.architecture.trim().startsWith('graph') ? (
													<MermaidDiagram code={project.architecture} />
												) : (
													<pre className="bg-zinc-100 rounded p-2 overflow-x-auto mb-2">
														<code>{project.architecture}</code>
													</pre>
												)}
												<strong>Key Challenges:</strong>
												<ul className="list-disc ml-6 mb-2">
													{project.challenges.map((c, i) => (
														<li key={i}>{c}</li>
													))}
												</ul>
												<strong>Sample Code:</strong>
												<pre className="bg-zinc-100 rounded p-2 overflow-x-auto">
													<code>{project.code}</code>
												</pre>
											</div>
										</details>
									</div>
								))}
						</div>
					</div>
				))}
			</section>
		</main>
	);
}
