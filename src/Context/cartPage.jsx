"use client";
import Image from "next/image";
import { useCart } from "./cart";

export default function CartPage() {
  const { cart, addToCart, getTotal, removeFromCart, decreaseQuantity } = useCart();

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-pink-600 text-center mb-8">
        Your Shopping Cart 🛍️
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-5xl mx-auto space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-lg shadow-md p-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-pink-600 font-medium">${item.price}</p>
                </div>
              </div>

              {/* Quantity Control */}
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.name)}
                  className="px-3 py-1 bg-pink-200 text-pink-700 rounded-md hover:bg-pink-300"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 bg-pink-200 text-pink-700 rounded-md hover:bg-pink-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="text-right mt-8 text-2xl font-bold text-pink-600">
            Total: ${getTotal().toFixed(2)}
          </div>

          <div className="text-center mt-6">
            <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-md transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
