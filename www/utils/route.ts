export function getPathname(...segments: string[]) {
  return `/${segments.join("/")}`
}
