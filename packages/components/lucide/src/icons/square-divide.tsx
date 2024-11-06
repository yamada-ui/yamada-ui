import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareDivide as LucideSquareDivideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareDivideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDivideIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareDivideIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareDivideIcon` instead.
 */
export const SquareDivide = SquareDivideIcon
