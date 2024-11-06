import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TrendingDown as LucideTrendingDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrendingDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrendingDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTrendingDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TrendingDownIcon` instead.
 */
export const TrendingDown = TrendingDownIcon
