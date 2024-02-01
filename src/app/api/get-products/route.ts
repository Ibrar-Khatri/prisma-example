import { NextResponse } from "next/server";
import { getAllProduct } from "../../../../prisma/product.js";

export const GET = async (req: Request, res: any) => {
  const product = await getAllProduct();
  console.log("req.body =>>", product);
  return NextResponse.json(
    {
      status: 200,
      product,
    },
    { status: 200 }
  );
};
