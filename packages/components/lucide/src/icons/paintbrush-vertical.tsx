import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PaintbrushVertical as LucidePaintbrushVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PaintbrushVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintbrushVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePaintbrushVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PaintbrushVerticalIcon` instead.
 */
export const PaintbrushVertical = PaintbrushVerticalIcon
