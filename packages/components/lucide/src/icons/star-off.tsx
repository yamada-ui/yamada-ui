import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { StarOff as LucideStarOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StarOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StarOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideStarOffIcon} {...props} />
))

/**
 * @deprecated Use `StarOffIcon` instead.
 */
export const StarOff = StarOffIcon
