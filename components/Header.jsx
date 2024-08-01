import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full border border-yellow-400 p-3 gap-2">
      <div className="w-full hidden md:flex flex-center gap-3 border border-red-400 p-1 ">
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
      <div className="flex items-center justify-between w-full border border-green-400">
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
        <div>
          <ul className="hidden md:flex">
            <li>
              <Link href="/collection">
                <p className="outline_btn ">Collection</p>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <p className="outline_btn">About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <p className="outline_btn">Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 px-1">
          <Link href="/cart">
            <Image
              className="object-contain"
              alt="Product image"
              width={30}
              height={30}
              src="/assets/icons/cart.png"
            />
          </Link>
          <Link href="/" className="black_btn_rounded">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
