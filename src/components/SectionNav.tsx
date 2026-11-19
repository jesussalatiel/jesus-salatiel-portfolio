"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  items: readonly NavItem[];
};

export function SectionNav({ items }: Props) {
  const [active, setActive] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const ids = items.map((item) => item.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {items.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
              >
                <span
                  className={`nav-indicator mr-4 h-px transition-all ${
                    isActive
                      ? "w-16 bg-kivo-ink"
                      : "w-8 bg-kivo-border group-hover:w-16 group-hover:bg-kivo-ink group-focus-visible:w-16 group-focus-visible:bg-kivo-ink"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isActive
                      ? "text-kivo-ink"
                      : "text-kivo-muted group-hover:text-kivo-ink group-focus-visible:text-kivo-ink"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
