import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SortAZ } from 'tabler-icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import navItems from './NavItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // This will set isClient to true once the component mounts
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-[#EFF7FF] font-manrope">
      <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
        <SortAZ className="w-6 h-6 text-[#3D2930]" />
        <span className="font-bold text-[#3D2930]">Alpha Zeta</span>
      </Link>
      <div className="ml-auto flex items-center">
        <nav className="hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link href={item.href} key={item.title} className="relative group text-sm font-medium text-[#3D2930]" prefetch={false}>
              <span className="group-hover:text-[#EEC3E8] group-hover:underline transition duration-300 ease-in-out">{item.title}</span>
            </Link>
          ))}
        </nav>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <FiX className="w-6 h-6 text-[#EEC3E8]" /> : <FiMenu className="w-6 h-6 text-[#EEC3E8]" />}
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
                <Link href={item.href} key={item.title} className="w-full text-center py-2 text-sm font-medium text-[#3D2930] flex items-center justify-center px-4" prefetch={false}>
                  <span>{item.title}</span>
                  <FiChevronRight className="w-4 h-4 text-[#EEC3E8] ml-2" />
                </Link>
              ))}
              <div className="py-4" />
            </motion.nav>
          )}
        </AnimatePresence>
      )}
    </header>
  );
};

export default Navbar;
