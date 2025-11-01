"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "@/config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // load user cart from Firestore
        const userCartRef = doc(db, "carts", currentUser.uid);
        const docSnap = await getDoc(userCartRef);
        if (docSnap.exists()) setCart(docSnap.data().items || []);
      }
    });

    return () => unsub();
  }, []);

  const syncCartToFirestore = async (updatedCart) => {
    if (!user) return;
    await setDoc(doc(db, "carts", user.uid), { items: updatedCart });
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      let updatedCart;
      if (existing) {
        updatedCart = prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedCart = [...prev, { ...item, quantity: 1 }];
      }
      syncCartToFirestore(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => {
      const updated = prev.filter((i) => i.name !== name);
      syncCartToFirestore(updated);
      return updated;
    });
  };

  const decreaseQuantity = (name) => {
    setCart((prev) => {
      const updated = prev
        .map((i) =>
          i.name === name ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0);
      syncCartToFirestore(updated);
      return updated;
    });
  };

  const getTotal = () =>
    cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseQuantity, getTotal, user }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
