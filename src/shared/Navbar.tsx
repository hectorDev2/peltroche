"use client";
import Logo from "../../public/logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BiStoreAlt } from "react-icons/bi";
import "./style.css";

const routes = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "Sobre nosotros",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/calendario",
    title: "Calendario",
  },
  {
    href: "/clases",
    title: "Clases",
  },
  {
    href: "/contacto",
    title: "Contacto",
  },
  {
    href: "/galeria",
    title: "Galeria",
  },
  {
    href: "/pricing",
    title: "Suscripcion",
  },
  {
    href: "/trabajo",
    title: "trabaja con nosotros",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  console.log(pathname, "pathss");

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <FaRegWindowClose />
          </div>
          <ul className="mobile-navbar__links">
            {routes.map(({ href, title }) => (
              <motion.li
                className={`${
                  href === pathname ? "text-[#E0120A]" : "text-white"
                } hover:text-[#ff0336] cursor-pointer `}
                key={title}
              >
                <Link onClick={openNav} href={href}>
                  {title}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="navbar__buttons-mobile">
            <Link onClick={openNav} href="/tienda">
              <button className=" navbar__buttons__store mt-5 lg:mt-0">
                Tienda
                <BiStoreAlt />
              </button>
            </Link>
          </div>
        </div>
        {/* desktop */}
        <div
          style={{
            background: "var(--primaryColor)",
            position: "fixed",
          }}
          className="navbar"
        >
          <div className="navbar__img">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="flex gap-2 justify-evenly navbar__links">
            {routes.map(({ title, href }) => (
              <Link
                className={`${href == pathname && "text-[white]"}`}
                href={href}
                key={title}
              >
                <li
                  key={title}
                  className={` ${
                    href === pathname ? "text-[#E0120A]" : "text-white"
                  } hover:text-[#ff0336] cursor-pointer `}
                >
                  {title}
                </li>
              </Link>
            ))}
          </ul>
          <div className="navbar__buttons">
            <Link href="/tienda">
              <button className=" navbar__buttons__store">
                Tienda
                <BiStoreAlt width={30} />
              </button>
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <CgMenuRightAlt />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
