import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RectangleEllipsis as LucideRectangleEllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RectangleEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RectangleEllipsisIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRectangleEllipsisIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RectangleEllipsisIcon` instead.
 */
export const RectangleEllipsis = RectangleEllipsisIcon
