import { CartProductElementType } from "./Cart.types";

export interface CashPaymentResponseType {
  status: string;
  data: Data;
}
export interface OnlinePaymentResponseType {
  status: string;
  session: { cancel_url: string; success_url: string; url: string };
}
export interface Data {
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: string;
  cartItems: CartProductElementType[];
  shippingAddress: ShippingAddress;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  __v: number;
}

// export interface CartItem {
//     count:   number;
//     _id:     string;
//     product: string;
//     price:   number;
// }

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}
