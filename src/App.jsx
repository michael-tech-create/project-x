"use client";
import { useEffect, useState } from "react";
import HeroCarousel from "@/components/heroCarusal";

// Corrected API endpoint for DummyJSON products
const PRODUCT_API_URL = "https://dummyjson.com/products?limit=5"; // Fetch 5 products

const App = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(PRODUCT_API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // The DummyJSON products API returns an object with a 'products' key
        const formatBanners = data.products.map((item) => ({
          title: item.title,
          description: item.description,
          ctaLabel: "Shop Now", // Add a hardcoded CTA or get it from your CMS
          ctaLink: `/products/${item.id}`, // Create a dynamic link to the product page
          backgroundImage: item.images[0], // Use the first image from the array
        }));

        setBanners(formatBanners);
      } catch (error) {
        console.error("Failed to fetch banner data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  return (
    <main>
      {loading ? <p>Loading banner...</p> : <HeroCarousel banners={banners} />}
    </main>
  );
};

export default App;
