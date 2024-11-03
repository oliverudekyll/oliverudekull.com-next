import projectsData from "../data/projects.json";

export const toKebabCase = (value) => {
  return value
    .replace(/&nbsp;/g, " ")
    .split(" ")
    .join("-")
    .toLowerCase();
};

export const findProject = (id) => {
  const project = projectsData.find(
    (project) => toKebabCase(project.title) === id
  );
  return project;
};

export const projectLoader = async ({ params }) => {
  const project = findProject([params.projectId]);
  if (!project) {
    throw new Response("Project not found", { status: 404 });
  }
  return project;
};
