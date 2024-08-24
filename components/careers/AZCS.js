import React from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AZCS = () => {
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
    <section id='az-cs' className="w-full py-12 md:py-24 lg:py-32 bg-[#E5F2FF]">
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
              AZ CS
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Computer Science
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Coding Fundamentals',
                  description: 'Master the foundational concepts of computer science, including algorithms, data structures, and problem-solving techniques.'
                },
                {
                  title: 'Technical Interview Preparation',
                  description: 'Get equipped with skills for technical interviews, focusing on algorithmic challenges, coding problems, and whiteboard exercises.'
                },
                {
                  title: 'Industry Insights',
                  description: 'Gain exposure to various tech sectors through expert talks, and learn about the latest trends in AI, machine learning, and cloud computing.'
                },
                {
                  title: 'Professional Networking',
                  description: 'Network with professionals in the tech industry and explore opportunities for internships and full-time roles through dedicated events.'
                },
                {
                  title: 'Tech Workshops',
                  description: 'Participate in hands-on workshops that cover programming languages, web development, machine learning, and software engineering best practices.'
                },
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

          {/* Right Section - Team Cards */}
          <div className="grid gap-6">
            {[
              {
                name: 'Aaditya Surya',
                role: 'Head of Computer Science, Alpha Zeta',
                description:
                  'Aaditya leads the computer science program at Alpha Zeta, providing guidance on technical interview preparation and mentorship for aspiring software engineers.',
              },
              {
                name: 'Renee Zhu',
                role: 'Computer Science Mentor, Alpha Zeta',
                description:
                  'Renee is an experienced software engineer who mentors Alpha Zeta students, offering insights into the tech industry and career development strategies.',
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

export default AZCS;
