import Link from 'next/link';

const ApplyNow = () => {
  return (
    <section className="bg-[#EFF7FF] py-12 md:py-20 px-4 md:px-6">
      <div className="container text-center mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D2930]">Ready to Join Alpha Zeta?</h2>
        <p className="text-lg md:text-xl text-[#3D2930] mb-8">
          Apply now and become part of USC's premier co-ed business society.
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
      </div>
    </section>
  );
};

export default ApplyNow;
