import Image from "next/image";
import React from "react";
import { ProductType } from "@/types/Product.types";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

export default function ProductDetails({ product }: { product: ProductType }) {
  return (
    <div className="container grid grid-cols-12 gap-20 my-8">
      <div className="Product-image col-span-4">
        <Image
          src={product.imageCover}
          alt={product.title}
          width={300}
          height={300}
          className="w-full rounded-xl border-2 border-main-green/40"
        />
      </div>
      <div className="flex flex-col justify-center col-span-8 gap-6">
        <div>
          <p className="text-3xl font-bold mb-4">{product.title}</p>
          <p className="text-secondary-foreground">{product.description}</p>
        </div>

        <div className="w-full">
          <p className="font-semibold mb-0.5">{product.category.name}</p>
          <p className="mb-6">
            {product.price}
            <span className="text-main-green font-semibold">EGP</span>
          </p>
          <AddToCartButton
            productID={product._id}
            variant={"main"}
            className="w-full"
          >
            Add to cart
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}
