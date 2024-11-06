import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartNoAxesGantt as LucideChartNoAxesGanttIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartNoAxesGanttIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesGanttIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartNoAxesGanttIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartNoAxesGanttIcon` instead.
 */
export const ChartNoAxesGantt = ChartNoAxesGanttIcon
