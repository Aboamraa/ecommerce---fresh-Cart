"use server";
import getUserToken from "@/Utilities/GetUserToken";
import { jwtDecode } from "jwt-decode";

async function getUserOrders() {
  const token = await getUserToken();
  const decodedToken: {
    id: string;
    name: string;
    role: string;
    iat: number;
    exp: number;
  } = jwtDecode(`${token}`);
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${decodedToken.id}`
    );
    // console.log("get user orders response: " ,response);
    return await response.json();
  } catch (error) {
    console.log("error in get user orders api: ", error);
  }
}

export { getUserOrders };
