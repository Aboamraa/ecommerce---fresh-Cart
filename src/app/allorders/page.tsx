"use client";
import { getUserOrders } from "@/api/Orders.api";
import { OrderType } from "@/types/Orders.type";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import OrderMainRow from "../_components/OrderMainRow/OrderMainRow";

export default function page() {
  const [userOrders, setUserOrders] = useState<OrderType[] | null>(null);
  useEffect(() => {
    handelGetOrders();
  }, []);

  async function handelGetOrders() {
    try {
      const response: OrderType[] = await getUserOrders();
      console.log("response of get user orders from the component: ", response);
      setUserOrders(response);
    } catch (error) {
      console.log("error in allOrders component: ", error);
    }
  }

  if (userOrders == null) {
    return <Loading />;
  } else if (userOrders.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-300 ">
        <h3 className="text-4xl font-semibold text-main-green tracking-wide mb-2">
          Place an Order First
        </h3>
        <Link
          href={"/cart"}
          className="text-blue-400 underline underline-offset-2 transition hover:text-blue-300"
        >
          Buy Some Products
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen container my-12 py-8 bg-gray-200 border-[1px] shadow-lg border-gray-300 rounded-lg space-y-6">
        {userOrders.map((order)=>{return <div key={order.id} className="border-b-2 border-gray-400 pb-4">

          <OrderMainRow  order={order} shippingAddress={order.shippingAddress}  />

        </div> 
        })}
        
        {/* <Collapsible>
          <div className="order-container flex justify-between px-8 rounded-xl bg-amber-200">
            <div className="left-side flex gap-4 items-center">
              <div className="firstProductImageContainer w-1/4">
                <Image
                  src={userOrders[0].cartItems[0].product.imageCover}
                  alt={userOrders[0].cartItems[0].product.title}
                  width={200}
                  height={200}
                  className="w-full rounded-xl"
                />
              </div>
              <div>
                <h3 className="font-semibold">Order #{userOrders[0].id}</h3>
                <p className="flex">
                  {userOrders[0].user.name} <Dot /> {userOrders[0].user.phone}
                </p>
                <p className="createdAt-Date">
                  {new Date(userOrders[0].createdAt)
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
                <h3 className="font-semibold">
                  {userOrders[0].totalOrderPrice} EGP
                </h3>
                <p>{userOrders[0].paymentMethodType}</p>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <Badge variant={userOrders[0].isPaid ? "success" : "warning"} className="px-4 py-2">
                  {userOrders[0].isPaid ? "Paid" : "Not Paid"}
                </Badge>
                <Badge variant={userOrders[0].isDelivered ? "success" : "danger"} className="px-4 py-2">
                  {userOrders[0].isDelivered ? "Delivered" : "Not Delivered"}
                </Badge>
              </div>
              <div>
                <CollapsibleTrigger>
                  <Button variant={"mainBrighter"}>Show</Button>
                </CollapsibleTrigger>
              </div>
            </div>
          </div>
          <CollapsibleContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CollapsibleContent>
        </Collapsible> */}
      </div>
      {/* <OrdersTable orders={userOrders} /> */}
    </>
    // <div className="min-h-screen container my-12 p-12 rounded-lg bg-gray-200">
    //   <div className="grid grid-cols-12 bg-green-50 mb-8">
    //           <div className="flex w-full gap-3 product-title-and-image col-span-5">
    //             <h2 className="font-semibold text-main-green ">Product Title</h2>
    //           </div>
    //           <div className="product-code col-span-3 truncate">
    //             <h2 className="font-semibold text-main-green ">Product Code</h2>
    //           </div>
    //           <div className="product-quantity col-span-2">
    //             <h2 className="font-semibold text-main-green ">Product Quantity</h2>
    //           </div>
    //           <div className="product-price col-span-2">
    //             <h2 className="font-semibold text-main-green ">Product Price</h2>
    //           </div>

    //           <div className=" col-span-full w-full border-b-2 border-b-gray-300 h-0.5"></div>
    //         </div>
    //   {userOrders.map((order, index) => {
    //     return (
    //       <div
    //         className={`grid gap-10 grid-cols-12 ${
    //           userOrders.length < index - 1 && "border-b-2 border-b-gray-400"
    //         } mb-6 pb-6`}
    //       >

    //         {order.cartItems.map((cartItem, index) => {
    //           return (
    //             <>
    //               <div className="flex w-full gap-3 product-title-and-image col-span-5">
    //                 <Image
    //                   src={cartItem.product.imageCover}
    //                   alt={cartItem.product.title}
    //                   height={250}
    //                   width={250}
    //                   className="w-1/6"
    //                 />
    //                 <h3>{cartItem.product.title}</h3>
    //               </div>
    //               <div className="product-code col-span-3 truncate">
    //                 {cartItem.product._id}
    //               </div>
    //               <div className="product-quantity col-span-2">
    //                 {cartItem.count}
    //               </div>
    //               <div className="product-price col-span-2">
    //                 {cartItem.price}
    //               </div>
    //               {index < order.cartItems.length - 1 && (
    //                 <div className=" col-span-full w-full border-b-2 border-b-gray-300 h-0.5"></div>
    //               )}
    //             </>
    //           );
    //         })}
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
