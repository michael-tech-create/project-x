"use client";
import Image from "next/image";
import App from "@/src/App";


export default function ServicePages() {
  const services = [
    { title: "Personal Makeup Session", image: "/markup-image1.webp", desc: "Tailored beauty experience for every skin tone." },
    { title: "Bridal Glam Package", image: "/markup-image2.jpg", desc: "Complete makeup artistry for your big day with elegance." },
    { title: "Photo Shoot Makeup", image: "/markup-image3.png", desc: "Professional looks designed to shine under studio lighting." },
    { title: "Editorial Makeup", image: "/markup-image4.jpg", desc: "Creative and bold styles for magazine and runway shoots." },
    { title: "Special Event Makeup", image: "/mark-image5.jpg", desc: "Perfect for birthdays, graduations, and celebrations." },
    { title: "Natural Glow Look", image: "/markup-image6.jpg", desc: "Soft glam designed to enhance your natural features." },
    { title: "Luxury Facials", image: "/markup-image7.jpg", desc: "Pamper your skin with deep hydration and glow treatments." },
    { title: "Skin Tone Consultation", image: "/markup-image8.jpg", desc: "Personalized shade matching for foundation and concealer." },
    { title: "Beauty Product Training", image: "/markup-image9.jpg", desc: "Learn how to use professional makeup tools effectively." },
    { title: "Corporate Makeup Session", image: "/markup-image10.webp", desc: "Confident, clean looks ideal for business portraits." },
  ];

  return (
    <main className="min-h-screen bg-pink-50 py-12">
        <App className="mb-20"/>
      <h1 className="text-4xl font-bold text-pink-600 text-center mb-10">
        Our Services 
      </h1>

      {/* Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] group overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="
              absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4
              opacity-100 md:opacity-0 md:group-hover:opacity-100
              transition-opacity duration-500
            ">
              <h2 className="text-2xl text-white font-semibold mb-2">
                  {service.title}
              </h2>
              <p className="text-pink-100 text-sm">{service.desc}</p>
              <button className="mt-4 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <div className="text-center py-12 bg-pink-100 mt-16">
        <h2 className="text-3xl font-bold text-pink-600">
          Ready to Start Your Beauty Journey?
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Discover your best look with our personalized services. Whether it’s a wedding, shoot, or self-care — we’ve got you covered.
        </p>
        <button className="mt-6 px-10 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-md">
          Book a Session
        </button>
      </div>
    </main>
  );
}
