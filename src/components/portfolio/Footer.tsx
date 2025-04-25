
import { Github, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ahmed Ali</h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer specializing in React.js, Node.js, Next.js, and MicroFrontend architecture.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="/#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="/#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Cairo, Egypt</li>
              <li>
                <a href="mailto:ahhmeadali1256@gmail.com" className="hover:text-white transition-colors">
                  ahhmeadali1256@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+201025224590" className="hover:text-white transition-colors">
                  +20 102 522 4590
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {year} Ahmed Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
