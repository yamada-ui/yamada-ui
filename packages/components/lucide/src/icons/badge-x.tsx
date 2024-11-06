import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeX as LucideBadgeXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBadgeXIcon} {...props} />
))

/**
 * @deprecated Use `BadgeXIcon` instead.
 */
export const BadgeX = BadgeXIcon
