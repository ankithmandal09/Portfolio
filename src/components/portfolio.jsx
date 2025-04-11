import React from "react";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import TechStack from "./sections/TeckStack";
import Navbar from "./Navbar";
import GitHub from "./sections/Github";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <Home />
      <Education />
      <Projects />
      <TechStack />
      <GitHub />
      <Contact />
    </div>
  );
};

export default Portfolio;
