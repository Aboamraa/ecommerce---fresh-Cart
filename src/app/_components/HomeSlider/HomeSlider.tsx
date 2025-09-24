// "use client";
// import React from "react";
// import { Autoplay} from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Image from "next/image";
// import SLIDER_IMAGE_1 from "@/../public/images/slider-image-1.jpeg";
// import SLIDER_IMAGE_2 from "@/../public/images/slider-image-2.jpeg";
// import SLIDER_IMAGE_3 from "@/../public/images/slider-image-3.jpeg";
// import { AutoplayOptions } from "swiper/types";

// export default function HomeSlider({
//   spaceBetween,
//   slidesPerView,
//   autoPlay,
//   loop,
// }: {
//   spaceBetween?: undefined | number;
//   slidesPerView?: undefined | number;
//   autoPlay?: undefined | boolean | AutoplayOptions;
//   loop?: undefined | boolean;
// }) {
//   return (
//     <div className="grid grid-cols-12 px-4 gap-1">
//       <div className="col-span-8">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={spaceBetween ?? 0}
//           slidesPerView={slidesPerView ?? 1}
//           autoplay={autoPlay ?? true}
//           loop={loop ?? true}
//           className="h-[500px]"
//         >
//           <SwiperSlide>
//             <Image src={SLIDER_IMAGE_3} alt="" className="object-fill w-full" />
//           </SwiperSlide>

//           <SwiperSlide>
//             <Image src={SLIDER_IMAGE_1} alt="" className="object-fill w-full" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Image src={SLIDER_IMAGE_2} alt="" className="object-fill w-full" />
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       <div className="col-span-4">
//         <Image src={SLIDER_IMAGE_1} alt="" className="w-full h-[250px]" />
//         <Image src={SLIDER_IMAGE_2} alt="" className="w-full h-[250px]" />
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
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
  spaceBetween?: number;
  slidesPerView?: number;
  autoPlay?: boolean | AutoplayOptions;
  loop?: boolean;
}) {
  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-3  gap-2 px-2 md:px-4">
      {/* Left main slider */}
      <div className="lg:col-span-2  w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={spaceBetween ?? 0}
          slidesPerView={slidesPerView ?? 1}
          autoplay={autoPlay ?? { delay: 3000, disableOnInteraction: false }}
          loop={loop ?? true}
          className="w-full h-full aspect-[16/9] md:aspect-[16/7] lg:aspect-[16/6] rounded-lg overflow-hidden"
        >
          <SwiperSlide>
            <Image
              src={SLIDER_IMAGE_3}
              alt=""
              className="w-full h-full object-cover"
              priority
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={SLIDER_IMAGE_1}
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={SLIDER_IMAGE_2}
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Right stacked images */}
      <div className="lg:col-span-4s flex lg:flex-col gap-2">
        <div className="w-1/2 lg:w-full aspect-[16/9] lg:aspect-[16/7] rounded-lg overflow-hidden">
          <Image
            src={SLIDER_IMAGE_1}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 lg:w-full aspect-[16/9] lg:aspect-[16/7] rounded-lg overflow-hidden">
          <Image
            src={SLIDER_IMAGE_2}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
