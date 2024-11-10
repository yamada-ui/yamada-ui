import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartColumnDecreasing as OriginalChartColumnDecreasing } from "lucide-react"

/**
 * `ChartColumnDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnDecreasingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalChartColumnDecreasing} {...props} />
  ),
)

/**
 * `ChartColumnDecreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartColumnDecreasingIcon` instead.
 */
export const ChartColumnDecreasing = ChartColumnDecreasingIcon
