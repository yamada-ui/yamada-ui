import { forwardRef } from "@yamada-ui/core"
import { ChartNoAxesGantt as ChartNoAxesGanttIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartNoAxesGanttProps = LucideIconProps

/**
 * `ChartNoAxesGantt` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesGantt = forwardRef<ChartNoAxesGanttProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ChartNoAxesGanttIcon} {...props} />,
)
