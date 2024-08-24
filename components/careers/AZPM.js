import React from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AZPM = () => {
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
    <section id='az-pm' className="w-full py-12 md:py-24 lg:py-32 bg-[#E5F2FF]">
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
              AZ PM
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Product Management
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Product Strategy & Roadmapping',
                  description: 'Learn how to define a product strategy and create a roadmap to guide development and release timelines.',
                },
                {
                  title: 'User-Centric Design & Development',
                  description: 'Understand the importance of user research and how to build products that solve real-world problems for end users.',
                },
                {
                  title: 'Stakeholder Management',
                  description: 'Discover the best practices for managing relationships with stakeholders, balancing competing interests, and ensuring project success.',
                },
                {
                  title: 'Agile Methodology',
                  description: 'Master Agile methodologies, including sprint planning, retrospectives, and product backlog management.',
                },
                {
                  title: 'Career Development & Mentorship',
                  description: 'Receive guidance on navigating the product management career path, from entry-level roles to leadership positions.',
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
                name: 'Alex Wu',
                role: 'Head of Product Management, Alpha Zeta',
                description:
                  'Alex leads the Product Management division at Alpha Zeta, helping students gain insights into creating impactful products that users love.',
              },
              {
                name: 'Sophia Lee',
                role: 'Product Management Mentor, Alpha Zeta',
                description:
                  'Sophia provides mentorship to aspiring product managers, helping them understand the intricacies of the role and how to excel in a competitive field.',
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

export default AZPM;
