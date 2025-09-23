"use server";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getUserToken() {
  const data = await cookies();
  const encodedToken =
    data.get("next-auth.session-token") ||
    data.get("__Secure-next-auth.session-token");
  if (!encodedToken) {
    throw new Error("please login first");
  }
  const decodedToken = await decode({
    token: encodedToken?.value,
    secret: process.env.AUTH_SECRET!,
  });
  return decodedToken?.token;
}
