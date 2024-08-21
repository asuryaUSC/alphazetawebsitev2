import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/recruitment/HeroBanner';
import WhyRushAZ from '../components/recruitment/WhyRushAZ';
import RecruitmentTimeline from '../components/recruitment/RecruitmentTimeline';
import ApplyNow from '../components/recruitment/ApplyNow';
import FAQSection from '../components/recruitment/FAQSection';

const Recruitment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#EEF7FF]">
      <Navbar />
      <HeroBanner />
      <main className="flex-grow">
        <WhyRushAZ />
        <RecruitmentTimeline />
        <FAQSection />
        <ApplyNow />
      </main>
      <Footer />
    </div>
  );
};

export default Recruitment;
