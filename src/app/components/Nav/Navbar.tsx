"use client";
import { useEffect, useState } from "react";
import Logo from "../../../../public/logo.png";
import LogoSide from "../../../../public/images/logo/logo-footer.svg";
import SideImg1 from "../../../../public/images/sidebar/1.jpg";
import SideImg2 from "../../../../public/images/sidebar/2.jpg";
import SideImg3 from "../../../../public/images/sidebar/3.jpg";
import SideImg4 from "../../../../public/images/sidebar/4.jpg";
import SideImg5 from "../../../../public/images/sidebar/5.jpg";
import SideImg6 from "../../../../public/images/sidebar/6.jpg";
import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

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
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-black" : ""
        }`}
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="logo_img"
            onClick={goTop}
            className="w-full h-auto"
            width={150}
            height={120}
          />
        </Link>
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="hidden items-center gap-10">
          <div className="flex gap-10">
            {/* mobile menu -------------- */}

            {/* hamburger menu */}
            <div
              className={`flex top-0 flex-col fixed w-full left-0 h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
                hamburger ? "left-0" : "-left-[100%]"
              }`}
            >
              <i
                onClick={hamburgerMenu}
                className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
              ></i>

              {/* links */}
              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <li>
                  <Link
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/about"
                  >
                    sobre Nosotros
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => goTop}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/schedule/monday"
                  >
                    Schedule
                  </Link>
                </li>
                {/* <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => goTop}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/gallery/page-1"
                  >
                    Gallery
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => goTop}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => goTop}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => goTop}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => goTop}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/classes"
                  >
                    Classes
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* sidebar */}

            {/* hamburger */}
            <i
              onClick={hamburgerMenu}
              className="fa-bars fa-solid hidden text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            ></i>
            {/* account */}
            <Link onClick={goTop} href="/signup" title="signup_button">
              <i className="fa-regular fa-user  text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"></i>
            </Link>
            {/* sidebar */}
            <i
              onClick={sideBar}
              className="fa-regular fa-chart-bar text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            ></i>
          </div>
          {/* spin box */}
          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md min620:hidden">
            <Link
              onClick={goTop}
              href={"/contact"}
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center "
            >
              <i
                className={`fa-solid fa-plus bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md ${
                  spin ? "nav-btn-hover" : ""
                }`}
              ></i>
              <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                join class now
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
