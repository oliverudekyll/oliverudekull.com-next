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
  return (
    <motion.nav
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
