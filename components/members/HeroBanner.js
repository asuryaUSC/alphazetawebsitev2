// components/members/HeroBanner.js
import Link from 'next/link';

const HeroBanner = () => {
  const handleScroll = () => {
    document.getElementById('member-grid').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#EEF7FF]">
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
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#EEC3E8] px-8 text-sm font-medium text-[#3D2930] shadow transition-colors hover:bg-[#EEC3E8]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D2930] disabled:pointer-events-none disabled:opacity-50"
            >
              View Profiles
            </button>
          </div>
          <img
            src="/placeholder.svg"
            width="600"
            height="350"
            alt="Alpha Zeta Members"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:w-[600px] lg:h-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
