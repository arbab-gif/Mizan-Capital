import Image from "next/image";
import { partnerSection as p } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { Icon } from "./Icon";

function Photo({ photo, className, sizes }: { photo: (typeof p.photos)[number]; className: string; sizes: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-[14px] ${className}`}>
      {/* `zoom` crops in toward `position` (used to hide AI-garbled signage). */}
      <div className="absolute inset-0" style={{ transform: `scale(${photo.zoom})`, transformOrigin: photo.position }}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: photo.position }}
        />
      </div>
    </div>
  );
}

/** Partnered businesses: photo bento (two tiles over one wide tile) beside the client's copy. */
export function PartnerBusinesses() {
  const [a, b, c] = p.photos;
  return (
    <section id="partners" className="scroll-mt-20 bg-cream-light py-24 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="grid grid-cols-2 gap-3">
          <Photo photo={a} className="aspect-square" sizes="(min-width: 1024px) 340px, 50vw" />
          <Photo photo={b} className="aspect-square" sizes="(min-width: 1024px) 340px, 50vw" />
          <Photo photo={c} className="col-span-2 aspect-[16/8]" sizes="(min-width: 1024px) 690px, 100vw" />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[13px] font-medium tracking-[0.16em] text-gold uppercase">{p.eyebrow}</p>
          <h2 className="font-display text-[36px] leading-[1.1] tracking-[-0.01em] text-primary md:text-[48px]">{p.title}</h2>
          <p className="text-[17px] leading-[1.65] text-neutral-600 md:text-[18px]">{p.body}</p>
          <a
            href="#contact"
            className="group mt-2 inline-flex w-fit items-center gap-2.5 rounded-[8px] bg-primary px-6 py-3.5 text-[16px] font-medium text-cream transition hover:bg-forest"
          >
            Explore a business partnership
            <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
