// "use client";
import React from "react";
import Product from "./../Product/Product";
import { getAllProducts } from "@/api/Product.api";

export default async function AllProducts() {
  const allProducts = await getAllProducts();
  return (
    <>
        <div className="container place-items-center grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {allProducts.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
    </>
  );
}
