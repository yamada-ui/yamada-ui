import { forwardRef } from "@yamada-ui/core"
import { Shapes as ShapesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShapesProps = LucideIconProps

/**
 * `Shapes` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Shapes = forwardRef<ShapesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShapesIcon} {...props} />
))
