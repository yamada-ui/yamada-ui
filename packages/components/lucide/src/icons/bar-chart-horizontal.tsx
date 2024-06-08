import { forwardRef } from "@yamada-ui/core"
import { BarChartHorizontal as BarChartHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BarChartHorizontalProps = LucideIconProps

/**
 * `BarChartHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BarChartHorizontal = forwardRef<BarChartHorizontalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={BarChartHorizontalIcon} {...props} />
  ),
)
