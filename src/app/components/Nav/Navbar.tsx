"use client";
import { useEffect, useState } from "react";
import Logo from "../../../../public/logo.png";

import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import { Nav } from "./components/Nav";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // logo
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // hamburger menu

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative">
      <nav
        className={`flex flex-row h-[120px] bg-transparent items-center justify-between px-12  fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-black" : ""
        }`}
      >
        <div className="navlist-nav">
          <NavList />
        </div>
        <Nav />
        <Link href="/">
          <Image
            src={Logo}
            alt="logo_img"
            width={150}
            height={100}
            onClick={goTop}
            className="w-full h-auto"
          />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
