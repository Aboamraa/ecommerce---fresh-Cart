"use client";
import React from "react";
import { Autoplay} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import SLIDER_IMAGE_1 from "@/../public/images/slider-image-1.jpeg";
import SLIDER_IMAGE_2 from "@/../public/images/slider-image-2.jpeg";
import SLIDER_IMAGE_3 from "@/../public/images/slider-image-3.jpeg";
import { AutoplayOptions } from "swiper/types";

export default function HomeSlider({
  spaceBetween,
  slidesPerView,
  autoPlay,
  loop,
}: {
  spaceBetween?: undefined | number;
  slidesPerView?: undefined | number;
  autoPlay?: undefined | boolean | AutoplayOptions;
  loop?: undefined | boolean;
}) {
  return (
    <div className="grid grid-cols-12 px-4 gap-1">
      <div className="col-span-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={spaceBetween ?? 0}
          slidesPerView={slidesPerView ?? 1}
          autoplay={autoPlay ?? true}
          loop={loop ?? true}
          className="h-[500px]"
        >
          <SwiperSlide>
            <Image src={SLIDER_IMAGE_3} alt="" className="object-fill w-full" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={SLIDER_IMAGE_1} alt="" className="object-fill w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SLIDER_IMAGE_2} alt="" className="object-fill w-full" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="col-span-4">
        <Image src={SLIDER_IMAGE_1} alt="" className="w-full h-[250px]" />
        <Image src={SLIDER_IMAGE_2} alt="" className="w-full h-[250px]" />
      </div>
    </div>
  );
}
