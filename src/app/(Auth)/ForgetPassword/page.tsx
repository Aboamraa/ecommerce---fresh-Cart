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
import { ForgetPasswordType, forgetScheme } from "@/scheme/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Page() {
  const router = useRouter();
  const form = useForm<ForgetPasswordType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgetScheme),
  });
  async function handelForgetPassword(values: ForgetPasswordType) {
    console.log(values);
    try {
      const response = await axios.request({
        url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        method: "POST",
        data: values,
      });
      console.log(response.data.message);
      toast.success(response.data.message);
      router.push("/VerifyCode");
    } catch (error) {
      //Todo:: to be reviewed to add the toast
      // toast.error(error.response.data.message, { position: "top-center" });
      console.log(error, "error...............");
    }
  }
  return (
    <div className="container my-8 h-screen flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handelForgetPassword)}
          className="flex flex-col gap-6 w-full max-w-lg bg-gray-50 drop-shadow border-2 p-20 rounded-xl"
        >
          <h2 className="text-4xl font-normal text-main-green/80 tracking-wider text-center mb-4">
            Forget Password
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
            Send Email
          </Button>
        </form>
      </Form>
    </div>
  );
}
