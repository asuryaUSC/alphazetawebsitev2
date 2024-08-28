import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import navItems from './NavItems';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);

    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    });

    const handleScroll = () => {
      setIsTop(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const offset = window.innerWidth < 768 ? -50 : 0;
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset,
    });
    setIsOpen(false);
  };

  const handleNavigation = (item) => {
    if (item.href === '/about-us') {
      if (router.pathname === '/') {
        handleScrollToSection('about-us');
      } else {
        router.push('/').then(() => {
          handleScrollToSection('about-us');
        });
      }
    } else {
      setIsOpen(false);
      router.push(item.href);
    }
  };

  return (
    <motion.header
      className={`px-4 lg:px-6 h-16 fixed top-0 left-0 right-0 z-50 flex items-center font-manrope transition-shadow duration-300 ease-in-out ${
        isTop ? 'shadow-none' : 'shadow-md'
      } bg-[#EFF7FF]`}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
    >
      <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center gap-2 text-[#3D2930]"
        >
          {/* Replace icon with logo */}
          <img 
            src="/navlogo.png" 
            alt="Alpha Zeta Logo" 
            className="h-10 w-auto"
          />
          <span className="font-bold text-lg">Alpha Zeta</span>
        </motion.div>
      </Link>
      <div className="ml-auto flex items-center">
        <nav className="hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <motion.span
              key={item.title}
              onClick={() => handleNavigation(item)}
              whileHover={{ scale: 1.1, color: '#89CFF0' }}
              className="cursor-pointer text-sm font-medium transition duration-300 ease-in-out text-[#3D2930]"
            >
              {item.title}
            </motion.span>
          ))}
        </nav>
        <Link
          href="https://uoy80cusxjt.typeform.com/AlphaZeta"
          className="hidden md:inline-flex h-10 items-center justify-center ml-6 rounded-md bg-[#89CFF0] px-6 py-2 text-sm font-medium text-[#3D2930] shadow transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D2930] disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          Interest Form
        </Link>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <FiX className="w-6 h-6 text-[#89CFF0]" /> : <FiMenu className="w-6 h-6 text-[#89CFF0]" />}
        </button>
      </div>
      {isClient && (
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="fixed top-16 left-0 right-0 bg-[#EFF7FF] flex flex-col items-center md:hidden overflow-hidden"
            >
              {navItems.map((item) => (
                <span
                  key={item.title}
                  className="w-full text-center py-2 text-sm font-medium flex items-center justify-center px-4 cursor-pointer text-[#3D2930] hover:bg-[#89CFF0] hover:text-[#3D2930] focus:bg-[#89CFF0] focus:text-[#3D2930]"
                  onClick={() => handleNavigation(item)}
                >
                  {item.title}
                  <FiChevronRight className="w-4 h-4 text-[#89CFF0] ml-2" />
                </span>
              ))}
              <div className="py-4" />
            </motion.nav>
          )}
        </AnimatePresence>
      )}
    </motion.header>
  );
};

export default Navbar;
