import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full border border-yellow-400 p-3 gap-2">
      <div className="w-full flex-center gap-3 border border-red-400 p-1">
        <span>OSMANLI</span>
        <span>--LOGO--</span>
        <span>BUILDING</span>
      </div>

      {/* Desktop Navigation */}
      <div className="flex items-center justify-between w-full border border-green-400">
        <div>
          <Link href="/">
            <p>--LOGO--</p>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-x-6">
            <li>
              <Link href="/">
                <p>Ürünler</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>PVC</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>Aksesuar</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>Hakkımızda</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 px-1">
          <Link href="/">Cart</Link>
          <Link href="/" className="black_btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
