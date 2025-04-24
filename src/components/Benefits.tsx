
import { Shield, Clock, Users } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Fast Access",
    description: "Get your earned wages within minutes"
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Bank-level security for all transactions"
  },
  {
    icon: Users,
    title: "Easy to Use",
    description: "Simple process with no hidden fees"
  }
];

const Benefits = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="text-primary mb-4 inline-flex">
                <benefit.icon size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
