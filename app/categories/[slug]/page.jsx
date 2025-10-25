"use client";
import { useCart } from "@/src/Context/cart";
import Image from "next/image";
import Link from "next/link";
import {useParams} from "next/navigation";

export default function CategoryProducts () {
    const {slug} = useParams();
    const {addToCart} = useCart();

    const products = [
        { name: "Rose Lip Stick", price: 6.88, image: "/lip-stick.jpg", category: "lipsticks"
        },
        {name: "Adeni lip stick", price: 5.99, image: "/adbeni.webp", category: "lipsticks"},
        {name: "12 box Korean", price: 8.00, image:"/12box-korean.jpg", category: "lipsticks"},
        {name: "Handy 4 lipStick", price: 4.8, image: "/Handy4-stick.png", category: "lipsticks"},
        {name: "Mac Lipsticks", price: 3.88, image:"/Mac-stick.jpg", category: "lipsticks" },
        {name: "Gold folid", price: 9.99, image: "/gold-folid.jpg", category: "lipsticks"}
    ]; 
        const products2 = [
        //Lipsticks
        { name: "Rose Lip Stick", price: 6.88, image: "/lip-stick.jpg", category: "lipsticks"
        },
        {name: "Adeni lip stick", price: 5.99, image: "/adbeni.webp", category: "lipsticks"},
        {name: "12 box Korean", price: 8.00, image:"/12box-korean.jpg", category: "lipsticks"},
        {name: "Handy 4 lipStick", price: 4.8, image: "/Handy4-stick.png", category: "lipsticks"},
        {name: "Mac Lipsticks", price: 3.88, image:"/Mac-lipstick.jpg", category: "lipsticks" },
        {name: "Gold folid", price: 9.99, image: "/gold-folid.jpg", category: "lipsticks"},
        {name: "lip gloss", price: 1.99, image: "/lip-gloss.jpg", category: "lipsticks"},

        //skincare
        { name: "Dior Powder", price: 10.99, image: "/cosmetic.jpg", category: "skincare" },
        { name: "Eye Shadow Palette", price: 12.5, image: "/eye-shadow.png", category: "skincare" },
        { name: "Foundation Glow", price: 11.99, image: "/foundation.jpg", category: "skincare" },
        {name: "Classic Make Up Classic 6 Face", price: 8.00, image:"/classic Makeup.jpg", category: "skincare"},
        {name: "Black Poudre", price: 4.55, image: "/Blak up poudre.jpg", category:"skincare"},
        {name: "Matte", price: 6.4, image: "/Matte.jpg", category: "makeup"},
        {name: "Milani-Mineral powder", price: 5.99, image: "/Milani-Mineral-Compact.webp", category:"skincare"},

        //Tools
        { name: "Makeup Brush Set eyebrow", price: 8.49, image: "/brush-set.jpg", category: "brushes" },
         { name: "Beauty Blender", price: 4.99, image: "/blender.jpg", category: "brushes" },
         {name: "flomar makeup brush", price: 7.34, image: "/flomar.jpg", category: "brushes"},
         {name: "inglot makeup brush", price: 6.99, image: "/inglot.jpg", category: "brushes"},
         {name: "nana makeup brush", price: 7.44, image: "/nana.jpg", category: "brushes"},
         { }
  ];

   
    const filtered = products2.filter(p => p.category === slug);
    return (
        <main className="px-8 py-12 bg-pink-50 min-h-screen">
            <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
                {slug} collection
            </h1>
            {filtered.length === 0 ? (
                <p className="text-center text-gray-600">No Products found in this category</p>
            
            ): (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filtered.map ((p,i)=> (
                        <div key={i}
                        className="bg-white rounded-lg shadow-lg transition-transform duration-300 border border-pink-200 "> 
                        <Image
                        src={p.image}
                        alt={p.name}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover rounded-t-lg"
              />    
                        <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                <p className="text-pink-600 font-medium mt-1">${p.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(p)}
                  className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md shadow-md transition"
                >
                  Add to Cart
                </button>
              </div>


                        </div>
                    ))}
                    
                </div>
            ) }
 


        </main>
    );
}