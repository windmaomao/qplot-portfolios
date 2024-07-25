import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Fang&apos;s &nbsp;</h1>
        <h1 className={title({ color: "violet" })}>portfolios&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          of projects, publications and prototypes
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.projects}
        >
          Projects
        </Link>
        <Link
          className={buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.prototypes}
        >
          Prototypes
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      <div className="mt-10">
        <Snippet>
          You are at<Code>function Main()</Code>
        </Snippet>
      </div>
    </section>
  );
}
