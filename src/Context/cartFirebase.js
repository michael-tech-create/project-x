// cartFirebase.js
db
import { db } from "@/config/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const saveUserCart = async (uid, cart) => {
  try {
    const userDoc = doc(db, "carts", uid);
    await setDoc(userDoc, { items: cart }, { merge: true });
  } catch (error) {
    console.error("Error saving cart:", error);
  }
};

export const loadUserCart = async (uid) => {
<<<<<<< HEAD
  try {gt
=======
  try {
>>>>>>> 2f53f8fd479480b8d3cf4c10502c0a4766f875be
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
