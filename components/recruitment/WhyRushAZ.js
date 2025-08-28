import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyRushAZ = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Only activate animation when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-[#E5F2FF] via-[#EDF5FF] to-[#D6F0FF] py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#89CFF0]/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-[#89CFF0]/15 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#89CFF0]/20 rounded-full blur-md animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#89CFF0]/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <motion.div
        className="container mx-auto text-center mb-16 relative z-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#89CFF0]/80 to-[#7AC0E8]/80 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-[#3D2930] border border-[#89CFF0]/30 shadow-lg mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Why Rush AZ?
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black mb-6 text-[#3D2930] leading-tight">
          Why Choose 
          <span className="relative inline-block ml-3">
            <span className="relative z-10">Alpha Zeta?</span>
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#89CFF0]/40 -rotate-1"></div>
          </span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-[#3D2930]/80 max-w-3xl mx-auto leading-relaxed">
          Join a community that's committed to your growth, success, and lifelong connections in business
        </motion.p>
      </motion.div>

      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Card 1 - Enhanced */}
        <motion.div 
          variants={itemVariants} 
          className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-[#89CFF0]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#89CFF0]/5 to-[#7AC0E8]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#89CFF0] to-[#7AC0E8] shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <BriefcaseIcon className="w-8 h-8 text-[#3D2930]" />
            </div>
            <h3 className="text-xl font-bold text-[#3D2930] mb-4 group-hover:text-[#2A1F26] transition-colors">Professional Growth</h3>
            <p className="text-[#3D2930]/80 leading-relaxed">
              Accelerate your career through hands-on workshops, case competitions, and skill-building sessions led by industry experts.
            </p>
          </div>
        </motion.div>

        {/* Card 2 - Enhanced */}
        <motion.div 
          variants={itemVariants} 
          className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-[#89CFF0]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#89CFF0]/5 to-[#7AC0E8]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#89CFF0] to-[#7AC0E8] shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <UsersIcon className="w-8 h-8 text-[#3D2930]" />
            </div>
            <h3 className="text-xl font-bold text-[#3D2930] mb-4 group-hover:text-[#2A1F26] transition-colors">Elite Networking</h3>
            <p className="text-[#3D2930]/80 leading-relaxed">
              Connect with ambitious peers, successful alumni, and top recruiters from Fortune 500 companies at exclusive events.
            </p>
          </div>
        </motion.div>

        {/* Card 3 - Enhanced */}
        <motion.div 
          variants={itemVariants} 
          className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-[#89CFF0]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#89CFF0]/5 to-[#7AC0E8]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#89CFF0] to-[#7AC0E8] shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <BadgeIcon className="w-8 h-8 text-[#3D2930]" />
            </div>
            <h3 className="text-xl font-bold text-[#3D2930] mb-4 group-hover:text-[#2A1F26] transition-colors">Personal Mentorship</h3>
            <p className="text-[#3D2930]/80 leading-relaxed">
              Get paired with dedicated mentors who provide personalized guidance for your academic and professional journey.
            </p>
          </div>
        </motion.div>

        {/* Card 4 - Enhanced */}
        <motion.div 
          variants={itemVariants} 
          className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-[#89CFF0]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#89CFF0]/5 to-[#7AC0E8]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#89CFF0] to-[#7AC0E8] shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <HandshakeIcon className="w-8 h-8 text-[#3D2930]" />
            </div>
            <h3 className="text-xl font-bold text-[#3D2930] mb-4 group-hover:text-[#2A1F26] transition-colors">Exclusive Opportunities</h3>
            <p className="text-[#3D2930]/80 leading-relaxed">
              Access hidden job markets with direct pipelines to top-tier internships and full-time positions at leading firms.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Icon Components

function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function HandshakeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default WhyRushAZ;
