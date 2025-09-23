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
      <div className="container py-5">
        <h3>Get The FreshCart app</h3>
        <p className="text-muted-foreground mt-3">
          We will send you a link, open it on your phone to download the app
        </p>
        <div className="flex justify-between items-center gap-12 my-8 ">
          <Input
            type="email"
            placeholder="Email..."
            className="flex-1/2 h-12 px-3  bg-white rounded-lg border-2 border-gray-300"
          />
          <Button variant={"main"}>Share App Link</Button>
        </div>
        <Separator />
        <div className="flex justify-between items-center w-full p-6 ">
          <div className="left-dev flex gap-2.5 items-center">
            <p>Payment partners</p>
            <Image src={amazonPayImg} alt="amazon pay" className="w-14" />
            <Image
              src={americanExpressImg}
              alt="american Express"
              className="w-14"
            />
            <Image src={masterCardImg} alt="masterCard" className="w-14" />
            <Image src={paypalImg} alt="paypal" className="w-14" />
          </div>
          <div className="right-dev flex gap-2 items-center">
            <p>Get deliveries with FreshCart</p>
            <Image
              src={playStoreImg}
              alt="playStore"
              className="w-32 cursor-pointer"
            />
            <Image
              src={appStoreImg}
              alt="appStore"
              className="w-32 cursor-pointer"
            />
          </div>
        </div>
        <Separator />
      </div>
    </footer>
  );
}
