import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeRussianRuble as LucideBadgeRussianRubleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeRussianRubleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeRussianRubleIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBadgeRussianRubleIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BadgeRussianRubleIcon` instead.
 */
export const BadgeRussianRuble = BadgeRussianRubleIcon
