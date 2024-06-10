import { forwardRef } from "@yamada-ui/core"
import { BadgeSwissFranc as BadgeSwissFrancIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeSwissFrancProps = LucideIconProps

/**
 * `BadgeSwissFranc` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeSwissFranc = forwardRef<BadgeSwissFrancProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BadgeSwissFrancIcon} {...props} />,
)
