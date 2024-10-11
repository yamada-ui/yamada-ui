import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartColumnIncreasing as ChartColumnIncreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartColumnIncreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnIncreasing = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ChartColumnIncreasingIcon} {...props} />
  ),
)
