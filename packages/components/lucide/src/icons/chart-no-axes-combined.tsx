import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartNoAxesCombined as LucideChartNoAxesCombinedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartNoAxesCombinedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesCombinedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartNoAxesCombinedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartNoAxesCombinedIcon` instead.
 */
export const ChartNoAxesCombined = ChartNoAxesCombinedIcon
