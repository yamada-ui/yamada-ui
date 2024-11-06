import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartArea as LucideChartAreaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartAreaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartAreaIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideChartAreaIcon} {...props} />,
)

/**
 * @deprecated Use `ChartAreaIcon` instead.
 */
export const ChartArea = ChartAreaIcon
