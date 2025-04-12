import React from "react";

const projects = [
  {
    title: "Stride Sport",
    description:
      "Stride Sports is a Reebok Clone replicating the core functionality of the Reebok online store. Users can browse, filter, and shop products in a responsive, seamless UI. It includes sign-in functionality and a secure checkout experience.",
    image: "./landing_page.png",
    technologies: ["HTML", "CSS", "Javascript", "Firebase"],
    github: "https://github.com/ankithmandal09/B42_Web_024_Scripting-Sorcerers",
    demo: "https://stridesport.netlify.app/",
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
  return (
    <div className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:opacity-70 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
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
        <p className="text-gray-300 mt-2">{project.description}</p>
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-200">Technologies:</h4>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-sky-600/20 text-sky-300 px-3 py-1 text-xs rounded-full font-medium backdrop-blur-sm border border-sky-700"
              >
                {tech}
              </li>
            ))}
          </ul>
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
