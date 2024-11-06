import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartColumnDecreasing as LucideChartColumnDecreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartColumnDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnDecreasingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartColumnDecreasingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartColumnDecreasingIcon` instead.
 */
export const ChartColumnDecreasing = ChartColumnDecreasingIcon
