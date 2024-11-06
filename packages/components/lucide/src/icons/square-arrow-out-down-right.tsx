import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareArrowOutDownRight as LucideSquareArrowOutDownRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareArrowOutDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutDownRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareArrowOutDownRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareArrowOutDownRightIcon` instead.
 */
export const SquareArrowOutDownRight = SquareArrowOutDownRightIcon
