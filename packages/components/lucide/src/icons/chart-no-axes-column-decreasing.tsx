import { forwardRef } from "@yamada-ui/core"
import { ChartNoAxesColumnDecreasing as ChartNoAxesColumnDecreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `ChartNoAxesColumnDecreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesColumnDecreasing = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ChartNoAxesColumnDecreasingIcon} {...props} />
  ),
)
