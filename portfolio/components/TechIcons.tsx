
import { 
  FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaLinux, FaAws, FaGithub, FaRProject, FaCuttlefish, FaPython, 
  FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker 
} from "react-icons/fa";
import { 
  SiCplusplus, SiApacheairflow, SiSharp, SiGo, SiRuby, SiPhp, SiJupyter, SiKeras, SiPytorch, SiFastapi, SiExpress, SiRedux, 
  SiMongodb, SiPostgresql, SiVercel, SiNetlify, SiHeroku, SiAnaconda, SiJenkins, SiTableau, SiPlotly, 
  SiGooglecloud, SiSelenium, SiFlask, SiDjango, SiBootstrap, SiTailwindcss, SiChakraui, SiMui, SiRedis, 
  SiTypescript, SiNextdotjs 
} from "react-icons/si";

export const techStack = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
      { name: "Java", icon: <FaJava className="text-red-700" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-800" /> },
      { name: "C#", icon: <SiSharp className="text-purple-700" /> },
      { name: "Go", icon: <SiGo className="text-cyan-700" /> },
      { name: "Ruby", icon: <SiRuby className="text-red-500" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-700" /> },
      { name: "R", icon: <FaRProject className="text-blue-700" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      { name: "Flask", icon: <SiFlask className="text-black dark:text-white" /> },
      { name: "Django", icon: <SiDjango className="text-green-900" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "Chakra UI", icon: <SiChakraui className="text-teal-400" /> },
      { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
      { name: "Keras", icon: <SiKeras className="text-red-500" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-orange-600" /> },
      // TensorFlow, scikit-learn, Pandas, NumPy, Matplotlib, and Seaborn icons are not available in react-icons/si
      // You may add custom SVGs or use a placeholder if needed
      { name: "Plotly", icon: <SiPlotly className="text-pink-400" /> },
      { name: "Jupyter", icon: <SiJupyter className="text-orange-400" /> },
    ],
  },
  {
    category: "Databases & Cloud",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      // MySQL icon is not available in react-icons/si
      // { name: "MySQL", icon: <SiMysql className="text-blue-800" /> },
      { name: "Redis", icon: <SiRedis className="text-red-600" /> },
      { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
      { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400" /> },
      // Azure DevOps and Azure Pipelines icon not available in react-icons/si
      // { name: "Azure Pipelines", icon: <SiAzurepipelines className="text-blue-600" /> },
      { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-green-500" /> },
      { name: "Heroku", icon: <SiHeroku className="text-purple-700" /> },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "Linux", icon: <FaLinux className="text-black dark:text-white" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-700" /> },
      { name: "Anaconda", icon: <SiAnaconda className="text-green-700" /> },
      // VS Code icon is not available in react-icons/si
      // { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
      { name: "Apache Airflow", icon: <SiApacheairflow className="text-green-400" /> },
      { name: "Selenium", icon: <SiSelenium className="text-green-600" /> },
    ],
  },
  {
    category: "Visualization & Analytics",
    items: [
      { name: "Tableau", icon: <SiTableau className="text-orange-400" /> },
      // Power BI icon is not available in react-icons/si
      // { name: "Power BI", icon: <SiPowerbi className="text-yellow-500" /> },
    ],
  },
];
