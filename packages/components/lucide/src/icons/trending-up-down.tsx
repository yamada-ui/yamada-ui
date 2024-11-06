import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TrendingUpDown as LucideTrendingUpDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrendingUpDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrendingUpDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTrendingUpDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TrendingUpDownIcon` instead.
 */
export const TrendingUpDown = TrendingUpDownIcon
