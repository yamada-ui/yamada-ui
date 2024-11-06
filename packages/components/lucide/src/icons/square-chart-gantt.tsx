import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareChartGantt as LucideSquareChartGanttIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareChartGanttIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChartGanttIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareChartGanttIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareChartGanttIcon` instead.
 */
export const SquareChartGantt = SquareChartGanttIcon
