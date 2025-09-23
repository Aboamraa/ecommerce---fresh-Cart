import React from "react";
import CategoriesSliderClient from "../CategoriesSliderClient/CategoriesSliderClient";
import { getAllCategories } from "@/api/Categories.api";
import { categoryType } from "@/types/Product.types";


export default async function CategoriesSlider() {
  const categories: categoryType[] = await getAllCategories();
  return <CategoriesSliderClient categories={categories} />;
}
