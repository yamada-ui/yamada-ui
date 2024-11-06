import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartBarDecreasing as LucideChartBarDecreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartBarDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarDecreasingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartBarDecreasingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartBarDecreasingIcon` instead.
 */
export const ChartBarDecreasing = ChartBarDecreasingIcon
