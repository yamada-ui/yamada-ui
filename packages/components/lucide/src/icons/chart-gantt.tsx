import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartGantt as LucideChartGanttIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartGanttIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartGanttIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideChartGanttIcon} {...props} />,
)

/**
 * @deprecated Use `ChartGanttIcon` instead.
 */
export const ChartGantt = ChartGanttIcon
