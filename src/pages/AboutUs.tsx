
import { BookOpen, Users, MessageSquare } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">PayFlex</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're on a mission to revolutionize how employees access their earned wages,
              making financial freedom accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our People</h3>
              <p className="text-gray-600">
                We're a team of financial and technology experts dedicated to your financial wellbeing.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To eliminate the financial stress of waiting for payday by providing instant access to earned wages.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Promise</h3>
              <p className="text-gray-600">
                Transparent, secure, and reliable salary advance services that put you in control of your earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2023, PayFlex emerged from a simple yet powerful idea: everyone should have
              access to their earned wages when they need them most.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve thousands of employees across the country, helping them
              achieve greater financial flexibility and peace of mind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
