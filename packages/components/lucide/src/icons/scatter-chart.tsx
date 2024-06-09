import { forwardRef } from "@yamada-ui/core"
import { ScatterChart as ScatterChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScatterChartProps = LucideIconProps

/**
 * `ScatterChart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScatterChart = forwardRef<ScatterChartProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ScatterChartIcon} {...props} />,
)
