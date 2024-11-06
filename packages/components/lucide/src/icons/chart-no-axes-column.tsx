import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartNoAxesColumn as LucideChartNoAxesColumnIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartNoAxesColumnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesColumnIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartNoAxesColumnIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartNoAxesColumnIcon` instead.
 */
export const ChartNoAxesColumn = ChartNoAxesColumnIcon
