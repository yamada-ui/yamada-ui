import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeHelp as LucideBadgeHelpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeHelpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeHelpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBadgeHelpIcon} {...props} />,
)

/**
 * @deprecated Use `BadgeHelpIcon` instead.
 */
export const BadgeHelp = BadgeHelpIcon
