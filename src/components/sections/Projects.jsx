import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Stride Sport",
    description:
      "Stride Sports is a Reebok Clone replicating the core functionality of the Reebok online store. Users can browse, filter, and shop products in a responsive, seamless UI. It includes sign-in functionality and a secure checkout experience.",
    image: "./landing_page.png",
    technologies: ["HTML", "CSS", "Javascript", "Firebase"],
    githubLink:
      "https://github.com/ankithmandal09/B42_Web_024_Scripting-Sorcerers",
    liveLink: "https://stridesport.netlify.app/",
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
    githubLink: "https://github.com/ankithmandal09/CollabX",
    liveLink: "https://collaabx-pika-894ce5.netlify.app/login",
  },
  {
    title: "Restaurant Website",
    description:
      "A fully responsive restaurant website featuring a stylish homepage, interactive menu, reservation system, and reviews section. Built using HTML, CSS, and JavaScript with modern design and UX principles.",
    image: "./resturant.png",
    technologies: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/ankithmandal09/Restaurant-website",
    liveLink: "https://resturant-website-c629df.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="Projects"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 px-6 sm:px-10 lg:px-20 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 relative inline-block">
        Projects
        <span className="block w-16 h-1 bg-sky-500 mt-2 rounded-full" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-sky-600/20 text-sky-300 px-3 py-1 text-xs rounded-full font-medium backdrop-blur-sm border border-sky-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm border border-sky-600 text-sky-400 rounded-lg hover:bg-sky-600 hover:text-white transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
