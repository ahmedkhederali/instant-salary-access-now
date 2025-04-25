
import { Progress } from "@/components/ui/progress";
import { 
  Workflow as ReactIcon, 
  Database, 
  Server,
  Code
} from "lucide-react";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Angular", level: 85 },
    { name: "MicroFrontend", level: 85 },
    { name: "CSS/SCSS/Tailwind", level: 90 },
  ];
  
  const backendSkills = [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "GraphQL", level: 80 },
    { name: "RESTful APIs", level: 95 },
  ];
  
  const databaseSkills = [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "Redis", level: 75 },
  ];
  
  const toolsSkills = [
    { name: "Git", level: 90 },
    { name: "Docker", level: 85 },
    { name: "AWS", level: 75 },
    { name: "CI/CD", level: 80 },
  ];
  
  const renderSkills = (skills: { name: string; level: number }[]) => {
    return (
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
          <div className="mt-2 w-16 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">My technical expertise and proficiency levels</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fadeIn">
            <div className="flex items-center mb-6">
              <ReactIcon className="h-6 w-6 text-tech-react mr-2" />
              <h3 className="text-xl font-semibold">Frontend Development</h3>
            </div>
            {renderSkills(frontendSkills)}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fadeIn">
            <div className="flex items-center mb-6">
              <Server className="h-6 w-6 text-tech-node mr-2" />
              <h3 className="text-xl font-semibold">Backend Development</h3>
            </div>
            {renderSkills(backendSkills)}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fadeIn">
            <div className="flex items-center mb-6">
              <Database className="h-6 w-6 text-tech-mongo mr-2" />
              <h3 className="text-xl font-semibold">Database</h3>
            </div>
            {renderSkills(databaseSkills)}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fadeIn">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-tech-docker mr-2" />
              <h3 className="text-xl font-semibold">Tools & DevOps</h3>
            </div>
            {renderSkills(toolsSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
