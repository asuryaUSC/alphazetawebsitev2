import React, { useEffect } from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AZMarketingUIUX = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Section must be 20% in view to trigger animations
  });

  // Trigger animations when the section is in view
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
    <section id='az-marketing' ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[#EFF7FF]">
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
              AZ Marketing UI/UX
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Marketing & UI/UX Design
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Marketing Fundamentals',
                  description: 'Gain an understanding of marketing strategies and concepts to prepare for future marketing roles.',
                },
                {
                  title: 'UI/UX Principles',
                  description: 'Learn the foundations of user interface and user experience design to create intuitive and aesthetically pleasing digital experiences.',
                },
                {
                  title: 'Creative Portfolio',
                  description: 'Develop a portfolio throughout the duration of AZ Marketing & UI/UX to effectively display creative works for recruitment.',
                },
                {
                  title: 'Digital Marketing Channels',
                  description: 'Dive into various digital marketing channels, including social media, email, and content marketing, and learn how to leverage them for maximum impact.',
                },
                {
                  title: 'Consumer Behavior',
                  description: 'Understand the motivations and decision-making processes of consumers to create targeted and effective marketing strategies.',
                },
              ].map((item, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <FaCheckCircle className="text-[#57A0D3]" style={{ minWidth: '24px', minHeight: '24px' }} />
                  <div>
                    <h3 className="text-lg font-semibold text-[#3D2930]">{item.title}</h3>
                    <p className="text-[#3D2930]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Two Team Cards */}
          <div className="grid gap-6">
            {[
              {
                name: 'Julia Purwadi',
                role: 'Head of Marketing, Alpha Zeta',
                description:
                  'Julia is the AZ Marketing head. She recently completed a marketing internship at TATCHA, part of Unilever Prestige, and is majoring in Business Administration with an emphasis in Marketing.',
                linkedin: 'https://www.linkedin.com/in/juliapurwadi/',
                image: '/members/julia.png',
              },
              {
                name: 'Yuna Jang',
                role: 'Head of UI/UX, Alpha Zeta',
                description:
                  'Yuna is the AZ UI/UX head. She recently completed a social media marketing internship at Deloitte and is majoring in Design and minoring in Web Development.',
                linkedin: 'https://www.linkedin.com/in/yunajang/',
                image: '/members/yuna.png',
              },
            ].map((teamMember, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center"
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <img
                  src={teamMember.image}
                  alt={teamMember.name}
                  className="w-32 h-48 rounded-[50%/25%] object-cover object-center"
                />
                <div className='px-4'>
                  <h3 className="text-lg font-semibold text-[#3D2930]">{teamMember.name}</h3>
                  <p className="text-[#3D2930] font-semibold">{teamMember.role}</p>
                  <p className="text-[#3D2930]">{teamMember.description}</p>
                  <a
                    href={teamMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#57A0D3] hover:underline inline-flex items-center space-x-2"
                  >
                    <FaLinkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AZMarketingUIUX;
