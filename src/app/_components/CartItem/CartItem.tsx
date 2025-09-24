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
  setCartProducts: React.Dispatch<
    React.SetStateAction<CartType | null | undefined>
  >;
}) {
  const [isLoading, setIsLoading] = useState(false);

  async function handelRemoveProduct(productID: string) {
    try {
      setIsLoading(true);
      const response = await removeCartItem(productID);
      if (response?.status == "success") {
        toast.success("Item removed successfully");
        setCartProducts(response.data);
      } else {
        toast.error("Something went wrong, please try again later");
      }
    } catch (error) {
      console.error("Error removing product from cart:", error);
      toast.error("Error, please try again later");
    } finally {
      setIsLoading(false);
    }
  }

  async function handelUpdateItemCount(productID: string, newCount: number) {
    try {
      if (newCount < 1) return; // prevent negative or zero quantity
      setIsLoading(true);
      const response = await updateProductCount(productID, newCount);
      if (response?.status == "success") {
        setCartProducts(response.data);
      } else {
        toast.error("Something went wrong, please try again later");
      }
    } catch (error) {
      console.error("Error updating product count:", error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="cart-products w-full border-b-2 py-6 border-b-gray-300 flex flex-col md:flex-row md:justify-between gap-6">
      {/* Left Side */}
      <div className="left-side flex flex-col sm:flex-row gap-4 w-full">
        {/* Product Image */}
        <div className="w-full sm:w-[120px] md:w-[12%] aspect-square rounded-md p-2 border-2 border-main-green/45 shadow-md flex-shrink-0">
          <Image
            src={cartItem.product.imageCover}
            alt={cartItem.product.title}
            width={250}
            height={250}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-2 mt-2 sm:mt-0">
          <h3 className="text-lg md:text-xl font-normal">
            {cartItem.product.title}
          </h3>
          <h4 className="text-main-green text-sm md:text-base">
            Price: {cartItem.price} × {cartItem.count} ={" "}
            <span className="font-bold">
              {cartItem.price * cartItem.count}
            </span>{" "}
            EGP
          </h4>
          <button
            onClick={async () => {
              await handelRemoveProduct(cartItem.product.id);
            }}
            className="cursor-pointer group w-fit disabled:cursor-not-allowed disabled:text-black/20"
            disabled={isLoading}
          >
            <div className="flex items-center gap-1 transition group-hover:text-red-500 text-base md:text-lg">
              <Trash2 className="transition text-main-green group-hover:text-red-500 w-5 h-5" />
              <p>Remove</p>
            </div>
          </button>
        </div>
      </div>

      {/* Right Side (Quantity Controls) */}
      <div className="right-side flex items-center gap-2 self-start sm:self-center">
        <Button
          onClick={async () => {
            await handelUpdateItemCount(cartItem.product._id, cartItem.count + 1);
          }}
          variant={isLoading ? "disabled" : "mainBrighter"}
          className="text-lg font-semibold px-3 py-1 min-w-[40px]"
          disabled={isLoading}
        >
          +
        </Button>
        <span className="mx-2 font-semibold text-base md:text-lg">
          {cartItem.count}
        </span>
        <Button
          onClick={async () => {
            await handelUpdateItemCount(cartItem.product._id, cartItem.count - 1);
          }}
          variant={isLoading ? "disabled" : "mainBrighter"}
          className="text-lg font-semibold px-3 py-1 min-w-[40px]"
          disabled={isLoading || cartItem.count <= 1}
        >
          -
        </Button>
      </div>
    </div>
  );
}
