import { forwardRef } from "@yamada-ui/core"
import { ChartGantt as ChartGanttIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartGanttProps = LucideIconProps

/**
 * `ChartGantt` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartGantt = forwardRef<ChartGanttProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChartGanttIcon} {...props} />
))
