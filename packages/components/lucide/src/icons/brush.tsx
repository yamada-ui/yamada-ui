import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Brush as LucideBrushIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BrushIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrushIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBrushIcon} {...props} />
))

/**
 * @deprecated Use `BrushIcon` instead.
 */
export const Brush = BrushIcon
