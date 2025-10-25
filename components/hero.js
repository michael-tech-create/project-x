"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = ({ 
  title, 
  description, 
  ctaLabel, 
  ctaLink, 
  backgroundImage 
}) => {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white bg-cover bg-center h-[60vh] sm:h-[80vh] rounded-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          {title}
        </h1>

        <p className="text-lg sm:text-xl mb-6 text-gray-200">
          {description}
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={ctaLink}
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
        >
          {ctaLabel}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
