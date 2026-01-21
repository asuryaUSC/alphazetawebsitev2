import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/careers/HeroBanner";
import AZ13 from "../components/careers/AZ13";
import AZC from "../components/careers/AZC";
// import AZAccounting from "../components/careers/AZAccounting";
import AZCS from "../components/careers/AZCS";
// import AZEntre from '../components/careers/AZEntre';
import AZMarketing from "../components/careers/AZMarketing";
import AZPM from "../components/careers/AZPM";
import Head from "next/head";

const Recruitment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#EEF7FF]">
      <Navbar />
      <HeroBanner />
      <Head>
        <title>Alpha Zeta - Careers</title>
        <meta
          name="description"
          content="Alpha Zeta's official website. Empowering leaders through brotherhood, integrity, and service."
        />
      </Head>
      <main className="flex-grow">
        <AZ13 />
        <AZC />
        {/* <AZCS /> */}
        {/* <AZEntre />  commmented for SP 2025*/}
        <AZPM />
        <AZMarketing />
        {/* <AZAccounting /> commmented for SP 2025 */}
      </main>
      <Footer />
    </div>
  );
};

export default Recruitment;
