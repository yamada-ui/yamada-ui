import { forwardRef } from "@yamada-ui/core"
import { PaintbrushVertical as PaintbrushVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `PaintbrushVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintbrushVertical = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={PaintbrushVerticalIcon} {...props} />
  ),
)
