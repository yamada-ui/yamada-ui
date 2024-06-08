import { forwardRef } from "@yamada-ui/core"
import { GanttChart as GanttChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GanttChartProps = LucideIconProps

/**
 * `GanttChart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GanttChart = forwardRef<GanttChartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GanttChartIcon} {...props} />
))
