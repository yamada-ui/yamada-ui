import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { StarHalf as LucideStarHalfIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StarHalfIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StarHalfIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideStarHalfIcon} {...props} />
))

/**
 * @deprecated Use `StarHalfIcon` instead.
 */
export const StarHalf = StarHalfIcon
