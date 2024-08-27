import React from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AZ13 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.2, // Percentage of element visible before triggering
  });

  // Start animation when in view
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
    <section id="az13" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[#E5F2FF]">
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
              AZ 13
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Investment Banking
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Behaviorals',
                  description:
                    'Preparation for common interview questions about leadership, teamwork, and problem-solving experiences.',
                },
                {
                  title: 'Technicals',
                  description:
                    'In-depth coverage of financial modeling, valuation techniques, and accounting concepts crucial for IB roles.',
                },
                {
                  title: 'Interview Prep',
                  description:
                    'Guidance on structuring answers, mock interviews, and strategies to stand out in competitive IB recruitment processes.',
                },
                {
                  title: 'IB Overview',
                  description:
                    'Comprehensive introduction to investment banking, including deal types, industry trends, and day-to-day responsibilities.',
                },
                {
                  title: 'Recruiting',
                  description:
                    'Insights into networking strategies, resume optimization, and navigating the recruitment timeline for top IB firms.',
                },
              ].map((item, index) => (
                <div className="flex items-start gap-3" key={index}>
                  <FaCheckCircle
                    style={{ width: '24px', height: '24px' }}
                    className="text-[#57A0D3] flex-shrink-0"
                  />
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
                name: 'Charlie Huang',
                role: 'Investment Banking Mentor, Alpha Zeta',
                description:
                  'Charlie is currently an incoming summer analyst at J.P. Morgan San Francisco. Previously having experience in tech startups, he wants to intertwine his passion with the finance world. Charlie also received offers from Deutsche and Guggenheim.',
                image: '/members/charlie.png',
                linkedin: 'https://www.linkedin.com/in/charleshuang2004/',
              },
              {
                name: 'Fiona Ko',
                role: 'Investment Banking Mentor, Alpha Zeta',
                description:
                  'Fiona is currently an incoming summer analyst at Lazard San Francisco. Having worked in a lab and previously a pre-med student, she wants to utilize her knowledge in healthcare to help businesses from a finance perspective. Fiona also received an offer from J.P. Morgan.',
                image: '/members/fiona.png',
                linkedin: 'https://www.linkedin.com/in/fionako923/',
              },
              {
                name: 'Justin Xiang',
                role: 'Investment Banking Mentor, Alpha Zeta',
                description:
                  'Justin is currently an incoming summer analyst at Bank of America Los Angeles. He is open-minded and wants to learn about different industries and groups so he is placed in the generalist group at BofA. Justin also received an offer from J.P. Morgan.',
                image: '/members/justin.png',
                linkedin: 'https://www.linkedin.com/in/justin-xiang12/',
              },
            ].map((teamMember, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg space-y-4 flex items-center h-auto sm:h-[250px] flex-col sm:flex-row"
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <img
                  src={teamMember.image}
                  alt={teamMember.name}
                  className="w-32 h-48 rounded-[50%/25%] object-cover object-center mb-4 sm:mb-0 sm:mr-4"
                />
                <div className="px-4 max-w-full sm:max-w-[70%]">
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

export default AZ13;
