"use client";

import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { title } from "@/components/primitives";

export default function PrototypesPage() {
  const list = [
    {
      link: "book-collection",
      title: "Book collection",
      img: "/images/fruit-1.jpeg",
      type: "table",
    },
    {
      link: "material-widget",
      title: "Material widget",
      img: "/images/fruit-2.jpeg",
      type: "button",
    },
  ];

  const router = useRouter();

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      <h1 className={title()}>Prototypes</h1>
      {list.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow="sm"
          onPress={() => {
            router.push(`/prototypes/${item.link}`);
          }}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.type}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
