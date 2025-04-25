
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Briefcase, 
  Calendar 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Front-End Developer",
      company: "Dirac Systems",
      period: "2022 – Present",
      description: [
        "Leading the frontend development team in designing and implementing responsive user interfaces using React.js and Next.js",
        "Implementing micro-frontend architecture to improve application scalability and development workflow",
        "Collaborating with UX/UI designers and backend developers to deliver seamless user experiences",
        "Optimizing application performance and ensuring cross-browser compatibility"
      ],
      technologies: ["React.js", "Next.js", "MicroFrontend", "TypeScript", "CSS-in-JS"]
    },
    {
      title: "Back-End Developer",
      company: "I Hear You",
      period: "2022 – 2023",
      description: [
        "Developed and maintained RESTful APIs using Node.js and Express.js",
        "Designed and optimized database schemas for MongoDB and MySQL",
        "Implemented GraphQL APIs to improve data fetching efficiency",
        "Set up Docker containers for development and production environments"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "GraphQL", "Docker"]
    },
    {
      title: "Freelance Web Developer",
      company: "Various Clients",
      period: "2021 – 2022",
      description: [
        "Built and deployed various web applications for small businesses and individual clients",
        "Designed and implemented e-commerce solutions, personal websites, and booking systems",
        "Managed the full development lifecycle from planning to deployment"
      ],
      technologies: ["MERN Stack", "Firebase", "WordPress", "AWS"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
          <div className="mt-2 w-16 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative animate-fadeIn ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'} md:w-1/2 w-full`}>
                <div className="hidden md:block absolute top-6 -right-3.5 w-7 h-7 rounded-full bg-primary border-4 border-white shadow-md z-10"></div>
                
                <Card className={`relative ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2 md:justify-start">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    
                    <h3 className="font-bold text-xl">{exp.title}</h3>
                    <div className="flex items-center gap-1 mb-4">
                      <Briefcase className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-600">{exp.company}</span>
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <ul className="mt-4 space-y-2 list-disc pl-5">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
