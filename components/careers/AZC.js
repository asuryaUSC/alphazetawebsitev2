import React from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AZC = () => {
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
    <section id='azc' className="w-full py-12 md:py-24 lg:py-32 bg-[#EFF7FF]">
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
              AZ Consulting
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Consulting
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Consulting Fundamentals',
                  description: 'Learn the foundational principles of consulting, including problem-solving, analysis, and strategy development, which are crucial for success in the industry.'
                },
                {
                  title: 'Client Interaction & Case Studies',
                  description: 'Engage in case studies that simulate real-world consulting problems, honing your ability to present solutions and work with clients effectively.'
                },
                {
                  title: 'Industry Insights',
                  description: 'Gain knowledge about different industries, market trends, and business challenges through expert talks and workshops, giving you a competitive edge.'
                },
                {
                  title: 'Professional Networking',
                  description: 'Connect with professionals and consultants through networking events to build meaningful relationships and discover internship opportunities.'
                },
                {
                  title: 'Consulting Skills Workshops',
                  description: 'Participate in workshops focused on skills like data analysis, strategic thinking, and presentation, key areas required to excel in consulting roles.'
                },
              ].map((item, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <FaCheckCircle className="h-6 w-6 text-[#57A0D3]" /> {/* Icon size adjusted */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#3D2930]">{item.title}</h3>
                    <p className="text-[#3D2930]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Single Card for Anson Chu */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center h-[250px]"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <img
              src="/placeholder.svg"
              alt="Anson Chu"
              className="w-16 h-16 rounded-full"
            />
            <div className='px-4'>
              <h3 className="text-lg font-semibold text-[#3D2930]">Anson Chu</h3>
              <p className="text-[#3D2930] font-semibold">Head of Consulting, Alpha Zeta</p>
              <p className="text-[#3D2930]">
                Anson leads Alpha Zeta’s consulting division, providing mentorship and guidance for students pursuing a career in consulting. He helps students develop essential skills and connect with industry experts.
              </p>
              <a
                href="#"
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
