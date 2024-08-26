import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCoffee, FaUsers, FaFileAlt, FaCalendarCheck, FaUserTie, FaQuestionCircle } from 'react-icons/fa';

const RecruitmentTimeline = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Animation will trigger when 20% of the section is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const eventVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="bg-[#EFF7FF] py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]">Recruitment Timeline</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#3D2930]">Recruitment Timeline</h2>
          <p className="mt-4 text-lg md:text-xl text-[#3D2930]">
            Here’s what to expect during the recruitment process. Mark your calendars for these key dates!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          {/* Left column */}
          <div className="grid gap-6 mx-auto relative">
            {/* Line */}
            <div className="absolute inset-y-0 left-[16px] w-px bg-[#3D2930]/20"></div>

            {/* Event 1 - Coffee Chats */}
            <motion.div className="relative pl-16" initial="hidden" animate={controls} variants={eventVariants}>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaCoffee className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">
                Coffee Chats Start - <span className="font-normal">August 28</span>
              </div>
              <p className="text-sm text-[#3D2930]">Appointment only, dress casual. Sign-ups coming soon.</p>
            </motion.div>

            {/* Event 2 - Meet the Chapter */}
            <motion.div className="relative pl-16" initial="hidden" animate={controls} variants={eventVariants}>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaUsers className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">
                Meet the Chapter - <span className="font-normal">September 3</span>
              </div>
              <div className="text-[#3D2930]">Address: TBD</div>
              <p className="text-sm text-[#3D2930]"> 7-9 pm, address TBD. Dress business casual. </p>
            </motion.div>

            {/* Event 3 - Interactive Workshop */}
            <motion.div className="relative pl-16" initial="hidden" animate={controls} variants={eventVariants}>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaCalendarCheck className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">
                Interactive Workshop - <span className="font-normal">September 4</span>
              </div>
              <div className="text-[#3D2930]">Address: TBD</div>
              <p className="text-sm text-[#3D2930]"> 7-9 pm, address TBD. Dress business casual.</p>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="grid gap-6 mx-auto relative">
            {/* Line */}
            <div className="absolute inset-y-0 left-[16px] w-px bg-[#3D2930]/20"></div>

            {/* Event 4 - Application Deadline */}
            <motion.div className="relative pl-16" initial="hidden" animate={controls} variants={eventVariants}>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaFileAlt className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">
                Applications Due - <span className="font-normal">September 7</span>
              </div>
              <p className="text-sm text-[#3D2930]">Submit by 11:59 pm. No late applications are accepted.</p>
            </motion.div>

            {/* Event 5 - Interviews */}
            <motion.div className="relative pl-16" initial="hidden" animate={controls} variants={eventVariants}>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaUserTie className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">
                Interviews - <span className="font-normal">September 9-10</span>
              </div>
              <div className="text-[#3D2930]">Address: TBD</div>
              <p className="text-sm text-[#3D2930]">Invite only, dress business professional.</p>
            </motion.div>

            {/* Event 6 - Mystery Event */}
            <motion.div className="relative pl-16" initial="hidden" animate={controls} variants={eventVariants}>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaQuestionCircle className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">
                Mystery Event - <span className="font-normal">September 12</span>
              </div>
              <div className="text-[#3D2930]">Address: TBD</div>
              <p className="text-sm text-[#3D2930]"> Invite only, dress casual.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentTimeline;
