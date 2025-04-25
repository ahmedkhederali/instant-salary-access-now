
import { useState } from "react";
import PortfolioNavbar from "@/components/portfolio/PortfolioNavbar";
import Footer from "@/components/portfolio/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "Fawry Payday",
      description: "A financial application for early salary access, enabling employees to withdraw earned wages before payday.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "Full Stack",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "E-learn Platform",
      description: "Comprehensive e-learning platform with course management, video streaming, and interactive assessments.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Next.js", "Firebase", "Redux", "Tailwind CSS"],
      category: "Full Stack",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Grocery App",
      description: "Mobile-first application for online grocery shopping with real-time inventory tracking.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      category: "Full Stack",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Wedding Hall Website",
      description: "Booking system for wedding venues with real-time availability calendar and payment processing.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      technologies: ["React.js", "Express.js", "MySQL", "Stripe API"],
      category: "Full Stack",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      title: "Car Showroom (MERN)",
      description: "Interactive car showroom with 3D models, virtual tours and purchasing options.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Three.js"],
      category: "Full Stack",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      title: "React Admin Dashboard",
      description: "Comprehensive admin panel with data visualization, user management, and content moderation tools.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React.js", "Redux", "Chart.js", "Material UI"],
      category: "Frontend",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 7,
      title: "E-commerce Application",
      description: "Feature-rich e-commerce platform with product management, user authentication, and checkout functionality.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Next.js", "Sanity CMS", "Stripe", "Tailwind CSS"],
      category: "Full Stack",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 8,
      title: "Microfrontend Ecommerce",
      description: "Scalable e-commerce platform built with microfrontend architecture for improved development workflow and scaling.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["MicroFrontend", "React.js", "Module Federation", "Node.js"],
      category: "Frontend",
      demoLink: "#",
      githubLink: "#"
    }
  ];
  
  const categories = ["All", "Frontend", "Backend", "Full Stack"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pb-16">
      <PortfolioNavbar />
      
      {/* Projects Hero */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Explore my portfolio of web applications, showcasing a range of technologies
            and solutions I've developed.
          </p>
        </div>
      </div>
      
      {/* Filter Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="min-w-20"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <Separator className="mb-8" />
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fadeIn">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
