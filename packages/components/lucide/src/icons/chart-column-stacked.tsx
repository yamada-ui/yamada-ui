import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartColumnStacked as LucideChartColumnStackedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartColumnStackedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnStackedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartColumnStackedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartColumnStackedIcon` instead.
 */
export const ChartColumnStacked = ChartColumnStackedIcon
