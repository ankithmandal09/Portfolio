import { GraduationCap, Calendar } from "lucide-react";

const educations = [
  {
    degree: "Full Stack Web Development",
    institution: "Masai School",
    year: "Present",
    description:
      "Currently pursuing full-stack web development, gaining in-depth knowledge and hands-on experience in both frontend and backend technologies. The program emphasizes modern web development practices, including JavaScript, React, Node.js, and database management, while enhancing my problem-solving skills and technical proficiency in building scalable applications. ",
  },
  {
    degree: "Bachelor of Computer Application(BCA)",
    institution: "Vaagdevi Degree&Pg College",
    year: "2021 - 2024",
    description:
      "Focused on web development and software engineering principles.Advanced courses in computer science.",
  },
  {
    degree: "MPC (Maths, physics, chemistry)",
    institution: "Pratibha Junior College",
    year: "2019 - 2021",
    description: "Advanced courses in mathematics, physics and chemistry.",
  },
  {
    degree: "SSC Board",
    institution: "Krishnaveni High School",
    year: "2018 - 2019",
  },
];

const Education = () => {
  return (
    <section
      id="Education"
      title="Education"
      className="bg-[#0F172A] py-16 px-4 sm:px-6 lg:px-20 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 relative inline-block">
        Education
        <span className="block w-16 h-1 bg-sky-500 mt-2 rounded-full" />
      </h2>

      <div className="space-y-16 max-w-5xl mx-auto relative px-4">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-sky-700 -translate-x-1/2 hidden md:block rounded-full" />

        {educations.map((education, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="absolute left-1/2 top-0 w-6 h-6 rounded-full bg-sky-500 -translate-x-1/2 hidden md:flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 rounded-full bg-background" />
            </div>

            <div
              className="md:w-1/2 p-6 border-2 border-sky-500 rounded-xl bg-[#0e1525] shadow-md transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <GraduationCap className="w-6 h-6 text-sky-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {education.degree}
                  </h3>
                  <p className="text-gray-400">{education.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{education.year}</span>
              </div>

              <p className="text-gray-300">{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
