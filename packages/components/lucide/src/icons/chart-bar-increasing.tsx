import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartBarIncreasing as OriginalChartBarIncreasing } from "lucide-react"

/**
 * `ChartBarIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarIncreasingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalChartBarIncreasing} {...props} />,
)

/**
 * `ChartBarIncreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartBarIncreasingIcon` instead.
 */
export const ChartBarIncreasing = ChartBarIncreasingIcon
