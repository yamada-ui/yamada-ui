import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Badge as LucideBadgeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBadgeIcon} {...props} />
))

/**
 * @deprecated Use `BadgeIcon` instead.
 */
export const Badge = BadgeIcon
