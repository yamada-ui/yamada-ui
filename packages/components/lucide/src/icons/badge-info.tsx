import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeInfo as LucideBadgeInfoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeInfoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeInfoIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBadgeInfoIcon} {...props} />,
)

/**
 * @deprecated Use `BadgeInfoIcon` instead.
 */
export const BadgeInfo = BadgeInfoIcon
