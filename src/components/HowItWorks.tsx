
import { CheckCircle, UserPlus, Clock } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    description: "Sign up in minutes with your work email"
  },
  {
    icon: Clock,
    title: "Request",
    description: "Choose the amount you need from your earned salary"
  },
  {
    icon: CheckCircle,
    title: "Receive",
    description: "Get your money instantly in your bank account"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary mb-4">
                <step.icon size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
