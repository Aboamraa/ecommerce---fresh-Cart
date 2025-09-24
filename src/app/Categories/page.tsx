import { getAllCategories } from "@/api/Categories.api";
import { categoryType } from "@/types/Product.types";
import React from "react";
import ProductsSwiper from "../_components/ProductsSwiper/ProductsSwiper";
import CategoryProducts from "../_components/CategoryProducts/CategoryProducts";
import { Separator } from "@/components/ui/separator";

export default async function page() {
  // has 10 categories
  const response: categoryType[] = await getAllCategories();
  console.log("response from categories page", response);

  return (
    <div className="container min-h-screen">
      {response.map((category, index) => {
        return (
          <div
            key={category._id}
            className={`${
              response.length - 1 !== index &&
              "border-b-2 border-b-foreground/30"
            } `}
          >
            <CategoryProducts category={category} />
          </div>
        );
      })}
    </div>
  );
}
