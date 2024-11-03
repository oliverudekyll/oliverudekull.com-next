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
import NavBar from "./NavBar.js";

function Footer({ mouseX, mouseY, initial, animate, transition }) {
  return (
    <motion.footer
      className="footer"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <NavBar mouseX={mouseX} mouseY={mouseY} />
      <p className="footer__body">Contact for full portfolio</p>
    </motion.footer>
  );
}

export default Footer;
