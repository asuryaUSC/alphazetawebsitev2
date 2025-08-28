import React, { useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion"; // Import from nextui accordion
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "Who can apply to Alpha Zeta?",
    answer:
      "We welcome students from all majors. The heart of Alpha Zeta is our diverse community, and we strive to build a varied and inclusive class each semester.",
  },
  {
    question: "What does the recruitment process involve?",
    answer:
      "Our recruitment process involves a variety of events, from in-person networking events to 1-1 coffee chats with active members. (See the recruitment timeline above.) Rushees must attend at least one asterisked event to fill out the written application but are encouraged to go to as many as possible. The more we get to know you, the better!",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "Yes, there is a fee. This supports the planning and execution of memorable events for our members, including retreats, formals, and professional development opportunities.",
  },
  {
    question: "What is one piece of advice for rushees?",
    answer:
      "Focus on being yourself and showing a genuine willingness to grow. We’re not looking for perfection or existing professional excellence; instead, we value those who are eager to learn and contribute as a team player. Don’t hesitate to engage with others, ask questions, and discover something new in each conversation!",
  },
];

const FAQSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% of the section is in view before triggering
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <motion.section
      ref={ref}
      className="relative bg-gradient-to-b from-[#E5F2FF] via-[#EDF5FF] to-[#F0F8FF] py-16 md:py-24 px-4 md:px-6 overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#89CFF0]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#89CFF0]/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#89CFF0]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#89CFF0]/80 to-[#7AC0E8]/80 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-[#3D2930] border border-[#89CFF0]/30 shadow-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-black mt-6 mb-4 text-[#3D2930] leading-tight">
            Got Questions?
            <br />
            <span className="bg-gradient-to-r from-[#3D2930] to-[#3D2930]/70 bg-clip-text text-transparent">We've Got Answers</span>
          </h2>
          <p className="mt-4 text-xl text-[#3D2930]/70 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Alpha Zeta and our recruitment process
          </p>
        </motion.div>

        {/* Enhanced FAQ Accordion */}
        <motion.div 
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <Accordion 
            className="space-y-4"
            variant="splitted"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={`FAQ ${index + 1}`}
                title={
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#89CFF0] to-[#7AC0E8] flex items-center justify-center text-[#3D2930] font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-lg font-semibold text-[#3D2930]">{faq.question}</span>
                  </div>
                }
                className="bg-white/70 backdrop-blur-sm border border-[#89CFF0]/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80"
                classNames={{
                  trigger: "py-6 px-6 hover:bg-transparent",
                  content: "px-6 pb-6",
                  title: "text-left"
                }}
              >
                <div className="text-[#3D2930]/80 text-base leading-relaxed pl-11">
                  {faq.answer}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Call-to-action at bottom */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-[#89CFF0]/30 text-[#3D2930]/70">
            <span>Still have questions?</span>
            <span className="font-semibold text-[#3D2930]">Reach out to us at recruitment events!</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
