"use client";
import { removeCartItem, updateProductCount } from "@/api/Cart.api.ts";
import { Button } from "@/components/ui/button";
import { CartProductElementType, CartType } from "@/types/Cart.types";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

export default function CartItem({
  cartItem,
  setCartProducts,
}: {
  cartItem: CartProductElementType;
  setCartProducts: React.Dispatch<React.SetStateAction<CartType | null | undefined>>;
}) {
  // const cartContext = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false);
  async function handelRemoveProduct(productID: string) {
    try {
      setIsLoading(true);
      const response = await removeCartItem(productID);
      console.log("Success remove item from cart:", response);
      if (response?.status == "success") {
        console.log(response.data);

        toast.success("item removed successfully");
        setCartProducts(response.data);
      } else {
        toast.error("something went wrong please try again later");
      }
      // toast.success(response);
    } catch (error) {
      console.error("Error removing product from cart @cartItems:", error);

      toast.error("Error, Please try gain later");
    } finally {
      setIsLoading(false);
    }
  }

  async function handelUpdateItemCount(productID: string, newCount: number) {
    try {
      setIsLoading(true);
      const response = await updateProductCount(productID, newCount);
      if (response?.status == "success") {
        // setCartProducts(response.data.products);
        setCartProducts(response.data);
      } else {
        console.log("something went wrong in updating product count");
        toast.error("something went wrong please try again later");
      }
    } catch (error) {
      console.error("An error in updating product count: ", error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="cart-products w-full border-b-2 py-8 border-b-gray-300 flex justify-between">
      <div className="left-side flex  gap-4 w-full">
        <div className="w-[12%] object-cover aspect-square rounded-md p-2 border-2 border-main-green/45 shadow-md">
          <Image
            src={cartItem.product.imageCover}
            alt={cartItem.product.title}
            width={250}
            height={250}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <h3 className="text-xl font-normal">{cartItem.product.title}</h3>
          <h4 className="text-main-green">
            Price: {cartItem.price} X {cartItem.count} ={" "}
            <span className="font-bold">{cartItem.price * cartItem.count}</span>{" "}
            EGP
          </h4>
          <button
            onClick={async () => {
              await handelRemoveProduct(cartItem.product.id);
            }}
            className="cursor-pointer group  w-fit disabled:cursor-not-allowed disabled:text-black/20"
            disabled={isLoading}
          >
            <div className="flex items-center w-full  transition group-hover:text-red-500 text-lg">
              <Trash2 className="transition text-main-green group-hover:text-red-500 w-5 h-5 " />
              <p>Remove</p>
            </div>
          </button>
        </div>
      </div>
      <div className="right-side flex justify-evenly items-center gap-2">
        <Button
          onClick={async () => {
            await handelUpdateItemCount(cartItem.product._id, ++cartItem.count);
          }}
          variant={isLoading ? "disabled" : "mainBrighter"}
          className="text-lg font-semibold"
          disabled={isLoading}
        >
          +
        </Button>
        <span className="mx-2 font-semibold">{cartItem.count}</span>
        <Button
          onClick={async () => {
            await handelUpdateItemCount(cartItem.product._id, --cartItem.count);
          }}
          variant={isLoading ? "disabled" : "mainBrighter"}
          className=" text-lg font-semibold"
          disabled={isLoading}
        >
          -
        </Button>
      </div>
    </div>
  );
}
