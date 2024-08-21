import Link from 'next/link';

const RecruitmentHeroBanner = () => {
  return (
    <section className="bg-[#EFF7FF] py-20 md:py-32 px-4 md:px-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-[#3D2930] mb-4">Join Alpha Zeta</h1>
      <p className="text-lg md:text-xl text-[#3D2930] mb-8">
        Become part of USC's premier co-ed business society
      </p>
      <Link
        href="https://uoy80cusxjt.typeform.com/to/CxR5QHKw"
        className="inline-flex h-12 items-center justify-center rounded-md bg-[#89CFF0] px-6 py-3 text-md font-medium text-[#3D2930] shadow transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D2930] disabled:pointer-events-none disabled:opacity-50"
        prefetch={false}
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now
      </Link>
    </section>
  );
};

export default RecruitmentHeroBanner;
