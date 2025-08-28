import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  '/landing/carousel/1.png',
  '/landing/carousel/2.png',
  '/landing/carousel/3.png',
  '/landing/carousel/4.png',
  '/landing/carousel/5.png',
  '/landing/carousel/6.png',
  '/landing/carousel/7.png',
  '/landing/carousel/8.png',
  '/landing/carousel/9.png',
  '/landing/carousel/10.png',
  '/landing/carousel/11.png',
  '/landing/carousel/12.png'
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Adds a fade effect to transitions
    arrows: false, // Hides arrows
  };

  return (
    <div className="relative w-full h-[310px] sm:h-[400px] lg:h-[550px] overflow-hidden rounded-xl">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Brotherhood = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays for each item
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-[#EFF7FF] via-[#E5F2FF] to-[#D6F0FF] py-12 md:py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]">
            Brotherhood
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-4xl md:text-5xl">
            A Lifelong Community of Leaders
          </h2>
          <p className="max-w-[700px] text-[#3D2930] md:text-xl lg:text-base xl:text-xl">
            At Alpha Zeta, brotherhood extends well beyond college—it’s a lifelong bond. Our members cultivate enduring relationships that enhance both personal and professional growth. This close-knit community fosters a strong foundation for meaningful connections, empowering our brothers to thrive throughout their careers and beyond.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-start gap-2">
              <img src="/landing/riley.png" width="80" height="80" alt="Riley Yen" className="rounded-full" />
              <div>
                <p className="text-sm font-bold text-[#3D2930]">Riley Yen</p>
                <p className="text-sm font-semibold text-[#3D2930]">Alumni, Entrepreneur + KPMG Consulting</p>
                <p className="text-sm text-[#3D2930]">
                  "AZ has been the most essential aspect of my college career. Every great memory, from the day I joined to the day I graduated from USC, has stemmed from AZ from the professional development to the beautiful experiences shared with my AZ brothers."
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <img src="/landing/kirsten.png" width="80" height="80" alt="Kirsten Kim" className="rounded-full" />
              <div>
                <p className="text-sm font-bold text-[#3D2930]">Kirsten Kim</p>
                <p className="text-sm font-semibold text-[#3D2930]">Incoming Business Operations Intern @ SpaceX</p>
                <p className="text-sm text-[#3D2930]">
                  "The mentorship, networking opportunities, & guidance AZ offers prepared me with the professional skills to make the most of my internship this past summer."
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel replacing the placeholder */}
        <Carousel />
      </div>
    </section>
  );
};

export default Brotherhood;
