import { getRelatedProducts } from "@/api/Product.api";
import { categoryType, ProductType } from "@/types/Product.types";
import React from "react";
import Product from "../Product/Product";

export default async function CategoryProducts({
  category,
}: {
  category: categoryType;
}) {
  const response: ProductType[] = await getRelatedProducts(category._id);
  console.log("category items: ", response);

  return (
    <div className="my-2 py-6">
      <h2 className="font-semibold text-main-green text-2xl tracking-wide">
        {category.slug}
      </h2>
      <div className="container place-items-center grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {response.length == 0 ? (
          <div className="col-span-full shadow p-6 rounded-lg bg-card transition border-2 border-secondary hover:bg-secondary">
            <h2 className="text-xl text-center font-semibold text-main-green-brighter">No Products in this Category</h2>
            <h2 className="text-xl text-center font-semibold text-main-green-brighter">Please check again later</h2>
          </div>
        ) : (
          response.map((product) => {
            return <Product key={product._id} product={product} />;
          })
        )}
      </div>
    </div>
  );
}
