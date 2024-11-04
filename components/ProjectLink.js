"use client";

import { useState, useEffect, useRef } from "react";
import { useMouse } from "react-use";
import { motion, animate, stagger } from "framer-motion";
import { toKebabCase } from "@utils/functions.js";

export function StateIcon() {
  return (
    <div className="project__state-icon">
      <div className="state-icon__stem"></div>
      <div className={`state-icon__stem vertical`}></div>
    </div>
  );
}

const formatOrder = (index) => {
  return String(index + 1).padStart(3, "0");
};

function ProjectContents({ title, index }) {
  return (
    <>
      <div className="project__order">
        <StateIcon />
        {formatOrder(index)}
      </div>
      <h2
        className="project__title"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
    </>
  );
}

const initialValue = {
  opacity: 0,
  y: "-100%",
  filter: "blur(0px)",
};

const ProjectLink = ({ title, url, index }) => {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  const ratio = 100;
  const mouseX = 1 - (docX / window.innerWidth) * ratio;
  const mouseY = 1 - (docY / window.innerHeight) * ratio - 50;

  useEffect(() => {
    const staggerDelay = stagger(0.06);
    const translateAmount = "0%";
    setTimeout(() => {
      animate(
        "a",
        { opacity: 1, y: translateAmount, filter: "blur(0px)" },
        { delay: staggerDelay }
      );
    }, 100);
  }, []);

  const id = toKebabCase(title);

  return (
    <motion.a
      ref={ref}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      initial={initialValue}
      style={{
        backgroundPosition: `${mouseX}px ${mouseY}px`,
      }}
      href={url ? url : `projects/${id}`}
      className="feed__project"
      id={id}
    >
      <ProjectContents title={title} index={index} />
    </motion.a>
  );
};

export default ProjectLink;
