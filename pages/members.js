import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/members/HeroBanner';
import MemberGrid from '../components/members/MemberGrid';

const Members = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#EEF7FF]">
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
