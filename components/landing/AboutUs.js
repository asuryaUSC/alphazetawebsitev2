import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will trigger only once
    threshold: 0.1, // The section has to be at least 10% visible to trigger
  });

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Initial state before the animation
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }, // Final state
  };

  return (
    <section id="about-us" className="bg-gradient-to-br from-[#EFF7FF] via-[#E5F2FF] to-[#D6F0FF] py-12 md:py-24 lg:py-36">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12"
      >
        <div className="space-y-4">
          <motion.div
            variants={variants}
            className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]"
          >
            About Us
          </motion.div>
          <motion.h2 variants={variants} className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-4xl md:text-5xl">
            Empowering Leaders Through Brotherhood
          </motion.h2>
          <motion.p variants={variants} className="max-w-[700px] text-[#3D2930] md:text-xl lg:text-base xl:text-xl">
          Alpha Zeta is USC’s premier co-ed business society. Since our founding in 1922, we’ve built a thriving community of students across 15+ different majors and established an extensive alumni network, paving the way for future leaders.
          </motion.p>
          <motion.p variants={variants} className="max-w-[700px] text-[#3D2930] md:text-xl lg:text-base xl:text-xl">
          At Alpha Zeta, we believe in the power of collective growth. We strive to empower our brothers to excel in their careers, foster lifelong friendships, and advance in every aspect of their lives.
          </motion.p>
        </div>
        <motion.img
          variants={variants}
          src="/landing/landing-aboutus.png"
          width="550"
          height="310"
          alt="Alpha Zeta"
          className="mx-auto overflow-hidden rounded-xl object-contain sm:w-full"
        />
      </motion.div>
    </section>
  );
};

export default AboutUs;
