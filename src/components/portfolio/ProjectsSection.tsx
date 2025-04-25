
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  // Sample featured projects
  const featuredProjects = [
    {
      id: 1,
      title: "Fawry Payday",
      description: "A financial application for early salary access, enabling employees to withdraw earned wages before payday.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "E-learn Platform",
      description: "Comprehensive e-learning platform with course management, video streaming, and interactive assessments.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Next.js", "Firebase", "Redux", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Microfrontend Ecommerce",
      description: "Scalable e-commerce platform built with microfrontend architecture for improved development workflow and scaling.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["MicroFrontend", "React.js", "Module Federation", "Node.js"],
      demoLink: "#",
      githubLink: "#"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <div className="mt-2 w-16 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Some of my recent work</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fadeIn">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-primary hover:underline">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 hover:underline">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="gap-2">
            <Link to="/projects">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
