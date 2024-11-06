import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Shapes as LucideShapesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShapesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShapesIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideShapesIcon} {...props} />
))

/**
 * @deprecated Use `ShapesIcon` instead.
 */
export const Shapes = ShapesIcon
