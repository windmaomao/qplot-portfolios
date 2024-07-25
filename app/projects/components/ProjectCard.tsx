import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import { type Project } from "./project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { type, title, technologies } = project;

  return (
    <div>
      <Card isPressable className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{type}</p>
          <small className="text-default-500">{technologies}</small>
          <h4 className="font-bold text-large">{title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Popover placement="top">
            <PopoverTrigger>
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-2 py-4 w-56">
                <div className="text-small font-bold mb-2">Features</div>
                <div className="text-tiny">
                  <ul className="list-disc">
                    <li>eCommerce amazon buy-now checkout experience</li>
                    <li>React/Typescript/NextJS with micro-frontend design</li>
                    <li>
                      Use server side component to enhance page performance
                    </li>
                    <li>
                      Token/theme system for dynamic style adjustments at
                      runtime
                    </li>
                  </ul>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </CardBody>
      </Card>
    </div>
  );
}
