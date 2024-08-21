// components/Footer.js
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#EFF7FF]">
      <p className="text-xs text-[#3D2930]">&copy; 2024 Alpha Zeta. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <div className="flex gap-4 sm:gap-6">
          <a href="https://www.instagram.com/alphazeta.sc/" target="_blank" rel="noopener noreferrer" className="text-[#3D2930] hover:text-[#EEC3E8]">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/company/alpha-kappa-psi-alpha-zeta/" target="_blank" rel="noopener noreferrer" className="text-[#3D2930] hover:text-[#EEC3E8]">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:alphazeta@gmail.com" className="text-[#3D2930] hover:text-[#EEC3E8]">
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;