"use client";

import React, { useState } from "react";
import { addProductToCart } from "@/api/Cart.api.ts";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type AddToCartButtonProps = {
  productID: string;
  children?: React.ReactNode;
  className?: string;
  variant?:
    | "default"
    | "main"
    | "mainBrighter"
    | null
    | "ghost"
    | "mainIcon"
    | "plain"
    | "disabled";
  size?: "sm" | "lg" | "icon" | "default" | null;
};

export default function AddToCartButton({
  productID,
  children = "Add to cart",
  className,
  variant = "main",
  size,
}: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handelAddToCart() {
    setIsLoading(true);
    try {
      await addProductToCart(productID);
      toast.success("Product added successfully");
    } catch (error) {
      console.error(
        "We have an error adding the product to cart in AddToCartButton: ",
        error
      );
      if (error instanceof Error) {
        toast.error(error?.message || "Failed to add product");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      onClick={handelAddToCart}
      variant={variant}
      className={className}
      disabled={isLoading}
      size={size}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : children}
    </Button>
  );
}
