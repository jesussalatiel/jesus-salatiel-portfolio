import type { ExperienceGroup } from "@/data/profile";
import { TechChip } from "@/components/TechChip";

type Props = {
  group: ExperienceGroup;
};

export function ExperienceGroupCard({ group }: Props) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-kivo-border lg:group-hover:bg-kivo-surface lg:group-hover:shadow-sm"
          aria-hidden
        />
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-kivo-muted sm:col-span-2"
          aria-label={group.range.replace("—", "to")}
        >
          {group.range}
        </header>
        <div className="z-10 sm:col-span-6">
          {group.companyHref ? (
            <a
              href={group.companyHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-baseline font-medium leading-tight text-kivo-ink group/link text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
              aria-label={`${group.company} (opens in a new tab)`}
            >
              <span className="inline-block">
                {group.company}
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
              {group.company}
            </h3>
          )}

          <ol className="mt-4 space-y-6">
            {group.roles.map((role) => (
              <li key={role.id}>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h4 className="font-medium text-kivo-ink text-sm">
                    {role.title}
                  </h4>
                  <span className="text-xs font-semibold uppercase tracking-wide text-kivo-muted">
                    {role.range}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-normal text-kivo-muted">
                  {role.summary}
                </p>
                {role.bullets && role.bullets.length > 0 ? (
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-normal text-kivo-muted">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {role.tech.map((tech) => (
                    <TechChip key={tech} label={tech} />
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </li>
  );
}
