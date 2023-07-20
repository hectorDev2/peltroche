import Link from "next/link";
import { usePathname } from "next/navigation";
export const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Sobre Nosotros",
    path: "/about",
  },
  {
    title: "Galeria",
    path: "/galeria",
  },
  {
    title: "Calendario",
    path: "/calendario",
  },
  {
    title: "Blog",

    path: "/blog",
  },
  {
    title: "Precios",
    path: "/pricing",
  },
  {
    title: "Contacto",
    path: "/contacto",
  },
  {
    title: "Clases",
    path: "/clases",
  },
  {
    title: "Trabaja con nosotros",
    path: "/trabajo",
  },
];
function NavList() {
  const path = usePathname();

  return (
    <>
      <ul className="flex items-center gap-9 text-white text-[16px] font-medium xl:none">
        {routes.map((route, index) => (
          <li
            style={{ transition: "all 0.3s", margin: "0" }}
            className={`${
              route.path == path ? "text-[#E0120A]" : "text-white"
            } hover:text-[#ff0336] cursor-pointer `}
            key={index}
          >
            <Link href={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavList;
