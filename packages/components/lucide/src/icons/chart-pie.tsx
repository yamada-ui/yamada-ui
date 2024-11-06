import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartPie as LucideChartPieIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartPieIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartPieIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideChartPieIcon} {...props} />
))

/**
 * @deprecated Use `ChartPieIcon` instead.
 */
export const ChartPie = ChartPieIcon
