import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeCheck as BadgeCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeCheck = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeCheckIcon} {...props} />
))
