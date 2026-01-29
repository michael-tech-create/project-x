"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsInstagram, BsFacebook, BsTwitter, } from "react-icons/bs";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 pt-20 pb-10 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-zinc-800 pb-16">
                    
                    {/* Brand Section - Wide */}
                    <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl font-black tracking-tighter uppercase leading-none"
                        >
                            Beauty <br /> <span className="text-pink-600 italic font-serif">Queen's.</span>
                        </motion.h1>
                        <p className="text-zinc-400 max-w-xs font-light text-lg">
                            Pioneering the evolution of luxury beauty and high-definition artistry since 2026.
                        </p>
                        <div className="flex gap-6 pt-4">
                            {[
                                { icon: <BsInstagram />, link: "#" },
                                { icon: <BsFacebook />, link: "#" },
                                { icon: <BsTwitter />, link: "#" }
                            ].map((social, i) => (
                                <Link key={i} href={social.link}>
                                    <motion.div 
                                        whileHover={{ y: -5, color: "#db2777" }}
                                        className="text-2xl transition-colors text-zinc-300"
                                    >
                                        {social.icon}
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation - Spaced Out */}
                    <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-pink-600 text-xs font-black uppercase tracking-[0.3em] mb-6">Concierge</h3>
                        <ul className="space-y-4 text-zinc-400 font-medium">
                            <li><Link href="/About/AboutusPage" className="hover:text-white transition-all hover:pl-2">Contact Us</Link></li>
                            <li><Link href="/todo-item/todo-list" className="hover:text-white transition-all hover:pl-2">Management</Link></li>
                            <li><Link href="#" className="hover:text-white transition-all hover:pl-2">Shipping & Returns</Link></li>
                            <li><Link href="#" className="hover:text-white transition-all hover:pl-2">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter - Modern Call to Action */}
                    <div className="md:col-span-4 flex flex-col items-center md:items-start">
                        <h3 className="text-pink-600 text-xs font-black uppercase tracking-[0.3em] mb-6">Stay Inspired</h3>
                        <div className="relative w-full">
                            <input 
                                type="email" 
                                placeholder="E-mail Address" 
                                className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-pink-600 transition-colors placeholder:text-zinc-600"
                            />
                            <button className="absolute right-0 top-3 text-pink-600 hover:text-white transition-colors">
                            </button>
                        </div>
                        <p className="mt-4 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Join the Inner Circle</p>
                    </div>
                </div>

                {/* Kinetic Footer Text */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em]">
                    <motion.p 
                        whileHover={{ letterSpacing: "10px" }}
                        className="transition-all duration-700 cursor-default"
                    >
                        &copy; {currentYear} Beauty Queen's
                    </motion.p>
                    <div className="flex gap-10 mt-6 md:mt-0">
                        <span className="hover:text-pink-600 cursor-pointer">Global</span>
                        <span className="hover:text-pink-600 cursor-pointer">London</span>
                        <span className="hover:text-pink-600 cursor-pointer">Paris</span>
                        <span className="hover:text-pink-600 cursor-pointer">Abuja</span>
                    </div>
                </div>
            </div>
            
            {/* Massive Background Text Effect */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none translate-y-10">
                <h2 className="text-[25vw] font-black leading-none whitespace-nowrap">BEAUTY QUEEN'S</h2>
            </div>
        </footer>
    );
}
