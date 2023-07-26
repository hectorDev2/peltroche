"use client";
import { useEffect, useState } from "react";
import Logo from "../../../public/logo.png";

import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import { Nav } from "./components/Nav";
import useHasMounted from "@/hooks/useMounted";

function Navbar() {
  const [domLoaded, setDomLoaded] = useState(false);

  const [sticky, setSticky] = useState(false);
  const isMounted = useHasMounted();

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
    setDomLoaded(true);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {domLoaded && (
        <nav
          className={`flex flex-row h-[75px] bg-transparent items-center justify-between px-12  fixed top-0 left-0 right-0 w-full z-50 ${
            sticky ? "shadow-xl !bg-black" : ""
          }`}
        >
          <NavList />
          <Nav />
          <Link href="/">
            <Image
              src={Logo}
              alt="logo_img"
              width={100}
              height={75}
              onClick={goTop}
              className="w-full h-auto"
            />
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
