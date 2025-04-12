import { Mail, Linkedin, Github, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <>
      <section
        id="Contact"
        className="bg-[#0F172A] py-16 px-4 sm:px-6 lg:px-20 text-white"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-4xl font-bold relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 animate-gradient">
                Get In Touch
              </span>
              <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-2 animate-width" />
            </h2>
            <p
              className="text-muted-foreground mt-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Have a question or want to work together? Feel free to contact me
              using the form or through the contact information below.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="https://mail.google.com/mail/?view=cm&to=ankithmandal36@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Mail className="h-5 w-5 text-sky-500 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                  Email
                </h4>
                <p className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                  ankithmandal36@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ankith-mandal-030296276"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Linkedin className="h-5 w-5 text-sky-500 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                  LinkedIn
                </h4>
                <p className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                  linkedin.com/in/ankith-mandal-030296276
                </p>
              </div>
            </a>

            <a
              href="https://github.com/ankithmandal09"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Github className="h-5 w-5 text-sky-500 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                  GitHub
                </h4>
                <p className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                  github.com/ankithmandal09
                </p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/ankit_mandal_9/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Instagram className="h-5 w-5 text-sky-500 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                  Instagram
                </h4>
                <p className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                  instagram/ankithmandal09
                </p>
              </div>
            </a>

            <div
              className="group flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <MapPin className="h-5 w-5 text-sky-500 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                  Location
                </h4>
                <p className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                  Hyderabad, Telangana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-sm py-8 border-t border-gray-800 text-sm text-muted-foreground">
        <div className="container mx-auto px-2 flex flex-col items-center text-center gap-4">
          <p className="animate-fade-in">
            © {new Date().getFullYear()} Ankith Mandal. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
