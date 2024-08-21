import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Brotherhood = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays for each item
      },
    },
  };

  return (
    <section className="bg-[#EEF7FF] py-12 md:py-24 lg:py-32" ref={ref}>
      <motion.div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="space-y-4"
        >
          <motion.div variants={fadeInUp} className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]">
            Brotherhood
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-4xl md:text-5xl">
            A Lifelong Community of Leaders
          </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-[700px] text-[#3D2930] md:text-xl lg:text-base xl:text-xl">
            At the heart of Alpha Zeta is a strong sense of brotherhood that extends beyond the college years. Our
            members form lifelong connections and support each other in their personal and professional endeavors.
          </motion.p>
          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
            <motion.div variants={fadeInUp} className="flex flex-col items-start gap-2">
              <img src="/placeholder.svg" width="80" height="80" alt="Member" className="rounded-full" />
              <div>
                <p className="text-sm font-medium text-[#3D2930]">John Doe</p>
                <p className="text-sm text-[#3D2930]">
                  "Alpha Zeta has been a constant source of support and guidance throughout my career."
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-start gap-2">
              <img src="/placeholder.svg" width="80" height="80" alt="Member" className="rounded-full" />
              <div>
                <p className="text-sm font-medium text-[#3D2930]">Jane Smith</p>
                <p className="text-sm text-[#3D2930]">
                  "The brotherhood in Alpha Zeta is unparalleled. I know I can always count on my brothers."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.img
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          src="/placeholder.svg"
          width="550"
          height="310"
          alt="Brotherhood"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </motion.div>
    </section>
  );
};

export default Brotherhood;
