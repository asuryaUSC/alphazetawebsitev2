import React from 'react';
import Slider from 'react-slick';

const WhereWeHaveWorked = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800, // Increased speed for smoother scroll
    slidesToShow: 5, // Number of logos shown per slide
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000, // Reduced autoplay speed for smoother transition
    cssEase: 'ease-in-out', // For a smoother scroll transition
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-[#EEF7FF] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]">
            Where We Have Worked
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-4xl md:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto max-w-[700px] text-[#3D2930] md:text-xl lg:text-base xl:text-xl">
            Alpha Zeta members have interned and worked at some of the most prestigious companies in the world.
          </p>
        </div>

        {/* Slider for the logos */}
        <Slider {...settings} className="mt-8">
          {[
            '/landing/companies/apple.png',
            '/landing/companies/bain.png',
            '/landing/companies/evercore.png',
            '/landing/companies/jpm.png',
            '/landing/companies/mckinsey.png',
            '/landing/companies/citibank.png',
            '/landing/companies/lazard.png',
            '/landing/companies/bofa.png',
            '/landing/companies/google.png',
            '/landing/companies/bcg.png',
          ].map((src, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <img
                src={src}
                alt="Company Logo"
                className="logo-image mx-auto object-contain transition-transform transform hover:scale-110 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Styling for consistent logo sizes and smoother transition */}
      <style jsx>{`
        .logo-image {
          height: 60px; /* Adjust the height to make the logos smaller */
          width: auto;
          max-width: 140px;
        }
      `}</style>
    </section>
  );
};

export default WhereWeHaveWorked;
