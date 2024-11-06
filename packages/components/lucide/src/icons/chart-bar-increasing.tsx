import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartBarIncreasing as LucideChartBarIncreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartBarIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarIncreasingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartBarIncreasingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartBarIncreasingIcon` instead.
 */
export const ChartBarIncreasing = ChartBarIncreasingIcon
