import React, { useEffect } from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AZPM = () => {
  // Animation controls for triggering animations when in view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Section must be 20% in view to trigger animations
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <section id="az-pm" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[#E5F2FF]">
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
              AZ PM
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Product Management
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Product Management Essentials',
                  description: 'Understand core product management principles and strategies to effectively manage the lifecycle of a product from concept to launch.',
                },
                {
                  title: 'Market Research and User Insights',
                  description: 'Learn techniques for gathering and analyzing market data and user feedback to make informed product decisions and validate ideas.',
                },
                {
                  title: 'Product Development and Design',
                  description: 'Gain hands-on experience in developing product features, creating wireframes, and designing prototypes to translate ideas into tangible solutions.',
                },
                {
                  title: 'Roadmap and Strategy Planning',
                  description: 'Develop skills in crafting product roadmaps, setting milestones, and preparing strategic plans to guide your product through its development stages and ensure successful market entry.',
                },
                {
                  title: 'Product Management Interviews and Preparation',
                  description: 'Prepare for PM interviews by mastering common questions, case studies, and interview techniques specific to product management roles.',
                },
              ].map((item, index) => (
                <div className="flex items-start gap-4" key={index} style={{ alignItems: 'center' }}>
                  <FaCheckCircle style={{ width: '24px', height: '24px', flexShrink: 0 }} className="text-[#57A0D3]" />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 className="text-lg font-semibold text-[#3D2930]" style={{ margin: 0 }}>{item.title}</h3>
                    <p className="text-[#3D2930]" style={{ margin: 0 }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Team Card for Darren Tsang */}
          <div className="grid gap-6">
            <motion.div
              className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center h-auto sm:h-auto sm:max-h-[350px] flex-col sm:flex-row"
              custom={0}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <img
                src="/members/nolan.png"
                alt="Darren Tsang"
                className="w-32 h-48 rounded-[50%/25%] object-cover object-center"
              />
              <div className="px-4 max-w-full sm:max-w-[70%]">
                <h3 className="text-lg font-semibold text-[#3D2930]">Nolan Chen</h3>
                <p className="text-[#3D2930] font-semibold">Product Management Mentor</p>
                <p className="text-[#3D2930]">
                Nolan, with experience in AI-powered SaaS platforms and identity management solutions, brings a diverse background in product management from companies like Ushur and Okta. He specializes in product research, development, and strategy, equipping himself with hands-on experience to drive impactful solutions in the B2B SaaS space.
                </p>
                <a
                  href="https://www.linkedin.com/in/nolan-chen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#57A0D3] hover:underline inline-flex items-center space-x-2"
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AZPM;
