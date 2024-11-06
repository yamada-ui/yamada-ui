import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Spline as LucideSplineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SplineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SplineIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSplineIcon} {...props} />
))

/**
 * @deprecated Use `SplineIcon` instead.
 */
export const Spline = SplineIcon
