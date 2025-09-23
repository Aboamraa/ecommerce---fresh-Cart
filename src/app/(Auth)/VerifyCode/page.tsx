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
import {
  loginScheme,
  LoginType,
  verifyCodeScheme,
  VerifyCodeType,
} from "@/scheme/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Lock, LockOpen } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function page() {
  const form = useForm<VerifyCodeType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(verifyCodeScheme),
  });
  async function handelVerifyCode(values: VerifyCodeType) {
    console.log(values);
    try {
      const response = await axios.request({
        url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
        method: "POST",
        data: values,
      });
      console.log(response.data.message);
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message, { position: "top-center" });
      console.log(error, "error...............");
    }
  }
  return (
    <div className="container my-8 h-screen flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handelVerifyCode)}
          className="flex flex-col gap-6 w-full max-w-lg bg-gray-50 drop-shadow border-2 p-20 rounded-xl"
        >
          <h2 className="text-4xl font-normal text-main-green/80 tracking-wider text-center mb-4">
            Verify you code
          </h2>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="cursor-pointer "
            variant={"mainBrighter"}
          >
            Verify
          </Button>
        </form>
      </Form>
    </div>
  );
}
