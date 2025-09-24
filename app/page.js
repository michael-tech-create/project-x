"use client";
import { FaArrowCircleRight } from "react-icons/fa";
import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <div className="relative bg-[url(/ecommerce-bg.png)] bg-cover bg-center sm:h-[60vh] md:h-[70vh] lg:h-[100vh]">
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-12 lg:px-24 space-y-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg animate-fade-in">
            Present
          </h1>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-lg animate-fade-in delay-200">
            Your Product to the World
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in delay-400">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-lg hover:border-3 border-blue-600 transition duration-300 flex items-center gap-2">
              Shop Now 
              <FaArrowCircleRight />
            </button>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="w-3 h-3 border-2 border-white rounded-full animate-bounce"></div>
        </div>
      </div>
      <div className="p-12 pt-3 md:p-12 bg-[url(/grey.jpg)] bg-cover bg-center">
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
    Deals of the Month
  </h2>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Product Card */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <Image
        src="/bag.webp"
        alt="Baggy Jean"
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Stylish Baggy Jean</h3>
        <p className="text-gray-600">$49.99</p>
        <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      </div>
    </div>

    {/* Copy the product card and change details for more items */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <Image
        src="/t-shirt.jpeg"
        alt="Classic T-Shirt"
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Classic T-Shirt</h3>
        <p className="text-gray-600">$19.99</p>
        <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <Image
        src="/sneakers.jpg"
        alt="Sneakers"
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Trendy Sneakers</h3>
        <p className="text-gray-600">$89.99</p>
        <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <Image
        src="/hoodie.jpg"
        alt="Hoodie"
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Cool Hoodie</h3>
        <p className="text-gray-600">$39.99</p>
        <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
    </main>
  );
}
