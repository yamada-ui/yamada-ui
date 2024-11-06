import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RotateCcwSquare as LucideRotateCcwSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RotateCcwSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCcwSquareIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRotateCcwSquareIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RotateCcwSquareIcon` instead.
 */
export const RotateCcwSquare = RotateCcwSquareIcon
