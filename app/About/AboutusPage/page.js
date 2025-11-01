"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-3xl p-10 md:p-16 text-center border border-pink-100">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8">
          About <span className="text-gray-800">Our Brand</span>
        </h1>

        {/* Section: Image + Description */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          {/* Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-md border border-pink-100">
            <Image
              src="/makeup-pic.jpg" // ✅ Replace with your real image in /public
              alt="About our brand"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="text-left text-gray-700 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-pink-500">
              Who We Are
            </h2>
            <p className="leading-relaxed mb-4">
              At <span className="font-semibold text-gray-800">Project X Beauty</span>, 
              we believe makeup is more than a look — it’s confidence, creativity, and identity. 
              Our mission is to create beauty products that enhance your natural glow while 
              empowering you to express your authentic self.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-pink-500">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              We blend innovation, sustainability, and natural ingredients to redefine 
              everyday beauty. From skincare to glam sessions, we aim to deliver a flawless 
              experience that makes every customer feel radiant, inside and out.
            </p>
          </div>
        </div>

        {/* Section: Values / Why Choose Us */}
        <div className="border-t pt-8 mt-4">
          <h3 className="text-2xl font-semibold text-pink-600 mb-3">
            Why Choose Us
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>💎 Quality products made with care and natural ingredients.</li>
            <li>💅 A customer-first approach that celebrates all skin tones and styles.</li>
            <li>🌸 A creative team committed to beauty, innovation, and excellence.</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-10">
          <p className="text-gray-700 mb-4">
            Want to learn more or collaborate with us?
          </p>
          <a
            href="/contact"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
