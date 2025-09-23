export type ProductType = {
  sold?: number;
  images: string[];
  subcategory: subcategoryType[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: categoryType;
  brand: BrandType;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  availableColors?: string[];
  priceAfterDiscount?: number;
};

type subcategoryType = {
  _id: string;
  name: string;
  slug: string;
  category: string;
};

export type categoryType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

type BrandType = {
  _id: string;
  name: string;
  slug: string;
  image?: string;
  category?: string;
};
