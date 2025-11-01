"use client";
import { loginWithGoogle } from "@/config/firebaseConfig";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setErrorEmail("Please enter a valid email address");
    } else {
      setErrorEmail("");
    }
  }

  return (
    <main className="bg-pink-100 flex justify-center items-center min-h-screen">
      <div className="bg-white/80 w-[356px] h-[460px] rounded-xl shadow-lg py-6 px-6 backdrop-blur-md">
        <h1 className="text-center text-2xl text-pink-600 font-extrabold mb-4">
          Create Account
        </h1>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <label className="text-sm font-semibold text-gray-700">
            Full Name:
            <input
              type="text"
              className="w-full border border-pink-400 rounded-md h-12 mt-2 px-3 text-gray-800 focus:outline-none focus:border-pink-500 transition"
              placeholder="Enter full name"
            />
          </label>

          <label className="text-sm font-semibold text-gray-700">
            Email:
            <input
              type="email"
              className="w-full border border-pink-400 rounded-md h-12 mt-2 px-3 text-gray-800 focus:outline-none focus:border-pink-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              placeholder="youremail@gmail.com"
            />
            {errorEmail && (
              <p className="text-red-500 text-sm mt-1">{errorEmail}</p>
            )}
          </label>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold w-full h-10 rounded-md shadow-md transition-all duration-300"
          >
            Continue
          </button>
        </form>

        <div className="flex flex-col items-center justify-center mt-6">
          <hr className="w-full border-gray-300 mb-2" />
          <p className="text-center text-gray-700 text-sm">OR</p>
          <p className="text-center text-gray-700 text-sm mb-2">
            Sign up with
          </p>
    <form>
  < button
      type="button"
      onClick={loginWithGoogle}
      className="p-2 rounded-full hover:bg-pink-100 transition"
    >
    <FcGoogle size={28} />
    </button>
  </form>
        </div>
      </div>
    </main>
  );
}
