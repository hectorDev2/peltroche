import { motion, useCycle } from "framer-motion";
import React, { useRef } from "react";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "./useDimensions";
import "./style.css";

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
      delay: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};
export const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
