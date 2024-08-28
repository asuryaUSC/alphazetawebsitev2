import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Link from 'next/link';

const ApplyNow = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeInOut', delay: 0.4 },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="bg-[#EFF7FF] py-12 md:py-20 px-4 md:px-6"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <motion.div className="container text-center mx-auto">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D2930]" variants={fadeInUp}>
          Ready to Join Alpha Zeta?
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-[#3D2930] mb-8" variants={fadeInUp}>
          Fill out our interest form to join into the rush process! Our formal applications open on September 4.
        </motion.p>
        <motion.div variants={buttonVariants}>
          <Link
            href="https://uoy80cusxjt.typeform.com/AlphaZeta"
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#89CFF0] px-6 py-3 text-md font-medium text-[#3D2930] shadow transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D2930] disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            Interest Form
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ApplyNow;
