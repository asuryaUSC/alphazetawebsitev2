import React from 'react';
import { FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AZCS = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animations trigger once when in view
    threshold: 0.2, // Section must be 20% in view to trigger
  });

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
    <section id="az-cs" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[#E5F2FF]">
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
              AZ CS
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3D2930]">
              Computer Science
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Fundamentals of Coding',
                  description: 'Master the foundational concepts of computer science, including algorithms, data structures, and problem-solving techniques.',
                },
                {
                  title: 'Leetcode and Interview Prep',
                  description: 'Prepare for coding interviews with hands-on practice on Leetcode, focusing on algorithmic challenges, coding problems, and whiteboard exercises.',
                },
                {
                  title: 'Recruiting',
                  description: 'Get detailed insights into recruiting strategies, building a strong resume, networking, and landing top technical roles in the tech industry.',
                },
                {
                  title: 'Practical Research in ML',
                  description: 'Engage in comprehensive machine learning research and complete a paper by the end of the semester to enhance your resume and technical portfolio.',
                },
                {
                  title: 'Building Your Own Project',
                  description: 'Gain practical experience by working on your own projects, a crucial step for success in the tech industry.',
                },
              ].map((item, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <div className="flex-shrink-0">
                    <FaCheckCircle style={{ width: '24px', height: '24px' }} className="text-[#57A0D3]" />
                  </div>
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
                role: 'Computer Science Mentor, Alpha Zeta',
                description:
                  'Aaditya has 5 years of experience in machine learning and has a published paper in both Cornell and Butler libraries. He provides mentorship and guidance to Alpha Zeta students on machine learning research, coding, and technical preparation.',
                image: '/members/aaditya.png',
                linkedin: 'https://www.linkedin.com/in/aadityasurya/',
              },
              {
                name: 'Renee Zhu',
                role: 'Computer Science Mentor, Alpha Zeta',
                description:
                  'Renee is a passionate Computer Science and Business joint major, with skills in full-stack web development, system programming, data analysis, and product marketing. She helps Alpha Zeta students navigate complex project landscapes and align technical solutions with strategic goals.',
                image: '/members/renee.png',
                linkedin: 'https://www.linkedin.com/in/renee-zhu-4581672b3/',
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
                <div className="px-4">
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

export default AZCS;
