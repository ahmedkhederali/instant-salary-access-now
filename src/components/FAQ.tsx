
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does salary advance work?",
    answer: "Our service allows you to access a portion of your earned wages before your regular payday. Once approved, the money is transferred directly to your bank account."
  },
  {
    question: "Is this a loan?",
    answer: "No, this is not a loan. You're accessing wages you've already earned but haven't been paid yet. There's no interest - just a small, transparent fee."
  },
  {
    question: "How much can I request?",
    answer: "You can request up to 50% of your earned wages. The exact amount depends on your salary and days worked in the current pay period."
  },
  {
    question: "How quickly will I receive the money?",
    answer: "Once approved, funds are typically transferred to your account within minutes. Processing times may vary depending on your bank."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
