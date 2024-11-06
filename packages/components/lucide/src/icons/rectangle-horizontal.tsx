import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RectangleHorizontal as LucideRectangleHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RectangleHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RectangleHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRectangleHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RectangleHorizontalIcon` instead.
 */
export const RectangleHorizontal = RectangleHorizontalIcon
