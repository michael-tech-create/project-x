"use client";
import { auth, logoutUser } from "@/config/firebaseConfig";
import Image from "next/image";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <main className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">No user logged in.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-l from-indigo-100 to-white">
      <div className="flex flex-col items-center w-full md:w-[356px] h-[360px] p-4 shadow-lg rounded-lg bg-white">
        {user.photoURL && (
          <Image
            width={100}
            height={100}
            src={user.photoURL}
            alt="User photo"
            className="rounded-full mb-4"
          />
        )}

        <div className="w-full text-center mb-10">
          <hr className="border-gray-300 mb-4" />
          <p className="text-lg font-semibold mb-8">{user.displayName}</p>
          <hr className="border-gray-300 mb-4" />
          <p className="text-gray-700 text-sm">{user.email}</p>
        </div>

        <Button onClick={logoutUser} variant="contained" color="error" fullWidth>
          Log Out
        </Button>
      </div>
    </main>
  );
}
