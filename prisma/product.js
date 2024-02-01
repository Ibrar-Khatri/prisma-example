import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createItem = async ({ title, category, price, description }) => {
  const product = await prisma.product.create({
    data: {
      title,
      category,
      price,
      description,
      details: {
        name: category,
        title,
      },
    },
  });
  return product;
};

export const getAllProduct = async () => {
  const products = await prisma.product.findMany();

  return products;
};
