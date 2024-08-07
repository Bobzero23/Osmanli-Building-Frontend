"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import authStore from "@/store/AuthStore";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Header = () => {
  const route = useRouter();
  const logout = authStore((state) => state.logout);
  const isLoggedIn = authStore((state) => state.loggedIn);

  const hanldeLogout = () => {
    logout();
    toast.success("Signed out successfully.");
    setTimeout(() => {
      route.push("/");
    }, 1000);
  };
  return (
    <div className="glassmorphism mb-2 flex flex-col justify-center items-center w-full p-3 gap-2">
      <div className="w-full hidden md:flex flex-center gap-3 p-1  glassmorphism">
        <span className="orange_gradient font-extrabold text_size">
          OSMANLI
        </span>
        <Image
          className="object-contain hidden md:flex"
          alt="Product image"
          width={100}
          height={100}
          src="/assets/images/logo.png"
        />
        <span className="orange_gradient font font-extrabold text_size">
          BUILDING
        </span>
      </div>
      {/* Desktop Navigation */}
      <div className="flex items-center justify-between w-full glassmorphism">
        <div className="px-1">
          <Link href="/">
            <Image
              className="object-contain"
              alt="Product image"
              width={40}
              height={40}
              src="/assets/images/logo.png"
            />
          </Link>
        </div>
        <div className="">
          <ul className="hidden md:flex">
            <li className="">
              <Link href="/">
                <p className="outline_btn ">Home</p>
              </Link>
            </li>
            <li className="">
              <Link href="/collection">
                <p className="outline_btn ">Collection</p>
              </Link>
            </li>
            {/* <li className="">
              <Link href="/our-services">
                <p className="outline_btn ">Our Services</p>
              </Link>
            </li> */}
            <li className="">
              <Link href="/about-us">
                <p className="outline_btn ">About Us</p>
              </Link>
            </li>
            <li className="">
              <Link href="/contact-us">
                <p className="outline_btn ">Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8 px-1">
          <Link href="/cart">
            <Image
              className="object-contain"
              alt="Product image"
              width={30}
              height={30}
              src="/assets/icons/cart.png"
            />
          </Link>
          {isLoggedIn ? (
            <Link
              href="/"
              className="orange_btn_rounded flex-shrink"
              onClick={hanldeLogout}
            >
              Logout
            </Link>
          ) : (
            <Link href="/sign-in" className="orange_btn_rounded flex-shrink">
              Login
            </Link>
          )}
        </div>
      </div>
      {/* TODO - Mobile Navigation */}
      <Toaster />
    </div>
  );
};

export default Header;
