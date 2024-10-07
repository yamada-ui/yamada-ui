import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeSwissFranc as BadgeSwissFrancIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeSwissFranc` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeSwissFranc = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BadgeSwissFrancIcon} {...props} />,
)
