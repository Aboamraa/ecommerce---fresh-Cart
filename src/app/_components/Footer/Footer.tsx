// import Image from "next/image";
// import React from "react";
// import amazonPayImg from "@/../public/images/amazon-pay.png";
// import americanExpressImg from "@/../public/images/American-Express-Color.png";
// import masterCardImg from "@/../public/images/mastercard.webp";
// import paypalImg from "@/../public/images/paypal.png";
// import playStoreImg from "@/../public/images/get-google-play.png";
// import appStoreImg from "@/../public/images/get-apple-store.png";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// export default function Footer() {
//   return (
//     <footer className="bg-secondary">
//       <div className="container py-5">
//         <h3>Get The FreshCart app</h3>
//         <p className="text-muted-foreground mt-3">
//           We will send you a link, open it on your phone to download the app
//         </p>
//         <div className=" flex flex-col md:flex-row lg:justify-between items-center gap-12 my-8 ">
//           <Input
//             type="email"
//             placeholder="Email..."
//             className="flex-1/2 h-12 px-3  bg-white rounded-lg border-2 border-gray-300"
//           />
//           <Button variant={"main"}>Share App Link</Button>
//         </div>
//         <Separator />
//         <div className="flex-col  md:flex-row justify-between items-center w-full p-6 ">
//           <div className="left-dev flex-col md:flex-row md:justify-between sm:w-full  flex gap-2.5 items-center">
//             <p>Payment partners</p>
//             <div className="flex  items-center justify-center md:gap-x-6 ">

//             <Image src={amazonPayImg} alt="amazon pay" className="w-14" />
//             <Image
//               src={americanExpressImg}
//               alt="american Express"
//               className="w-14"
//             />
//             <Image src={masterCardImg} alt="masterCard" className="w-14" />
//             <Image src={paypalImg} alt="paypal" className="w-14" />
//             </div>
//           </div>
//           <div className="right-dev flex-col lg:flex-row flex gap-2 items-center">
//             <p>Get deliveries with FreshCart</p>
//             <div className="flex flex-row ">

//             <Image
//               src={playStoreImg}
//               alt="playStore"
//               className="w-28 md:w-32 cursor-pointer"
//             />
//             <Image
//               src={appStoreImg}
//               alt="appStore"
//               className="w-28 md:w-32 cursor-pointer"
//             />
//             </div>
//           </div>
//         </div>
//         <Separator />
//       </div>
//     </footer>
//   );
// }
import Image from "next/image";
import React from "react";
import amazonPayImg from "@/../public/images/amazon-pay.png";
import americanExpressImg from "@/../public/images/American-Express-Color.png";
import masterCardImg from "@/../public/images/mastercard.webp";
import paypalImg from "@/../public/images/paypal.png";
import playStoreImg from "@/../public/images/get-google-play.png";
import appStoreImg from "@/../public/images/get-apple-store.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-8 space-y-8">
        {/* App Download */}
        <div>
          <h3 className="text-lg font-semibold">Get The FreshCart app</h3>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            We will send you a link, open it on your phone to download the app
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-6">
            <Input
              type="email"
              placeholder="Email..."
              className="w-full sm:flex-1 h-12 px-3 bg-white rounded-lg border-2 border-gray-300"
            />
            <Button variant="main" className="w-full sm:w-auto h-12">
              Share App Link
            </Button>
          </div>
        </div>

        <Separator />

        {/* Payment + Store Badges */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
          {/* Left: Payment */}
          <div className="flex flex-col gap-3 items-center justify-center sm:flex-row sm:flex-wrap md:justify-start">
            <p className="font-medium">Payment partners</p>
            <div className="flex flex-wrap items-center gap-3">
            <Image src={amazonPayImg} alt="amazon pay" className="w-14" />
            <Image src={americanExpressImg} alt="american Express" className="w-14" />
            <Image src={masterCardImg} alt="masterCard" className="w-14" />
            <Image src={paypalImg} alt="paypal" className="w-14" />
            </div>
          </div>

          {/* Right: Store buttons */}
          <div className="flex flex-col  sm:flex-row gap-3 items-center justify-center">
            <p className="font-medium">Get deliveries with FreshCart</p>
            <div className="flex flex-wrap">
            <Image src={playStoreImg} alt="playStore" className="w-32 cursor-pointer" />
            <Image src={appStoreImg} alt="appStore" className="w-32 cursor-pointer" />
            </div>
          </div>
        </div>

        <Separator />
      </div>
    </footer>
  );
}
