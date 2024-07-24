// components/landing/HeroBanner.js
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <main className="flex-1 bg-[#EFF7FF]">
      <section className="w-full py-8 md:py-12 lg:py-16 xl:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter text-[#3D2930] sm:text-6xl md:text-7xl lg:text-8xl/none">
                Welcome to Alpha Zeta
              </h1>
              <p className="max-w-[700px] text-[#3D2930] md:text-xl">
                USC's Premiere Co-Ed Business Society
              </p>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#EEC3E8] px-6 py-3 text-md font-medium text-[#3D2930] shadow transition-colors hover:bg-[#EEC3E8]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D2930] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Apply Now
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              width={550}
              height={550}
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroBanner;
