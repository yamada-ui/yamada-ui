import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartColumnIncreasing as OriginalChartColumnIncreasing } from "lucide-react"

/**
 * `ChartColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnIncreasingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalChartColumnIncreasing} {...props} />
  ),
)

/**
 * `ChartColumnIncreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartColumnIncreasingIcon` instead.
 */
export const ChartColumnIncreasing = ChartColumnIncreasingIcon
