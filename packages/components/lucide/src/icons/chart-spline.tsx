import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartSpline as LucideChartSplineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartSplineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartSplineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartSplineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartSplineIcon` instead.
 */
export const ChartSpline = ChartSplineIcon
