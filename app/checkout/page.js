"use client";
import { useState } from "react";
import { useCart } from "@/src/Context/cart";

export default function CheckoutPage() {
  const { cart, getTotal } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // ✅ modal toggle

  async function handleCheckout(e) {
    e.preventDefault();

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          address,
          items: cart,
          total: getTotal(),
        }),
      });

      if (res.ok) {
        setShowSuccess(true); // ✅ show modal
      } else {
        alert("❌ Failed to process order");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong while processing your order");
    }
  }

  return (
    <main className="min-h-screen bg-pink-50 flex justify-center items-center p-6 relative">
      {/* ✅ Success Modal */}
      {showSuccess && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center animate-fade-in">
            <h2 className="text-xl font-bold text-pink-600 mb-2">
              🎉 Order Successful!
            </h2>
            <p className="text-gray-600 mb-4">
              Thank you {name}, your order has been placed successfully.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

  
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-pink-600">Checkout</h1>

        <h2 className="text-lg font-semibold mb-2">Your Items</h2>
        <ul className="mb-4">
          {cart.map((item, i) => (
            <li key={i} className="flex justify-between mb-2 text-sm">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>

        <p className="font-bold mb-4">Total: ${getTotal().toFixed(2)}</p>

        <form onSubmit={handleCheckout} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-pink-300 rounded-md p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Delivery Address"
            className="border border-pink-300 rounded-md p-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md font-semibold transition"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </main>
  );
}
