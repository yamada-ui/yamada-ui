import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareEqual as LucideSquareEqualIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareEqualIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareEqualIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareEqualIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareEqualIcon` instead.
 */
export const SquareEqual = SquareEqualIcon
