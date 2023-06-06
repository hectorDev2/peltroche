import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { routes } from "../NavList";
import { usePathname } from "next/navigation";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = routes;

export const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? (
    <motion.ul className="listNavigation" variants={variants}>
      {itemIds?.map((i) => (
        <MenuItem route={i} key={i.title} />
      ))}
    </motion.ul>
  ) : (
    <></>
  );
};
