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
    <main className="px-8 py-12 bg-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-pink-600 text-center mb-10">
        Shop by Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {categories.map((cat, i) => (
         <Link
  key={i}
  href={`/categories/${cat.slug}`}
  className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105"
>
  <Image
    src={cat.image}
    alt={cat.name}
    width={600}
    height={500}
    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h2 className="text-white text-2xl font-bold group-hover:text-pink-300 transition">
      {cat.name}
    </h2>
  </div>
</Link>
        ))}
      </div>
    </main>
  );
}
