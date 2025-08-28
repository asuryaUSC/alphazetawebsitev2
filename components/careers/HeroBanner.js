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

  // State to handle screen size for hover effect
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size to disable hover effect on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // 1024px and above is considered desktop
    };

    handleResize(); // Run on component mount
    window.addEventListener('resize', handleResize); // Update on window resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    hidden: { opacity: 0, scale: 1 }, // Set scale to 1 initially
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  // Dropdown animation
  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#EFF7FF] via-[#E5F2FF] to-[#D6F0FF] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Removed animated bubble elements */}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 flex items-center min-h-screen">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_600px] w-full">
          <motion.div
            ref={ref}
            className="flex flex-col justify-center space-y-8"
            initial="hidden"
            animate={controls}
          >
            <motion.div className="space-y-6" variants={titleVariants}>
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-[#89CFF0]/80 backdrop-blur-sm text-[#3D2930] text-sm font-semibold rounded-full border border-[#89CFF0]/30">
                  🚀 Career Development
                </span>
              </div>
              <h1 className="text-4xl font-black tracking-tight text-[#3D2930] sm:text-6xl xl:text-7xl/none">
                Explore Career
                <span className="relative inline-block ml-3">
                  <span className="relative z-10">Opportunities</span>
                  <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#89CFF0]/40 -rotate-1"></div>
                </span>
                <br />
                with Alpha Zeta
              </h1>
              <motion.p
                className="max-w-[600px] text-[#3D2930]/80 text-xl leading-relaxed font-medium"
                variants={textVariants}
              >
                Join specialized groups, develop industry expertise, and accelerate your professional journey with mentorship and hands-on experience.
              </motion.p>
            </motion.div>

            <motion.div variants={buttonVariants} className="flex flex-col gap-4">
              <button
                onClick={toggleDropdown}
                className="group relative inline-flex h-14 w-fit items-center justify-center rounded-xl bg-gradient-to-r from-[#89CFF0] to-[#7AC0E8] px-8 py-4 text-lg font-bold text-[#3D2930] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#89CFF0]/50 disabled:pointer-events-none disabled:opacity-50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View AZ Career Groups
                  <svg className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              {/* Enhanced Dropdown Menu */}
              {isDropdownOpen && (
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-[#89CFF0]/20"
                  initial="hidden"
                  animate={isDropdownOpen ? 'visible' : 'hidden'}
                  variants={dropdownVariants}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                    {[
                      { id: 'az13', name: 'Investment Banking', icon: '💼' },
                      { id: 'azc', name: 'Consulting', icon: '🎯' },
                      { id: 'az-entrepreneurship', name: 'Entrepreneurship', icon: '🚀' },
                      { id: 'az-pm', name: 'Product Management', icon: '📊' },
                      { id: 'az-marketing', name: 'Marketing & UI/UX', icon: '🎨' },
                      { id: 'az-accounting', name: 'Accounting', icon: '📈' },
                      { id: 'az-cs', name: 'Computer Science', icon: '💻' },
                    ].map((group, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#89CFF0]/10 cursor-pointer text-[#3D2930] transition-all duration-200 hover:scale-105 text-left"
                        onClick={() => handleScrollToGroup(group.id)}
                      >
                        <span className="text-xl">{group.icon}</span>
                        <span className="font-medium">{group.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <motion.img
              src="/careers.png"
              alt="Alpha Zeta Career Development"
              className="relative mx-auto h-full w-full rounded-2xl object-cover max-w-[600px] max-h-[450px]"
              whileHover={isDesktop ? {
                scale: 1.03,
                rotate: 1,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              } : {}}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerHeroBanner;
