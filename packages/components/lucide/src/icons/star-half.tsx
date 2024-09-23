import { forwardRef } from "@yamada-ui/core"
import { StarHalf as StarHalfIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `StarHalf` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StarHalf = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StarHalfIcon} {...props} />
))
