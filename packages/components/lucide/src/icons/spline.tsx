import { forwardRef } from "@yamada-ui/core"
import { Spline as SplineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SplineProps = LucideIconProps

/**
 * `Spline` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Spline = forwardRef<SplineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SplineIcon} {...props} />
))
