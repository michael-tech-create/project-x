"use client";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { FcCustomerSupport } from "react-icons/fc";
import Image from "next/image";
import App from "@/src/App";


export default function HomePage() {
  return (
    <main>
      <App/>
      <div className="relative bg-[url(/ecommerce-bg.png)] bg-cover bg-center h-[70vh] md:h-[85vh] lg:h-[100vh]">
 
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>

      
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-12 lg:px-24 space-y-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-fade-in">
            Create Your Signature Beauty Look
          </h1>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-lg animate-fade-in delay-200">
            Build your perfect makeup kit with our curated collection of essentials.
          </p>

         
          <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in delay-400">
            <button className="px-6 py-3 bg-white hover:bg-pink-100/80  text-pink-600 font-bold rounded-lg shadow-lg transition duration-300">
            Get Started
          </button>

            <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition-all">
           Shop Now
          </button>

          </div>
        </div>

       
        <div className="absolute bottom-6 left-1/2 transform-translate-x-1/2">
          <div className="w-3 h-3 border-2 border-white rounded-full animate-bounce shadow-lg shadow-white/50"></div>
        </div>
      </div>

     
      <div className="p-12 bg-pink-100">
        <h2 className="text-3xl font-bold text-pink-500 text-center mb-8">
          Our Product
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-pink-200/80 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src="/lip-stick.jpg"
              alt="Stylish Baggy Jean"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center ">
              <h3 className="text-lg font-semibold text-gray-800">
                rose lip stick
              </h3>
              <p className="text-gray-600">$9.99</p>
              <button className="mt-3 px-4 py-2 bg-white text-pink-600 rounded-md hover:bg-white transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-pink-200/80 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src="/eye-shadow.png"
              alt="Classic T-Shirt"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Eye-shadow brush
              </h3>
              <p className="text-gray-600">$4.99</p>
              <button className="mt-3 px-4 py-2 bg-white text-pink-600 rounded-md hover:bg-white transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-pink-200/80 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src="/lip combo.webp"
              alt="Trendy Sneakers"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                lip combo
              </h3>
              <p className="text-gray-600">$19.99</p>
              <button className="mt-3 px-4 py-2 bg-white text-pink-600 rounded-md hover:bg-white transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-pink-200/80 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src="/face-scrub.webp"
              alt="Cool Hoodie"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                face scrub
              </h3>
              <p className="text-gray-600">$9.99</p>
              <button className="mt-3 px-4 py-2 bg-white text-pink-600 rounded-md hover:bg-white transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

   
      <div className="w-full h-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-center gap-10 items-center mx-auto">
          {/* Feature 1 */}
          <div className="flex items-center gap-2">
            <FaTruckArrowRight className="text-pink-500 text-3xl" />
            <p className="text-pink-400 text-base">
              24/7 Support - Fast Delivery - Easy Returns
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-2">
            <BsCashCoin className="text-pink-500 text-3xl" />
            <p className="text-pink-500 text-base">
              Pay with bank online or Upon Delivery
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-2">
            <FcCustomerSupport className="text-pink-500 text-3xl" />
            <p className="text-pink-500 text-base">
              Contact us 24/7 at Customer Support
            </p>
          </div>
        </div>
      </div>
      <div className="">

      </div>
    </main>
  );
}
