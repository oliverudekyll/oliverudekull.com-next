import { useEffect, useRef } from "react";
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

import ProjectButton from "./ProjectButton.js";
import projectsData from "../data/projects.json";
import { toKebabCase } from "@utils/Functions.js";

function Feed({ mouseX, mouseY, initial, animate, transition }) {
  return (
    <motion.main
      className="feed"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {projectsData
        .slice()
        .reverse()
        .map((project, index) => {
          return (
            <ProjectButton
              key={toKebabCase(project.title)}
              index={index}
              title={project.title}
              mouseX={mouseX}
              mouseY={mouseY}
              initial={initial}
              animate={animate}
              transition={transition}
              url={project.url}
            />
          );
        })}
    </motion.main>
  );
}

export default Feed;
