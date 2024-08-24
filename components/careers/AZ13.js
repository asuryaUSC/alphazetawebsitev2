import React from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AZ13 = () => {
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
    <section id='az13' className="w-full py-12 md:py-24 lg:py-32 bg-[#E5F2FF]">
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
              AZ 13
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Investment Banking
            </h2>
            <div className="space-y-4">
              {[
                'Fundamentals of Investment Banking',
                'Recruitment Preparation',
                'Networking Opportunities',
                'Alumni Mentorship',
                'Professional Workshops',
              ].map((title, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <FaCheckCircle className="h-6 w-6 text-[#57A0D3]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#3D2930]">{title}</h3>
                    <p className="text-[#3D2930]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh vitae aliquet.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Team Cards */}
          <div className="grid gap-6">
            {[
              {
                name: 'Charlie Huang',
                role: 'Head of Investment Banking, Alpha Zeta',
                description:
                  'Charlie leads the investment banking program at Alpha Zeta, guiding students through the recruitment process and connecting them with industry professionals.',
              },
              {
                name: 'Fiona Ko',
                role: 'Investment Banking Mentor, Alpha Zeta',
                description:
                  'Fiona is an experienced investment banker who serves as a mentor to Alpha Zeta students, providing guidance and support throughout their professional journey.',
              },
              {
                name: 'Justin Xiang',
                role: 'Investment Banking Analyst, Alpha Zeta',
                description:
                  'Justin offers analytical insights and guidance to students interested in entering the investment banking field, assisting with recruitment preparation and networking.',
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

export default AZ13;
