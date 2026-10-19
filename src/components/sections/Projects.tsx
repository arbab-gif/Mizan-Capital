import Image from "next/image";
import { projects, projectsIntro } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Project = (typeof projects)[number];

const OVERLAY_WIDE =
  "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 57.82%), linear-gradient(90deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))";
const OVERLAY_NARROW =
  "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 57.82%), linear-gradient(0deg, rgba(115,78,0,0.8) 0%, rgba(183,124,0,0) 59.2%), linear-gradient(90deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))";

function ProjectCard({ project, wide }: { project: Project; wide: boolean }) {
  return (
    <article
      className={`relative isolate flex h-[435px] flex-col justify-end overflow-hidden rounded-[16px] p-6 ${
        wide ? "lg:w-[799px] lg:shrink-0" : "lg:flex-1"
      }`}
    >
      <Image
        src={project.image}
        alt=""
        fill
        sizes={wide ? "(min-width: 1024px) 800px, 100vw" : "(min-width: 1024px) 425px, 100vw"}
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: wide ? OVERLAY_WIDE : OVERLAY_NARROW }} />

      <div className={`flex flex-col gap-6 ${wide ? "max-w-[632px]" : ""}`}>
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-[28px] font-medium text-white md:text-[32px]">{project.title}</h3>
          <p className="text-[16px] leading-6 text-neutral-50">{project.description}</p>
        </div>
        <Button href={project.href} variant="beige" className="self-start px-4">
          Support this project
        </Button>
      </div>
    </article>
  );
}

/** "Project that build a Brighter a Ummah" — centred heading, then alternating wide/narrow image cards. */
export function Projects() {
  const [a, b, c, d] = projects;
  return (
    <section id="impact" className="scroll-mt-24">
      <Container className="flex flex-col gap-[60px]">
        <SectionHeading
          eyebrow={projectsIntro.eyebrow}
          eyebrowTone="soft"
          title={projectsIntro.title}
          description={projectsIntro.description}
          className="mx-auto max-w-[860px]"
        />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            <ProjectCard project={a} wide />
            <ProjectCard project={b} wide={false} />
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <ProjectCard project={c} wide={false} />
            <ProjectCard project={d} wide />
          </div>
        </div>
      </Container>
    </section>
  );
}
