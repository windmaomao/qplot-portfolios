export interface Project {
  type: string;
  title: string;
  description: string;
  date: string;
  technologies?: string;
}

export const projectsMock: Project[] = [
  {
    type: "eCommerce",
    title: "Pearson",
    description: "xxx",
    date: "",
    technologies: "React, Typescript, NextJs",
  },
  {
    type: "Medical Device",
    title: "PhysIQ",
    description: "xxx",
    date: "",
    technologies: "React, Typescript, NextJs",
  },
];
