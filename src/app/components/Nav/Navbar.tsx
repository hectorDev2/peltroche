"use client";
import { useEffect, useState } from "react";
import Logo from "../../../../public/logo.png";
import LogoWhite from "../../../../public/logo-w.png";

import LogoSide from "../../../../public/images/logo/logo-footer.svg";
import SideImg1 from "../../../../public/images/sidebar/1.jpg";
import SideImg2 from "../../../../public/images/sidebar/2.jpg";
import SideImg3 from "../../../../public/images/sidebar/3.jpg";
import SideImg4 from "../../../../public/images/sidebar/4.jpg";
import SideImg5 from "../../../../public/images/sidebar/5.jpg";
import SideImg6 from "../../../../public/images/sidebar/6.jpg";
import hamburgerIcon from "../../../../public/images/sidebar/hamburguesa.png";
import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import { motion } from "framer-motion";
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

  // sidebar
  const sideBar = () => {
    setSideBar(!sidebar);
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
