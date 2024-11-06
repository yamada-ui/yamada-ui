import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveDiagonal as LucideMoveDiagonalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveDiagonalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDiagonalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMoveDiagonalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MoveDiagonalIcon` instead.
 */
export const MoveDiagonal = MoveDiagonalIcon
