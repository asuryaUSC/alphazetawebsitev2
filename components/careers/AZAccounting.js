import React, { useEffect } from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AZAccounting = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when section comes into view
    threshold: 0.2, // Section must be 20% visible to trigger animation
  });

  // Start animation when section comes into view
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
    <section id="az-accounting" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[#E5F2FF]">
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
              AZ Accounting
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Accounting
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Understanding the Industry',
                  description: 'Explore various accounting career paths, including audit, tax, advisory, and financial due diligence (FDD), and gain insights into top firms such as the Big 4. Learn how these specializations impact different industries and what skills are required to excel in each field.',
                },
                {
                  title: 'Expanding Your Network',
                  description: 'Build a strong professional network by connecting with fellow accounting students, firm recruiters, and seasoned professionals. Discover opportunities for networking events, career fairs, and coffee chats that can open doors to internships and full-time roles.',
                },
                {
                  title: 'Navigating the Recruiting Process',
                  description: 'Understand the recruiting timeline for accounting positions and learn how to prepare for each phase. Get tips on optimizing your resume, securing internships, and attending recruiting events to stand out and increase your chances of landing offers at top firms.',
                },
                {
                  title: 'Coffee Chat and Interview Prep',
                  description: 'Prepare for interviews by participating in mock sessions, learning behavioral interview techniques, and practicing common technical questions. Gain insights into what firms are looking for during the interview process and how to showcase your strengths effectively.',
                },
                {
                  title: 'Professional Certifications and Development',
                  description: 'Explore the benefits of earning certifications such as CPA, CFA, and CMA. Understand the requirements, preparation strategies, and career advantages of these certifications to set yourself apart and build a successful long-term accounting career.',
                }
              ].map((item, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <FaCheckCircle style={{ width: '24px', height: '24px', flexShrink: 0 }} className="text-[#57A0D3]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#3D2930]">{item.title}</h3>
                    <p className="text-[#3D2930]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Single Card for Elena */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center h-auto sm:max-h-[350px] flex-col sm:flex-row"
            custom={0}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <img
              src="/members/elena.png"
              alt="Elena Mao"
              className="w-32 h-48 rounded-[50%/25%] object-cover object-center"
            />
            <div className="px-4 max-w-full sm:max-w-[70%]">
              <h3 className="text-lg font-semibold text-[#3D2930]">Elena Mao</h3>
              <p className="text-[#3D2930] font-semibold">Accounting Mentor, Alpha Zeta</p>
              <p className="text-[#3D2930]">
                Elena is an incoming summer Tax Consultant intern at Deloitte Los Angeles. She is exploring various specializations and will most likely be in the general Business Tax Services or International Tax group. Elena also received offers from EY and KPMG.
              </p>
              <a
                href="https://www.linkedin.com/in/elena-mao/"
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

export default AZAccounting;
