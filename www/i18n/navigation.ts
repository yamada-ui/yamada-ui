import type { ComponentProps } from "react"
import { createNavigation } from "next-intl/navigation"
import { routing } from "./routing"

export const {
  getPathname,
  Link,
  permanentRedirect,
  redirect,
  usePathname,
  useRouter,
} = createNavigation(routing)

export type LinkProps = ComponentProps<typeof Link>
