/** Prefix absolute site paths with Next.js `basePath` (GitHub Pages). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:")
  ) {
    return path;
  }
  return `${base}${path}`;
}
