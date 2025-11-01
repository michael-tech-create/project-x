"use client";
import Image from "next/image";
import { useCart } from "@/src/Context/cart";
import { FaRegArrowAltCircleRight, FaArrowRight, FaStar, FaRegStarHalf, FaSmileBeam } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { FcCustomerSupport } from "react-icons/fc";
import Link from "next/link";


export default function HomePage() {
  const { addToCart } = useCart();

  const products = [
    { name: "Rose Lip Stick", price: 9.99, image: "/lip-stick.jpg" },
    { name: "Eye-shadow Brush", price: 4.99, image: "/eye-shadow.png" },
    { name: "Lip Combo", price: 19.99, image: "/lip combo.webp" },
    { name: "Face Scrub", price: 6.99, image: "/face-scrub.webp" },
    { name: "Dior Powder", price: 6.0, image: "/cosmetic.jpg" },
    { name: "Mac Drop", price: 6.99, image: "/clean.jpg" },
    { name: "Lip Stick", price: 7.0, image: "/lip stick.jpg" },
    { name: "Vector Skin Care", price: 10.99, image: "/vector.jpg" },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* ================= HERO SECTION 1 ================= */}
      <section className="relative bg-[url(/ai-gen.jpg)] bg-cover bg-center h-[90vh] flex items-center justify-start px-10 md:px-20 lg:px-40">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        <div className="relative z-10 max-w-xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Beauty Beyond Limits
          </h1>
          <p className="text-pink-100 text-lg">
            Discover top-quality products for every skin tone and style. Define your own glow.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-md transition">
              Shop Now
            </button>
            <button className="px-6 py-3 bg-white text-pink-600 font-bold rounded-full shadow-md hover:bg-pink-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= HERO SECTION 2 (PROMO) ================= */}
      <section className="bg-pink-50 py-16 text-center px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          Elevate Your Look with Premium Products
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Experience the perfect blend of elegance and care — designed for your confidence, crafted for your beauty.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <Image src="/face-scrub.webp" width={400} height={400} alt="Promo" className="rounded-2xl shadow-lg" />
          <Image src="/lip combo.webp" width={400} height={300} alt="Promo" className="rounded-2xl shadow-lg" />
          <Image src="/vector.jpg" width={400} height={400} alt="Promo" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="p-12 bg-pink-100">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="border border-pink-700/40 bg-pink-200/70 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={400}
                height={400}
                className="w-full h-60 object-cover border-b-2 border-pink-600/30"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                <p className="text-gray-600">${p.price}</p>
                <div className="flex justify-center gap-1 text-yellow-600 my-2">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <FaRegStarHalf />
                </div>
                <button
                  onClick={() => addToCart(p)}
                  className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-md shadow-lg hover:bg-pink-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-pink-50 rounded-2xl shadow-md p-8 hover:scale-105 transition">
            <FaRegArrowAltCircleRight className="text-pink-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable Delivery</h3>
            <p className="text-gray-600">Get your products quickly, safely, and on time anywhere in the world.</p>
          </div>

          <div className="bg-pink-50 rounded-2xl shadow-md p-8 hover:scale-105 transition">
            <BsCashCoin className="text-pink-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Enjoy peace of mind with our encrypted and protected payment options.</p>
          </div>

          <div className="bg-pink-50 rounded-2xl shadow-md p-8 hover:scale-105 transition">
            <FcCustomerSupport className="text-pink-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our beauty experts are always ready to help you find your perfect match.</p>
          </div>
        </div>
      </section>

      {/* ================= ADVERTISING / CALL TO ACTION ================= */}
      <section className="relative bg-[url(/clean.jpg)] bg-cover bg-center h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Glow With Confidence</h2>
          <p className="text-lg mb-6">
            Join thousands of satisfied customers who trust us to bring out their natural radiance.
          </p>
          <Link href="/categories"><button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 font-bold rounded-full shadow-md transition">
            Explore Collection <FaArrowRight className="inline ml-2" />
          </button></Link>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-pink-50 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
              <FaSmileBeam className="text-pink-500 text-4xl mx-auto mb-4" />
              <p className="text-gray-700 mb-4">
                “I love their products! The quality and service are top-notch — I’ll never shop anywhere else.”
              </p>
              <p className="text-pink-600 font-bold">— Happy Customer</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
