import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/members/HeroBanner';
import MemberGrid from '../components/members/MemberGrid';
import Head from 'next/head';

const Members = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#EEF7FF]">
      <Head>
        <title>Alpha Zeta - Members</title>
        <meta name="description" content="Alpha Zeta's official website. Empowering leaders through brotherhood, integrity, and service." />
      </Head>
      <Navbar />
      <HeroBanner />
      <main className="flex-grow">
        <MemberGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Members;
