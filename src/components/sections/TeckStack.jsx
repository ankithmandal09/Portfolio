const techStack = [
  // Frontend
  {
    name: "HTML",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "frontend",
  },
  {
    name: "CSS",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "frontend",
  },
  {
    name: "React",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "frontend",
  },
  {
    name: "Redux",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "frontend",
  },
  {
    name: "Chakra UI",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=r9QJ0VFFrn7T&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "backend",
  },
  {
    name: "Express.js",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "backend",
  },

  // Database
  {
    name: "MongoDB",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "database",
  },

  // Tools
  {
    name: "Git",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "tools",
  },
  {
    name: "GitHub",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=v551nqGeHhGn&format=png&color=000000"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "tools",
  },
  {
    name: "VS Code",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=121602&format=png&color=228BE6"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "tools",
  },
  {
    name: "Postman",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=KIcFwp9MNQL5&format=png&color=FA5252"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "tools",
  },
  {
    name: "Firebase",
    icon: (
      <img
        src="https://www.gstatic.com/devrel-devsite/prod/vd31e3ed8994e05c7f2cd0cf68a402ca7902bb92b6ec0977d7ef2a1c699fae3f9/firebase/images/touchicon-180.png"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "tools",
  },
  {
    name: "Netlify",
    icon: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwHo7sxZ6PE7kXh9VRgf9mpX3lu7tQEEQlw&s"
        alt=""
        className="w-10 h-10"
      />
    ),
    category: "tools",
  },
];

const TechStack = () => {
  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools & Others" },
  ];

  return (
    <section
      id="Skills"
      title="Tech Stack"
      className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-20 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Skills
        </span>
        <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-2" />
      </h2>
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.id} className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              {category.name}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8  ">
              {techStack
                .filter((tech) => tech.category === category.id)
                .map((tech) => (
                  <div key={tech.name} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rotate-45 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 "></div>
                    <div className="relative flex flex-col items-center p-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                      <div className="w-12 h-12 relative group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 rounded-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity"></div>
                        {tech.icon}
                      </div>
                      <span className="mt-2 text-sm font-medium opacity-80 group-hover:opacity-100 group-hover:text-cyan-400 transition-all">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
