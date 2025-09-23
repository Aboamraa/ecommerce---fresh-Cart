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
    <>
      <Collapsible>
        <div className="order-container flex justify-between px-8 py-6 rounded-xl main-card-style border-0 shadow-2xs">
          <div className="left-side flex gap-4 items-center">
            <div className="firstProductImageContainer w-1/4">
              <Image
                src={order.cartItems[0].product.imageCover}
                alt={order.cartItems[0].product.title}
                width={200}
                height={200}
                className="w-full rounded-xl"
              />
            </div>
            <div>
              <h3 className="font-semibold">Order #{order.id}</h3>
              <p className="flex">
                {order.user.name} <Dot /> {order.user.phone}
              </p>
              <p className="createdAt-Date">
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
          <div className="right-side flex gap-3 items-center">
            <div>
              <h3 className="font-semibold">{order.totalOrderPrice} EGP</h3>
              <p>{order.paymentMethodType}</p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <Badge
                variant={order.isPaid ? "success" : "warning"}
                className="px-4 py-2"
              >
                {order.isPaid ? "Paid" : "Not Paid"}
              </Badge>
              <Badge
                variant={order.isDelivered ? "success" : "danger"}
                className="px-4 py-2"
              >
                {order.isDelivered ? "Delivered" : "Not Delivered"}
              </Badge>
            </div>
            <div>
              <CollapsibleTrigger>
                <Button
                  variant={isProductsHidden ? "mainBrighter" : "destructive"}
                  className="cursor-pointer"
                  onClick={() => {
                    setIsProductsHidden(!isProductsHidden);
                  }}
                >
                  {isProductsHidden ? "Show" : "hide"}
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </div>
        <CollapsibleContent>
          <div className="flex pb-4">
            <div className="space-y-6 container mt-3 flex-4/5">
              {order.cartItems.map((cartItem) => {
                return (
                  <OrderCartMainRow  key={cartItem._id} cartItem={cartItem} />
                );
              })}
            </div>
            <div className="self-end flex-1/5 ms-4">
              <Card className="main-card-style">
                <CardHeader>
                  {shippingAddress && (
                    <>
                      <CardTitle className="space-y-2">
                        <h2 className="font-semibold ">Shipping</h2>
                        <p className="flex text-muted-foreground">
                          {shippingAddress.city} <Dot /> {shippingAddress.phone}
                        </p>
                      </CardTitle>
                      <CardDescription>
                        <h2 className="font-semibold">Address</h2>
                        <p>{shippingAddress?.details}</p>
                      </CardDescription>
                    </>
                  )}
                </CardHeader>
                {/* <div className="w-3/4 bg-gray-200 h-0.5 mx-auto"></div> */}
                <Separator />
                <CardContent>
                  <div>
                    <div className="flex justify-between">
                      <h2 className="font-semibold">items</h2>{" "}
                      <p className="text-muted-foreground">
                        {order.cartItems.length}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <h2 className="font-semibold">Shipping</h2>{" "}
                      <p className="text-muted-foreground">
                        {order.shippingPrice}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <h2 className="font-semibold">Tax</h2>{" "}
                      <p className="text-muted-foreground">{order.taxPrice}</p>
                    </div>
                    <div className="flex justify-between">
                      <h2 className="font-semibold">Total</h2>{" "}
                      <p className="text-muted-foreground">
                        {order.totalOrderPrice}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ms-auto" variant={"main"}>
                    Contact
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
