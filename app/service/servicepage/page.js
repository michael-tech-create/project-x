"use client";
import React from "react";
import Image from "next/image";
import App from "@/src/App";
import { motion } from "framer-motion";

export default function ServicePages() {
  const services = [
    { title: "Personal Makeup Session", image: "/markup-image1.webp", desc: "Tailored beauty experience for every skin tone." },
    { title: "Bridal Glam Package", image: "/markup-image2.jpg", desc: "Complete makeup artistry for your big day with elegance." },
    { title: "Photo Shoot Makeup", image: "/markup-image3.png", desc: "Professional looks designed to shine under studio lighting." },
    { title: "Editorial Makeup", image: "/markup-image4.jpg", desc: "Creative and bold styles for magazine and runway shoots." },
    { title: "Special Event Makeup", image: "/mark-image5.jpg", desc: "Perfect for birthdays, graduations, and celebrations." },
    { title: "Natural Glow Look", image: "/markup-image6.jpg", desc: "Soft glam designed to enhance your natural features." },
    { title: "Luxury Facials", image: "/markup-image7.jpg", desc: "Pamper your skin with deep hydration and glow treatments." },
    { title: "Skin Tone Consultation", image: "/markup-image8.jpg", desc: "Personalized shade matching for foundation and concealer." },
    { title: "Beauty Product Training", image: "/markup-image9.jpg", desc: "Learn how to use professional makeup tools effectively." },
    { title: "Corporate Makeup Session", image: "/markup-image10.webp", desc: "Confident, clean looks ideal for business portraits." },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 py-12 overflow-x-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        <App className="mb-20"/>
      </motion.div>

      <motion.h1 
        initial={{ letterSpacing: "-5px", opacity: 0 }}
        whileInView={{ letterSpacing: "2px", opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-black text-pink-600 text-center mb-16 uppercase italic"
      >
        Our Services 
      </motion.h1>

      {/* Dynamic Grid Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -15 }}
            className="relative w-full h-[450px] group overflow-hidden rounded-[2.5rem] shadow-2xl bg-zinc-200"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out group-hover:rotate-1"
            />
            
            {/* Interactive Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-end text-center p-10 
              opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500"
            >
              <motion.h2 
                className="text-3xl text-white font-black mb-3 uppercase tracking-tighter"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
              >
                  {service.title}
              </motion.h2>
              <p className="text-pink-200 text-lg font-light mb-6 leading-tight max-w-xs">
                {service.desc}
              </p>
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#db2777" }}
                whileTap={{ scale: 0.9 }}
                className="px-10 py-3 bg-pink-600 text-white font-bold rounded-full shadow-lg border border-pink-400/50"
              >
                Learn More
              </motion.button>
            </motion.div>
            
            {/* Corner Badge */}
            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/30">
              Luxury Artistry
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Animated Call to Action */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center py-24 bg-pink-100 mt-24 mx-6 md:mx-20 rounded-[4rem] border-2 border-pink-200"
      >
        <h2 className="text-4xl md:text-6xl font-black text-pink-600 tracking-tighter">
          Ready to Start Your <br/> Beauty Journey?
        </h2>
        <p className="mt-6 text-gray-600 text-xl max-w-xl mx-auto font-light">
          Discover your best look with our personalized services. Whether it’s a wedding, shoot, or self-care — we’ve got you covered.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(219, 39, 119, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-12 py-5 bg-pink-500 text-white font-black text-xl rounded-full shadow-2xl uppercase tracking-widest"
        >
          Book a Session Now
        </motion.button>
      </motion.div>
    </main>
  );
}
