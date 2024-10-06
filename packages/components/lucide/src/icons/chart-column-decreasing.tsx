import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartColumnDecreasing as ChartColumnDecreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartColumnDecreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnDecreasing = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ChartColumnDecreasingIcon} {...props} />
  ),
)
