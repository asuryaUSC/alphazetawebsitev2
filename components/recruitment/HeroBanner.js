import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import Link from "next/link";

const RecruitmentHeroBanner = () => {
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
      setIsDesktop(window.innerWidth >= 1024); // 1024px and above is considered desktop
    };

    handleResize(); // Run on component mount
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Start the animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Scroll to AZ Groups section
  const handleScrollToSection = () => {
    scroller.scrollTo("az-groups", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  // Animation variants for title, text, and button
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1 }, // Set scale to 1 initially
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
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
                  🎯 Spring 2026 Recruitment Open
                </span>
              </div>
              <h1 className="text-4xl font-black tracking-tight text-[#3D2930] sm:text-6xl xl:text-7xl/none">
                Join
                <span className="relative inline-block ml-3">
                  <span className="relative z-10">Alpha Zeta</span>
                  <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#89CFF0]/40 -rotate-1"></div>
                </span>
              </h1>
              <motion.p
                className="max-w-[600px] text-[#3D2930]/80 text-xl leading-relaxed font-medium"
                variants={textVariants}
              >
                Step into USC's most dynamic co-ed business society and unlock
                opportunities that will shape your future.
              </motion.p>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://tally.so/r/5B9qOQ"
                className="group relative inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#89CFF0] to-[#7AC0E8] px-8 py-4 text-lg font-bold text-[#3D2930] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D2930] disabled:pointer-events-none disabled:opacity-50 overflow-hidden"
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Interest Form
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>

              <button
                onClick={handleScrollToSection}
                className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-[#3D2930]/20 bg-white/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-[#3D2930] transition-all duration-300 ease-in-out hover:bg-white/80 hover:border-[#3D2930]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D2930]"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <motion.img
              src="/landing/recruitment.png"
              alt="Alpha Zeta Recruitment"
              className="relative mx-auto h-full w-full rounded-2xl object-cover max-w-[800px] max-h-[600px]"
              whileHover={
                isDesktop
                  ? {
                      scale: 1.03,
                      rotate: 1,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }
                  : {}
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentHeroBanner;
