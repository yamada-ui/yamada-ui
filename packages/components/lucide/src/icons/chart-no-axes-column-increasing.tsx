import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartNoAxesColumnIncreasing as OriginalChartNoAxesColumnIncreasing } from "lucide-react"

/**
 * `ChartNoAxesColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesColumnIncreasingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalChartNoAxesColumnIncreasing} {...props} />
  ),
)

/**
 * `ChartNoAxesColumnIncreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartNoAxesColumnIncreasingIcon` instead.
 */
export const ChartNoAxesColumnIncreasing = ChartNoAxesColumnIncreasingIcon
