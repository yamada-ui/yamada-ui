import { forwardRef } from "@yamada-ui/core"
import { RectangleEllipsis as RectangleEllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RectangleEllipsisProps = LucideIconProps

/**
 * `RectangleEllipsis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RectangleEllipsis = forwardRef<RectangleEllipsisProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={RectangleEllipsisIcon} {...props} />
  ),
)
