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
import { registerScheme, RegisterType } from "@/scheme/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Lock, LockOpen } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Page() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const form = useForm<RegisterType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerScheme),
  });
  async function handelRegister(values: RegisterType) {
    console.log(values);
    try {
      const response = await axios.request({
        url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
        method: "POST",
        data: values,
      });
      console.log(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      // Todo:: to be reviewed to add the toast
      // toast.error(error.response.data.message, { position: "top-center" });
      console.log(error, "error...............");
    }
  }
  return (
    <div className="container my-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handelRegister)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="password"
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
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className=" relative">
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
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
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
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
}
