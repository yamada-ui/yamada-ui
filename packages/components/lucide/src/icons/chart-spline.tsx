import { forwardRef } from "@yamada-ui/core"
import { ChartSpline as ChartSplineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartSplineProps = LucideIconProps

/**
 * `ChartSpline` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartSpline = forwardRef<ChartSplineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChartSplineIcon} {...props} />
))
