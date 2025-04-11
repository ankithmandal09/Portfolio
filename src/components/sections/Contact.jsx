import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
    <section id="Contact" className="py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <div>
          <h2 className="text-3xl font-bold">
            Get In Touch
            <span className="block w-16 h-1 bg-sky-500 mt-2 rounded-full" />
          </h2>
          <p className="text-muted-foreground mt-4">
            Have a question or want to work together? Feel free to contact me
            using the form or through the contact information below.
          </p>
        </div>

        <div className="space-y-6">
          <a
            href="https://mail.google.com/mail/?view=cm&to=ankithmandal36@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <Mail className="h-5 w-5 text-sky-500 mt-1" />
            <div>
              <h4 className="font-medium text-white">Email</h4>
              <p className="text-muted-foreground">ankithmandal36@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ankith-mandal-030296276"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <Linkedin className="h-5 w-5 text-sky-500 mt-1" />
            <div>
              <h4 className="font-medium text-white">LinkedIn</h4>
              <p className="text-muted-foreground">
                linkedin.com/in/ankith-mandal-030296276
              </p>
            </div>
          </a>
          <a
            href="https://github.com/ankithmandal09"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <Github className="h-5 w-5 text-sky-500 mt-1" />
            <div>
              <h4 className="font-medium text-white">GitHub</h4>
              <p className="text-muted-foreground">github.com/ankithmandal09</p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
            <MapPin className="h-5 w-5 text-sky-500 mt-1" />
            <div>
              <h4 className="font-medium text-white">Location</h4>
              <p className="text-muted-foreground">Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      
        <footer className="bg-gray-900 py-8 border-t border-gray-400 text-sm text-muted-foreground">
      <div className="container mx-auto px-2 flex flex-col items-center text-center gap-4">
        <p>© {new Date().getFullYear()} Ankith Mandal. All rights reserved.</p>

      </div>
    </footer>
    </>
  );
  
};

export default Contact;
