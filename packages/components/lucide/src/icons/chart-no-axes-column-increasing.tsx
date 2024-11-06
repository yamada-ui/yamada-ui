import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartNoAxesColumnIncreasing as LucideChartNoAxesColumnIncreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartNoAxesColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesColumnIncreasingIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={LucideChartNoAxesColumnIncreasingIcon} {...props} />
))

/**
 * @deprecated Use `ChartNoAxesColumnIncreasingIcon` instead.
 */
export const ChartNoAxesColumnIncreasing = ChartNoAxesColumnIncreasingIcon
