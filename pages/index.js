import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/landing/HeroBanner';
import AboutUs from '../components/landing/AboutUs';
import MissionAndValues from '../components/landing/MissionAndValues';
import Brotherhood from '../components/landing/Brotherhood';
import WhereWeHaveWorked from '../components/landing/WhereWeHaveWorked';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Alpha Zeta - Home</title>
        <meta name="description" content="Alpha Zeta's official website. Empowering leaders through brotherhood, integrity, and service." />
      </Head>
      <Navbar />
      <HeroBanner />
      <AboutUs />
      <WhereWeHaveWorked />
      <MissionAndValues />
      <Brotherhood />
      <Footer />
    </div>
  );
};

export default Home;
