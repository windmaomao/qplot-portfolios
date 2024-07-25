import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

import { type Project } from "./project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { type, title, technologies, image, features, role } = project;

  return (
    <div>
      <Popover placement="top">
        <PopoverTrigger>
          <Card isPressable className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{type}</p>
              <h4 className="font-bold text-large">{title}</h4>
              <small className="text-default-500">
                Stack: <span className="font-bold">{technologies}</span>
              </small>
              <small className="text-default-500">
                Roles: <span className="font-bold">{role}</span>
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                height={135}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={
                  image || "https://nextui.org/images/hero-card-complete.jpeg"
                }
                style={{ objectFit: "fill" }}
                width={270}
              />
            </CardBody>
          </Card>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-4 py-4 w-56">
            <div className="text-small font-bold mb-2">Features</div>
            <div className="text-tiny ">
              <ul className="list-disc h-20 overflow-y-scroll">
                {features?.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
