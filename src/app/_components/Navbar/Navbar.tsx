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
import Switch from "./../themeSwitch/themeSwitch";
import { useTheme } from "next-themes";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  //use session is used to get the token (only for client components)
  const { data } = useSession();
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();
  // console.log(session);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Products", label: "Products" },
    { href: "/Categories", label: "Categories" },
    { href: "/Brands", label: "Brands" },
    ...(data
      ? [
          { href: "/cart", label: "Cart" },
          { href: "/allorders", label: "Orders" },
        ]
      : []),
  ];

  const socialLinks = [
    { href: "https://instagram.com", icon: faInstagram },
    { href: "https://facebook.com", icon: faFacebook },
    { href: "https://tiktok.com", icon: faTiktok },
    { href: "https://twitter.com", icon: faTwitter },
    { href: "https://linkedin.com", icon: faLinkedin },
    { href: "https://youtube.com", icon: faYoutube },
  ];
  return (
    <nav className="bg-secondary shadow-sm sticky">
      <div className="container flex justify-between items-center">
        <div className="left-dev flex gap-3.5 items-center">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Fresh Cart logo"
              width={150}
              height={150}
              className="w-auto h-auto"
              priority
            />
          </Link>
          {/* Left-side links */}
          <ul className="hidden md:flex gap-x-4 items-center ">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`${
                  pathName === link.href ? "active-nav-link" : "nav-link"
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-dev flex gap-2 items-center">
          <Switch
            size={"lg"}
            defaultChecked={theme == "dark"}
            onChange={(checked) => {
              checked ? setTheme("dark") : setTheme("light");
            }}
          />
          <ul className="hidden lg:flex gap-2 items-center text-secondary-foreground/80">
            {socialLinks.map((link, i) => (
              <li key={i} className="nav-link">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="w-4 h-4" icon={link.icon} />
                </a>
              </li>
            ))}
          </ul>
          {/* Auth Links */}
          {data ? (
            <Link
              onClick={() => {
                signOut();
              }}
              href={"/Login"}
              className="font-semibold cursor-pointer hidden md:inline-block"
            >
              Sign out
            </Link>
          ) : (
            <div className="hidden md:flex gap-3">
              <Link href={"/Login"} className="font-semibold cursor-pointer">
                Login
              </Link>
              <Link href={"/Register"} className="font-semibold cursor-pointer">
                Register
              </Link>
            </div>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-4">
              <div className="flex flex-col gap-4">
                <Image
                  src={logo}
                  alt="Fresh Cart logo"
                  width={120}
                  height={120}
                  className="w-auto h-auto mx-auto"
                />
                <ul className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <li
                      key={link.href}
                      className={`${
                        pathName === link.href ? "active-nav-link" : "nav-link"
                      }`}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>

                {/* Auth links in mobile */}
                <div className="mt-4">
                  {data ? (
                    <button
                      onClick={() => signOut()}
                      className="w-full text-left font-semibold"
                    >
                      Sign out
                    </button>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Link
                        href={"/Login"}
                        className="font-semibold cursor-pointer"
                      >
                        Login
                      </Link>
                      <Link
                        href={"/Register"}
                        className="font-semibold cursor-pointer"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>

                {/* Social Icons in mobile */}
                <div className="flex gap-4 justify-center mt-4">
                  {/* {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="w-5 h-5" icon={link.icon} />
                    </a>
                  ))} */}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
