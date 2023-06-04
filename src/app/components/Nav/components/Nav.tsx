import { motion, useCycle } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "./useDimensions";
import "./style.css";
import { usePathname } from "next/navigation";
import { Navigation } from "./Navigation";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 1 - 200}px at 20px 20px)`,
    transition: {
      type: " spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 40px 40px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};
export const Nav = () => {
  const pathname = usePathname();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  useEffect(() => {
    if (pathname === "/") {
      return;
    }

    toggleOpen();
  }, [pathname]);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
