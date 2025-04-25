
import PortfolioNavbar from "@/components/portfolio/PortfolioNavbar";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <PortfolioNavbar />
      
      {/* Contact Hero */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Get In Touch</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you have a question or just want to say hello!
          </p>
        </div>
      </div>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
