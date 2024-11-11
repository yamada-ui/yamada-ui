import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartBarStacked as OriginalChartBarStacked } from "lucide-react"

/**
 * `ChartBarStackedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarStackedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalChartBarStacked} {...props} />,
)

/**
 * `ChartBarStacked` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartBarStackedIcon` instead.
 */
export const ChartBarStacked = ChartBarStackedIcon
