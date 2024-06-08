import { forwardRef } from "@yamada-ui/core"
import { BadgePercent as BadgePercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgePercentProps = LucideIconProps

/**
 * `BadgePercent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgePercent = forwardRef<BadgePercentProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BadgePercentIcon} {...props} />,
)
