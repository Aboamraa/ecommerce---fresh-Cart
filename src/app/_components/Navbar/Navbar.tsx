"use client";

import Link from "next/link";
import logo from "../../../../public/images/freshcart-logo.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  //use session is used to get the token (only for client components)
  const { data } = useSession();
  const pathName = usePathname();
  // console.log(session);

  return (
    <nav className="bg-secondary shadow-sm">
      <div className="container flex justify-between items-center">
        <div className="left-dev flex gap-3.5 items-center">
          <Link href={"/"}>
            <Image src={logo} alt="Fresh Cart logo" width={150} height={150} className="w-auto h-auto" priority />
          </Link>
          <ul className="flex gap-x-2.5 items-center ">
            <li
              className={`${pathName == "/" ? "active-nav-link" : "nav-link"}`}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={`${
                pathName == "/Products" ? "active-nav-link" : "nav-link"
              }`}
            >
              <Link href={"/Products"}>Products</Link>
            </li>
            <li
              className={`${
                pathName == "/Categories" ? "active-nav-link" : "nav-link"
              }`}
            >
              <Link href={"/Categories"}>Categories</Link>
            </li>
            <li
              className={`${
                pathName == "/Brands" ? "active-nav-link" : "nav-link"
              }`}
            >
              <Link href={"/Brands"}>Brands</Link>
            </li>
            {data && (
              <>
                <li
                  className={`${
                    pathName == "/cart" ? "active-nav-link" : "nav-link"
                  }`}
                >
                  <Link href={"/cart"}>Cart</Link>
                </li>
                <li
                  className={`${
                    pathName == "/allorders" ? "active-nav-link" : "nav-link"
                  }`}
                >
                  <Link href={"/allorders"}>Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="right-dev flex gap-2 items-center">
          <ul className="flex gap-2 items-center text-secondary-foreground/80">
            <li className="nav-link">
              <a href={"Instagram.com"} target="_blank">
                <FontAwesomeIcon className="w-4 h-4" icon={faInstagram} />
              </a>
            </li>
            <li className="nav-link">
              <a href={"facebook.com"} target="_blank">
                <FontAwesomeIcon className="w-4 h-4" icon={faFacebook} />
              </a>
            </li>
            <li className="nav-link">
              <a href={"facebook.com"} target="_blank">
                <FontAwesomeIcon className="w-4 h-4" icon={faTiktok} />
              </a>
            </li>
            <li className="nav-link">
              <a href={"facebook.com"} target="_blank">
                <FontAwesomeIcon className="w-4 h-4" icon={faTwitter} />
              </a>
            </li>
            <li className="nav-link">
              <a href={"facebook.com"} target="_blank">
                <FontAwesomeIcon className="w-4 h-4" icon={faLinkedin} />
              </a>
            </li>
            <li className="nav-link">
              <a href={"facebook.com"} target="_blank">
                <FontAwesomeIcon className="w-4 h-4" icon={faYoutube} />
              </a>
            </li>
          </ul>
          {data ? (
            <Link
              onClick={() => {
                signOut();
              }}
              href={"/Login"}
              className="font-semibold cursor-pointer"
            >
              Sign out
            </Link>
          ) : (
            <>
              <Link href={"/Login"} className="font-semibold cursor-pointer">
                Login
              </Link>
              <Link href={"/Register"} className="font-semibold cursor-pointer">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
