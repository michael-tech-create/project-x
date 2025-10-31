"use client";
import Link from "next/link";
import Image from "next/image";

export default function CategoriesPage() {
  const categories = [
    { name: "Lipsticks", slug: "lipsticks", image: "/lip-stick.jpg" },
    { name: "Brushes", slug: "brushes", image: "/eye-shadow.png" },
    { name: "Skincare", slug: "skincare", image: "/face-scrub.webp" },
  ];

  return (
    <main className="flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-24 bg-gradient-to-b from-pink-50 to-pink-100 min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-4 drop-shadow-md">
          Shop by Category
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Discover beauty essentials handpicked for your unique style — from bold lipsticks to glowing skincare.
        </p>
      </div>

      {/* Centered Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center max-w-6xl">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={`/categories/${cat.slug}`}
            className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-pink-300/50"
          >
            {/* Image */}
            <Image
              src={cat.image}
              alt={cat.name}
              width={500}
              height={400}
              className="w-full h-[22rem] object-cover transition-transform duration-700 group-hover:scale-110 rounded-3xl"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center">
              <h2 className="text-white text-3xl font-bold mb-8 group-hover:text-pink-300 transition-colors duration-300 drop-shadow-lg">
                {cat.name}
              </h2>
            </div>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-pink-400 transition-all duration-300"></div>
          </Link>
        ))}
      </div>
    </main>
  );
}
