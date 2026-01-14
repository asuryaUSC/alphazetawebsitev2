import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Coffee,
  Users,
  FileText,
  Calendar,
  UserCheck,
  HelpCircle,
} from "lucide-react";

const RecruitmentTimeline = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const eventVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const timelineEvents = [
    {
      icon: Coffee,
      title: "Coffee Chats",
      date: "January 20 - January 26",
      description: "Appointment only, dress casual.",
    },
    {
      icon: Users,
      title: "Meet the Chapter",
      date: "January 26",
      description: "7-9 PM @ 1301 W 22nd Street, Business Casual.",
    },
    {
      icon: Calendar,
      title: "Speed Dating",
      date: "January 27",
      description: "7-9 PM @ 1301 W 22nd Street, Business Casual.",
    },
    {
      icon: FileText,
      title: "Applications Due",
      date: "January 30",
      description: "Submit by 11:59 PM.",
    },
    {
      icon: UserCheck,
      title: "Interviews",
      date: "February 2 - February 3",
      description: "Invite-only, Business Professional.",
    },
    {
      icon: HelpCircle,
      title: "Mystery Event",
      date: "January 5",
      description: "Invite-only, Dress Casual.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-[#E5F2FF] via-[#EDF5FF] to-[#F0F8FF] py-12 md:py-16 px-4 md:px-6 overflow-hidden"
      id="az-groups"
    >
      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-24 h-24 bg-[#89CFF0]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#89CFF0]/8 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#89CFF0]/80 to-[#7AC0E8]/80 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-[#3D2930] border border-[#89CFF0]/30 shadow-lg mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Recruitment Timeline
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#3D2930] mb-4">
            Recruitment Timeline
          </h2>
          <p className="text-lg text-[#3D2930]/70 max-w-2xl mx-auto leading-relaxed">
            Here's what to expect during the recruitment process. Mark your
            calendars for these key dates!
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - responsive positioning */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px w-0.5 bg-gradient-to-b from-[#89CFF0]/30 via-[#89CFF0] to-[#89CFF0]/30 h-full"></div>

          <div className="space-y-6 md:space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex items-stretch md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
                initial="hidden"
                animate={controls}
                variants={eventVariants}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline dot - responsive positioning */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#89CFF0] to-[#7AC0E8] rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  <event.icon className="w-5 h-5 md:w-6 md:h-6 text-[#3D2930] stroke-[2.5]" />
                </div>

                {/* Content - mobile: always left-aligned, desktop: alternating */}
                <div
                  className={`w-full pl-16 md:pl-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-[#89CFF0]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90">
                    <div
                      className={`flex items-center mb-3 ${
                        index % 2 === 0
                          ? "justify-start md:justify-end"
                          : "justify-start"
                      }`}
                    >
                      <h3
                        className={`text-lg md:text-xl font-bold text-[#3D2930] ${
                          index % 2 === 0
                            ? "order-first md:order-last"
                            : "order-first"
                        }`}
                      >
                        {event.title}
                      </h3>
                    </div>
                    <div
                      className={`text-base md:text-lg font-semibold text-[#89CFF0] mb-2 ${
                        index % 2 === 0
                          ? "text-left md:text-right"
                          : "text-left"
                      }`}
                    >
                      {event.date}
                    </div>
                    <p
                      className={`text-[#3D2930]/80 text-sm md:text-base leading-relaxed ${
                        index % 2 === 0
                          ? "text-left md:text-right"
                          : "text-left"
                      }`}
                    >
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentTimeline;
