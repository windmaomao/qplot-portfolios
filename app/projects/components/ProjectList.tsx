"use client";

import { useState } from "react";

import { projectsMock, type Project } from "./project";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>(projectsMock);

  return (
    <div className="flex gap-2 mt-10">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
