import { forwardRef } from "@yamada-ui/core"
import { ChartBarDecreasing as ChartBarDecreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartBarDecreasingProps = LucideIconProps

/**
 * `ChartBarDecreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarDecreasing = forwardRef<ChartBarDecreasingProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ChartBarDecreasingIcon} {...props} />
  ),
)
