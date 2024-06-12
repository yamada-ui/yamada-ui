import { forwardRef } from "@yamada-ui/core"
import { SquareGanttChart as SquareGanttChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareGanttChartProps = LucideIconProps

/**
 * `SquareGanttChart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareGanttChart = forwardRef<SquareGanttChartProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareGanttChartIcon} {...props} />,
)
