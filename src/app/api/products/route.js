
// import {createRouter} from "next-connect";
// import dbConnect from "@/backend/config/dbConnect";
// import { newProduct } from "@/backend/controller/productControllers";
// import { NextResponse } from "next/server";

// const handler = createRouter();

// dbConnect();

// handler.post(newProduct);

// export default handler;

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// export function middleware(req, ev) {

//     if (req.method === "POST") {
//         return NextResponse.next();
//     }

//     return NextResponse.next();
// }





import {createRouter} from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newProduct } from "@/backend/controller/productControllers";
import { NextResponse } from "next/server";



export async function GET(){
    const handler = createRouter();

    dbConnect();

    handler.post(newProduct);

    return handler;
}

export async function POST(){

    console.log(process.env.MONGO_URI)

    const handler = createRouter();

    dbConnect();

    handler.post(newProduct);
    

    return handler;

}






