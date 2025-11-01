import { db } from "@/config/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Save user's cart to Firestore
export const saveUserCart = async (uid, cart) => {
  try {
    const userDoc = doc(db, "carts", uid);
    await setDoc(userDoc, { items: cart }, { merge: true });
  } catch (error) {
    console.error("Error saving cart:", error);
  }
};

// Load user's cart from Firestore
export const loadUserCart = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, "carts", uid));
    if (userDoc.exists()) {
      return userDoc.data().items || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error loading cart:", error);
    return [];
  }
};
