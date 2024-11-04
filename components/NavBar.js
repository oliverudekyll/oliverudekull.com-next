"use client";

import { useState, useEffect, useRef } from "react";
import { useMouse } from "react-use";
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

import Link from "./Link.js";
import { mouseX, mouseY } from "@utils/values.js";

function NavBar({}) {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  const ratio = 100;
  const mouseX = 1 - (docX / window.innerWidth) * ratio;
  const mouseY = 1 - (docY / window.innerHeight) * ratio - 50;
  return (
    <motion.nav
      ref={ref}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      style={{
        backgroundPosition: `${mouseX / 1}px ${mouseY / 1}px`,
      }}
      className="footer__nav-bar"
    >
      <Link href="/about" value="About" />
      <Link href="/drafts" value="Drafts" />
      <Link href="mailto:oliverudekll@gmail.com" value="Email" />
      <Link href="https://www.instagram.com/oliverudekyll" value="Instagram" />
    </motion.nav>
  );
}

export default NavBar;
