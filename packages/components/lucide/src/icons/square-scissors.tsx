import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareScissors as LucideSquareScissorsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareScissorsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareScissorsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareScissorsIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareScissorsIcon` instead.
 */
export const SquareScissors = SquareScissorsIcon
