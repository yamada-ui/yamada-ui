import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Navigation as NavigationIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Navigation` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Navigation = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NavigationIcon} {...props} />
))
