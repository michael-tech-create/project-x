"use client";
import { useState } from "react";
import { GiQueenCrown } from "react-icons/gi";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { useCart } from "@/src/Context/cart";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {cart} = useCart();
  const totalItems = cart.reduce((sum, item)=> sum + item.quantity, 0);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "Services", href: "/service/servicepage" },
    { name: "Categories", href: "/categories" },
    { name: "About Us", href: "/About/AboutusPage" },
    { name: "login", href: "/auth/login" }
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
            className="sm:hidden text-pink-600"
           
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
          <Link href="/dashboard/profile">
          <li>
            <CgProfile className="text-white text-lg"  />
          </li>
          </Link>
          <Link
          href="/cart"
          className="relative flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
        ><CgShoppingCart size={20}/>
        {totalItems > 0 && (<span className="absolute -top-2 -right-2 bg-white text-pink-600 texxt-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>)}
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
            <Link href="/dashoard/profile">

            <li>
              <CgProfile className="text-white text-xl" aria-label="Profile" />
            </li>
            </Link>
             <Link
          href="/cart"
          className="relative flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
        ><CgShoppingCart size={20}/>
        {totalItems > 0 && (<span className="absolute -top-2 -right-2 bg-white text-pink-600 texxt-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>)}
        </Link>
            
          </ul>
        )}
      </div>
    </header>
  );
}
