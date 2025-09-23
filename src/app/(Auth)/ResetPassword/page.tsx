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
import { resetPasswordScheme, ResetPasswordType } from "@/scheme/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Lock, LockOpen } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function page() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const form = useForm<ResetPasswordType>({
    defaultValues: {
      email: "",
      newPassword: "",
    },
    resolver: zodResolver(resetPasswordScheme),
  });
  async function handelLogin(values: ResetPasswordType) {
    console.log(values);
    try {
      const response = await axios.request({
        url: "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        method: "Put",
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
          onSubmit={form.handleSubmit(handelLogin)}
          className="flex flex-col gap-6 w-full max-w-lg bg-gray-50 drop-shadow border-2 p-14 pt-10 rounded-xl"
        >
          <h2 className="text-4xl font-normal text-main-green/80 tracking-wider text-center mb-4">
            Reset Password
          </h2>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} className="mb-4" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={isVisiblePassword ? "text" : "password"}
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                        className="absolute inset-y-0  right-4 flex items-center text-gray-500 hover:text-gray-700"
                      >
                        {isVisiblePassword ? (
                          <LockOpen className="w-5 h-5" />
                        ) : (
                          <Lock className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="cursor-pointer "
            variant={"mainBrighter"}
          >
            Reset
          </Button>
        </form>
      </Form>
    </div>
  );
}
