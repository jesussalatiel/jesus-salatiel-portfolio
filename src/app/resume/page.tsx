import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { profile, type ExperienceEntry, type ExperienceGroup } from "@/data/profile";
import { withBasePath } from "@/lib/asset-path";
import { PrintButton } from "./print-button";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-resume-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-resume-mono",
});

export const metadata: Metadata = {
  title: "Résumé · Jesús Salatiel",
  description:
    "SDET & QA Automation — AI Agents, MCP & Test Strategy. Globant · InStride · Zoox · Kivo.",
};

function isGroup(entry: ExperienceEntry): entry is ExperienceGroup {
  return "kind" in entry && entry.kind === "group";
}

const summary = `${profile.about[0]} ${profile.about[1]}`;

const coreSkills = [
  "Playwright",
  "Selenium",
  "Cypress",
  "k6",
  "MCP",
  "AI Agents",
  "LLMs / RAG",
  "Python",
  "TypeScript",
  "Java",
  "C#",
  "AWS Lambda",
  "Databricks",
  "Datadog",
  "MongoDB",
  "GitHub Actions",
  "Azure DevOps",
  "HIL / Simulation",
];

export default function ResumePage() {
  const work = profile.experience;

  return (
    <div
      className={`${sans.variable} ${mono.variable} min-h-screen bg-[#F4F5F7] text-[#0B1220] antialiased`}
      style={{ fontFamily: "var(--font-resume-sans), ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="mx-auto flex max-w-[8.5in] flex-col gap-4 px-4 py-6 print:max-w-none print:gap-0 print:p-0 sm:px-6 sm:py-10">
        <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
          <a
            href={withBasePath("/")}
            className="text-sm font-medium text-[#4B5568] transition hover:text-[#0B1220]"
          >
            ← Portfolio
          </a>
          <PrintButton />
        </div>

        <article className="resume-sheet relative overflow-hidden rounded-2xl border border-[#D8DEE8] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] print:rounded-none print:border-0 print:shadow-none">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#D7F75B] print:h-1" />

          <header className="border-b border-[#E6EAF0] px-7 pb-5 pt-7 sm:px-10 sm:pb-6 sm:pt-9">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p
                  className="mb-2 text-[11px] font-semibold tracking-[0.22em] text-[#5B657A]"
                  style={{ fontFamily: "var(--font-resume-mono), ui-monospace, monospace" }}
                >
                  RÉSUMÉ
                </p>
                <h1 className="text-[2rem] font-bold leading-none tracking-tight text-[#0B1220] sm:text-[2.35rem]">
                  {profile.name}
                </h1>
                <p className="mt-2 text-base font-semibold text-[#111735] sm:text-lg">
                  {profile.role}
                </p>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-[#5B657A]">
                  AI Agents · MCP · Test Strategy · Evidence-based delivery
                </p>
              </div>
              <div
                className="shrink-0 space-y-1 text-left text-[12px] leading-5 text-[#374151] sm:text-right"
                style={{ fontFamily: "var(--font-resume-mono), ui-monospace, monospace" }}
              >
                <p>{profile.location} · Remote-friendly</p>
                <p>
                  <a className="hover:underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </p>
                <p>
                  <a
                    className="hover:underline"
                    href="https://github.com/jesussalatiel"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    github.com/jesussalatiel
                  </a>
                </p>
                <p>
                  <a
                    className="hover:underline"
                    href={profile.linkedInHref}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    linkedin.com/in/jesussalatiel
                  </a>
                </p>
              </div>
            </div>
          </header>

          <div className="space-y-7 px-7 py-6 sm:space-y-8 sm:px-10 sm:py-8">
            <section>
              <SectionTitle>Summary</SectionTitle>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-[#1F2937]">{summary}</p>
            </section>

            <section>
              <SectionTitle>Core Skills</SectionTitle>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {coreSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-[#E5E9F0] bg-[#F7F8FB] px-2.5 py-1 text-[11px] font-medium text-[#111735]"
                    style={{ fontFamily: "var(--font-resume-mono), ui-monospace, monospace" }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionTitle>Experience</SectionTitle>
              <div className="mt-4 space-y-5">
                {work.map((entry) =>
                  isGroup(entry) ? (
                    <div key={entry.id} className="space-y-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-[#EEF1F6] pb-1.5">
                        <h3 className="text-[15px] font-bold text-[#0B1220]">
                          {entry.company}
                        </h3>
                        <span
                          className="text-[11px] font-medium text-[#6B7280]"
                          style={{
                            fontFamily:
                              "var(--font-resume-mono), ui-monospace, monospace",
                          }}
                        >
                          {entry.range}
                        </span>
                      </div>
                      {entry.roles.map((role) => (
                        <RoleBlock
                          key={role.id}
                          title={role.title}
                          range={role.range}
                          summary={role.summary}
                          bullets={role.bullets}
                          nested
                        />
                      ))}
                    </div>
                  ) : (
                    <RoleBlock
                      key={entry.id}
                      title={`${entry.title} · ${entry.company}`}
                      range={entry.range}
                      summary={entry.summary}
                      bullets={entry.bullets}
                    />
                  ),
                )}
              </div>
            </section>

            <section>
              <SectionTitle>Selected Projects</SectionTitle>
              <ul className="mt-3 space-y-3">
                {profile.projects.slice(0, 3).map((project) => (
                  <li key={project.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="text-[14px] font-bold text-[#0B1220]">
                        {project.title}
                        {project.metric ? (
                          <span className="ml-2 text-[11px] font-semibold text-[#16715B]">
                            {project.metric}
                          </span>
                        ) : null}
                      </h3>
                    </div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#374151]">
                      {project.description}
                    </p>
                    <p
                      className="mt-1 text-[11px] text-[#6B7280]"
                      style={{
                        fontFamily: "var(--font-resume-mono), ui-monospace, monospace",
                      }}
                    >
                      {project.tech.join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionTitle>Research</SectionTitle>
              <ul className="mt-3 space-y-3">
                {profile.research.map((item) => (
                  <li key={item.id}>
                    <h3 className="text-[13.5px] font-bold leading-snug text-[#0B1220]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] font-semibold text-[#16715B]">
                      {item.metric}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#374151]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionTitle>Education</SectionTitle>
              <ul className="mt-3 space-y-3">
                {profile.education.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div>
                      <h3 className="text-[13.5px] font-bold text-[#0B1220]">
                        {item.title}
                      </h3>
                      <p className="text-[12.5px] text-[#4B5563]">{item.company}</p>
                    </div>
                    <span
                      className="shrink-0 text-[11px] font-medium text-[#6B7280]"
                      style={{
                        fontFamily: "var(--font-resume-mono), ui-monospace, monospace",
                      }}
                    >
                      {item.range}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-2 grid gap-1 text-[12.5px] text-[#374151] sm:grid-cols-2">
                {profile.certifications.map((cert) => (
                  <li key={cert.label} className="flex gap-2">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#D7F75B]" />
                    <span>{cert.label}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>

      <style>{`
        @media print {
          @page { margin: 0.45in 0.5in; size: letter; }
          body { background: white !important; }
          .resume-sheet { box-shadow: none !important; }
          a { color: inherit !important; text-decoration: none !important; }
        }
      `}</style>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="border-b-2 border-[#0B1220] pb-1 text-[11px] font-bold tracking-[0.18em] text-[#0B1220]"
      style={{ fontFamily: "var(--font-resume-mono), ui-monospace, monospace" }}
    >
      {children}
    </h2>
  );
}

function RoleBlock({
  title,
  range,
  summary,
  bullets,
  nested = false,
}: {
  title: string;
  range: string;
  summary: string;
  bullets?: string[];
  nested?: boolean;
}) {
  return (
    <div className={nested ? "pl-0 sm:pl-1" : undefined}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
        <h3 className={`font-bold text-[#0B1220] ${nested ? "text-[13.5px]" : "text-[14.5px]"}`}>
          {title}
        </h3>
        <span
          className="text-[11px] font-medium text-[#6B7280]"
          style={{ fontFamily: "var(--font-resume-mono), ui-monospace, monospace" }}
        >
          {range}
        </span>
      </div>
      <p className="mt-1 text-[12.5px] leading-relaxed text-[#4B5563]">{summary}</p>
      {bullets && bullets.length > 0 ? (
        <ul className="mt-2 space-y-1 pl-0">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="grid grid-cols-[10px_1fr] gap-1 text-[12.5px] leading-relaxed text-[#1F2937]"
            >
              <span className="mt-[7px] h-1 w-1 rounded-full bg-[#9CA3AF]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
