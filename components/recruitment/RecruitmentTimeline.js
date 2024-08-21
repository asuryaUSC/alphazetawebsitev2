import { FaInfoCircle, FaFileAlt, FaChalkboardTeacher, FaRegCalendarAlt, FaUserTie, FaAward } from 'react-icons/fa';

const RecruitmentTimeline = () => {
  return (
    <section className="bg-[#EFF7FF] py-12 md:py-20 px-4 md:px-6">
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

            {/* Event 1 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaInfoCircle className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">Information Session - <span className="font-normal">August 20</span></div>
              <div className="text-[#3D2930]">Learn about Alpha Zeta and the recruitment process.</div>
            </div>

            {/* Event 2 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaFileAlt className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">Resume Workshop - <span className="font-normal">August 27</span></div>
              <div className="text-[#3D2930]">Get feedback on your resume and learn how to stand out.</div>
            </div>

            {/* Event 3 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaChalkboardTeacher className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">Mock Interviews - <span className="font-normal">September 3</span></div>
              <div className="text-[#3D2930]">Practice your interviewing skills with current members.</div>
            </div>
          </div>

          {/* Right column */}
          <div className="grid gap-6 mx-auto relative">
            {/* Line */}
            <div className="absolute inset-y-0 left-[16px] w-px bg-[#3D2930]/20"></div>

            {/* Event 4 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaRegCalendarAlt className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">Application Deadline - <span className="font-normal">September 10</span></div>
              <div className="text-[#3D2930]">Submit your application by the deadline to be considered.</div>
            </div>

            {/* Event 5 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaUserTie className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">Interviews - <span className="font-normal">September 15-17</span></div>
              <div className="text-[#3D2930]">Participate in one-on-one interviews with the recruitment team.</div>
            </div>

            {/* Event 6 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                <FaAward className="w-4 h-4 text-[#3D2930]" />
              </div>
              <div className="font-bold text-[#3D2930]">Bid Day - <span className="font-normal">September 24</span></div>
              <div className="text-[#3D2930]">Receive your bid and officially become a member of Alpha Zeta.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentTimeline;
