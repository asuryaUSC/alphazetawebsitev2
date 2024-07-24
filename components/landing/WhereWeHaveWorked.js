// components/landing/WhereWeHaveWorked.js
import React from 'react';

const WhereWeHaveWorked = () => {
  return (
    <section className="bg-[#E4F2FF] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <img
          src="/placeholder.svg"
          width="550"
          height="310"
          alt="Where We Have Worked"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-[#EEF7FF] px-3 py-1 text-sm text-[#3D2930]">Where We Have Worked</div>
          <h2 className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-4xl md:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-[700px] text-[#3D2930] md:text-xl lg:text-base xl:text-xl">
            Alpha Zeta members have interned and worked at some of the most prestigious companies in the world,
            showcasing the strength of our professional network and the caliber of our members.
          </p>
          <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-5">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/landing/companies/apple.png"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/landing/companies/bain.png"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/landing/companies/evercore.png"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/landing/companies/jpm.png"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/landing/companies/mckinsey.png"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-5">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/landing/companies/citibank.png"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/landing/companies/lazard.png"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/landing/companies/bofa.png"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/landing/companies/google.png"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/landing/companies/bcg.png"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeHaveWorked;
