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
      className="bg-[#E5F2FF] py-12 md:py-20 px-4 md:px-6"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <div className="container mx-auto">
        {/* Header Bubble */}
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <div className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#3D2930]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-lg md:text-xl text-[#3D2930]">
            Below are some of the most common questions about Alpha Zeta and our recruitment process.
          </p>
        </motion.div>

        {/* NextUI Accordion without motion.div wrapping */}
        <Accordion className="w-full mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              aria-label={`Accordion ${index + 1}`}
              title={faq.question}
              className="text-[#3D2930] text-center"
              css={{
                ".nextui-accordion-content": {
                  textAlign: "center", // Ensures the answer is centered
                  padding: "10px 0", // Adds padding between items
                },
                ".nextui-accordion-title": {
                  textAlign: "center", // Ensures the question is centered
                },
              }}
            >
              <div className="text-center text-[#3D2930]">{faq.answer}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
};

export default FAQSection;
