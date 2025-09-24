"use client";
import { clearCart, getCartItems } from "@/api/Cart.api.ts";
import { Button } from "@/components/ui/button";
import {  CartType } from "@/types/Cart.types";
import React, { useEffect, useState } from "react";

import CartItem from "../_components/CartItem/CartItem";
import Loading from "../loading";
import Link from "next/link";
import { toast } from "sonner";
//TODO::Handel Loading state when clear cart
export default function Page() {
  // const [cartProducts, setCartProducts] = useState<
  //   CartProductElementType[] | null
  // >(null);
  const [cart, setCart] = useState<CartType | null | undefined>(null);
  async function handelGetUserCart() {
    try {
      const response = await getCartItems();
      // console.log("cart items response: ", response);

      // setCartProducts(response?.data.products || []);
      setCart(response?.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }

  async function handelClearCart() {
    try {
      const response = await clearCart();

      console.log("Done cleared all products: ", response);
      if (response.message == "success") {
        {
          // setCartProducts([]);
          cart?.products;
          const newCart: CartType = { ...cart!, products: [] };

          setCart(newCart);
          toast.success("Successfully cleared cart");
        }
      }
    } catch (error) {
      console.log("error clearing the cart: ", error);
    }
  }
  useEffect(() => {
    handelGetUserCart();
  }, []);
  if (!cart) {
    return <Loading />;
  } else if (cart.products.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-card ">
        <h3 className="text-4xl text-center font-semibold text-main-green tracking-wide mb-2">
          Add some products to buy
        </h3>
        <Link
          href={"/Products"}
          className="text-blue-400 underline underline-offset-2 transition hover:text-blue-300"
        >
          Buy Some Products
        </Link>
      </div>
    );
  }
  return (
    <div className="container min-h-screen bg-secondary drop-shadow rounded-md p-16 my-10 space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl  tracking-wide mb-3">Shop Cart</h2>
          <h4 className="text-main-green  text-xl ">
            Total Cart Prices:{" "}
            <span className="font-bold">{cart.totalCartPrice}</span> EGP
          </h4>
        </div>
        <div>
          <Button
            variant={"mainBrighter"}
            className="bg-red-500 border-0 text-white hover:bg-red-500/70 disabled:bg-red-300 disabled:text-gray-500"
            onClick={async () => {
              await handelClearCart();
            }}
          >
            Clear Cart
          </Button>
        </div>
      </div>
      {cart?.products.map((cartItem) => {
        return (
          <CartItem
            key={cartItem._id}
            cartItem={cartItem}
            setCartProducts={setCart}
          />
        );
      })}
      <div>
        <Link href={`/Checkout/${cart?._id}`}>
          <Button
            variant={"main"}
            size={"lg"}
            className="hover:bg-white w-full"
          >
            Pay now
          </Button>
        </Link>
      </div>
    </div>
  );
}
