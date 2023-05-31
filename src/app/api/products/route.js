import dbConnect from "@/backend/config/dbConnect";
import Product from "@/backend/model/Product";
import { NextResponse } from "next/server";

export async function POST (req) {
  try {
    
    await dbConnect()
    
    const product = new Product({
    "name": "Beats Solo3 Wireless On-Ear Headphones",
    "description": "The Beats Solo3 Wireless On-Ear Headphones are a premium set of headphones that feature Bluetooth connectivity, up to 40 hours of battery life, and on-ear controls for adjusting volume and switching tracks. They have a sleek, stylish design and come in a variety of colors. They also have a built-in microphone for taking calls and use the Apple W1 chip for easy and stable connectivity with Apple devices.",
    "price": 199.95,
    "seller": "Beats by Dr. Dre",
    "stock": 500,
    "category": "Headphones"
  }
  )
  await product.save()
  return NextResponse.json(product, {status: 200})
  } catch(err) {
    console.error(err)
    return NextResponse.json({error: 'test'}, {status: 400})
  }


}
