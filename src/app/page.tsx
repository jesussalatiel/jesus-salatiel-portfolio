import { ExperienceCard } from "@/components/ExperienceCard";
import { ExperienceGroupCard } from "@/components/ExperienceGroupCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionNav } from "@/components/SectionNav";
import { SocialIcon } from "@/components/SocialIcon";
import { Spotlight } from "@/components/Spotlight";
import { TechChip } from "@/components/TechChip";
import { profile, type Experience, type ExperienceGroup } from "@/data/profile";
import { withBasePath } from "@/lib/asset-path";

function isGroup(
  entry: (typeof profile.experience)[number],
): entry is ExperienceGroup {
  return "kind" in entry && entry.kind === "group";
}

export default function HomePage() {
  return (
    <div className="group/spotlight relative">
      <Spotlight />
      <a
        href="#content"
        className="absolute left-0 top-0 z-[100] -translate-y-full bg-kivo-lime px-4 py-3 text-sm font-bold text-kivo-ink focus:translate-y-0"
      >
        Skip to Content
      </a>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-kivo-ink sm:text-5xl">
                <a href="/">{profile.name}</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-kivo-ink sm:text-xl">
                {profile.role}
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-kivo-muted">
                {profile.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-11 items-center rounded-xl bg-kivo-lime px-4 text-sm font-semibold text-kivo-ink transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
                >
                  Email me
                </a>
                <a
                  href={withBasePath(profile.resumeHref)}
                  className="inline-flex h-11 items-center rounded-xl border border-kivo-border bg-kivo-surface px-4 text-sm font-semibold text-kivo-ink transition hover:border-kivo-ink/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
                >
                  Résumé
                </a>
              </div>

              <SectionNav items={profile.nav} />
            </div>

            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
              {profile.social.map((link) => (
                <li key={link.href}>
                  <SocialIcon link={link} />
                </li>
              ))}
            </ul>
          </header>

          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-kivo-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-kivo-ink">
                  About
                </h2>
              </div>
              <div className="space-y-4">
                {profile.about.map((paragraph) => (
                  <p key={paragraph} className="leading-normal">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-kivo-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-kivo-ink">
                  Experience
                </h2>
              </div>
              <ol className="group/list">
                {profile.experience.map((entry) =>
                  isGroup(entry) ? (
                    <ExperienceGroupCard key={entry.id} group={entry} />
                  ) : (
                    <ExperienceCard
                      key={entry.id}
                      item={entry as Experience}
                    />
                  ),
                )}
              </ol>
              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
                <a
                  href={withBasePath(profile.resumeHref)}
                  className="inline-flex items-center font-semibold leading-tight text-kivo-ink group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
                >
                  View Full Résumé
                  <span
                    aria-hidden
                    className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
                <a
                  href={profile.linkedInHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center font-semibold leading-tight text-kivo-ink group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
                >
                  LinkedIn Profile
                  <span
                    aria-hidden
                    className="ml-1 inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </section>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-kivo-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-kivo-ink">
                  Projects
                </h2>
              </div>
              <ul className="group/list">
                {profile.projects.map((item) => (
                  <ProjectCard key={item.id} item={item} />
                ))}
              </ul>
            </section>

            <section
              id="research"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Research"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-kivo-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-kivo-ink">
                  Research
                </h2>
              </div>
              <ul className="group/list">
                {profile.research.map((item) => (
                  <ProjectCard key={item.id} item={item} />
                ))}
              </ul>
            </section>

            <section
              id="writing"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Writing"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-kivo-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-kivo-ink">
                  Writing
                </h2>
              </div>
              <ul className="group/list">
                {profile.writing.map((item) => (
                  <li key={item.title} className="mb-8">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div
                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-kivo-border lg:group-hover:bg-kivo-surface lg:group-hover:shadow-sm"
                        aria-hidden
                      />
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-kivo-muted sm:col-span-2">
                        {item.year}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        {item.href ? (
                          <a
                            href={withBasePath(item.href)}
                            className="inline-flex items-baseline font-medium leading-tight text-kivo-ink group/link text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
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
                        )}
                        <p className="mt-1 text-xs font-medium text-kivo-success">
                          {item.kind}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section
              id="education"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Education"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-kivo-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-kivo-ink">
                  Education
                </h2>
              </div>
              <ol className="group/list">
                {profile.education.map((item) => (
                  <ExperienceCard key={item.id} item={item} />
                ))}
              </ol>
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-kivo-ink">
                  Certifications
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Certifications">
                  {profile.certifications.map((cert) =>
                    cert.href ? (
                      <li key={cert.label}>
                        <a
                          href={cert.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="mr-1.5 mt-2 inline-block rounded-full bg-kivo-soft px-3 py-1 text-xs font-medium text-kivo-success transition hover:bg-kivo-lime/40 hover:text-kivo-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kivo-ink"
                        >
                          {cert.label}
                        </a>
                      </li>
                    ) : (
                      <TechChip key={cert.label} label={cert.label} />
                    ),
                  )}
                </ul>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm leading-normal text-kivo-muted">
              <p>
                Built with{" "}
                <a
                  className="font-medium text-kivo-ink hover:text-kivo-success"
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  className="font-medium text-kivo-ink hover:text-kivo-success"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Tailwind CSS
                </a>
                , using{" "}
                <span className="font-medium text-kivo-ink">Kivo</span> design
                tokens. Layout pattern inspired by{" "}
                <a
                  className="font-medium text-kivo-ink hover:text-kivo-success"
                  href="https://brittanychiang.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Brittany Chiang
                </a>
                . Content from{" "}
                <a
                  className="font-medium text-kivo-ink hover:text-kivo-success"
                  href={profile.linkedInHref}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </a>
                .
              </p>
              <p className="mt-4">
                <a
                  className="font-medium text-kivo-ink hover:text-kivo-success"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
