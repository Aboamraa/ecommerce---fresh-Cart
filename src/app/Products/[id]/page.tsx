import { getProductDetails, getRelatedProducts } from "@/api/Product.api";
import { ProductType } from "@/types/Product.types";
import "swiper/css";
import ProductDetails from "./../../_components/ProductDetails/ProductDetails";
import ProductsSwiper from "./../../_components/ProductsSwiper/ProductsSwiper";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  // console.log(typeof params.id);

  const product: ProductType = await getProductDetails(id);
  const relatedProducts: ProductType[] = await getRelatedProducts(
    product.category._id
  );
  console.log("related products now: ", relatedProducts);

  //   console.log(id);
  // console.log(product);
  return (
    <div className="container flex flex-col gap-3">
      <ProductDetails product={product} />

      <div className="related-products pt-6 border-t-2 border-gray-300">
        <h2 className="text-2xl font-bold ">
          Customers who viewed this item also viewed
        </h2>
        <div className="my-6">
          <ProductsSwiper products={relatedProducts} autoPlay />
        </div>
      </div>
    </div>
  );
}
