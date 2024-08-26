import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import Link from 'next/link';

const RecruitmentHeroBanner = () => {
  // Animation control
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Start the animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Scroll to AZ Groups section
  const handleScrollToSection = () => {
    scroller.scrollTo('az-groups', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
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

  return (
    <section className="w-full min-h-screen bg-[#EFF7FF] py-20 flex items-center">
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
                Join Alpha Zeta
              </h1>
              <motion.p
                className="max-w-[600px] text-[#3D2930] md:text-xl"
                variants={textVariants}
              >
                Become part of USC's premier co-ed business society
              </motion.p>
            </motion.div>

            <motion.div variants={buttonVariants}>
              <Link
                href="https://uoy80cusxjt.typeform.com/to/CxR5QHKw"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#89CFF0] px-6 py-3 text-md font-medium text-[#3D2930] shadow transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D2930] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Link>
            </motion.div>
          </motion.div>

          <motion.img
            src="/landing/recruitment.png"
            alt="Careers"
            className="mx-auto h-full w-full rounded-xl object-cover"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          />
        </div>
      </div>
    </section>
  );
};

export default RecruitmentHeroBanner;
