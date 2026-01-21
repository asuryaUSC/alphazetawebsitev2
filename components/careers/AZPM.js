import React from "react";
import { FaCheckCircle, FaLinkedin } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AZPM = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Triggers animation only once when in view
    threshold: 0.2, // 20% of the section is visible before triggering
  });

  // Start the animation when the section is in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="azc"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 bg-[#EFF7FF]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 px-4 md:px-6 lg:px-0">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <div className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]">
              AZ Consulting
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Product Management
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Product Management Essentials",
                  description:
                    "Understand core product management principles and strategies to effectively manage the lifecycle of a product from concept to launch.",
                },
                {
                  title: "Market Research and User Insights",
                  description:
                    "Learn techniques for gathering and analyzing market data and user feedback to make informed product decisions and validate ideas.",
                },
                {
                  title: "Product Development and Design",
                  description:
                    "Gain hands-on experience in developing product features, creating wireframes, and designing prototypes to translate ideas into tangible solutions.",
                },
                {
                  title: "Roadmap and Strategy Planning",
                  description:
                    "Develop skills in crafting product roadmaps, setting milestones, and preparing strategic plans to guide your product through its development stages and ensure successful market entry.",
                },
                {
                  title: "Product Management Interviews and Preparation",
                  description:
                    "Prepare for PM interviews by mastering common questions, case studies, and interview techniques specific to product management roles.",
                },
              ].map((item, index) => (
                <div
                  className="flex items-start gap-4"
                  key={index}
                  style={{ alignItems: "center" }}
                >
                  <FaCheckCircle
                    style={{ width: "24px", height: "24px", flexShrink: 0 }}
                    className="text-[#57A0D3]"
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3
                      className="text-lg font-semibold text-[#3D2930]"
                      style={{ margin: 0 }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#3D2930]" style={{ margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Team Cards */}
          <div className="grid gap-6">
            <motion.div
              className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center h-auto sm:h-[250px] flex-col sm:flex-row"
              custom={0}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <img
                src="/members/leena.png"
                alt="Leena Van"
                className="w-32 h-48 rounded-[50%/25%] object-cover object-center mb-4 sm:mb-0 sm:mr-4"
              />
              <div className="px-4 max-w-full sm:max-w-[70%]">
                <h3 className="text-lg font-semibold text-[#3D2930]">
                  Leena Van
                </h3>
                <p className="text-[#3D2930] font-semibold">
                  Product Management Mentor
                </p>
                <p className="text-[#3D2930]">
                  Leena brings a diverse background in product management & tech
                  strategy from companies like PwC, Handshake AI, Ericsson, and
                  Scale AI. She's an incoming consultant intern at KPMG in New
                  York City. Currently, she's working at Sony Pictures
                  Entertainment as an AI Strategy Intern in their security
                  operations.
                </p>
                <a
                  href="https://www.linkedin.com/in/leena-van-03113225a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#57A0D3] hover:underline inline-flex items-center space-x-2"
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
            {/* 
            <motion.div
              className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center h-auto sm:h-[250px] flex-col sm:flex-row"
              custom={1}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <img
                src="/members/kevinhu.png"
                alt="Kevin Hu"
                className="w-32 h-48 rounded-[50%/25%] object-cover object-center mb-4 sm:mb-0 sm:mr-4"
              />
              <div className="px-4 max-w-full sm:max-w-[70%]">
                <h3 className="text-lg font-semibold text-[#3D2930]">
                  Kevin Hu
                </h3>
                <p className="text-[#3D2930] font-semibold">
                  Product Management Mentor
                </p>
                <p className="text-[#3D2930]">
                  Kevin is a Business Administration student at USC Marshall
                  with experience in product management and sales at Walmart and
                  IBM. He has a passion for consulting, product strategy, and
                  entrepreneurship, bringing his diverse skill set to empower
                  aspiring PMs.
                </p>
                <a
                  href="https://www.linkedin.com/in/kevinhu123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#57A0D3] hover:underline inline-flex items-center space-x-2"
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AZPM;
