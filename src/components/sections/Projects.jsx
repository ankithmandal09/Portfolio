import { useState } from "react";

const projects = [
  {
    title: "Stride Sport",
    description:
      "Stride Sports is a Reebok Clone replicating the core functionality of the Reebok online store. Users can browse, filter, and shop products in a responsive, seamless UI. It includes sign-in functionality and a secure checkout experience.",
    image: "./landing_page.png",
    technologies: ["HTML", "CSS", "Javascript", "Firebase"],
    github: "https://github.com/ankithmandal09/B42_Web_024_Scripting-Sorcerers",
    demo: "https://stridesports.netlify.app/",
  },
  {
    title: "Finsage.ai",
    description:
      "FinSage.ai is a next-gen financial intelligence platform that empowers users to make informed, data-driven decisions about their financial future. Built with modern technologies and a focus on user-centric design, it enables simulations of life decisions, provides personalized AI-based recommendations, and maintains a privacy-first model. Whether you're planning a career change or managing expenses, FinSage.ai helps you visualize the financial impact of your choices in real time.",
    image: "./finsage.png",
    technologies: [
      "React.js",
      "Javascript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
    ],
    github: "https://github.com/smith-bimal/FinSage.ai",
    demo: "https://finsage-ai-phi.vercel.app/",
  },
  {
    title: "Fleet Manager",
    description:
      "Introduction FleetManagerPro is a comprehensive fleet management system designed for logistics and transportation companies to track, monitor, and optimize their fleet operations. With features like vehicle tracking, route planning, and real-time updates, FleetManagerPro empowers businesses to manage their fleet efficiently and make data-driven decisions.",
    image: "./main.png",
    technologies: [
      "React.js",
      "Javascript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
    ],
    github: "https://github.com/ankithmandal09/B44_WEB_077_Fleet_manager",
    demo: "https://b44-web-077-fleet-manager.vercel.app/",
  },
  {
    title: "CollabX",
    description:
      "CollabX is a collaboration platform where users can post ideas, share skills, and network with like-minded creators. It fosters team building and project innovation through community interaction.",
    image: "./collab.png",
    technologies: [
      "React",
      "Javascript",
      "Tailwind CSS",
      "ChakraUI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/ankithmandal09/CollabX",
    demo: "https://collaabx-pika-894ce5.netlify.app/login",
  },
  {
    title: "Restaurant Website",
    description:
      "A fully responsive restaurant website featuring a stylish homepage, interactive menu, reservation system, and reviews section. Built using HTML, CSS, and JavaScript with modern design and UX principles.",
    image: "./resturant.png",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/ankithmandal09/Restaurant-website",
    demo: "https://resturant-website-c629df.netlify.app/",
  },
];

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const shouldTruncate = project.description.length > 120;
    const displayText = isExpanded
      ? project.description
      : shouldTruncate
      ? project.description.slice(0, 120) + "..."
      : project.description;
  return (
    <div className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:opacity-70 transition-opacity"
        />
        <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={project.github}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white animate-pulse"
          >
            Live Demo
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
        <p className="text-gray-300 mt-2">
          {displayText}
          {shouldTruncate && (
            <button
              onClick={toggleReadMore}
              className="text-cyan-400 underline ml-2 focus:outline-none"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-200">Technologies:</h4>
          <ul className="flex flex-wrap gap-2 mt-2 mb-4">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-sky-600/20 text-sky-300 px-3 py-1 text-xs rounded-full font-medium backdrop-blur-sm border border-sky-700"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 md:hidden mt-4">
            <a
              href={project.github}
              className="flex-1 text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              className="flex-1 text-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="Projects"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-5 px-6 sm:px-10 lg:px-20 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Projects
        </span>
        <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-2" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
