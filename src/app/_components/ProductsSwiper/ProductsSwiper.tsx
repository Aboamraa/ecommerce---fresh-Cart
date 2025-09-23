"use client";

import { ProductType } from "@/types/Product.types";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AutoplayOptions } from "swiper/types";
import Product from "../Product/Product";

export default function ProductsSwiper({
  products,
  spaceBetween,
  slidesPerView,
  autoPlay,
  loop,
}: {
  products: ProductType[];
  spaceBetween?: number | null;
  slidesPerView?: number | null;
  autoPlay?: boolean | AutoplayOptions | undefined;
  loop?: boolean | undefined;
}) {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        autoplay={autoPlay}
        loop={loop}
        setWrapperSize
        className="rounded-xl"
        spaceBetween={spaceBetween ?? 16}
        slidesPerView={slidesPerView ?? 2} // default for very small screens
        breakpoints={
          spaceBetween && slidesPerView
            ? undefined
            : {
                480: { slidesPerView: 2, spaceBetween: 16 }, // small mobiles
                640: { slidesPerView: 3, spaceBetween: 20 }, // larger mobiles
                768: { slidesPerView: 4, spaceBetween: 24 }, // tablets
                1024: { slidesPerView: 5, spaceBetween: 28 }, // laptops
                1280: { slidesPerView: 6, spaceBetween: 32 }, // desktops
                1536: { slidesPerView: 7, spaceBetween: 36 }, // very large monitors
              }
        }
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product._id}>
              <Product product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
