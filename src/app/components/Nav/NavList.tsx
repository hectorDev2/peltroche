import Link from "next/link";
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
    path: "/calendario/lunes",
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
];
function NavList() {
  const routes = [
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
      path: "/calendario/lunes",
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
  ];
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        {routes.map((route, index) => (
          <li
            style={{ transition: "all 0.3s" }}
            className=" cursor-pointer hover:text-[#ff0336]"
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
