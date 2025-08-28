import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/recruitment/HeroBanner';
import WhyRushAZ from '../components/recruitment/WhyRushAZ';
import RecruitmentTimeline from '../components/recruitment/RecruitmentTimeline';
import FAQSection from '../components/recruitment/FAQSection';
import Head from 'next/head';

const Recruitment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#EEF7FF]">
      <Head>
        <title>Alpha Zeta - Recruitment</title>
        <meta name="description" content="Alpha Zeta's official website. Empowering leaders through brotherhood, integrity, and service." />
      </Head>
      <Navbar />
      <HeroBanner />
      <main className="flex-grow">
        <WhyRushAZ />
        <RecruitmentTimeline />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Recruitment;
