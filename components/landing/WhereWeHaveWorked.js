import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import useInView for triggering animations
import Slider from 'react-slick';

const WhereWeHaveWorked = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    cssEase: 'ease-in-out',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  // Framer Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="bg-[#EEF7FF] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="space-y-4 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]"
          >
            Where We Have Worked
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-4xl md:text-5xl"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-[700px] text-[#3D2930] md:text-xl lg:text-base xl:text-xl"
          >
           Alpha Zeta members and alumni have secured prestigious opportunities across diverse industries, from investment banking, consulting, technology, to entrepreneurship. Our wide-reaching alumni network reflects our longstanding commitment to cultivate excellence and lifelong success.
          </motion.p>
        </motion.div>

        {/* Slider for the logos */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="mt-8"
        >
          <Slider {...settings}>
            {[
              '/landing/companies/apple.png',
              '/landing/companies/bain.png',
              '/landing/companies/jpm.png',
              '/landing/companies/evercore.png',
              '/landing/companies/mckinsey.png',
              '/landing/companies/citibank.png',
              '/landing/companies/lazard.png',
              '/landing/companies/bofa.png',
              '/landing/companies/google.png',
              '/landing/companies/bcg.png',
              '/landing/companies/ey.png',
              '/landing/companies/deloitte.png',
              '/landing/companies/amazon.png',
              '/landing/companies/spacex.png',
              '/landing/companies/kpmg.png',
              '/landing/companies/bloomberg.png',
              '/landing/companies/citadel.png',
            ].map((src, idx) => (
              <motion.div
                key={idx}
                className="flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={src}
                  alt="Company Logo"
                  className="logo-image mx-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Styling for consistent logo sizes and smoother transition */}
      <style jsx>{`
        .logo-image {
          height: 60px;
          width: auto;
          max-width: 140px;
        }
      `}</style>
    </section>
  );
};

export default WhereWeHaveWorked;
