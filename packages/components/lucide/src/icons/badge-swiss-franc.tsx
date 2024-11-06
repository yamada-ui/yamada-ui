import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeSwissFranc as LucideBadgeSwissFrancIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeSwissFrancIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeSwissFrancIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBadgeSwissFrancIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BadgeSwissFrancIcon` instead.
 */
export const BadgeSwissFranc = BadgeSwissFrancIcon
