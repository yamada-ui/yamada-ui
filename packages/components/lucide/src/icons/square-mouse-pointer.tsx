import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareMousePointer as LucideSquareMousePointerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareMousePointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMousePointerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareMousePointerIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareMousePointerIcon` instead.
 */
export const SquareMousePointer = SquareMousePointerIcon
