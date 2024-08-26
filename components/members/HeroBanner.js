// components/members/HeroBanner.js
import Link from 'next/link';

const HeroBanner = () => {
  const handleScroll = () => {
    document.getElementById('member-grid').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#EEF7FF] pt-[80px] md:pt-[110px] lg:pt-[240px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-5xl md:text-6xl">Meet Our Members</h1>
            <p className="text-[#3D2930] md:text-xl">The Heart and Soul of Alpha Zeta</p>
            <p className="max-w-[600px] text-[#3D2930] md:text-lg">
              Alpha Zeta is a diverse and talented community of individuals who are passionate about making a positive
              impact. From entrepreneurs to artists, our members bring a wealth of experience and expertise to the
              organization.
            </p>
            <button
              onClick={handleScroll}
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#89CFF0] px-6 py-3 text-md font-medium text-[#3D2930] shadow transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D2930] disabled:pointer-events-none disabled:opacity-50"
            >
              View Profiles
            </button>
          </div>
          <div className="w-full flex justify-center">
            <img
              src="/members/members.png"
              alt="Alpha Zeta Members"
              className="rounded-xl object-cover object-center w-full max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
