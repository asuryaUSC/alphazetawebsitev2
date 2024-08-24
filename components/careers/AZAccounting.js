import React from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AZAccounting = () => {
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
    <section id='az-accounting' className="w-full py-12 md:py-24 lg:py-32 bg-[#E5F2FF]">
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
              AZ Accounting
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Accounting
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Accounting Principles',
                  description: 'Gain a solid understanding of core accounting principles including financial statements, balance sheets, and income statements.'
                },
                {
                  title: 'Taxation & Compliance',
                  description: 'Learn about the different aspects of taxation, compliance, and auditing that are crucial for any accounting professional.'
                },
                {
                  title: 'Industry Certifications',
                  description: 'Receive guidance on pursuing professional certifications such as CPA or CFA to enhance your accounting career.'
                },
                {
                  title: 'Financial Reporting Standards',
                  description: 'Develop an understanding of financial reporting standards and how they are applied in different industries and organizations.'
                },
                {
                  title: 'Professional Development',
                  description: 'Participate in workshops focused on the key areas of accounting and finance to improve your skills and prepare for the job market.'
                },
              ].map((item, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <FaCheckCircle className="h-6 w-6 text-[#57A0D3]" /> {/* Icon size set */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#3D2930]">{item.title}</h3>
                    <p className="text-[#3D2930]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Single Card for the Head of Accounting */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center h-[250px]"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <img
              src="/placeholder.svg"
              alt="Accounting Head"
              className="w-16 h-16 rounded-full"
            />
            <div className='px-4'>
              <h3 className="text-lg font-semibold text-[#3D2930]">Alex Johnson</h3>
              <p className="text-[#3D2930] font-semibold">Head of Accounting, Alpha Zeta</p>
              <p className="text-[#3D2930]">
                Alex leads the accounting division at Alpha Zeta, offering guidance on the fundamentals of accounting and helping students navigate career paths in the accounting and finance sectors.
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

export default AZAccounting;
