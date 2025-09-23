"use server";
import { ProductType } from "@/types/Product.types";

export async function getAllProducts() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/products",
    { next: { revalidate: 300 } }
  );
  const data: ProductType[] = (await response.json()).data;
  // console.log(data);
  return data;
}

export async function getProductDetails(id: string) {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    {
      cache: "reload",
      next: { revalidate: 1000 },
    }
  );
  const { data } = await response.json();
  return data;
}

export async function getRelatedProducts(categoryID: string) {
  try {
    const response = await (
      await fetch(
        `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryID}`
      )
    ).json();
    console.log("Got related Products: ", response);
    return response.data;
  } catch (error) {
    console.log("error in getRelatedProducts: ", error);
  }
}
