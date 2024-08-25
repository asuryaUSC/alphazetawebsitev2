import React from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AZC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Triggers animation only once when in view
    threshold: 0.2, // 20% of the section is visible before triggering
  });

  // Start the animation when the section is in view
  React.useEffect(() => {
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
    <section id="azc" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[#EFF7FF]">
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
              Consulting
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Industry Overview',
                  description: 'Learn about Consulting as an industry, what the job entails, the job opportunities that are available, and how to obtain them.',
                },
                {
                  title: 'Casing',
                  description: 'Through a semester-long program of hands-on workshops, learn the foundations of how to execute a case interview (Market Sizing, Frameworks, Analysis, Brainstorming, and more!).',
                },
                {
                  title: 'Recruiting Prep',
                  description: 'Get a step-by-step detailed timeline of what you can do to maximize your chances at success when it comes to recruiting for a Consulting role.',
                },
                {
                  title: 'Networking',
                  description: 'Gain a deep network of Alpha Zeta actives and alumni who have landed offers at all MBB and Big 4 firms.',
                },
                {
                  title: 'Interview Preparation',
                  description: 'Receive guidance on how to best prepare for consulting interviews, including mock interviews and feedback sessions.',
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

          {/* Right Section - Single Card for Anson Chu */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center h-auto sm:h-[250px] flex-col sm:flex-row"
            custom={0}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <img
              src="/members/anson.png"
              alt="Anson Chu"
              className="w-16 h-16 rounded-full mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="px-4 max-w-full sm:max-w-[70%]">
              <h3 className="text-lg font-semibold text-[#3D2930]">Anson Chu</h3>
              <p className="text-[#3D2930] font-semibold">Head of Consulting, Alpha Zeta</p>
              <p className="text-[#3D2930]">
                Anson is currently an incoming associate consultant intern at Bain & Company San Francisco. With experience working with early-stage startups, he hopes to utilize his ground-up business acumen to solve modern business problems.
              </p>
              <a
                href="https://www.linkedin.com/in/ansonsch/"
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
    </section>
  );
};

export default AZC;
