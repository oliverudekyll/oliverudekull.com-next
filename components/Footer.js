"use client";

import {
  motion,
  cubicBezier,
  easeInOut,
  backInOut,
  circInOut,
  anticipate,
  linear,
  steps,
} from "framer-motion";
import NavBar from "@components/NavBar.js";
import { transition } from "@utils/values.js";

function Footer() {
  const initial = { opacity: 0, y: "50%", filter: "blur(5px)" };
  const animate = { opacity: 1, y: "0%", filter: "blur(0px)" };
  return (
    <motion.footer
      className="footer"
      initial={initial}
      animate={animate}
      transition={{ duration: 0.75, ease: cubicBezier(0.645, 0.045, 0.355, 1) }}
    >
      <NavBar />
      <p className="footer__body">Contact for full portfolio</p>
    </motion.footer>
  );
}

export default Footer;
