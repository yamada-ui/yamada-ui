import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartCandlestick as OriginalChartCandlestick } from "lucide-react"

/**
 * `ChartCandlestickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartCandlestickIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalChartCandlestick} {...props} />,
)

/**
 * `ChartCandlestick` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartCandlestickIcon` instead.
 */
export const ChartCandlestick = ChartCandlestickIcon
