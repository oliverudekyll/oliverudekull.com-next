import { notFound } from "next/navigation";
import Image from "next/image";
import projectsData from "@data/projects.json";
import { toKebabCase, findProject } from "@utils/functions.js";

export default function Project({ params }) {
  console.log("Params:", params); // See what params we're getting
  console.log("Projects data:", projectsData); // Check if data is loading

  const { id } = params;
  const projectData = findProject(id);

  console.log("Found project:", projectData); // See what findProject returns

  if (!projectData) {
    notFound();
  }

  return (
    <main className="project-feed">
      {projectData.images.map((image) => {
        return (
          <Image
            key={toKebabCase(image)}
            src={image}
            width="500"
            height="500"
          />
        );
      })}
    </main>
  );
}
