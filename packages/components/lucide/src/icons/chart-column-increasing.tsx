import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartColumnIncreasing as LucideChartColumnIncreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnIncreasingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartColumnIncreasingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartColumnIncreasingIcon` instead.
 */
export const ChartColumnIncreasing = ChartColumnIncreasingIcon
