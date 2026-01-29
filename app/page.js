"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useCart } from "@/src/Context/cart";
import { FaArrowRight, FaStar, FaSmileBeam } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  // Scroll Progress for Parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transformations
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const products = [
    { name: "Rose Lip Stick", price: 9.99, image: "/lip-stick.jpg" },
    { name: "Eye-shadow Brush", price: 4.99, image: "/eye-shadow.png" },
    { name: "Lip Combo", price: 19.99, image: "/lip combo.webp" },
    { name: "Face Scrub", price: 6.99, image: "/face-scrub.webp" },
  ];

  return (
    <main ref={containerRef} className="bg-white text-gray-800 overflow-hidden">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-50">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="relative z-10 text-center space-y-6 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-black text-white tracking-tighter"
          >
            GLOW <span className="text-pink-500 italic">UP.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-pink-100 text-xl font-light tracking-widest uppercase"
          >
            Science Meets High-Fashion Skincare
          </motion.p>

         <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}>
            <button className="mt-8 px-12 py-4 bg-white text-black font-bold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-500">
              EXPLORE SHOP
            </button>
          </motion.div>
          
        </div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <div className="bg-black py-6 border-y border-pink-500/30 overflow-hidden flex">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 text-pink-500 font-black text-3xl uppercase italic whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              NEW ARRIVALS <FaStar className="text-white" /> 20% OFF FIRST ORDER
            </span>
          ))}
        </motion.div>
      </div>

      {/* 3. PRODUCT GRID */}
      <section className="py-32 px-10 bg-zinc-50 relative">
        <motion.div style={{ y: yText }} className="absolute top-0 right-10 text-[15vw] font-black text-pink-100 -z-0 opacity-50 select-none">
          BEAUTY
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-[400px] overflow-hidden rounded-[2rem] shadow-xl bg-gray-200">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill 
                  className="object-cover transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => addToCart(p)}
                    className="px-6 py-3 bg-white text-black font-bold rounded-full active:scale-90"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center px-2">
                <h3 className="font-bold text-xl">{p.name}</h3>
                <span className="text-pink-600 font-black">${p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row h-screen bg-black overflow-hidden">
        <div className="w-full md:w-1/2 relative">
          <motion.div style={{ scale: heroScale }} className="w-full h-full">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
              <source src="/mview.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex flex-col justify-center p-12 md:p-24 bg-zinc-100 text-black"
        >
          <h2 className="text-6xl font-black mb-6 tracking-tighter leading-none">
            SKINCARE <br /> <span className="text-pink-500 italic font-serif">EVOLVED.</span>
          </h2>
          <p className="text-zinc-500 text-xl font-light mb-8 max-w-md">
            The next generation of luminescence has arrived. Formulated for the bold, curated for the visionary.
          </p>
          <Link href="/categories" className="flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center group-hover:bg-black transition-all">
              <FaArrowRight className="group-hover:text-white transition-colors" />
            </div>
            <span className="text-2xl font-black uppercase tracking-tight">View Lookbook</span>
          </Link>
        </motion.div>
      </section>


  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
  {/* Background Video with Parallax Scale */}
  <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
    {/* Using your YouTube background logic or local mp4 */}
    <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.45]">
      <source src="/person-video.mp4" type="video/mp4" />
    </video>
  </motion.div>

  {/* Overlay Gradient for that "Vogue" depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-0" />

  <div className="relative z-10 text-center max-w-5xl px-6">
    {/* Animated Sub-headline */}
    <motion.span 
      initial={{ opacity: 0, tracking: "0.5em" }}
      animate={{ opacity: 1, tracking: "0.2em" }}
      transition={{ duration: 1.5 }}
      className="text-pink-400 font-medium text-sm md:text-base uppercase mb-4 block"
    >
      Est. 2026 — The Art of Radiance
    </motion.span>

    {/* Main Headline with Split Stagger */}
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "circOut" }}
      className="text-6xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8"
    >
      TIMELESS <br /> 
      <span className="text-pink-500 italic font-serif">Aura.</span>
    </motion.h1>
    
    {/* Long-form Storytelling Text */}
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10"
    >
      Beauty isn’t just a moment; it’s a legacy. We’ve spent years perfecting the 
      delicate balance between dermatological science and the raw, uninhibited 
      expression of artistry. From the first touch of silk-finish foundation to 
      the final stroke of rose-pigmented lip couture, your skin becomes our 
      finest canvas. Discover a glow that doesn't just fade—it evolves.
    </motion.p>

    {/* Dynamic Action Button with Link */}
    <Link href="/shop" className="inline-block">
      <motion.div 
        initial={{ scale: 0, rotate: -10 }} 
        animate={{ scale: 1, rotate: 0 }} 
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button className="group relative px-16 py-5 bg-pink-600 text-white font-black text-lg rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(219,39,119,0.4)]">
          <span className="relative z-10 flex items-center gap-3">
            ENTER THE COLLECTION <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </span>
          {/* Animated background fill on hover */}
          <motion.div 
            className="absolute inset-0 bg-white"
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.4 }}
          />
          <style jsx>{`
            button:hover span { color: black; }
          `}</style>
        </button>
      </motion.div>
    </Link>
  </div>

  {/* Aesthetic Scroll Indicator */}
  <motion.div 
    animate={{ y: [0, 15, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
  >
    <span className="text-[10px] text-white/50 uppercase tracking-[0.3em] rotate-90 mb-4">Scroll</span>
    <div className="w-[1px] h-12 bg-gradient-to-b from-pink-500 to-transparent" />
  </motion.div>
      </section>
      
      {/* ================= 4. REDESIGNED ARTISTRY AD SECTION ================= */}
<section className="relative min-h-screen bg-white flex flex-col md:flex-row items-stretch overflow-hidden">
  
  {/* LEFT SIDE: Visual with Artistic Reveal */}
  <div className="w-full md:w-[45%] h-[60vh] md:h-auto relative overflow-hidden group">
    <motion.div 
      initial={{ scale: 1.3, filter: "sepia(100%)" }}
      whileInView={{ scale: 1, filter: "sepia(0%)" }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full"
    >
      <Image 
        src="/platte.jpg" 
        fill 
        alt="The Masterpiece" 
        className="object-cover transition-transform duration-[4s] group-hover:scale-105" 
      />
    </motion.div>
    
    {/* Refined floating badge */}
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="absolute bottom-10 right-10 bg-black/80 backdrop-blur-xl px-8 py-3 rounded-none border-l-4 border-pink-500 shadow-2xl"
    >
      <span className="text-white text-[10px] font-bold tracking-[0.5em] uppercase italic">
        Signature Collection
      </span>
    </motion.div>
  </div>

  {/* RIGHT SIDE: Narrative Content */}
  <div className="w-full md:w-[55%] flex flex-col justify-center p-8 md:p-24 bg-white relative">
    
    {/* Decorative background text changed to "LEGACY" */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.03, scale: 1 }}
      className="absolute top-10 right-[-5%] text-[15vw] font-serif italic text-black pointer-events-none select-none leading-none"
    >
      Legacy
    </motion.div>

    <div className="relative z-10 space-y-10">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-pink-500 font-black tracking-[0.4em] uppercase text-xs mb-6 block">
          Behind the Velvet Curtain
        </span>
        <h2 className="text-5xl md:text-8xl font-black text-zinc-900 leading-[0.85] tracking-tighter">
          AGELESS <br /> 
          <span className="relative font-serif italic text-pink-600">
            Artistry.
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "110%" }}
              transition={{ delay: 1, duration: 1.2 }}
              className="absolute -bottom-1 -left-2 h-[2px] bg-zinc-900 -z-10"
            />
          </span>
        </h2>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-zinc-500 text-lg md:text-xl max-w-lg font-light leading-[1.8] italic"
      >
        "Every face is a silent narrative waiting for the right light. We don't just 
        apply pigment; we curate a custom luminescence that mirrors your inner rhythm. 
        It’s where high-definition precision meets the raw soul of beauty."
      </motion.p>

      {/* Re-styled Link Interaction */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
  <Link href="/categories" className="group inline-flex items-center gap-8">
    <div className="relative">
      <motion.div 
        whileHover={{ rotate: 90 }}
        className="w-20 h-20 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-pink-500 transition-all duration-700"
      >
        <FaArrowRight className="text-zinc-400 group-hover:text-pink-600 text-2xl transition-all" />
      </motion.div>
      <div className="absolute inset-0 rounded-full bg-pink-500/5 group-hover:scale-150 transition-transform duration-1000" />
    </div>

    <div className="flex flex-col">
      {/* REMOVED the nested <Link> here */}
      <span className="text-2xl font-black uppercase tracking-widest text-zinc-900">
        The Gallery
      </span>
      <span className="text-[10px] text-pink-500 font-bold uppercase tracking-widest">
        View Our Work
      </span>
    </div>
  </Link>
      </motion.div>
    </div>
  </div>
</section>

{/* ================= 4. REDESIGNED MOSAIC ARTISTRY SECTION ================= */}
<section className="relative min-h-screen bg-[#fafafa] py-24 overflow-hidden">
  
  <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20">
    
    {/* LEFT SIDE: 4-Image Mosaic Grid */}
    <div className="w-full lg:w-1/2 grid grid-cols-12 grid-rows-12 gap-4 h-[700px] md:h-[900px]">
      
      {/* Image 1: Main Portrait */}
      <motion.div 
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="col-span-8 row-span-8 relative overflow-hidden group"
      >
        <Image src="/beauty1.jpg" fill alt="Texture 1" className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-900/10 mix-blend-multiply" />
      </motion.div>

      {/* Image 2: Macro Texture */}
      <motion.div 
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="col-span-4 row-span-5 col-start-9 row-start-2 relative overflow-hidden"
      >
        <Image src="/view.jpg" fill alt="Texture 2" className="object-cover" />
      </motion.div>

      {/* Image 3: Product Detail */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="col-span-5 row-span-4 col-start-2 row-start-9 relative overflow-hidden shadow-2xl"
      >
        <Image src="/angle.jpg" fill alt="Texture 3" className="object-cover" />
      </motion.div>

      {/* Image 4: The Glow */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="col-span-6 row-span-4 col-start-7 row-start-7 relative overflow-hidden border-[12px] border-white z-10"
      >
        <Image src="/spa.jpg" fill alt="Texture 4" className="object-cover" />
      </motion.div>

    </div>

    {/* RIGHT SIDE: Kinetic Storytelling */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
      
      {/* Large JS-Floating Background Text */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute -top-10 right-0 text-[18vw] font-black text-pink-500/5 pointer-events-none select-none italic"
      >
        MUSE
      </motion.div>

      <div className="space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 border border-pink-200 text-pink-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-8">
            The Masterclass Collection
          </span>
          
          <h2 className="text-6xl md:text-[7rem] font-black text-zinc-900 leading-[0.8] tracking-tighter">
            SCULPTING <br /> 
            <span className="italic font-serif text-pink-600">Luminescence.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative pl-12 border-l-2 border-pink-100"
        >
          <p className="text-zinc-500 text-xl md:text-2xl font-light leading-relaxed mb-6">
            Makeup is no longer a mask; it is a <span className="text-zinc-900 font-medium italic">reactive medium</span>. 
            By blending raw earth minerals with hyper-fluid pigments, we’ve created a formula 
            that breathes with you. 
          </p>
          <p className="text-zinc-400 text-lg">
            Our signature 4-layer technique ensures light is captured, reflected, and 
            diffused perfectly across every unique contour of your legacy.
          </p>
        </motion.div>

        {/* Improved Call to Action */}
        <motion.div 
          whileHover={{ x: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/categories" className="inline-flex items-center gap-10 group">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border border-zinc-900 flex items-center justify-center group-hover:bg-zinc-900 transition-all duration-500">
                <FaArrowRight className="text-zinc-900 group-hover:text-white text-3xl group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute inset-0 rounded-full border border-pink-400/30 -z-10" 
              />
            </div>
            
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
</section>


      {/* 5. DRAGGABLE REVIEWS */}
      <section className="py-32 bg-white overflow-hidden">
        <h2 className="text-center text-3xl font-black mb-16 uppercase tracking-widest text-pink-600">Real Glows</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              className="w-72 p-8 bg-zinc-50 rounded-[2rem] shadow-lg cursor-grab active:cursor-grabbing border border-zinc-100"
            >
              <FaSmileBeam className="text-pink-500 text-3xl mb-4" />
              <p className="text-zinc-600 italic">"Literally transformed my routine. The Lip Stick stays on all day!"</p>
              <p className="mt-4 font-bold text-pink-600">@USER_REVIEW</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
