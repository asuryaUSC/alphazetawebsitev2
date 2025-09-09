import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
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
      className={`px-4 lg:px-6 pt-6 pb-4 fixed top-0 left-0 right-0 z-50 font-manrope transition-all duration-300 ease-in-out ${
        isTop ? 'bg-transparent shadow-none' : 'bg-[#EFF7FF]/10 backdrop-blur-sm shadow-sm'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
    >
      {/* Desktop Layout - Centered */}
      <div className="hidden md:flex items-center justify-center w-full max-w-6xl mx-auto">
        {/* Logo - Left */}
        <Link href="/" className="absolute left-4 lg:left-6" prefetch={false}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-[#3D2930]"
          >
            <div className="relative">
              <img 
                src="/navlogo.png" 
                alt="Alpha Zeta Logo" 
                className="h-11 w-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#89CFF0]/20 to-transparent rounded-full blur-sm -z-10"></div>
            </div>
            <span className="font-black text-xl tracking-tight">Alpha Zeta</span>
          </motion.div>
        </Link>

        {/* Centered Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.span
              key={item.title}
              onClick={() => handleNavigation(item)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out text-[#3D2930] hover:text-[#89CFF0] relative group"
            >
              {item.title}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#89CFF0] to-[#7AC0E8] transition-all duration-300 group-hover:w-full"></div>
            </motion.span>
          ))}
        </nav>

        {/* Apply Button - Right */}
        <Link
          href="https://tally.so/r/mBva57"
          className="absolute right-4 lg:right-6 group"
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#89CFF0] to-[#7AC0E8] px-4 py-2 text-sm font-semibold text-[#3D2930] shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#89CFF0]/50 disabled:pointer-events-none disabled:opacity-50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Apply Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.div>
        </Link>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[#3D2930]"
          >
            <img 
              src="/navlogo.png" 
              alt="Alpha Zeta Logo" 
              className="h-9 w-auto"
            />
            <span className="font-black text-lg">Alpha Zeta</span>
          </motion.div>
        </Link>

        <motion.button 
          onClick={toggleMenu} 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="focus:outline-none p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-[#89CFF0]/20 shadow-md"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? 
              <X className="w-5 h-5 text-[#3D2930]" strokeWidth={2.5} /> : 
              <Menu className="w-5 h-5 text-[#3D2930]" strokeWidth={2.5} />
            }
          </motion.div>
        </motion.button>
      </div>

      {/* Enhanced Mobile Menu */}
      {isClient && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-20 left-0 right-0 bg-[#EFF7FF]/95 backdrop-blur-md md:hidden overflow-hidden border-t border-[#89CFF0]/20 shadow-xl"
            >
              <div className="flex flex-col items-center py-6 px-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="w-full"
                  >
                    <div
                      className="w-full bg-white/60 backdrop-blur-sm rounded-xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1 border border-[#89CFF0]/20 group"
                      onClick={() => handleNavigation(item)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold text-[#3D2930] group-hover:text-[#89CFF0] transition-colors">
                          {item.title}
                        </span>
                        <ChevronRight className="w-5 h-5 text-[#89CFF0] transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 + 0.2, duration: 0.3 }}
                  className="pt-4 w-full"
                >
                  <Link
                    href="https://tally.so/r/mBva57"
                    className="group relative inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#89CFF0] to-[#7AC0E8] px-8 py-4 text-lg font-bold text-[#3D2930] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#89CFF0]/50 disabled:pointer-events-none disabled:opacity-50 overflow-hidden"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Apply Now
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.header>
  );
};

export default Navbar;
