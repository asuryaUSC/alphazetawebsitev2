// components/landing/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-[#E5F2FF] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]">About Us</div>
          <h2 className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-4xl md:text-5xl">
            Empowering Leaders Through Brotherhood
          </h2>
          <p className="max-w-[700px] text-[#3D2930] md:text-xl lg:text-base xl:text-xl">
            Alpha Zeta is a professional fraternity that has been fostering the development of future leaders since
            1920. Our core values of Brotherhood, Integrity, Knowledge, Unity, and Service (BIKUS) guide us in our
            mission to create a lifelong community of professionals dedicated to making a positive impact.
          </p>
        </div>
        <img
          src="/placeholder.svg"
          width="550"
          height="310"
          alt="Alpha Zeta"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </section>
  );
};

export default AboutUs;
