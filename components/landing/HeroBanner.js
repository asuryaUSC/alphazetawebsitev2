import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const HeroBanner = () => {
  // Animation control
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.2, // Trigger animation when 20% of the component is in view
  });

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

  // Animation variants for title, text, and button
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: 'easeInOut' } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6, ease: 'easeInOut' } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1 }, // Remove scaling here
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeInOut' } }
  };

  return (
    <main className="flex-1 relative bg-gradient-to-br from-[#EFF7FF] via-[#E5F2FF] to-[#D6F0FF] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Removed animated bubble elements */}
      </div>

      <section className="relative z-10 w-full min-h-screen pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12 lg:pb-16 xl:pb-24 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              ref={ref}
              className="space-y-8 w-full"
              initial="hidden"
              animate={controls}
            >
              <motion.div className="space-y-6" variants={titleVariants}>
                <div className="flex justify-center">
                  <span className="inline-block px-4 py-2 bg-[#89CFF0]/80 backdrop-blur-sm text-[#3D2930] text-sm font-semibold rounded-full border border-[#89CFF0]/30">
                    🎓 USC's Premier Business Society
                  </span>
                </div>
                <motion.h1
                  className="text-3xl font-black tracking-tight text-[#3D2930] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
                  variants={titleVariants}
                >
                  Welcome to
                  <br className="block sm:hidden" />
                  <span className="relative inline-block ml-2 sm:ml-4">
                    <span className="relative z-10">Alpha Zeta</span>
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4 lg:h-6 bg-[#89CFF0]/40 -rotate-1"></div>
                  </span>
                </motion.h1>
                <motion.p
                  className="max-w-[600px] mx-auto text-[#3D2930]/80 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium"
                  variants={textVariants}
                >
                  Where ambitious minds connect, grow, and shape the future of business together.
                </motion.p>
              </motion.div>

              <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                  href="https://tally.so/r/nWLPMe"
                  className="group relative inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-[#89CFF0] to-[#7AC0E8] px-6 sm:px-8 py-4 text-base sm:text-lg font-bold text-[#3D2930] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#89CFF0]/50 disabled:pointer-events-none disabled:opacity-50 overflow-hidden"
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Fill Out Our Interest Form
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
                
                <button
                  onClick={() => {
                    const aboutSection = document.getElementById('about-us');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center rounded-2xl border-2 border-[#3D2930]/20 bg-white/50 backdrop-blur-sm px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-[#3D2930] transition-all duration-300 ease-in-out hover:bg-white/80 hover:border-[#3D2930]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D2930]"
                >
                  Learn More
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative mt-12 md:mt-16 lg:mt-20 w-full max-w-2xl lg:max-w-4xl"
              initial="hidden"
              animate={controls}
              variants={imageVariants}
            >
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#89CFF0]/30 to-[#7AC0E8]/30 rounded-2xl sm:rounded-3xl blur-xl"></div>
                <motion.img
                  src="/landing/landing-hero.png"
                  width={isDesktop ? 1800 : 700}
                  height={isDesktop ? 1800 : 700}
                  alt="Alpha Zeta Community"
                  className="relative mx-auto overflow-hidden rounded-xl sm:rounded-2xl object-cover object-center w-full h-auto shadow-2xl"
                  whileHover={isDesktop ? {
                    scale: 1.03,
                    rotate: 1,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  } : {}}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroBanner;
