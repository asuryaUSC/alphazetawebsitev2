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
    <main className="flex-1 bg-[#EFF7FF]">
      <section className="w-full min-h-screen py-8 md:py-12 lg:py-16 xl:py-24 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12">
            <motion.div
              ref={ref}
              className="space-y-4"
              initial="hidden"
              animate={controls}
              variants={titleVariants}
            >
              <motion.h1
                className="text-5xl font-bold tracking-tighter text-[#3D2930] sm:text-6xl md:text-7xl lg:text-8xl/none"
                variants={titleVariants}
              >
                Welcome to Alpha Zeta
              </motion.h1>
              <motion.p
                className="max-w-[700px] text-[#3D2930] md:text-xl"
                variants={textVariants}
              >
                USC's Premiere Co-Ed Business Society
              </motion.p>
              <motion.div variants={buttonVariants}>
                <Link
                  href="https://form.typeform.com/to/kRyg0z6B"
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
              src="/landing/landing-hero.png"
              width={isDesktop ? 1800 : 700} // Larger image on desktop
              height={isDesktop ? 1800 : 700}
              alt="Hero"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:w-auto max-w-full"
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              whileHover={isDesktop ? {
                scale: 1.1,           // Grow effect (small increase)
                rotate: 3,             // Slight rotation
                skewX: -2,             // Skew for a 3D effect
                transition: {
                  duration: 0.6,       // Make it feel smooth
                  ease: [0.25, 0.46, 0.45, 0.94],  // Custom easing
                },
              } : {}}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroBanner;
