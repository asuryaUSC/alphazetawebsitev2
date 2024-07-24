import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/landing/HeroBanner';
import AboutUs from '../components/landing/AboutUs';
import MissionAndValues from '../components/landing/MissionAndValues';
import Brotherhood from '../components/landing/Brotherhood';
import WhereWeHaveWorked from '../components/landing/WhereWeHaveWorked';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroBanner />
      <AboutUs />
      <MissionAndValues />
      <Brotherhood />
      <WhereWeHaveWorked />
      <Footer />
    </div>
  );
};

export default Home;
