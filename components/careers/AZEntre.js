import React, { useEffect } from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AZEntrepreneurship = () => {
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
    <section id="az-entrepreneurship" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[#EFF7FF]">
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
              AZ Entrepreneurship
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Entrepreneurship
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Startup Fundamentals',
                  description: 'Learn essential startup concepts and business formation methodologies to build a solid foundation for your venture.',
                },
                {
                  title: 'Venture Capital Basics',
                  description: 'Gain an understanding of venture capital principles and funding strategies crucial for securing investment and scaling your startup.',
                },
                {
                  title: 'Practical Experience',
                  description: 'Engage in hands-on activities and projects, including creating a startup pitch deck, financial statements, and a Figma mockup.',
                },
                {
                  title: 'Product Development',
                  description: 'Develop a tangible product, prepare a comprehensive VC ask, and create a trajectory plan, equipping you with practical skills for launching and managing a startup.',
                },
                {
                  title: 'Workshops & Bootcamps',
                  description: 'Participate in hands-on workshops and bootcamps that focus on key skills for entrepreneurs, including product development, business strategy, and marketing.',
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
                src="/members/darren.png"
                alt="Darren Tsang"
                className="w-32 h-48 rounded-[50%/25%] object-cover object-center"
              />
              <div className="px-4 max-w-full sm:max-w-[70%]">
                <h3 className="text-lg font-semibold text-[#3D2930]">Darren Tsang</h3>
                <p className="text-[#3D2930] font-semibold">Head of Entrepreneurship, Alpha Zeta</p>
                <p className="text-[#3D2930]">
                  Darren leads the entrepreneurship division at Alpha Zeta, offering mentorship to aspiring entrepreneurs and guiding them through the process of launching and growing a startup. He has been part of multiple startups and is now building a venture valued at $2 million.
                </p>
                <a
                  href="https://www.linkedin.com/in/dtsang527/"
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

export default AZEntrepreneurship;
