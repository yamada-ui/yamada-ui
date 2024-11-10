import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartNoAxesColumnDecreasing as OriginalChartNoAxesColumnDecreasing } from "lucide-react"

/**
 * `ChartNoAxesColumnDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesColumnDecreasingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalChartNoAxesColumnDecreasing} {...props} />
  ),
)

/**
 * `ChartNoAxesColumnDecreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartNoAxesColumnDecreasingIcon` instead.
 */
export const ChartNoAxesColumnDecreasing = ChartNoAxesColumnDecreasingIcon
