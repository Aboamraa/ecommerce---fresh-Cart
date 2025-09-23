import { ProductType } from "./Product.types";

export interface GetCartResponseType {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: CartType;
}

export interface CartType {
  _id: string;
  cartOwner: string;
  products: CartProductElementType[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  totalCartPrice: number;
}

export interface CartProductElementType {
  count: number;
  _id: string;
  product: ProductType;
  price: number;
}



// export interface ProductProduct {
//   subcategory: Brand[];
//   _id: string;
//   title: string;
//   quantity: number;
//   imageCover: string;
//   category: Brand;
//   brand: Brand;
//   ratingsAverage: number;
//   id: string;
// }

// export interface Brand {
//   _id: string;
//   name: string;
//   slug: string;
//   image?: string;
//   category?: string;
// }
