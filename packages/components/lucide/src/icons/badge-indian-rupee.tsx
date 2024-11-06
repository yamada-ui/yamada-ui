import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeIndianRupee as LucideBadgeIndianRupeeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeIndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeIndianRupeeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBadgeIndianRupeeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BadgeIndianRupeeIcon` instead.
 */
export const BadgeIndianRupee = BadgeIndianRupeeIcon
