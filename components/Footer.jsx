import React from "react";
import { Link } from "@mui/material";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className="flex-center flex-col pb-5 mt-4 gap-2 w-full h-auto bg-gradient-to-r from-orange-400 via-red-200 to-orange-400">
      <div className="gap-2">
        <h1 className="hidden lg:block head_text orange_gradient w-full sm:flex-center">
          GET IN TOUCH WITH US
        </h1>

        <ul className=" md:flex md:price_glassmorphism justify-center w-full">
          <li className="list-none">
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
        <div className="flex-center w-full gap-3 ">
          {/* TODO - uncomment this  */}
          {/* <Link href="/">
            <WhatsAppIcon />
          </Link>
          <Link href="/">
            <InstagramIcon />
          </Link>
          <Link href="/">
            <XIcon />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
