import { forwardRef } from "@yamada-ui/core"
import { ChartColumnDecreasing as ChartColumnDecreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartColumnDecreasingProps = LucideIconProps

/**
 * `ChartColumnDecreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnDecreasing = forwardRef<
  ChartColumnDecreasingProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={ChartColumnDecreasingIcon} {...props} />
))
