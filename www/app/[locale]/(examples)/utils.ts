import { SLUGS } from "./data"

export function isSlug(slug: string): slug is (typeof SLUGS)[number] {
  return SLUGS.includes(slug as (typeof SLUGS)[number])
}
