"use client";
import { categoryType } from "@/types/Product.types";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AutoplayOptions } from "swiper/types";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function CategoriesSliderClient({
  spaceBetween,
  slidesPerView,
  autoPlay,
  loop,
  categories,
}: {
  spaceBetween?: undefined | number;
  slidesPerView?: undefined | number;
  autoPlay?: undefined | boolean | AutoplayOptions;
  loop?: undefined | boolean;
  categories: categoryType[];
}) {
  return (
    <div className="col-span-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={spaceBetween ?? 4}
        slidesPerView={slidesPerView ?? 7}
        autoplay={autoPlay ?? true}
        loop={loop ?? true}
      >
        {categories.map((category) => {
          return (
            <SwiperSlide key={category.name}>
              <Image
                src={category.image}
                alt={category.name}
                width={100}
                height={100}
                className="w-full aspect-square object-fill "
              />
              <h4 className="font-medium">{category.name}</h4>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
