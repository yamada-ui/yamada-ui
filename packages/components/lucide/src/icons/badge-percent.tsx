import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgePercent as LucideBadgePercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgePercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgePercentIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBadgePercentIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BadgePercentIcon` instead.
 */
export const BadgePercent = BadgePercentIcon
