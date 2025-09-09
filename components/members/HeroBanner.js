// components/members/HeroBanner.js
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const HeroBanner = () => {
  // Animation control
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // State to handle screen size for hover effect
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size to disable hover effect on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start the animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleScroll = () => {
    document.getElementById('member-grid').scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
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
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#EEF7FF] via-[#E5F2FF] to-[#D6F0FF] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Removed animated bubble elements */}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 flex items-center min-h-screen">
        <div className="grid gap-12 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full">
          <motion.div
            ref={ref}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial="hidden"
            animate={controls}
          >
            <motion.div className="space-y-6" variants={titleVariants}>
              <div className="flex justify-center lg:justify-start">
                <span className="inline-block px-4 py-2 bg-[#89CFF0]/80 backdrop-blur-sm text-[#3D2930] text-sm font-semibold rounded-full border border-[#89CFF0]/30">
                  👥 Our Community
                </span>
              </div>
              <h1 className="text-4xl font-black tracking-tight text-[#3D2930] sm:text-6xl xl:text-7xl/none">
                Meet Our
                <span className="relative inline-block ml-3">
                  <span className="relative z-10">Members</span>
                  <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#89CFF0]/40 -rotate-1"></div>
                </span>
              </h1>
              <motion.p
                className="text-xl md:text-2xl font-semibold text-[#3D2930] mb-4"
                variants={textVariants}
              >
                The Heart and Soul of Alpha Zeta
              </motion.p>
              <motion.p
                className="max-w-[600px] mx-auto lg:mx-0 text-[#3D2930]/80 text-lg md:text-xl leading-relaxed font-medium"
                variants={textVariants}
              >
                Discover the diverse and talented community of individuals who drive Alpha Zeta forward. From visionary entrepreneurs to creative innovators, our members bring exceptional expertise and passion to everything we do.
              </motion.p>
            </motion.div>

            <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <button
                onClick={handleScroll}
                className="group relative inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-[#89CFF0] to-[#7AC0E8] px-8 py-4 text-lg font-bold text-[#3D2930] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#89CFF0]/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Member Profiles
                  <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <Link
                href="https://tally.so/r/mBva57"
                className="inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center rounded-2xl border-2 border-[#3D2930]/20 bg-white/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-[#3D2930] transition-all duration-300 ease-in-out hover:bg-white/80 hover:border-[#3D2930]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D2930]"
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <motion.img
              src="/members/members.png"
              alt="Alpha Zeta Members"
              className="relative mx-auto w-full h-auto rounded-2xl object-contain max-w-[600px]"
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

export default HeroBanner;
