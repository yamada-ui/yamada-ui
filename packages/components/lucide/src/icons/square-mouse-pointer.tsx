import { forwardRef } from "@yamada-ui/core"
import { SquareMousePointer as SquareMousePointerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `SquareMousePointer` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMousePointer = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SquareMousePointerIcon} {...props} />
  ),
)
