import { CartProductElementType } from "@/types/Cart.types";
import Image from "next/image";
import React from "react";

export default function OrderCartMainRow({
  cartItem,
}: {
  cartItem: CartProductElementType;
}) {
  return (
    <div className="order-container flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-6 px-4 sm:px-8 py-4 sm:py-6 rounded-xl main-card-style">
      {/* Left side (image + info) */}
      <div className="left-side flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center w-full sm:w-auto">
        {/* Image */}
        <div className="firstProductImageContainer w-full sm:w-24 md:w-28 lg:w-32 flex-shrink-0">
          <Image
            src={cartItem.product.imageCover}
            alt={cartItem.product.title}
            width={200}
            height={200}
            className="w-full aspect-square rounded-xl object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <h3 className="font-semibold truncate max-w-[200px] sm:max-w-[250px]">
            {cartItem.product.title}
          </h3>
          <p className="text-base sm:text-lg">Qty: {cartItem.count}</p>
        </div>
      </div>

      {/* Right side (price) */}
      <div className="right-side flex sm:flex-col justify-between sm:justify-center items-start sm:items-end w-full sm:w-auto">
        <h3 className="font-semibold text-base sm:text-lg">
          {cartItem.price} EGP
        </h3>
      </div>
    </div>
  );
}
