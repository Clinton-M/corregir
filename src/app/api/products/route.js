import dbConnect from "@/backend/config/dbConnect";
import Product from "@/backend/model/Product";
import { NextResponse } from "next/server";

export async function POST (req) {
  const body = await req.json()
  try {
    await dbConnect()
    
    const product = new Product(body)
    console.log({product})
    await product.save()
    return NextResponse.json(product, {status: 200})
  } catch(err) {
    console.error(err)
    return NextResponse.json({error: 'test'}, {status: 400})
  }


}

export const config = {
  api: {
    bodyParser: true
  }
}