import type { SocialLink } from "@/data/profile";

type Props = {
  link: SocialLink;
};

export function SocialIcon({ link }: Props) {
  const external = !link.href.startsWith("mailto:");

  return (
    <a
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      aria-label={
        external ? `${link.label} (opens in a new tab)` : link.label
      }
      className="block text-kivo-muted transition hover:text-kivo-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kivo-ink"
    >
      {link.icon === "github" ? (
        <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-current">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.584 2 12.253c0 4.527 2.865 8.363 6.839 9.718.5.094.682-.222.682-.493 0-.243-.009-.888-.014-1.743-2.782.618-3.369-1.372-3.369-1.372-.454-1.18-1.11-1.494-1.11-1.494-.908-.636.069-.623.069-.623 1.003.072 1.531 1.055 1.531 1.055.892 1.563 2.341 1.111 2.91.85.092-.66.35-1.111.636-1.367-2.22-.259-4.555-1.141-4.555-5.078 0-1.122.39-2.04 1.029-2.759-.103-.26-.446-1.302.098-2.713 0 0 .84-.275 2.75 1.052A9.348 9.348 0 0 1 12 6.958c.85.004 1.705.118 2.504.346 1.909-1.327 2.747-1.052 2.747-1.052.546 1.411.203 2.453.1 2.713.64.719 1.028 1.637 1.028 2.759 0 3.947-2.338 4.816-4.566 5.07.359.317.679.943.679 1.901 0 1.371-.012 2.477-.012 2.813 0 .273.18.591.688.491C19.138 20.613 22 16.777 22 12.253 22 6.584 17.523 2 12 2Z"
          />
        </svg>
      ) : link.icon === "linkedin" ? (
        <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-current">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-current">
          <path d="M1.5 8.67v8.58A2.25 2.25 0 0 0 3.75 19.5h16.5a2.25 2.25 0 0 0 2.25-2.25V8.67l-8.69 5.43a3 3 0 0 1-3.12 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 0 1.5 6.75v.158l9.44 5.894a1.5 1.5 0 0 0 1.56 0L22.5 6.908Z" />
        </svg>
      )}
    </a>
  );
}
