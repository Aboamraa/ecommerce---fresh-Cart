"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { checkoutScheme, checkoutType } from "@/scheme/checkout.scheme";
import { cashPayment, onlinePayment } from "@/api/Payment.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { OnlinePaymentResponseType } from "@/types/payment.types";

export default function Checkout() {
  const [isCashPayment, setIsCashPayment] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { id: cartId }: { id: string } = useParams();
  // console.log(cartId);

  const myForm = useForm<checkoutType>({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    mode: "all",
    resolver: zodResolver(checkoutScheme),
  });
  async function handelPayment(values: checkoutType) {
    setIsLoading(true);
    if (isCashPayment) {
      await handelCashPayment(values);
    } else {
      await handelOnlinePayment(values);
    }
    setIsLoading(false);
  }
  async function handelCashPayment(values: checkoutType) {
    console.log(values);
    try {
      const response = await cashPayment(`${cartId}`, values);
      if (response?.status == "200" || response?.status == "201") {
        toast.success("Order Paid Successfully");
      }
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  async function handelOnlinePayment(values: checkoutType) {
    console.log(values);
    try {
      const response: OnlinePaymentResponseType = await onlinePayment(
        `${cartId}`,
        values
      );
      console.log("response from handel online payment: ", response);
      if (response.status == "success") {
        window.location.href = response.session.url;
      }
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }
  return (
    <div className="container h-screen bg-gray-100 rounded-lg p-12 my-8">
      <Form {...myForm}>
        <form
          onSubmit={myForm.handleSubmit(handelPayment)}
          className="space-y-4"
        >
          <FormField
            control={myForm.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input
                    className="border-2 border-gray-300"
                    placeholder="Details"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={myForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input placeholder="Phone number" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={myForm.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input placeholder="City" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant={"mainBrighter"}
              className="border-0"
              type="submit"
              onClick={() => setIsCashPayment(true)}
              disabled={isLoading}
            >
              Cash Payment
            </Button>
            <Button
              variant={"destructive"}
              className="bg-red-600 border-0 rounded-lg text-white hover:bg-red-600/70 disabled:bg-red-300 disabled:text-gray-500 disabled:cursor-not-allowed cursor-pointer"
              type="submit"
              onClick={() => setIsCashPayment(false)}
              disabled={isLoading}
            >
              Online Payment
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
