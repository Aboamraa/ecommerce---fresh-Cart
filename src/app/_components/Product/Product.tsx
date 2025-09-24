import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { ProductType } from "@/types/Product.types";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

export default function Product({ product }: { product: ProductType }) {
  return (
    <>
      <Card className="w-full group/card">
        <CardHeader>
          <div className="image-cover relative group/image">
            <Image
              src={product.imageCover}
              width={500}
              height={500}
              alt="product-dev"
              className="w-full rounded-xl transition object-cover group-hover/card:scale-110 "
            />
            <div className="overlay flex  justify-center items-center gap-4 absolute inset-0 scale-0 group-hover/image:bg-black/40 group-hover/image:scale-100  transition duration-500 rounded-xl">
              <AddToCartButton
                productID={product._id}
                variant={null}
                className="!text-gray-100 hover:!text-main-green transition cursor-pointer w-fit"
                size={"icon"}
              >
                <span>
                  <ShoppingCart
                    size={28}
                    className="!text-gray-100 hover:!text-main-green transition cursor-pointer"
                  />
                </span>
              </AddToCartButton>
              <Link href={`/Products/${product.id}`}>
                <Eye
                  size={28}
                  className="text-gray-100 hover:text-main-green transition cursor-pointer"
                />
              </Link>
              <Heart
                size={28}
                className="text-gray-100 hover:text-main-green transition cursor-pointer"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-main-green font-semibold">
            {product.category.name}
          </h2>
          <h3 className="truncate">{product.title}</h3>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full">
              <span>{product.price} EGP</span>
              <span className="flex items-baseline gap-0.5 text-gray-500">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {product.ratingsAverage}
              </span>
            </div>
            {/* <ClientButton
              onClick={() => {
                handelAddToCart(product._id);
              }}
              variant={"main"}
              className="mt-4"
            >
              Add to cart
            </ClientButton> */}
            {/* <Button variant={"main"} className="mt-4 ">
              Add to cart
            </Button> */}
            <AddToCartButton
              variant={"main"}
              className="mt-4 w-full"
              productID={product._id}
            >
              Add to cart
            </AddToCartButton>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
