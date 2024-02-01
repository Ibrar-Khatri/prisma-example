import { NextResponse } from "next/server";
import { createItem } from "../../../../prisma/product.js";

export const POST = async (req: Request, res: any) => {
  const { ...body } = await req.json();

  const product = await createItem(body);
  console.log("req.body =>>", product);
  return NextResponse.json(
    {
      status: 200,
      messgae: "Product created successfully",
    },
    { status: 200 }
  );
};
