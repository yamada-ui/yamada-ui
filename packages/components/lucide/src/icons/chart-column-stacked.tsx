import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartColumnStacked as ChartColumnStackedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartColumnStacked` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnStacked = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ChartColumnStackedIcon} {...props} />
  ),
)
