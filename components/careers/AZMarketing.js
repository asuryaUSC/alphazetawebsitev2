import React from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AZMarketingUIUX = () => {
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
    <section id='az-marketing' className="w-full py-12 md:py-24 lg:py-32 bg-[#EFF7FF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 px-4 md:px-6 lg:px-0">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
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
                  description: 'Gain an understanding of marketing strategies, consumer behavior, and branding, which are essential for any successful business.'
                },
                {
                  title: 'UI/UX Principles',
                  description: 'Learn the foundations of user interface and user experience design to create intuitive and aesthetically pleasing digital experiences.'
                },
                {
                  title: 'Creative Campaigns',
                  description: 'Work on real-life projects where you design marketing campaigns and UI/UX prototypes that solve business problems.'
                },
                {
                  title: 'Professional Workshops',
                  description: 'Attend workshops led by industry professionals on topics such as visual design, wireframing, and user testing.'
                },
                {
                  title: 'User Research Techniques',
                  description: 'Understand how to gather user feedback and conduct usability tests to inform your design decisions.'
                }
              ].map((item, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <FaCheckCircle className="h-6 w-6 text-[#57A0D3]" />
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
                name: 'Emily Zhang',
                role: 'Head of Marketing & UI/UX, Alpha Zeta',
                description:
                  'Emily leads the marketing and UI/UX design division at Alpha Zeta, ensuring that students gain hands-on experience in designing, testing, and implementing innovative solutions.',
              },
              {
                name: 'Samuel Lin',
                role: 'Marketing & UI/UX Mentor, Alpha Zeta',
                description:
                  'Samuel is a seasoned marketing professional and UI/UX designer who provides mentorship to students, guiding them through design processes and marketing strategies.',
              },
            ].map((teamMember, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <img
                  src="/placeholder.svg"
                  alt={teamMember.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className='px-4'>
                  <h3 className="text-lg font-semibold text-[#3D2930]">{teamMember.name}</h3>
                  <p className="text-[#3D2930] font-semibold">{teamMember.role}</p>
                  <p className="text-[#3D2930]">{teamMember.description}</p>
                  <a
                    href="#"
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
