import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeEuro as BadgeEuroIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeEuro` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeEuro = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeEuroIcon} {...props} />
))
