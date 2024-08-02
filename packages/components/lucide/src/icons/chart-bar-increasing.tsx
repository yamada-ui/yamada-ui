import { forwardRef } from "@yamada-ui/core"
import { ChartBarIncreasing as ChartBarIncreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartBarIncreasingProps = LucideIconProps

/**
 * `ChartBarIncreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarIncreasing = forwardRef<ChartBarIncreasingProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ChartBarIncreasingIcon} {...props} />
  ),
)
