import Image from "next/image";
import type { Experience } from "@/data/profile";
import { TechChip } from "@/components/TechChip";

type Props = {
  item: Experience;
};

export function ExperienceCard({ item }: Props) {
  const title = item.companyHref ? (
    <a
      href={item.companyHref}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-baseline font-medium leading-tight text-kivo-ink group/link text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
      aria-label={`${item.title} at ${item.company} (opens in a new tab)`}
    >
      <span>
        {item.title} ·{" "}
        <span className="inline-block">
          {item.company}
          <span
            aria-hidden
            className="ml-1 inline-block translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          >
            ↗
          </span>
        </span>
      </span>
    </a>
  ) : (
    <h3 className="font-medium leading-tight text-kivo-ink text-base">
      {item.title} · {item.company}
    </h3>
  );

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-kivo-border lg:group-hover:bg-kivo-surface lg:group-hover:shadow-sm"
          aria-hidden
        />
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-kivo-muted sm:col-span-2"
          aria-label={item.range.replace("—", "to")}
        >
          {item.range}
          {item.image ? (
            <div className="relative mt-3 hidden aspect-[16/10] overflow-hidden rounded-xl border border-kivo-border bg-kivo-soft shadow-sm sm:block">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          ) : null}
        </header>
        <div className="z-10 sm:col-span-6">
          {title}
          <p className="mt-2 text-sm leading-normal text-kivo-muted">
            {item.summary}
          </p>
          {item.bullets && item.bullets.length > 0 ? (
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-normal text-kivo-muted">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {item.links && item.links.length > 0 ? (
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {item.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-kivo-ink hover:text-kivo-success focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kivo-ink"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          {item.image ? (
            <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-xl border border-kivo-border bg-kivo-soft shadow-sm sm:hidden">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {item.tech.map((tech) => (
              <TechChip key={tech} label={tech} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
