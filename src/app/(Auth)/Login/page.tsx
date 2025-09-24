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
import { loginScheme, LoginType } from "@/scheme/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, LockOpen } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ClipLoader } from "react-spinners";
export default function Page() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<LoginType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginScheme),
  });
  async function handelLogin(values: LoginType) {
    // console.log(values);
    // try {
    //   const response = await axios.request({
    //     url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
    //     method: "POST",
    //     data: values,
    //   });
    //   console.log(response.data.message);
    //   toast.success(response.data.message);
    // } catch (error: any) {
    //   toast.error(error.response.data.message, { position: "top-center" });
    //   console.log(error, "error...............");
    // }
    setIsLoading(true);
    const loadingID = toast.loading("Loading...");
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });
    // console.log(response);
    toast.dismiss(loadingID);
    if (response?.ok) {
      toast.success("Login successfully");

      window.location.href = "/";
    } else {
      toast.error(response?.error);
    }
    setIsLoading(false);
  }
  return (
    <div className="container my-8 h-screen flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handelLogin)}
          className="flex flex-col gap-6 w-full max-w-lg bg-card shadow-xl shadow-card border-2 border-card-foreground/20 p-14 pt-10 rounded-xl"
        >
          <h2 className="text-4xl font-semibold text-main-green/80 tracking-wider text-center mb-4">
            Welcome back
          </h2>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" autoComplete="email" {...field} className="mb-4" />
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
                      autoComplete="current-password"
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
            <Link
              href={"/ForgetPassword"}
              className="text-blue-500 transition hover:text-blue-400 underline underline-offset-2 block mt-2"
            >
              Forget Password
            </Link>
          </div>
          <Button
            type="submit"
            className="cursor-pointer "
            variant={"mainBrighter"}
            disabled={isLoading}
          >
            {isLoading ? <ClipLoader /> : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
