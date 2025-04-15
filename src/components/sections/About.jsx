import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="bg-gray-900 py-16 px-6 md:px-16 text-center animate-fadeIn"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text inline-block">
          About Me
          <span className="flex justify-center mb-8 ">
            <span className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-underline mt-2"></span>
          </span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Hello! I'm{" "}
          <span className="text-blue-500 font-semibold">Ankith Mandal</span>, a
          passionate and detail-driven{" "}
          <span className="font-semibold">MERN Stack Developer</span> dedicated
          to building efficient, scalable, and engaging web applications. My
          journey in web development began during my college years and has
          evolved into a professional career focused on full-stack development.
          What started as a deep curiosity for how things work on the web has
          grown into a profession I’m truly proud of.
        </p>
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          I specialize in the MERN stack — MongoDB, Express.js, React,
          JavaScript, and Node.js — and have hands-on experience developing
          responsive user interfaces, RESTful APIs, and dynamic backend systems.
          From building e-commerce platforms to intelligent dashboards and
          map-based applications, I strive to craft seamless digital experiences
          that are both functional and user-focused.
        </p>
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          What sets me apart is my commitment to writing clean, maintainable
          code, collaborating effectively with teams, and always staying updated
          with emerging web technologies. I thrive in environments where
          learning and innovation are encouraged, and I genuinely enjoy solving
          real-world problems through technology.
        </p>
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          When I’m not coding, you’ll likely find me exploring new tech trends,
          refining my skills through open-source contributions, or diving into a
          competitive game of chess to sharpen my strategic thinking.
        </p>
      </div>
    </section>
  );
};

export default About;
