import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartNoAxesGantt as OriginalChartNoAxesGantt } from "lucide-react"

/**
 * `ChartNoAxesGanttIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesGanttIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalChartNoAxesGantt} {...props} />,
)

/**
 * `ChartNoAxesGantt` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartNoAxesGanttIcon` instead.
 */
export const ChartNoAxesGantt = ChartNoAxesGanttIcon
