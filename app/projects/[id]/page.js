"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ReactLenis, useLenis } from "lenis/react";
import projectsData from "@data/projects.json";
import { toKebabCase, findProject } from "@utils/functions.js";
import { transition } from "@utils/values";

// Create a motion-enabled version of Next.js Image component
const MotionImage = motion(Image);

export default function Project({ params }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  console.log("Params:", params);
  console.log("Projects data:", projectsData);

  const { id } = params;
  const projectData = findProject(id);

  console.log("Found project:", projectData);

  if (!projectData) {
    notFound();
  }

  return (
    <ReactLenis root>
      <main className="project-feed">
        {projectData.images.map((image) => (
          <MotionImage
            key={toKebabCase(image)}
            className="project-feed__img"
            src={image}
            alt={`Project image ${image}`} // Added alt text for accessibility
            width={500}
            height={500}
            initial={{ opacity: 0, y: "-50%", filter: "blur(5px)" }}
            animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
            transition={transition} // Remove the extra nesting
          />
        ))}
      </main>
    </ReactLenis>
  );
}
