import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartScatter as LucideChartScatterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartScatterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartScatterIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartScatterIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartScatterIcon` instead.
 */
export const ChartScatter = ChartScatterIcon
