
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-white z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 slide-up">
            Your Salary, <span className="text-primary">Anytime</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto slide-up">
            Access your earned wages before payday with our secure and instant salary advance service.
          </p>
          <Button size="lg" className="slide-up">Get Started Now</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
