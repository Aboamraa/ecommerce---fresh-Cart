"use server";
import { checkoutType } from "@/scheme/checkout.scheme";
import { CashPaymentResponseType } from "@/types/payment.types";
import getUserToken from "@/Utilities/GetUserToken";

async function cashPayment(
  cartId: string,
  shippingDetails: checkoutType
): Promise<CashPaymentResponseType | undefined> {
  const token = await getUserToken();
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
        body: JSON.stringify({
          shippingAddress: {
            ...shippingDetails,
          },
        }),
      }
    );
    console.log("response from cash payment", response);
    return await response.json();
  } catch (error) {
    console.log("error from cash payment", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
//Todo::Complete the online Payment logic
async function onlinePayment(cartId: string, shippingDetails: checkoutType) {
  const token = await getUserToken();
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000&`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
        body: JSON.stringify({
          shippingAddress: {
            ...shippingDetails,
          },
        }),
      }
    );
    // console.log("response from online payment", response);
    return await response.json();
  } catch (error) {
    console.log("error in online payment api: ", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export { cashPayment, onlinePayment };
