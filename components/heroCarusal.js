import React, { useState, useEffect } from 'react';
import Hero from './hero';

const HeroCarousel = ({ banners, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (banners && banners.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [banners, interval]);

  if (!banners || banners.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full" style={{ height: '100vh' }}>
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: 1 }}
        >
          <Hero {...banners[currentSlide]} />
        </div>
      </div>
      {banners.length > 1 && (
        <>
          <button className="absolute top-1/2 left-4 z-20 text-white text-3xl font-bold p-0 bg-pink-500 bg-opacity-50 rounded-full w-[40px] h-[40px]" onClick={handlePrev}>
            ‹
          </button>
          <button className="absolute top-1/2 right-4 z-10 py-0 text-white text-3xl font-bold p-0 bg-pink-500 bg-opacity-50 rounded-full w-[40px] h-[40px]" onClick={handleNext}>
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default HeroCarousel;