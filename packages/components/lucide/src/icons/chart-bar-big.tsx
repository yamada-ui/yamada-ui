import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartBarBig as LucideChartBarBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartBarBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarBigIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChartBarBigIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChartBarBigIcon` instead.
 */
export const ChartBarBig = ChartBarBigIcon
