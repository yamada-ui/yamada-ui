import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareMinus as LucideSquareMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareMinusIcon` instead.
 */
export const SquareMinus = SquareMinusIcon
