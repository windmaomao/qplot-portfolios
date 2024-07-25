export interface Project {
  type: string;
  title: string;
  image?: string;
  description: string;
  date: string;
  technologies?: string;
  features?: string[];
  role?: string;
}

export const projectsMock: Project[] = [
  {
    type: "eCommerce",
    title: "Pearson",
    image: "/pearson.jpg",
    description: "xxx",
    date: "Mar 2023 - May 2024",
    technologies: "React, Typescript, NextJs",
    features: [
      "eCommerce amazon buy-now checkout experience",
      "React/Typescript/NextJS with micro-frontend design",
      "Use server side component to enhance page performance",
      "Token/theme system for dynamic style adjustments at runtime",
    ],
    role: "Senior front-end",
  },
  {
    type: "Medical Device",
    title: "PhysIQ",
    image: "/physiq.jpeg",
    description: "xxx",
    date: "",
    technologies: "React, Typescript, NextJs",
    features: [
      "Series B Health Tech Startup",
      "Developed a clinical web portal with React Typescript)/NextJS for real-time medical device data consumption",
      "Built a multi-tenant architecture with permission-controlled settings for tracking multiple subjects",
      "Created reusable components with Storybook and ensured quality with Cypress testing",
    ],
    role: "Staff engineer",
  },
];
