import ProjectList from "./components/ProjectList";

import { title } from "@/components/primitives";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className={title()}>Projects</h1>
      <ProjectList />
    </div>
  );
}
