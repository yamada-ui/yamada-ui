import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareDashedMousePointer as LucideSquareDashedMousePointerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareDashedMousePointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedMousePointerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareDashedMousePointerIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareDashedMousePointerIcon` instead.
 */
export const SquareDashedMousePointer = SquareDashedMousePointerIcon
