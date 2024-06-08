import { forwardRef } from "@yamada-ui/core"
import { BarChart as BarChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BarChartProps = LucideIconProps

/**
 * `BarChart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BarChart = forwardRef<BarChartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BarChartIcon} {...props} />
))
