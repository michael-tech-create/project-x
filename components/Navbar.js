"use client";
import { useState } from "react";
import { GiQueenCrown } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Favourite", href: "/#" },
    { name: "Services", href: "/#" },
    { name: "Pricing", href: "/#" },
    { name: "About Us", href: "/#" },
    { name: "login", href: "/login" }
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Logo Section */}
      <nav className="bg-white py-2 text-sm">
        <div className="flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3 sm:gap-5">
            <h1 className="text-3xl sm:text-4xl font-bold text-pink-500">
              Beauty Queens
            </h1>
            <GiQueenCrown className="text-5xl sm:text-6xl bg-pink-600/70 rounded-md p-2 text-white" />
          </div>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-pink-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </nav>

      {/* Navigation Section */}
      <div className="bg-pink-600/70">
        {/* Desktop Links */}
        <ul className="hidden sm:flex items-center justify-center gap-6 py-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white text-sm border-b border-transparent hover:border-white transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link href="#">
          <li>
            <CgProfile className="text-white text-lg" aria-label="Profile" />
          </li>
          </Link>
        </ul>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="sm:hidden flex flex-col items-center gap-3 py-4 bg-pink-600/90">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-base border-b border-transparent hover:border-white transition-all cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link href="#">

            <li>
              <CgProfile className="text-white text-xl" aria-label="Profile" />
            </li>
            </Link>
          </ul>
        )}
      </div>
    </header>
  );
}
