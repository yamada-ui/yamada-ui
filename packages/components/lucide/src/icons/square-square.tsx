import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareSquare as LucideSquareSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSquareIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareSquareIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareSquareIcon` instead.
 */
export const SquareSquare = SquareSquareIcon
