
import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 w-16 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeIn">
            <Card>
              <CardContent className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600">
                  Passionate full-stack developer with a focus on creating scalable web applications 
                  and optimizing user experiences through innovative frontend and backend solutions.
                </blockquote>
              </CardContent>
            </Card>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <Code className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Technical Expertise</h3>
                  <p className="text-gray-600">
                    Proficient in React.js, Angular, Node.js, Next.js, MicroFrontend architecture, Docker, 
                    MySQL, MongoDB, RESTful APIs, and GraphQL.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Code className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Professional Experience</h3>
                  <p className="text-gray-600">
                    Over 3 years in frontend & backend development, working with diverse teams on
                    projects ranging from financial applications to e-learning platforms.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Code className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Soft Skills</h3>
                  <p className="text-gray-600">
                    Strong collaboration skills, experienced with Agile methodologies,
                    exceptional problem-solving abilities, and effective communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="mb-6">
              <p className="font-medium">Bachelor's in Computer Science</p>
              <p className="text-gray-600">Menufia University | 2018 - 2022</p>
              <div className="mt-2 flex items-center">
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
                  Excellent
                </span>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Ranked 2nd
                </span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>Advancing MicroFrontend architecture implementations</li>
              <li>Optimizing React performance in large-scale applications</li>
              <li>Exploring AI integration in web applications</li>
              <li>Contributing to open-source projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
