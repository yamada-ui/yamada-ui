import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RectangleVertical as LucideRectangleVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RectangleVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RectangleVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRectangleVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RectangleVerticalIcon` instead.
 */
export const RectangleVertical = RectangleVerticalIcon
