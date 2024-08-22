import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion"; // Import from nextui accordion

const faqs = [
  {
    question: "What is Alpha Zeta?",
    answer: "Alpha Zeta is USC’s premier co-ed business society, dedicated to fostering professional growth, leadership, and community among its members.",
  },
  {
    question: "Who can apply to Alpha Zeta?",
    answer: "Alpha Zeta is open to all USC students, regardless of major, who are passionate about business, leadership, and personal growth.",
  },
  {
    question: "What are the requirements to rush?",
    answer: "Applicants must be full-time USC students. No specific major or prior experience is required, but we look for individuals who demonstrate leadership, teamwork, and a strong interest in business.",
  },
  {
    question: "What does the recruitment process involve?",
    answer: "Recruitment consists of an info session, networking events, and interviews. You'll get the chance to meet current members and learn about our values and opportunities.",
  },
  {
    question: "Do I need prior business experience to join?",
    answer: "No prior experience is necessary. We welcome students from all backgrounds and focus on fostering growth and mentorship throughout your time in Alpha Zeta.",
  },
  {
    question: "How long does the recruitment process take?",
    answer: "The process usually lasts about two weeks, including info sessions, meet-and-greets, and interviews. Specific dates can be found in our recruitment timeline.",
  },
  {
    question: "What happens after I get an interview?",
    answer: "After your interview, we will review all applicants and notify those who are selected for membership with a formal offer to join.",
  },
  {
    question: "Is there a membership fee?",
    answer: "Yes, Alpha Zeta has a one-time membership fee that helps cover the cost of events, socials, and professional development programs.",
  },
  {
    question: "How can I prepare for the interview?",
    answer: "Be yourself! Prepare to discuss your experiences, leadership qualities, and why you want to be a part of Alpha Zeta. We're looking for individuals who align with our values and community.",
  }
];

const FAQSection = () => {
  return (
    <section className="bg-[#E5F2FF] py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Header Bubble */}
        <div className="text-center mb-8">
          <div className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#3D2930]">Frequently Asked Questions</h2>
          <p className="mt-2 text-lg md:text-xl text-[#3D2930]">
            Below are some of the most common questions about Alpha Zeta and our recruitment process.
          </p>
        </div>

        {/* NextUI Accordion */}
        <Accordion className="w-full mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              aria-label={`Accordion ${index + 1}`}
              title={faq.question}
              className="text-[#3D2930] text-center"
              css={{
                '.nextui-accordion-content': {
                  textAlign: 'center', // Ensures the answer is left aligned
                  padding: '10px 0', // Adds padding between items
                },
                '.nextui-accordion-title': {
                  textAlign: 'center', // Ensures the question is left aligned
                },
              }}
            >
              <div className="text-center text-[#3D2930]">
                {faq.answer}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
