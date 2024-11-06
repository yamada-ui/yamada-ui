import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartNoAxesColumnDecreasing as LucideChartNoAxesColumnDecreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartNoAxesColumnDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesColumnDecreasingIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={LucideChartNoAxesColumnDecreasingIcon} {...props} />
))

/**
 * @deprecated Use `ChartNoAxesColumnDecreasingIcon` instead.
 */
export const ChartNoAxesColumnDecreasing = ChartNoAxesColumnDecreasingIcon
