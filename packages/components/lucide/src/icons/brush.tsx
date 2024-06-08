import { forwardRef } from "@yamada-ui/core"
import { Brush as BrushIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BrushProps = LucideIconProps

/**
 * `Brush` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Brush = forwardRef<BrushProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BrushIcon} {...props} />
))
