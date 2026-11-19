import Image from "next/image";
import type { Project } from "@/data/profile";
import { TechChip } from "@/components/TechChip";
import { withBasePath } from "@/lib/asset-path";

type Props = {
  item: Project;
};

export function ProjectCard({ item }: Props) {
  const href = item.href ? withBasePath(item.href) : undefined;
  const title = href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      className="inline-flex cursor-pointer items-baseline font-medium leading-tight text-kivo-ink group/link text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
      aria-label={
        href.startsWith("http")
          ? `${item.title} (opens in a new tab)`
          : item.title
      }
    >
      <span>
        {item.title}
        <span
          aria-hidden
          className="ml-1 inline-block translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
        >
          ↗
        </span>
      </span>
    </a>
  ) : (
    <h3 className="font-medium leading-tight text-kivo-ink text-base">
      {item.title}
    </h3>
  );

  const thumbnail = (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-kivo-border bg-kivo-soft shadow-sm transition duration-300 group-hover:border-kivo-ink/20">
      <Image
        src={withBasePath(item.image.src)}
        alt={item.image.alt}
        fill
        sizes="(max-width: 640px) 100vw, 200px"
        className="object-cover transition duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );

  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-kivo-border lg:group-hover:bg-kivo-surface lg:group-hover:shadow-sm"
          aria-hidden
        />
        <div className="z-10 sm:order-2 sm:col-span-6">
          <div className="flex flex-wrap items-center gap-2">
            {title}
            {item.status === "in-progress" ? (
              <span className="rounded-md bg-kivo-amberBg px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-kivo-amber">
                In progress
              </span>
            ) : null}
          </div>
          {item.metric ? (
            <p className="mt-1 text-xs font-medium text-kivo-success">
              {item.metric}
            </p>
          ) : null}
          <p className="mt-2 text-sm leading-normal text-kivo-muted">
            {item.description}
          </p>
          {item.links && item.links.length > 0 ? (
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {item.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={withBasePath(link.href)}
                    className="font-medium text-kivo-ink hover:text-kivo-success focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kivo-ink"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {item.tech.map((tech) => (
              <TechChip key={tech} label={tech} />
            ))}
          </ul>
        </div>
        <div className="z-10 sm:order-1 sm:col-span-2">
          {href ? (
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="block cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
              tabIndex={-1}
              aria-hidden
            >
              {thumbnail}
            </a>
          ) : (
            thumbnail
          )}
        </div>
      </div>
    </li>
  );
}
