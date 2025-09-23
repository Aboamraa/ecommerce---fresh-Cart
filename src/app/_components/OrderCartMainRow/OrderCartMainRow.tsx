import { CartProductElementType } from "@/types/Cart.types";
import Image from "next/image";
import React from "react";

export default function OrderCartMainRow({cartItem}:{cartItem:CartProductElementType}) {
  return (
    <div className="order-container flex justify-between px-8 py-6 rounded-xl bg-slate-50">
      <div className="left-side flex gap-4 items-center">
        <div className="firstProductImageContainer w-1/5">
          <Image
            src={cartItem.product.imageCover}
            alt={cartItem.product.title}
            width={200}
            height={200}
            className="w-full  aspect-square rounded-xl "
          />
        </div>
        <div>
          <h3 className="font-semibold truncate">{cartItem.product.title}</h3>
          <p className="text-lg">
            Qty:{cartItem.count}
          </p>
        </div>
      </div>
      <div className="right-side flex gap-3 items-center">
        <div>
          <h3 className="font-semibold">{cartItem.price} EGP</h3>
        </div>
      </div>
    </div>
  );
}
