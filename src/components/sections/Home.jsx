import { ArrowDown, FileDown, Github, Linkedin, Mail } from "lucide-react";

const HomeSection = () => {
  const scrollToNextSection = () => {
    document
      .getElementById("Education")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center pt-20 px-25"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="order-1 md:order-1 flex justify-center md:justify-start animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-90 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mt-6">
              <img
                src="./profile.jpg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            className="order-2 md:order-2 animate-fade-in flex flex-col justify-center h-full"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="inline-block text-white font-medium mb-4">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-500">
              Ankith Mandal
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-md text-gray-300">
              I build exceptional digital experiences with modern technologies.
              Passionate about creating responsive, user-friendly web
              applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="./resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>

              <div className="flex gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=ankithmandal36@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                  className="p-2 rounded-md border border-gray-800 hover:bg-gray-800 transition px-3"
                >
                  <Mail className="h-5 w-4 text-white" />
                </a>
                <a
                  href="https://github.com/ankithmandal09"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-md border border-gray-800 hover:bg-gray-800 transition px-3"
                >
                  <Github className="h-5 w-4 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankith-mandal-030296276"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-md border border-gray-800 hover:bg-gray-800 transition px-3"
                >
                  <Linkedin className="h-5 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce-light hover:bg-gray-800 rounded-full p-1">
          <button
            variant="ghost"
            size="icon"
            onClick={scrollToNextSection}
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
