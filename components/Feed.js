"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectLink from "@components/ProjectLink.js";
import projectsData from "@data/projects.json";
import { toKebabCase } from "@utils/functions.js";
import { transition } from "@utils/values.js";

const Feed = () => {
  console.log("feed rendering");
  // Changed to arrow function
  const initial = { opacity: 0, y: "50%", filter: "blur(5px)" };
  const animate = { opacity: 1, y: "0%", filter: "blur(0px)" };

  return (
    <motion.main
      className="feed"
      initial={{
        opacity: 0,
        y: "-50%",
        lineHeight: 0.45,
        filter: "blur(5px)",
      }}
      animate={{ opacity: 1, y: "0%", lineHeight: 0.9, filter: "blur(0px)" }}
      transition={transition}
    >
      {projectsData
        .slice()
        .reverse()
        .map((project, index) => (
          <ProjectLink
            key={toKebabCase(project.title)}
            index={index}
            title={project.title}
            initial={initial}
            animate={animate}
            transition={transition}
            url={project.url}
          />
        ))}
    </motion.main>
  );
};

export default Feed;
