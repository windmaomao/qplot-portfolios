"use client";

import { useState } from "react";

import { projectsMock, type Project } from "./project";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>(projectsMock);

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Projects</h1>
      <div className="flex gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
