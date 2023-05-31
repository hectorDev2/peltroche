import Link from "next/link";
function NavList() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link href="/">Home</Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link href={"/about"}>Sobre Nosotros</Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link href={"/galeria"}>Galeria</Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link href={"/calendario/lunes"}>Calendario</Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link href={"/blog"}>Blog</Link>
        </li>
        {/* <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link href={"/schedule/monday"}>Schedule</Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link href={"/pricing"}>Pricing</Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link href={"/classes"}>Classes</Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link href={"/contact"}>Contact</Link>
        </li> */}
      </ul>
    </>
  );
}

export default NavList;
