
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-r from-blue-50 to-indigo-50 pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-3/5 animate-fadeInLeft">
            <p className="text-primary font-medium mb-2">Full-Stack Developer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Ahmed Ali
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Building scalable and modern web applications using React, Node, and MicroFrontend.
            </p>
            <p className="text-gray-500 mb-6 max-w-2xl">
              Over 3 years of experience in developing sophisticated web applications, 
              specializing in React.js, Node.js, Next.js, and MicroFrontend architecture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="gap-2">
                <Link to="/contact">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center animate-fadeInRight">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src="/lovable-uploads/f8e41af9-cc3d-44ba-84a0-faf9ea88d81f.png" 
                alt="Ahmed Ali" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
