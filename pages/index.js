import Navbar from '../components/Navbar';
import HeroBanner from '../components/landing/HeroBanner';
import AboutUs from '../components/landing/AboutUs';
import MissionAndValues from '../components/landing/MissionAndValues';
import WhereWeHaveWorked from '../components/landing/WhereWeHaveWorked';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroBanner />
      <AboutUs />
      <MissionAndValues />
      <WhereWeHaveWorked />
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Home;
