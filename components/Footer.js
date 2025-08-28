// components/Footer.js
import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#EEF7FF] via-[#E5F2FF] to-[#D6F0FF] border-t border-[#89CFF0]/20 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-10 w-16 h-16 bg-[#89CFF0]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-10 w-20 h-20 bg-[#89CFF0]/8 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img 
                src="/navlogo.png" 
                alt="Alpha Zeta Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-black text-[#3D2930]">Alpha Zeta</span>
            </div>
            <p className="text-sm text-[#3D2930]/70 text-center md:text-left">
              &copy; 2025 Alpha Zeta USC. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <nav className="flex gap-6">
              <Link href="/about-us" className="text-sm font-medium text-[#3D2930]/80 hover:text-[#89CFF0] transition-colors">
                About
              </Link>
              <Link href="/members" className="text-sm font-medium text-[#3D2930]/80 hover:text-[#89CFF0] transition-colors">
                Members
              </Link>
              <Link href="/careers" className="text-sm font-medium text-[#3D2930]/80 hover:text-[#89CFF0] transition-colors">
                Careers
              </Link>
              <Link href="/recruitment" className="text-sm font-medium text-[#3D2930]/80 hover:text-[#89CFF0] transition-colors">
                Recruitment
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/alphazeta.sc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#89CFF0]/20 text-[#3D2930] hover:bg-[#89CFF0] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={2.5} />
              </a>
              <a 
                href="https://www.linkedin.com/company/alpha-kappa-psi-alpha-zeta/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#89CFF0]/20 text-[#3D2930] hover:bg-[#89CFF0] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" strokeWidth={2.5} />
              </a>
              <a 
                href="mailto:alphazeta@gmail.com" 
                className="group p-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#89CFF0]/20 text-[#3D2930] hover:bg-[#89CFF0] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 pt-6 border-t border-[#89CFF0]/20 text-center">
          <p className="text-sm text-[#3D2930]/60 font-medium">
            USC's Premier Co-Ed Business Society • Building Tomorrow's Leaders
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
