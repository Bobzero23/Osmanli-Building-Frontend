import React from "react";
import { Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className="flex-center glassmorphism flex-col mt-4 gap-2 w-full h-auto bg-gradient-to-r from-orange-400 via-red-200 to-orange-400">
      <div className="gap-2 glassmorphism">
        <h1 className="head_text orange_gradient w-full flex-center">
          GET IN TOUCH WITH US
        </h1>
        <div className="flex-center w-full gap-3 ">
          <Link href="/">
            <WhatsAppIcon />
          </Link>
          <Link href="/">
            <InstagramIcon />
          </Link>
          <Link href="/">
            <XIcon />
          </Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          similique tempora sapiente aliquid eveniet. Iusto cumque.
        </p>
      </div>

      <ul className="hidden md:flex price_glassmorphism">
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
        <li className="">
          <Link href="/our-services">
            <p className="outline_btn ">Our Services</p>
          </Link>
        </li>
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
  );
};

export default Footer;
