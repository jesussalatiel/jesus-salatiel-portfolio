# Jesús Salatiel · Portfolio

AI-Native SDET portfolio — Next.js static site with Kivo design tokens.

**Live:** [jesussalatiel.github.io/jesus-salatiel-portfolio](https://jesussalatiel.github.io/jesus-salatiel-portfolio/)

## Local

```bash
bun install
bun run dev
```

## Build

```bash
bun run build          # local static export → out/
GITHUB_PAGES=true bun run build  # GitHub Pages basePath
```

Deploy is automatic on push to `main` via GitHub Actions → GitHub Pages.
