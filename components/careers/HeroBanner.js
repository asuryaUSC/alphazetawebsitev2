import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { scroller } from 'react-scroll';

const CareerHeroBanner = () => {
  // Animation control
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // State to toggle dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Start the animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Scroll to AZ Groups section
  const handleScrollToGroup = (groupId) => {
    scroller.scrollTo(groupId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    setDropdownOpen(false); // Close dropdown after selection
  };

  // Animation variants for title, text, and button
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: 'easeInOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  // Dropdown animation
  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full bg-[#EFF7FF] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            ref={ref}
            className="flex flex-col justify-center space-y-4"
            initial="hidden"
            animate={controls}
          >
            <motion.div className="space-y-2" variants={titleVariants}>
              <h1 className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-5xl xl:text-6xl/none">
                Explore Career Opportunities with Alpha Zeta
              </h1>
              <motion.p
                className="max-w-[600px] text-[#3D2930] md:text-xl"
                variants={textVariants}
              >
                Develop skills, network, and thrive in your professional journey.
              </motion.p>
            </motion.div>

            <motion.div variants={buttonVariants}>
              <button
                onClick={toggleDropdown}
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#89CFF0] px-6 py-3 text-md font-medium text-[#3D2930] shadow transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D2930] disabled:pointer-events-none disabled:opacity-50"
              >
                View AZ Groups
              </button>
            </motion.div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <motion.div
                className="mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
                initial="hidden"
                animate={isDropdownOpen ? 'visible' : 'hidden'}
                variants={dropdownVariants}
              >
                <ul className="flex flex-col">
                  {[
                    { id: 'az13', name: 'Investment Banking' },
                    { id: 'azc', name: 'Consulting' },
                    { id: 'az-entrepreneurship', name: 'Entrepreneurship' },
                    { id: 'az-pm', name: 'Product Management' },
                    { id: 'az-marketing', name: 'Marketing & UI/UX' },
                    { id: 'az-accounting', name: 'Accounting' },
                    { id: 'az-cs', name: 'Computer Science' },
                  ].map((group, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#3D2930]"
                      onClick={() => handleScrollToGroup(group.id)}
                    >
                      {group.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>

          <motion.img
            src="/placeholder.svg"
            width="550"
            height="400"
            alt="Careers"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          />
        </div>
      </div>
    </section>
  );
};

export default CareerHeroBanner;
