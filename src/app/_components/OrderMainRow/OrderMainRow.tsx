import React, { useState } from "react";
import Image from "next/image";
import { Dot } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OrderType } from "@/types/Orders.type";
import OrderCartMainRow from "../OrderCartMainRow/OrderCartMainRow";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShippingAddress } from "@/types/payment.types";
import { Separator } from "@/components/ui/separator";

export default function OrderMainRow({
  order,
  shippingAddress,
}: {
  order: OrderType;
  shippingAddress?: ShippingAddress;
}) {
  const [isProductsHidden, setIsProductsHidden] = useState(true);

  return (
    <Collapsible>
      {/* Order Header Row */}
      <div className="order-container container flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-6 rounded-xl main-card-style border-0 shadow-2xs gap-4">
        {/* Left Side */}
        <div className="left-side flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-start sm:items-center w-full md:w-auto">
          <div className="firstProductImageContainer w-full sm:w-28 md:w-32 flex-shrink-0">
            <Image
              src={order.cartItems[0].product.imageCover}
              alt={order.cartItems[0].product.title}
              width={200}
              height={200}
              className="w-full aspect-square rounded-xl object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg">
              Order #{order.id}
            </h3>
            <p className="flex flex-wrap gap-1 text-sm sm:text-base">
              {order.user.name} <Dot /> {order.user.phone}
            </p>
            <p className="createdAt-Date text-sm text-muted-foreground">
              {new Date(order.createdAt)
                .toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
                .toUpperCase()}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side flex flex-col md:flex-row gap-3 items-stretch md:items-center w-full md:w-auto">
          <div className="flex flex-col items-start md:items-end">
            <h3 className="font-semibold text-base sm:text-lg">
              {order.totalOrderPrice} EGP
            </h3>
            <p className="text-sm text-muted-foreground">
              {order.paymentMethodType}
            </p>
          </div>

          <div className="flex flex-row md:flex-col gap-2 sm:gap-3 items-center">
            <Badge
              variant={order.isPaid ? "success" : "warning"}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
            >
              {order.isPaid ? "Paid" : "Not Paid"}
            </Badge>
            <Badge
              variant={order.isDelivered ? "success" : "danger"}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
            >
              {order.isDelivered ? "Delivered" : "Not Delivered"}
            </Badge>
          </div>

          <div className="w-full md:w-fit">
            <CollapsibleTrigger className="w-full md:w-fit">
              <Button
                variant={isProductsHidden ? "mainBrighter" : "destructive"}
                className="cursor-pointer w-full md:w-fit"
                onClick={() => setIsProductsHidden(!isProductsHidden)}
              >
                {isProductsHidden ? "Show" : "Hide"}
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>
      </div>

      {/* Collapsible Products + Shipping */}
      <CollapsibleContent>
        <div className="container flex flex-col lg:flex-row gap-6 pb-4 mt-3">
          {/* Products List */}
          <div className="flex-1 space-y-4">
            {order.cartItems.map((cartItem) => (
              <OrderCartMainRow key={cartItem._id} cartItem={cartItem} />
            ))}
          </div>

          {/* Shipping Summary */}
          {shippingAddress && (
            <div className="w-full lg:w-1/3">
              <Card className="main-card-style">
                <CardHeader>
                  <CardTitle className="space-y-2">
                    <h2 className="font-semibold">Shipping</h2>
                    <p className="flex text-sm sm:text-base text-muted-foreground flex-wrap gap-1">
                      {shippingAddress.city} <Dot /> {shippingAddress.phone}
                    </p>
                  </CardTitle>
                  <CardDescription>
                    <h2 className="font-semibold">Address</h2>
                    <p>{shippingAddress.details}</p>
                  </CardDescription>
                </CardHeader>
                <Separator />
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">Items</h2>
                    <p className="text-muted-foreground">
                      {order.cartItems.length}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">Shipping</h2>
                    <p className="text-muted-foreground">
                      {order.shippingPrice}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">Tax</h2>
                    <p className="text-muted-foreground">{order.taxPrice}</p>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">Total</h2>
                    <p className="text-muted-foreground">
                      {order.totalOrderPrice}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ms-auto" variant={"main"}>
                    Contact
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
