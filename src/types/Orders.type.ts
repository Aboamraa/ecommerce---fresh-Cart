import { ShippingAddress } from "./payment.types";
import { CartProductElementType } from "@/types/Cart.types";

export interface OrderType {
  shippingAddress?: ShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: PaymentMethodType;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: UserType;
  cartItems: CartProductElementType[];
  createdAt: string;
  updatedAt: Date;
  id: number;
  __v: number;
  paidAt?: Date;
}

export enum PaymentMethodType {
  Card = "card",
  Cash = "cash",
}

export interface UserType {
  _id: string;
  name: string;
  email: string;
  phone: string;
}
