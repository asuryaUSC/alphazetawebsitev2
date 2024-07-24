// components/landing/Brotherhood.js
import React from 'react';

const Brotherhood = () => {
  return (
    <section className="bg-[#E4F2FF] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-[#EEF7FF] px-3 py-1 text-sm text-[#3D2930]">Brotherhood</div>
          <h2 className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-4xl md:text-5xl">
            A Lifelong Community of Leaders
          </h2>
          <p className="max-w-[700px] text-[#3D2930] md:text-xl lg:text-base xl:text-xl">
            At the heart of Alpha Zeta is a strong sense of brotherhood that extends beyond the college years. Our
            members form lifelong connections and support each other in their personal and professional endeavors.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-start gap-2">
              <img src="/placeholder.svg" width="80" height="80" alt="Member" className="rounded-full" />
              <div>
                <p className="text-sm font-medium text-[#3D2930]">John Doe</p>
                <p className="text-sm text-[#3D2930]">
                  "Alpha Zeta has been a constant source of support and guidance throughout my career."
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <img src="/placeholder.svg" width="80" height="80" alt="Member" className="rounded-full" />
              <div>
                <p className="text-sm font-medium text-[#3D2930]">Jane Smith</p>
                <p className="text-sm text-[#3D2930]">
                  "The brotherhood in Alpha Zeta is unparalleled. I know I can always count on my brothers."
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/placeholder.svg"
          width="550"
          height="310"
          alt="Brotherhood"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </section>
  );
};

export default Brotherhood;
