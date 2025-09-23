"use server";
import { GetCartResponseType } from "@/types/Cart.types";
import getUserToken from "@/Utilities/GetUserToken";

export async function getCartItems(): Promise<GetCartResponseType | null> {
  const token = await getUserToken();
  if (!token) {
    throw new Error("please login first");
  }
  try {
    // console.log(process.env.BASE_URL);

    const response = await (
      await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: { token:`${token}` },
      })
    ).json();

    // console.log("cart items response: ", response);

    return response;
  } catch (error) {
    console.error("error in cart api file: ", error);
  }
  return null;
}

export async function addProductToCart(productID: string) {
  const token = await getUserToken();
  if (!token) {
    throw new Error("please login first");
  }
  try {
    await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
      method: "POST",
      headers: { token:`${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ productId: productID }),
    });
  } catch (error) {
    console.error("error in cart api file: ", error);
  }
}
export async function removeCartItem(
  productID: string
): Promise<GetCartResponseType | null | undefined> {
  const token = await getUserToken();
  if (!token) {
    throw new Error("please login first");
  }
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart/${productID}`,
      {
        method: "DELETE",
        headers: { token:`${token}` },
      }
    );
    return await response.json();
  } catch (error) {
    console.error("error in cart api file: ", error);
  }
}

export async function updateProductCount(
  productID: string,
  newCount: number
): Promise<GetCartResponseType | null | undefined> {
  const token = await getUserToken();
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart/${productID}`,
      {
        headers: { token: `${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ count: newCount.toString() }),
        method: "PUT",
      }
    );
    console.log("success update product count, response: ", response);
    return await response.json();
  } catch (error) {
    console.error("Error in update product count @cart.api");
  }
}

export async function clearCart() {
  const token = await getUserToken();
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/cart",
      { headers: { token: `${token}` }, method: "DELETE" }
    );
    return await response.json();
  } catch (error) {
    console.error("Error in clear Cart @cart.api");
  }
}
