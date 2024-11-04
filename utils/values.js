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

export const transition = {
  duration: 0.75,
  ease: cubicBezier(0.645, 0.045, 0.355, 1),
};
