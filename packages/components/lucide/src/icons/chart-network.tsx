import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartNetwork as LucideChartNetworkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartNetworkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNetworkIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartNetworkIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartNetworkIcon` instead.
 */
export const ChartNetwork = ChartNetworkIcon
