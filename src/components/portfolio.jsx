import React from "react";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import TechStack from "./sections/TeckStack";
import Navbar from "./Navbar";
import GitHub from "./sections/Github";
import Home from "./sections/Home";
import About from "./sections/About";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300">
      <Navbar />
      <Home />
      <About/>
      <Education />
      <Projects />
      <TechStack />
      <GitHub />
      <Contact />
    </div>
  );
};

export default Portfolio;
