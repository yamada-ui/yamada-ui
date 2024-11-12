import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartColumnStacked as OriginalChartColumnStacked } from "lucide-react"

/**
 * `ChartColumnStackedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnStackedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalChartColumnStacked} {...props} />,
)

/**
 * `ChartColumnStacked` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartColumnStackedIcon` instead.
 */
export const ChartColumnStacked = ChartColumnStackedIcon
