import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareChartGantt as SquareChartGanttIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareChartGantt` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChartGantt = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareChartGanttIcon} {...props} />,
)
