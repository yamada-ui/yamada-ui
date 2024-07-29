import { forwardRef } from "@yamada-ui/core"
import { ChartColumnIncreasing as ChartColumnIncreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartColumnIncreasingProps = LucideIconProps

/**
 * `ChartColumnIncreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnIncreasing = forwardRef<
  ChartColumnIncreasingProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={ChartColumnIncreasingIcon} {...props} />
))
