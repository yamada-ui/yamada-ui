import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeEuro as LucideBadgeEuroIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeEuroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeEuroIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBadgeEuroIcon} {...props} />,
)

/**
 * @deprecated Use `BadgeEuroIcon` instead.
 */
export const BadgeEuro = BadgeEuroIcon
