import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/careers/HeroBanner';
import AZ13 from '../components/careers/AZ13';
import AZC from '../components/careers/AZC';
import AZAccounting from '../components/careers/AZAccounting';
import AZCS from '../components/careers/AZCS';
import AZEntre from '../components/careers/AZEntre';
import AZMarketing from '../components/careers/AZMarketing';
import AZPM from '../components/careers/AZPM';



const Recruitment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#EEF7FF]">
      <Navbar />
      <HeroBanner />
      <main className="flex-grow">
        <AZ13 />
        <AZC />
        <AZCS />
        <AZEntre />
        <AZPM />
        <AZMarketing />
        <AZAccounting />
      </main>
      <Footer />
    </div>
  );
};

export default Recruitment;
