import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RotateCwSquare as LucideRotateCwSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RotateCwSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCwSquareIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRotateCwSquareIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RotateCwSquareIcon` instead.
 */
export const RotateCwSquare = RotateCwSquareIcon
