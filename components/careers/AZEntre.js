import React from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AZEntrepreneurship = () => {
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
    <section id='az-entrepreneurship' className="w-full py-12 md:py-24 lg:py-32 bg-[#EFF7FF]">
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
              AZ Entrepreneurship
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Entrepreneurship
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Start-up Fundamentals',
                  description: 'Learn the key components of launching a start-up, from ideation and market research to funding and scaling your business.',
                },
                {
                  title: 'Pitching & Investor Relations',
                  description: 'Master the art of pitching to potential investors, creating a compelling business plan, and managing investor relations effectively.',
                },
                {
                  title: 'Networking with Founders',
                  description: 'Connect with successful entrepreneurs and founders, gaining valuable insights into the challenges and successes in building a business from scratch.',
                },
                {
                  title: 'Entrepreneurial Mindset',
                  description: 'Develop the mindset required to tackle the dynamic challenges of entrepreneurship, including leadership, risk management, and innovation.',
                },
                {
                  title: 'Workshops & Bootcamps',
                  description: 'Participate in hands-on workshops and bootcamps that focus on key skills for entrepreneurs, including product development, business strategy, and marketing.',
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
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center h-[250px]" // Adjust height
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
              <h3 className="text-lg font-semibold text-[#3D2930]">Darren Tsang</h3>
              <p className="text-[#3D2930] font-semibold">Head of Entrepreneurship, Alpha Zeta</p>
              <p className="text-[#3D2930]">
              Darren leads the entrepreneurship division at Alpha Zeta, offering mentorship to aspiring entrepreneurs and guiding them through the process of launching and growing a start-up.
              </p>
              <a
                href="#"
                className="text-[#57A0D3] hover:underline inline-flex items-center space-x-2"
              >
                <FaLinkedin className="h-5 mt-2 w-5" />
                <span className='mt-2'>LinkedIn</span>
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
