import { forwardRef } from "@yamada-ui/core"
import { PieChart as PieChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PieChartProps = LucideIconProps

/**
 * `PieChart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PieChart = forwardRef<PieChartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PieChartIcon} {...props} />
))
