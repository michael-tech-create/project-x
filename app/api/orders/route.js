import { db } from "@/config/firebaseAdmin";

export async function POST(req) {
  try {
    const { name, address, items, total } = await req.json();

    const docRef = await db.collection("orders").add({
      name,
      address,
      items,
      total,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ id: docRef.id }), { status: 200 });
  } catch (err) {
    console.error("Error saving order:", err);
    return new Response(JSON.stringify({ error: "Failed to save order" }), { status: 500 });
  }
}
