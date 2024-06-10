import { forwardRef } from "@yamada-ui/core"
import { LineChart as LineChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LineChartProps = LucideIconProps

/**
 * `LineChart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LineChart = forwardRef<LineChartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LineChartIcon} {...props} />
))
