import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeAlert as LucideBadgeAlertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeAlertIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBadgeAlertIcon} {...props} />,
)

/**
 * @deprecated Use `BadgeAlertIcon` instead.
 */
export const BadgeAlert = BadgeAlertIcon
